import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getServiceClient } from '../../lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-03-25.dahlia',
});

/** Platform fee percentage — 0 means creator keeps 100% */
const PLATFORM_FEE_PERCENT = 0;

export async function POST(req: NextRequest) {
  try {
    const { circle_id, creator_id, creator_slug } = await req.json();

    if (!circle_id || !creator_id) {
      return NextResponse.json({ error: 'Missing circle_id or creator_id' }, { status: 400 });
    }

    const sb = getServiceClient();

    // Get circle details
    const { data: circle, error: circleError } = await sb
      .from('cooking_circles')
      .select('id, name, price_cents, stripe_price_id, is_premium')
      .eq('id', circle_id)
      .maybeSingle();

    if (circleError || !circle) {
      return NextResponse.json({ error: 'Circle not found' }, { status: 404 });
    }

    if (!circle.stripe_price_id) {
      return NextResponse.json({ error: 'This creator has not set up payments yet' }, { status: 400 });
    }

    // Check if creator has a connected Stripe account
    const { data: creatorProfile } = await sb
      .from('profiles')
      .select('stripe_account_id, stripe_onboarding_complete')
      .eq('id', creator_id)
      .maybeSingle();

    const hasConnectedAccount =
      creatorProfile?.stripe_account_id && creatorProfile?.stripe_onboarding_complete;

    // Build the checkout session config
    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      mode: 'subscription',
      line_items: [
        {
          price: circle.stripe_price_id,
          quantity: 1,
        },
      ],
      metadata: {
        circle_id,
        creator_id,
        source: 'cookwise_creator_profile',
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cookwise.ai'}/c/${creator_slug || 'test-creator'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cookwise.ai'}/c/${creator_slug || 'test-creator'}`,
      allow_promotion_codes: true,
    };

    // If creator has Stripe Connect, route payment to them with platform fee
    if (hasConnectedAccount) {
      sessionConfig.subscription_data = {
        application_fee_percent: PLATFORM_FEE_PERCENT,
        transfer_data: {
          destination: creatorProfile.stripe_account_id,
        },
        metadata: {
          circle_id,
          creator_id,
          source: 'cookwise_creator_profile',
        },
      };
    } else {
      // No connected account — payment goes to Cookwise master account
      // Creator gets paid manually until they complete Stripe Connect
      sessionConfig.subscription_data = {
        metadata: {
          circle_id,
          creator_id,
          source: 'cookwise_creator_profile',
          payout_pending: 'true',
        },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('[create-checkout] Error:', err.message);
    return NextResponse.json({ error: err.message || 'Failed to create checkout session' }, { status: 500 });
  }
}

