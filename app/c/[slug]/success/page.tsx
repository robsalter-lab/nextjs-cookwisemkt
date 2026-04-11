'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: '440px',
          margin: '0 auto',
          padding: '2.5rem 1.5rem',
          textAlign: 'center',
        }}
      >
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 100%)',
            border: '2px solid rgba(16,185,129,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '2.5rem',
          }}
        >
          🎉
        </motion.div>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.5rem' }}>
          {"You're in!"}
        </h1>

        <p style={{ fontSize: '1rem', color: 'rgba(241,245,249,0.6)', lineHeight: 1.6, marginBottom: '2rem' }}>
          Your membership is active. Open the Cookwise app to access your exclusive content.
        </p>

        {/* Deep link to app */}
        <a
          href="cookwise://circles"
          style={{
            display: 'block',
            width: '100%',
            padding: '0.9rem 2rem',
            borderRadius: '0.75rem',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 700,
            textDecoration: 'none',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
            marginBottom: '1rem',
          }}
        >
          Open Cookwise App
        </a>

        {/* Download fallback */}
        <p style={{ fontSize: '0.8rem', color: 'rgba(241,245,249,0.4)', marginBottom: '1rem' }}>
          {"Don't have the app yet?"}
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://apps.apple.com/us/app/cookwise-meal-planner/id6759641268" target="_blank" rel="noopener noreferrer">
            <img src="/appstore.png" alt="App Store" style={{ height: 40, width: 'auto' }} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.cookwisellc.cookwise" target="_blank" rel="noopener noreferrer">
            <img src="/googleplay.png" alt="Google Play" style={{ height: 40, width: 'auto' }} />
          </a>
        </div>

        <Link
          href="/"
          style={{
            display: 'block',
            marginTop: '2rem',
            fontSize: '0.8rem',
            color: 'rgba(241,245,249,0.4)',
            textDecoration: 'none',
          }}
        >
          ← Back to Cookwise
        </Link>
      </motion.div>
    </div>
  );
}
