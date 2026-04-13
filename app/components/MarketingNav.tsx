import Link from "next/link";
import { MobileNav } from "./MobileNav";

export default function MarketingNav() {
  return (
    <header className="nav-glass">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <img
            src="/cookwise-owl.png"
            alt="Cookwise"
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
          />
          <span className="nav-logo-text">Cookwise</span>
        </Link>

        <nav className="nav-links">
          <Link href="#features">Features</Link>
          <Link href="#how-it-works">How It Works</Link>
          <Link href="#recipes">Recipes</Link>
          <Link href="#pricing">Pricing</Link>
        </nav>

        <div className="nav-badges">
          <a href="https://apps.apple.com/us/app/cookwise-meal-planner/id6759641268" target="_blank" rel="noopener noreferrer"><img src="/appstore.png" alt="App Store" style={{ height: 36, width: 'auto' }} /></a>
          <a href="https://play.google.com/store/apps/details?id=com.cookwisellc.cookwise" target="_blank" rel="noopener noreferrer"><img src="/googleplay.png" alt="Get it on Google Play" style={{ height: 36, width: 'auto' }} /></a>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
