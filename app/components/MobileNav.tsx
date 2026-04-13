"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Recipes", href: "#recipes" },
  { label: "Pricing", href: "#pricing" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        className="mobile-only-hamburger"
      >
        <span className={`mob-bar ${open ? "mob-bar-1" : ""}`} />
        <span className={`mob-bar ${open ? "mob-bar-2" : ""}`} />
        <span className={`mob-bar ${open ? "mob-bar-3" : ""}`} />
      </button>

      {open && (
        <div className="mob-overlay" onClick={() => setOpen(false)}>
          <nav className="mob-panel" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mob-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="mob-divider" />

            <div className="mob-badges">
              <a href="https://apps.apple.com/us/app/cookwise-meal-planner/id6759641268" target="_blank" rel="noopener noreferrer">
                <img src="/appstore.png" alt="App Store" className="mob-badge-img" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.cookwisellc.cookwise" target="_blank" rel="noopener noreferrer">
                <img src="/googleplay.png" alt="Google Play" className="mob-badge-img" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
