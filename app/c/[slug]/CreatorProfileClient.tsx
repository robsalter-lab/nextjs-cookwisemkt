'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type CreatorData = {
  creator: {
    id: string;
    name: string;
    slug: string;
    bio: string;
    avatarUrl: string | null;
    bannerUrl: string | null;
    links: Record<string, string>;
  };
  circle: {
    id: string;
    name: string;
    description: string;
    avatarUrl: string | null;
    isPremium: boolean;
    priceCents: number;
    priceLabel: string;
    premiumDescription: string;
    perks: string[];
  } | null;
  memberCount: number;
  subscriberCount: number;
  cookbooks: { id: string; name: string; emoji: string; recipe_count: number }[];
};

const SOCIAL_ICONS: Record<string, { icon: string; prefix: string }> = {
  instagram: { icon: '📸', prefix: 'https://instagram.com/' },
  tiktok: { icon: '🎵', prefix: 'https://tiktok.com/@' },
  youtube: { icon: '🎬', prefix: 'https://youtube.com/@' },
  website: { icon: '🌐', prefix: '' },
  twitter: { icon: '𝕏', prefix: 'https://x.com/' },
};

export default function CreatorProfileClient({ data }: { data: CreatorData }) {
  const { creator, circle, memberCount, subscriberCount, cookbooks } = data;
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!circle) return;
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          circle_id: circle.id,
          creator_id: creator.id,
          creator_slug: creator.slug,
        }),
      });
      const json = await res.json();
      if (json.url) {
        window.location.href = json.url;
      } else {
        alert(json.error || 'Something went wrong. Please try again.');
        setCheckoutLoading(false);
      }
    } catch {
      alert('Network error. Please try again.');
      setCheckoutLoading(false);
    }
  };

  const priceDisplay = circle?.priceCents
    ? `$${(circle.priceCents / 100).toFixed(2)}/mo`
    : circle?.priceLabel || '';

  return (
    <div style={{ minHeight: '100vh', paddingTop: '48px' }}>
      {/* ── Banner ── */}
      <div style={{
        position: 'relative',
        height: '140px',
        background: creator.bannerUrl
          ? `url(${creator.bannerUrl}) center/cover no-repeat`
          : 'linear-gradient(135deg, #064e3b 0%, #0f172a 50%, #1e1b4b 100%)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, #060b18 100%)',
        }} />
      </div>

      {/* ── Content ── */}
      <div style={{
        maxWidth: '640px',
        margin: '0 auto',
        padding: '0 1.25rem 3rem',
        marginTop: '-60px',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Avatar + Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            margin: '0 auto 1rem',
            border: '4px solid #10b981',
            overflow: 'hidden',
            background: '#1e293b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {creator.avatarUrl ? (
              <img src={creator.avatarUrl} alt={creator.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>
                {creator.name.charAt(0)}
              </span>
            )}
          </div>

          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.25rem' }}>
            {creator.name}
          </h1>

          {creator.bio && (
            <p style={{ fontSize: '0.95rem', color: 'rgba(241,245,249,0.65)', lineHeight: 1.6, maxWidth: '480px', margin: '0.5rem auto 0' }}>
              {creator.bio}
            </p>
          )}

          {/* Social Links */}
          {Object.keys(creator.links).length > 0 && (
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
              {Object.entries(creator.links).map(([platform, handle]) => {
                const social = SOCIAL_ICONS[platform.toLowerCase()];
                if (!social || !handle) return null;
                const url = social.prefix
                  ? `${social.prefix}${handle.replace('@', '')}`
                  : handle;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.4rem 0.9rem',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(241,245,249,0.8)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span>{social.icon}</span>
                    <span>{handle}</span>
                  </a>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="glass-card"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2.5rem',
            padding: '1rem 1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>{memberCount}</div>
            <div style={{ fontSize: '0.7rem', fontWeight: 500, color: 'rgba(241,245,249,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Members</div>
          </div>
          <div className="stat-divider" />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3b82f6' }}>{cookbooks.length}</div>
            <div style={{ fontSize: '0.7rem', fontWeight: 500, color: 'rgba(241,245,249,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cookbooks</div>
          </div>
          {subscriberCount > 0 && (
            <>
              <div className="stat-divider" />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#8b5cf6' }}>{subscriberCount}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 500, color: 'rgba(241,245,249,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subscribers</div>
              </div>
            </>
          )}
        </motion.div>

        {/* ── Premium Circle Card ── */}
        {circle && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.05) 100%)',
              border: '1px solid rgba(16,185,129,0.2)',
              borderRadius: '1.25rem',
              padding: '1.75rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.25rem' }}>✨</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f1f5f9' }}>
                {circle.name}
              </h2>
            </div>

            {circle.premiumDescription && (
              <p style={{ fontSize: '0.9rem', color: 'rgba(241,245,249,0.6)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {circle.premiumDescription}
              </p>
            )}

            {/* Perks */}
            {circle.perks.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(241,245,249,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                  What You Get
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {circle.perks.map((perk, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'rgba(16,185,129,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        color: '#10b981',
                        flexShrink: 0,
                      }}>✓</span>
                      <span style={{ fontSize: '0.9rem', color: 'rgba(241,245,249,0.85)', fontWeight: 500 }}>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Price + CTA */}
            <div style={{ textAlign: 'center' }}>
              {priceDisplay && (
                <div style={{ marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: '#f1f5f9' }}>
                    ${(circle.priceCents / 100).toFixed(2)}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(241,245,249,0.5)', fontWeight: 500 }}>/month</span>
                </div>
              )}

              <button
                onClick={handleSubscribe}
                disabled={checkoutLoading}
                style={{
                  width: '100%',
                  padding: '0.9rem 2rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: checkoutLoading ? 'wait' : 'pointer',
                  opacity: checkoutLoading ? 0.7 : 1,
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
                  letterSpacing: '-0.01em',
                }}
              >
                {checkoutLoading ? 'Redirecting to checkout...' : `Join ${circle.name}`}
              </button>

              <p style={{ fontSize: '0.7rem', color: 'rgba(241,245,249,0.35)', marginTop: '0.75rem' }}>
                Cancel anytime · Powered by Stripe · Secure checkout
              </p>
            </div>
          </motion.div>
        )}

        {/* ── Cookbook Previews ── */}
        {cookbooks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="glass-card"
            style={{ padding: '1.5rem', marginBottom: '1.5rem' }}
          >
            <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(241,245,249,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Exclusive Cookbooks
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '0.75rem',
            }}>
              {cookbooks.map((cb) => (
                <div
                  key={cb.id}
                  style={{
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Lock overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '0.4rem',
                    right: '0.4rem',
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'rgba(16,185,129,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                  }}>🔒</div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{cb.emoji}</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(241,245,249,0.8)', lineHeight: 1.3 }}>{cb.name}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Download CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="glass-card"
          style={{ padding: '1.5rem', textAlign: 'center' }}
        >
          <p style={{ fontSize: '0.9rem', color: 'rgba(241,245,249,0.6)', marginBottom: '1rem' }}>
            Already a member? Open in the Cookwise app
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.apple.com/us/app/cookwise-meal-planner/id6759641268" target="_blank" rel="noopener noreferrer">
              <img src="/appstore.png" alt="App Store" style={{ height: 40, width: 'auto' }} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.cookwisellc.cookwise" target="_blank" rel="noopener noreferrer">
              <img src="/googleplay.png" alt="Google Play" style={{ height: 40, width: 'auto' }} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
