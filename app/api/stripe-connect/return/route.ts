import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getServiceClient } from '../../../lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-03-25.dahlia',
});

/**
 * GET /api/stripe-connect/return?account_id=xxx&creator_id=xxx
 * 
 * Return URL after a creator completes Stripe onboarding.
 * Checks if the account is fully set up and updates the profile.
 */
export async function GET(req: NextRequest) {
  try {
    const accountId = req.nextUrl.searchParams.get('account_id');
    const creatorId = req.nextUrl.searchParams.get('creator_id');

    if (!accountId || !creatorId) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    // Check the account status
    const account = await stripe.accounts.retrieve(accountId);
    const isComplete = account.details_submitted && account.charges_enabled;

    const sb = getServiceClient();

    // Update the profile
    await sb
      .from('profiles')
      .update({
        stripe_account_id: accountId,
        stripe_onboarding_complete: isComplete,
      })
      .eq('id', creatorId);

    // Redirect to a success page
    if (isComplete) {
      return new NextResponse(
        `<!DOCTYPE html>
        <html>
        <head><title>Stripe Connected!</title>
        <style>
          body { font-family: Inter, sans-serif; background: #060b18; color: #f1f5f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
          .card { text-align: center; max-width: 420px; padding: 2rem; }
          h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
          p { color: rgba(241,245,249,0.6); font-size: 0.9rem; line-height: 1.6; }
          .check { font-size: 3rem; margin-bottom: 1rem; }
        </style>
        </head>
        <body>
          <div class="card">
            <div class="check">✅</div>
            <h1>Stripe Account Connected!</h1>
            <p>Your bank account is now linked. When members subscribe to your circle, payments will be deposited directly to your account.</p>
            <p style="margin-top: 1rem; font-size: 0.75rem; color: rgba(241,245,249,0.3);">You can close this tab and return to the Cookwise app.</p>
          </div>
        </body>
        </html>`,
        { headers: { 'Content-Type': 'text/html' } }
      );
    } else {
      return new NextResponse(
        `<!DOCTYPE html>
        <html>
        <head><title>Setup Incomplete</title>
        <style>
          body { font-family: Inter, sans-serif; background: #060b18; color: #f1f5f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
          .card { text-align: center; max-width: 420px; padding: 2rem; }
          h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
          p { color: rgba(241,245,249,0.6); font-size: 0.9rem; line-height: 1.6; }
        </style>
        </head>
        <body>
          <div class="card">
            <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
            <h1>Setup Incomplete</h1>
            <p>Your Stripe account was created but setup isn't complete yet. Please contact support to finish connecting your account.</p>
          </div>
        </body>
        </html>`,
        { headers: { 'Content-Type': 'text/html' } }
      );
    }
  } catch (err: any) {
    console.error('[stripe-connect/return] Error:', err.message);
    return NextResponse.redirect(new URL('/', req.url));
  }
}
