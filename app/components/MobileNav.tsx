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
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 8,
          zIndex: 210,
          position: "relative",
        }}
        className="mobile-only-hamburger"
      >
        <span style={{
          display: "block", width: 22, height: 2, borderRadius: 2,
          background: "rgba(255,255,255,0.85)", transition: "all 0.3s",
          transform: open ? "translateY(7px) rotate(45deg)" : "none",
        }} />
        <span style={{
          display: "block", width: 22, height: 2, borderRadius: 2,
          background: "rgba(255,255,255,0.85)", transition: "all 0.3s",
          opacity: open ? 0 : 1,
        }} />
        <span style={{
          display: "block", width: 22, height: 2, borderRadius: 2,
          background: "rgba(255,255,255,0.85)", transition: "all 0.3s",
          transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
        }} />
      </button>

      {/* Overlay + Panel */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "min(300px, 80vw)",
              height: "100%",
              background: "#0b1121",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
              padding: "80px 24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              boxShadow: "-8px 0 40px rgba(0,0,0,0.5)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 0",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}

            <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "16px 0" }} />

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
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
