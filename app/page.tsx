"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// ... (FadeInSection Component stays exactly the same) ...
type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

function FadeInSection({ children, delay = 0, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transform-gpu transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  // REMOVED the outer wrapper div with the duplicate background gradient.
  // The layout.tsx background now flows seamlessly through here.

  return (
    <>
      {/* ===== HERO ===== */}
      {/* Added pt-40 to push the text down below the floating header */}
      <section id="hero" className="relative overflow-hidden border-b border-slate-200/60 pt-40">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-16 lg:flex-row lg:items-stretch">
          
          {/* LEFT COPY */}
          <FadeInSection className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Loved by busy households and deal hunters
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
              Track weekly deals.
              <br />
              <span className="text-emerald-600">Auto-build smart carts.</span>
              <br />
              Eat better for less.
            </h1>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-600">
              Cookwise.ai scans your local grocery deals, your pantry, and your
              meal plan to build an optimized shopping list in minutes.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800">
                Join the waitlist
              </button>
              <div className="text-xs text-slate-500">
                Free while in beta. No credit card required.
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid max-w-md grid-cols-2 gap-4 text-xs text-slate-600">
              <div className="rounded-2xl bg-white/70 p-3 shadow-sm shadow-slate-900/5">
                <div className="text-[11px] font-medium text-slate-500">Avg. weekly savings</div>
                <div className="mt-1 text-xl font-semibold text-emerald-600">$18.60</div>
                <div className="mt-1 text-[11px] text-slate-500">Based on early testers using Publix / Kroger circulars.</div>
              </div>

              <div className="rounded-2xl bg-white/70 p-3 shadow-sm shadow-slate-900/5">
                <div className="text-[11px] font-medium text-slate-500">Time saved</div>
                <div className="mt-1 text-xl font-semibold text-slate-900">2–3 hrs</div>
                <div className="mt-1 text-[11px] text-slate-500">Build a full week of dinners in under 10 minutes.</div>
              </div>
            </div>
          </FadeInSection>

          {/* RIGHT PHONES */}
          <FadeInSection delay={200} className="relative w-full max-w-sm lg:w-1/2 lg:max-w-none">
            <div className="relative mx-auto h-[520px] w-[260px] sm:h-[560px] sm:w-[280px]">

              {/* Main phone */}
              <div className="absolute inset-0 rounded-[38px] bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl shadow-slate-900/40">
                <div className="absolute inset-[6px] rounded-[32px] overflow-hidden bg-black/90">
                  <Image src="/screen-home.png" alt="Dashboard" fill priority className="object-cover" />
                </div>
              </div>

              {/* Left phone */}
              <div className="absolute -left-28 bottom-10 hidden h-72 w-40 rotate-[-10deg] rounded-[32px] bg-slate-900/90 shadow-xl sm:block">
                <div className="absolute inset-[5px] rounded-[26px] overflow-hidden">
                  <Image src="/screen-recipes.png" alt="Recipes" fill className="object-cover" />
                </div>
              </div>

              {/* Right phone */}
              <div className="absolute -right-24 top-10 hidden h-64 w-40 rotate-[12deg] rounded-[32px] bg-slate-900/90 shadow-xl sm:block">
                <div className="absolute inset-[5px] rounded-[26px] overflow-hidden">
                  <Image src="/screen-planner.png" alt="Planner" fill className="object-cover" />
                </div>
              </div>

              <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-b from-emerald-300/40 via-transparent to-transparent blur-2xl" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-16">
        <FadeInSection className="text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">How Cookwise.ai works</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Cookwise continuously matches your pantry, local deals, and recipes.
          </p>
        </FadeInSection>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1,2,3].map((step, i) => (
            <FadeInSection delay={80 * i} key={i}>
              <div className="rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 font-semibold">{step}</div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {step === 1 && "Connect your area & stores"}
                  {step === 2 && "Sync pantry & choose meals"}
                  {step === 3 && "Auto-build a smart shopping list"}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {step === 1 && "Choose your region and preferred stores."}
                  {step === 2 && "Scan receipts or add pantry items."}
                  {step === 3 && "Cookwise bundles overlapping ingredients & compares deals."}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="mx-auto max-w-6xl px-4 pb-16">
        <FadeInSection className="mb-8 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Everything you need</h2>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Smart cart builder",
            "Deal-aware recipes",
            "Pantry-first planning",
            "Weekly meal planner",
            "In-store friendly mode",
            "Ready for Instacart & partners",
          ].map((title, i) => (
            <FadeInSection delay={70 * i} key={i}>
              <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {i === 0 && "Structured cart grouped by aisle."}
                  {i === 1 && "Recipes lean on weekly deals."}
                  {i === 2 && "Subtracts what you already own."}
                  {i === 3 && "Visual weekly calendar."}
                  {i === 4 && "Large tappable checklist."}
                  {i === 5 && "Deep-link to retailers."}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 pb-24">
        <FadeInSection>
          <div className="rounded-3xl bg-slate-900 text-slate-50 shadow-xl overflow-hidden">
            <div className="grid gap-8 px-6 py-10 md:grid-cols-[1.3fr,1fr] md:items-center">

              {/* LEFT COPY */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-medium text-emerald-200">
                  Early access pricing
                </div>

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  Start free while we're in beta
                </h2>

                <p className="mt-3 text-sm text-slate-200/90 max-w-xl">
                  Lock in discounted pricing for life.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-200/90">
                  <li>• Weekly deal-optimized meals</li>
                  <li>• One-tap smart shopping lists</li>
                  <li>• Instacart export coming soon</li>
                </ul>
              </div>

              {/* PRICING CARD */}
              <div className="rounded-2xl bg-slate-800/80 p-5">
                <div className="text-xs uppercase tracking-wider text-slate-300">Beta Price</div>
                <div className="mt-2 flex items-baseline gap-1 text-3xl font-semibold">
                  <span>$2.99</span>
                  <span className="text-xs text-slate-300">/ week</span>
                </div>

                <p className="mt-2 text-xs text-slate-300">
                  Cheaper than a grocery-store coffee.
                </p>

                <button className="mt-5 w-full rounded-full bg-emerald-500 py-2.5 text-sm font-semibold text-slate-900 hover:bg-emerald-400 shadow-lg">
                  Join the waitlist
                </button>

                <p className="mt-3 text-[11px] text-slate-300">Cancel anytime.</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-200/40 bg-white/40 backdrop-blur-sm py-16">
        
        <div className="mx-auto max-w-6xl px-4 grid gap-12 md:grid-cols-3">

          {/* --- Column 1: Logo + Stores --- */}
          <div>
            <Image src="/logo.png" alt="Cookwise.ai" width={60} height={60} className="mb-4" />
            <p className="text-sm font-medium text-slate-700 mb-2">Download Cookwise.ai</p>

            <div className="flex gap-3">
              <Image src="/appstore.png" width={130} height={40} alt="App Store" />
              <Image src="/googleplay.png" width={130} height={40} alt="Google Play" />
            </div>
          </div>

          {/* --- Column 2: LEGAL --- */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="/privacy" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-slate-900">Terms of Use</a></li>
              <li><a href="/cookies" className="hover:text-slate-900">Cookies Policy</a></li>
              <li><a href="/dpa" className="hover:text-slate-900">Data Processing Addendum</a></li>
              <li><a href="/api-terms" className="hover:text-slate-900">API Terms</a></li>
            </ul>
          </div>

          {/* --- Column 3: COMPANY --- */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="/contact" className="hover:text-slate-900">Contact</a></li>
              <li><a href="/partners" className="hover:text-slate-900">Partners</a></li>
              <li><a href="/affiliates" className="hover:text-slate-900">Affiliates</a></li>
              <li><a href="/branding" className="hover:text-slate-900">Branding</a></li>
              <li><a href="/developers" className="hover:text-slate-900">Developers</a></li>
            </ul>
          </div>

        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-xl text-slate-700">
          <a href="#" className="hover:text-slate-900">🔗</a>
          <a href="#" className="hover:text-slate-900">📸</a>
          <a href="#" className="hover:text-slate-900">🎵</a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Cookwise.ai — All rights reserved.
        </p>
      </footer>
    </>
  );
}
