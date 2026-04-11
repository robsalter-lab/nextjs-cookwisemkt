import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getServiceClient } from '../../lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-04-30.basil',
});

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
      .eq('is_premium', true)
      .maybeSingle();

    if (circleError || !circle) {
      return NextResponse.json({ error: 'Premium circle not found' }, { status: 404 });
    }

    if (!circle.stripe_price_id) {
      return NextResponse.json({ error: 'This creator has not set up payments yet' }, { status: 400 });
    }

    // Get creator's Stripe connected account
    const { data: creatorProfile } = await sb
      .from('profiles')
      .select('stripe_account_id, stripe_onboarding_complete')
      .eq('id', creator_id)
      .maybeSingle();

    if (!creatorProfile?.stripe_account_id || !creatorProfile.stripe_onboarding_complete) {
      return NextResponse.json({ error: 'Creator payment setup is incomplete' }, { status: 400 });
    }

    // Create Stripe Checkout Session
    // 0% platform fee — all revenue goes to the creator
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: circle.stripe_price_id,
          quantity: 1,
        },
      ],
      subscription_data: {
        // Direct all funds to creator's connected account
        application_fee_percent: 0,
        transfer_data: {
          destination: creatorProfile.stripe_account_id,
        },
        metadata: {
          circle_id,
          creator_id,
          source: 'cookwise_creator_profile',
        },
      },
      metadata: {
        circle_id,
        creator_id,
        source: 'cookwise_creator_profile',
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cookwise.ai'}/c/${creator_slug}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cookwise.ai'}/c/${creator_slug}`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('[create-checkout] Error:', err.message);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
