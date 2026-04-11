import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getServiceClient } from '../../../lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-03-25.dahlia',
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.cookwise.ai';

/**
 * POST /api/stripe-connect/create-account
 * 
 * Creates a Stripe Connect Express account for a creator and returns
 * the onboarding URL. The creator visits this URL to enter their
 * bank details, tax info, etc.
 * 
 * Body: { creator_id: string }
 */
export async function POST(req: NextRequest) {
  try {
    const { creator_id } = await req.json();
    if (!creator_id) {
      return NextResponse.json({ error: 'Missing creator_id' }, { status: 400 });
    }

    const sb = getServiceClient();

    // Get creator profile
    const { data: profile, error: profileError } = await sb
      .from('profiles')
      .select('id, email, full_name, creator_slug, stripe_account_id, stripe_onboarding_complete')
      .eq('id', creator_id)
      .maybeSingle();

    if (profileError || !profile) {
      return NextResponse.json({ error: 'Creator not found' }, { status: 404 });
    }

    let stripeAccountId = profile.stripe_account_id;

    // If creator already has a connected account, just generate a new onboarding link
    if (!stripeAccountId) {
      // Create a new Stripe Connect Express account
      const account = await stripe.accounts.create({
        type: 'express',
        country: 'US',
        email: profile.email || undefined,
        metadata: {
          creator_id: creator_id,
          creator_slug: profile.creator_slug || '',
        },
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
        business_profile: {
          name: profile.full_name || undefined,
          product_description: 'Creator membership subscriptions on Cookwise',
        },
      });

      stripeAccountId = account.id;

      // Save the account ID to the profile
      await sb
        .from('profiles')
        .update({ stripe_account_id: stripeAccountId })
        .eq('id', creator_id);
    }

    // Generate the onboarding link
    const accountLink = await stripe.accountLinks.create({
      account: stripeAccountId,
      refresh_url: `${BASE_URL}/api/stripe-connect/refresh?creator_id=${creator_id}`,
      return_url: `${BASE_URL}/api/stripe-connect/return?account_id=${stripeAccountId}&creator_id=${creator_id}`,
      type: 'account_onboarding',
    });

    return NextResponse.json({
      url: accountLink.url,
      account_id: stripeAccountId,
    });
  } catch (err: any) {
    console.error('[stripe-connect/create-account] Error:', err.message);
    return NextResponse.json({ error: err.message || 'Failed to create account' }, { status: 500 });
  }
}
