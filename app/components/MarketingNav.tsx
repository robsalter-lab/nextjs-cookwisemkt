import Link from "next/link";

/**
 * Full marketing navigation with links + app store buttons.
 * Used on the main marketing page (not on creator profile pages).
 */
export default function MarketingNav() {
  return (
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
          <a href="https://play.google.com/store/apps/details?id=com.cookwisellc.cookwise" target="_blank" rel="noopener noreferrer"><img src="/googleplay.png" alt="Get it on Google Play" style={{ height: 36, width: 'auto' }} /></a>
        </div>
      </div>
    </header>
  );
}
