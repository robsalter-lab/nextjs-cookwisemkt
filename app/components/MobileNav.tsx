"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Recipes", href: "#recipes" },
  { label: "Pricing", href: "#pricing" },
];

const PANEL_CSS = `
  .mnav-hamburger{display:flex;flex-direction:column;gap:5px;background:transparent;border:none;cursor:pointer;padding:8px;z-index:210;position:relative}
  @media(min-width:768px){.mnav-hamburger{display:none}}
  .mnav-bar{display:block;width:22px;height:2px;border-radius:2px;background:rgba(255,255,255,.85);transition:transform .3s,opacity .3s}
  .mnav-bar1-open{transform:translateY(7px) rotate(45deg)}
  .mnav-bar2-open{opacity:0}
  .mnav-bar3-open{transform:translateY(-7px) rotate(-45deg)}
  .mnav-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:200;background:rgba(0,0,0,.65)}
  .mnav-panel{position:absolute;top:0;right:0;width:min(300px,80vw);height:100dvh;background:#080e1e;border-left:1px solid rgba(255,255,255,.1);padding:80px 24px 32px;display:flex;flex-direction:column;gap:4px;box-shadow:-8px 0 40px rgba(0,0,0,.6);overflow-y:auto}
  .mnav-link{display:block;padding:14px 0;font-size:17px;font-weight:600;color:rgba(255,255,255,.85);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.07)}
  .mnav-link:hover{color:#34d399}
  .mnav-divider{height:1px;background:rgba(255,255,255,.08);margin:16px 0}
  .mnav-badges{display:flex;gap:10px;align-items:center}
  .mnav-badges img{height:40px;width:auto}
`;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PANEL_CSS }} />

      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        className="mnav-hamburger"
      >
        <span className={`mnav-bar ${open ? "mnav-bar1-open" : ""}`} />
        <span className={`mnav-bar ${open ? "mnav-bar2-open" : ""}`} />
        <span className={`mnav-bar ${open ? "mnav-bar3-open" : ""}`} />
      </button>

      {open && (
        <div className="mnav-overlay" onClick={() => setOpen(false)}>
          <nav className="mnav-panel" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mnav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="mnav-divider" />

            <div className="mnav-badges">
              <a href="https://apps.apple.com/us/app/cookwise-meal-planner/id6759641268" target="_blank" rel="noopener noreferrer">
                <img src="/appstore.png" alt="App Store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.cookwisellc.cookwise" target="_blank" rel="noopener noreferrer">
                <img src="/googleplay.png" alt="Google Play" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
