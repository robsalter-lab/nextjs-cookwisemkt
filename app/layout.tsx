import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookwise — Save Money. Eat Better. Cook Smarter.",
  description:
    "Cookwise scans local grocery deals, matches them to 1,500+ recipes, and builds your smart shopping list — automatically. Download free on iOS.",
  openGraph: {
    title: "Cookwise — Save Money. Eat Better. Cook Smarter.",
    description:
      "Your AI-powered kitchen partner. Track deals, discover recipes, auto-build shopping lists.",
    url: "https://www.cookwise.ai",
    siteName: "Cookwise",
    type: "website",
  },
  verification: {
    google: "E4rZFHE35_MehzglSuMZ12oTMjEihjOnLsjhbeGmNIo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* ===== STICKY GLASS NAV ===== */}
        <header className="nav-glass">
          <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.5rem' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img
                src="/cookwise-owl.png"
                alt="Cookwise"
                style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>Cookwise</span>
            </Link>

            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
              <Link href="#features" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>Features</Link>
              <Link href="#how-it-works" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>How It Works</Link>
              <Link href="#recipes" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>Recipes</Link>
              <Link href="#pricing" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>Pricing</Link>
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <a href="https://apps.apple.com/us/app/cookwise-meal-planner/id6759641268" target="_blank" rel="noopener noreferrer"><img src="/appstore.png" alt="App Store" style={{ height: 36, width: 'auto' }} /></a>
              <a href="#download" style={{ opacity: 0.5, cursor: 'default' }}><img src="/googleplay.png" alt="Google Play — Coming Soon" style={{ height: 36, width: 'auto' }} /></a>
            </div>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
