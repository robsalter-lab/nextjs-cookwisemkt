"use client";

import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Recipes", href: "#recipes" },
  { label: "Pricing", href: "#pricing" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="hamburger-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span className={`hamburger-line ${open ? "hamburger-open-1" : ""}`} />
        <span className={`hamburger-line ${open ? "hamburger-open-2" : ""}`} />
        <span className={`hamburger-line ${open ? "hamburger-open-3" : ""}`} />
      </button>

      {open && (
        <div className="mobile-nav-overlay" onClick={() => setOpen(false)}>
          <nav
            className="mobile-nav-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="mobile-nav-divider" />

            <div className="mobile-nav-badges">
              <a href="https://apps.apple.com/us/app/cookwise-meal-planner/id6759641268" target="_blank" rel="noopener noreferrer">
                <img src="/appstore.png" alt="App Store" style={{ height: 40, width: "auto" }} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.cookwisellc.cookwise" target="_blank" rel="noopener noreferrer">
                <img src="/googleplay.png" alt="Google Play" style={{ height: 40, width: "auto" }} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
