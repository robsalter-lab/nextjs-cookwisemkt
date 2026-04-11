import "../globals.css";
import Link from "next/link";

/**
 * Minimal layout for creator profile pages (/c/[slug]).
 * No navigation links, no app store buttons — pure sales/landing page.
 * Centered logo-only header with tighter padding for mobile.
 */
export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ===== MINIMAL HEADER — LOGO ONLY ===== */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          background: 'rgba(6,11,24,0.75)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem 1rem',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
            <img
              src="/cookwise-owl.png"
              alt="Cookwise"
              style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
            />
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
              Cookwise
            </span>
          </Link>
        </div>
      </header>

      {children}
    </>
  );
}
