'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [claimCode, setClaimCode] = useState<string | null>(null);
  const [circleName, setCircleName] = useState('Premium Circle');
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }

    let attempts = 0;
    const maxAttempts = 10;

    const fetchCode = async () => {
      try {
        const res = await fetch(`/api/get-claim-code?session_id=${sessionId}`);
        const data = await res.json();

        if (data.code) {
          setClaimCode(data.code);
          setCircleName(data.circle_name);
          setLoading(false);
        } else if (attempts < maxAttempts) {
          // Webhook might not have fired yet — retry
          attempts++;
          setTimeout(fetchCode, 2000);
        } else {
          setLoading(false);
        }
      } catch {
        if (attempts < maxAttempts) {
          attempts++;
          setTimeout(fetchCode, 2000);
        } else {
          setLoading(false);
        }
      }
    };

    fetchCode();
  }, [sessionId]);

  const handleCopy = () => {
    if (!claimCode) return;
    // Fallback for mobile Safari / in-app browsers where navigator.clipboard is blocked
    try {
      const textarea = document.createElement('textarea');
      textarea.value = claimCode;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '-9999px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      textarea.setSelectionRange(0, claimCode.length);
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Last resort: try clipboard API
      navigator.clipboard?.writeText(claimCode).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

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
          Payment Successful!
        </h1>

        <p style={{ fontSize: '1rem', color: 'rgba(241,245,249,0.6)', lineHeight: 1.6, marginBottom: '2rem' }}>
          Welcome to <strong style={{ color: '#10b981' }}>{circleName}</strong>. Use the code below to activate your membership in the Cookwise app.
        </p>

        {/* Claim Code */}
        {loading ? (
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '1.5rem',
          }}>
            <p style={{ fontSize: '0.9rem', color: 'rgba(241,245,249,0.5)' }}>
              Generating your membership code...
            </p>
          </div>
        ) : claimCode ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            style={{
              padding: '1.5rem',
              borderRadius: '0.75rem',
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.25)',
              marginBottom: '1.5rem',
            }}
          >
            <p style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(241,245,249,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
              Your Membership Code
            </p>
            <div
              onClick={handleCopy}
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                fontFamily: 'monospace',
                color: '#10b981',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                background: 'rgba(0,0,0,0.2)',
                transition: 'all 0.2s',
                userSelect: 'all',
              }}
            >
              {claimCode}
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(241,245,249,0.4)', marginTop: '0.5rem' }}>
              {copied ? '✅ Copied!' : 'Tap to copy'}
            </p>
          </motion.div>
        ) : (
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '1.5rem',
          }}>
            <p style={{ fontSize: '0.9rem', color: 'rgba(241,245,249,0.5)' }}>
              Your code is being processed. Please check your email for the membership code.
            </p>
          </div>
        )}

        {/* Steps */}
        <div style={{
          textAlign: 'left',
          padding: '1.25rem',
          borderRadius: '0.75rem',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          marginBottom: '1.5rem',
        }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(241,245,249,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
            How to activate
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              'Open the Cookwise app',
              'Go to your Circles tab',
              'Tap "Redeem Membership Code"',
              'Paste your code & enjoy!',
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'rgba(16,185,129,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: '#10b981',
                  flexShrink: 0,
                }}>{i + 1}</span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(241,245,249,0.75)' }}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deep link to app */}
        {claimCode && (
          <a
            href={`cookwise://claim/${claimCode}`}
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
            Open Cookwise & Activate
          </a>
        )}

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
