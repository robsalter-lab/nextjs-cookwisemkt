import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getServiceClient } from '../../lib/supabase';
import CreatorProfileClient from './CreatorProfileClient';

type Props = { params: Promise<{ slug: string }> };

async function getCreatorData(slug: string) {
  const sb = getServiceClient();

  // Get creator profile
  const { data: creator, error } = await sb
    .from('profiles')
    .select('id, full_name, creator_slug, creator_bio, creator_avatar_url, creator_banner_url, creator_links, avatar_url')
    .eq('creator_slug', slug)
    .eq('is_creator', true)
    .maybeSingle();

  if (error || !creator) return null;

  // Get their premium circle
  const { data: circle } = await sb
    .from('cooking_circles')
    .select('id, name, description, avatar_url, is_premium, price_cents, price_label, premium_description, premium_perks')
    .eq('created_by', creator.id)
    .eq('is_premium', true)
    .maybeSingle();

  // Get member count
  let memberCount = 0;
  if (circle) {
    const { count } = await sb
      .from('circle_members')
      .select('id', { count: 'exact', head: true })
      .eq('circle_id', circle.id);
    memberCount = count ?? 0;
  }

  // Get subscription count for social proof
  let subscriberCount = 0;
  if (circle) {
    const { count } = await sb
      .from('creator_subscriptions')
      .select('id', { count: 'exact', head: true })
      .eq('circle_id', circle.id)
      .eq('status', 'active');
    subscriberCount = count ?? 0;
  }

  // Get sample cookbooks shared in the circle (for preview)
  let cookbooks: { id: string; name: string; emoji: string; recipe_count: number }[] = [];
  if (circle) {
    const { data: sharedCookbooks } = await sb
      .from('circle_shared_cookbooks')
      .select('cookbook:user_cookbooks(id, name, emoji)')
      .eq('circle_id', circle.id)
      .limit(6);

    if (sharedCookbooks) {
      cookbooks = sharedCookbooks
        .map((sc: any) => sc.cookbook)
        .filter(Boolean)
        .map((cb: any) => ({
          id: cb.id,
          name: cb.name,
          emoji: cb.emoji || '📖',
          recipe_count: 0,
        }));
    }
  }

  return {
    creator: {
      id: creator.id,
      name: creator.full_name || 'Creator',
      slug: creator.creator_slug,
      bio: creator.creator_bio || '',
      avatarUrl: creator.creator_avatar_url || creator.avatar_url || null,
      bannerUrl: creator.creator_banner_url || null,
      links: (creator.creator_links as Record<string, string>) || {},
    },
    circle: circle ? {
      id: circle.id,
      name: circle.name,
      description: circle.description || circle.premium_description || '',
      avatarUrl: circle.avatar_url || null,
      isPremium: circle.is_premium,
      priceCents: circle.price_cents || 0,
      priceLabel: circle.price_label || '',
      premiumDescription: circle.premium_description || '',
      perks: circle.premium_perks || [],
    } : null,
    memberCount,
    subscriberCount,
    cookbooks,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCreatorData(slug);
  if (!data) return { title: 'Creator Not Found — Cookwise' };

  return {
    title: `${data.creator.name} — Cookwise Creator`,
    description: data.creator.bio || `Join ${data.creator.name}'s premium cooking circle on Cookwise.`,
    openGraph: {
      title: `${data.creator.name} — Cookwise Creator`,
      description: data.creator.bio || `Join ${data.creator.name}'s premium cooking community.`,
      url: `https://www.cookwise.ai/c/${slug}`,
      siteName: 'Cookwise',
      type: 'profile',
      ...(data.creator.avatarUrl ? { images: [data.creator.avatarUrl] } : {}),
    },
  };
}

export default async function CreatorProfilePage({ params }: Props) {
  const { slug } = await params;
  const data = await getCreatorData(slug);

  if (!data) notFound();

  return <CreatorProfileClient data={data} />;
}
