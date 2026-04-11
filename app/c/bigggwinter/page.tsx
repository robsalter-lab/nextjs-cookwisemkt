'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Metadata } from 'next';

const SOCIAL_LINKS = [
  { icon: '📸', label: '@bigggwinter', url: 'https://instagram.com/bigggwinter' },
  { icon: '🎵', label: '@bigggwinter', url: 'https://tiktok.com/@bigggwinter' },
  { icon: '🎬', label: '@bigggwinter', url: 'https://youtube.com/@bigggwinter' },
];

const PERKS = [
  'Exclusive weekly recipes from Winter\'s Kitchen',
  'Behind-the-scenes cooking breakdowns',
  'Private community of home chefs',
  'Early access to new content & collabs',
  'Live cook-along sessions',
  'Personalized meal planning tips',
];

const PRICE_CENTS = 999;

export default function BigggWinterPage() {
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleSubscribe = async () => {
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          circle_id: 'ef55082e-5a91-4017-9832-8214d1f2bf9d',
          creator_id: 'd8a04975-357e-4863-9bfd-096f528e5fed',
          creator_slug: 'bigggwinter',
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

  return (
    <div style={{ minHeight: '100vh', paddingTop: '48px' }}>
      {/* ── Banner ── */}
      <div style={{
        position: 'relative',
        height: '160px',
        background: 'linear-gradient(135deg, #1a0a00 0%, #3d1c0a 30%, #5c2d14 60%, #2d1810 100%)',
        overflow: 'hidden',
      }}>
        {/* Warm kitchen ambiance overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,140,50,0.15) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 30%, #060b18 100%)',
        }} />
      </div>

      {/* ── Content ── */}
      <div style={{
        maxWidth: '640px',
        margin: '0 auto',
        padding: '0 1.25rem 3rem',
        marginTop: '-50px',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Avatar + Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '1.25rem' }}
        >
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            margin: '0 auto 0.75rem',
            border: '4px solid #f97316',
            overflow: 'hidden',
            background: '#1e293b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f97316' }}>K</span>
          </div>

          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.15rem' }}>
            Kamerron Rowe
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'rgba(249,115,22,0.8)', fontWeight: 600, marginBottom: '0.5rem' }}>
            @bigggwinter
          </p>

          <p style={{ fontSize: '0.9rem', color: 'rgba(241,245,249,0.6)', lineHeight: 1.55, maxWidth: '440px', margin: '0 auto' }}>
            Chef, content creator & your virtual big brother in the kitchen. Turning everyday ingredients into extraordinary meals. 1.4M+ family strong. 🍳🔥
          </p>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', marginTop: '0.75rem', flexWrap: 'wrap' }}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.35rem 0.8rem',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(241,245,249,0.8)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
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
            gap: '2rem',
            padding: '0.85rem 1.25rem',
            marginBottom: '1.25rem',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f97316' }}>1.4M+</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, color: 'rgba(241,245,249,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Followers</div>
          </div>
          <div className="stat-divider" />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#10b981' }}>43</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, color: 'rgba(241,245,249,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Members</div>
          </div>
          <div className="stat-divider" />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#3b82f6' }}>🔥</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, color: 'rgba(241,245,249,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Daily Recipes</div>
          </div>
        </motion.div>

        {/* ── Premium Circle Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.45 }}
          style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(234,88,12,0.04) 50%, rgba(59,130,246,0.04) 100%)',
            border: '1px solid rgba(249,115,22,0.2)',
            borderRadius: '1.25rem',
            padding: '1.5rem',
            marginBottom: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '1.25rem' }}>🍳</span>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9' }}>
              Winter&apos;s Kitchen
            </h2>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'rgba(241,245,249,0.6)', lineHeight: 1.55, marginBottom: '1rem' }}>
            Join Winter&apos;s Kitchen for exclusive access to Kamerron&apos;s recipe vault, weekly cook-alongs, and a private community of passionate home chefs. Level up your cooking game.
          </p>

          {/* Perks */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(241,245,249,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
              What You Get
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {PERKS.map((perk, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'rgba(249,115,22,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                    color: '#f97316',
                    flexShrink: 0,
                  }}>✓</span>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(241,245,249,0.85)', fontWeight: 500 }}>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price + CTA */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '0.6rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: '#f1f5f9' }}>
                ${(PRICE_CENTS / 100).toFixed(2)}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(241,245,249,0.5)', fontWeight: 500 }}>/month</span>
            </div>

            <button
              onClick={handleSubscribe}
              disabled={checkoutLoading}
              style={{
                width: '100%',
                padding: '0.85rem 2rem',
                borderRadius: '0.75rem',
                border: 'none',
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: checkoutLoading ? 'wait' : 'pointer',
                opacity: checkoutLoading ? 0.7 : 1,
                transition: 'all 0.2s',
                boxShadow: '0 4px 20px rgba(249,115,22,0.3)',
                letterSpacing: '-0.01em',
              }}
            >
              {checkoutLoading ? 'Redirecting to checkout...' : 'Join Winter\'s Kitchen'}
            </button>

            <p style={{ fontSize: '0.65rem', color: 'rgba(241,245,249,0.3)', marginTop: '0.6rem' }}>
              Cancel anytime · Powered by Stripe · Secure checkout
            </p>
          </div>
        </motion.div>

        {/* ── Download CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="glass-card"
          style={{ padding: '1.25rem', textAlign: 'center' }}
        >
          <p style={{ fontSize: '0.85rem', color: 'rgba(241,245,249,0.6)', marginBottom: '0.75rem' }}>
            Already a member? Open in the Cookwise app
          </p>
          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.apple.com/us/app/cookwise-meal-planner/id6759641268" target="_blank" rel="noopener noreferrer">
              <img src="/appstore.png" alt="App Store" style={{ height: 36, width: 'auto' }} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.cookwisellc.cookwise" target="_blank" rel="noopener noreferrer">
              <img src="/googleplay.png" alt="Google Play" style={{ height: 36, width: 'auto' }} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
