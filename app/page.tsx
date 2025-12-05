"use client";

import React, { useEffect, useRef, useState } from "react";

// --- Clean Social Icons (Cal.ai style) ---
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17C2 21.328 2.671 22 3.5 22h17c.829 0 1.5-.672 1.5-1.5v-17c0-.828-.671-1.5-1.5-1.5zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-1.07 0-1.62.76-1.62 2.22V19h-3v-9h3v1.38a3.25 3.25 0 013-1.63c2.03 0 3 1.25 3 3.5z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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

// --- DATA FOR INTERACTIVE SHOWCASE ---
// IMPORTANT: Make sure these files exist in your /public/videos folder
const featuresData = [
  {
    id: 0,
    title: "Smart Cart Builder",
    description: "Automatically groups items by aisle and compares prices across stores to find the lowest total.",
    videoSrc: "/videos/cart-demo.mp4", 
  },
  {
    id: 1,
    title: "Pantry-First Planning",
    description: "We track what you already own so you never buy duplicates. Scan receipts to update instantly.",
    videoSrc: "/videos/pantry-demo.mp4",
  },
  {
    id: 2,
    title: "Deal-Aware Recipes",
    description: "Get dinner ideas based on what is on sale this week at your local supermarkets.",
    videoSrc: "/videos/recipes-demo.mp4",
  },
];

// --- INTERACTIVE SHOWCASE COMPONENT ---
function InteractiveShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 border-t border-slate-200/50 scroll-mt-32">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Everything you need to <span className="text-emerald-600">shop smarter.</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          See exactly how Cookwise works in action.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT: Phone Simulator (Video Player) */}
        <FadeInSection className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]">
           {/* Phone Frame styling */}
           <div className="relative rounded-[3rem] border-[8px] border-slate-900 overflow-hidden shadow-2xl bg-black aspect-[9/19.5] ring-1 ring-slate-900/5">
              {/* Optional: Top Notch/Dynamic Island */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-20"></div>
              
              {/* Dynamic Video */}
              <video
                key={featuresData[activeFeature].videoSrc} // Forces react to re-render video element on change
                src={featuresData[activeFeature].videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover bg-slate-100"
              />
           </div>
           
           {/* Decorative Glow behind phone */}
           <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl -z-10 rounded-full opacity-70"></div>
        </FadeInSection>

        {/* RIGHT: Clickable Feature List */}
        <div className="flex flex-col gap-4">
          {featuresData.map((feature, index) => (
            <FadeInSection key={feature.id} delay={index * 100}>
              <button
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 group relative overflow-hidden ${
                  activeFeature === index
                    ? "bg-white border-emerald-500 shadow-xl shadow-emerald-500/10 scale-[1.02] z-10"
                    : "bg-white/50 border-transparent hover:bg-white hover:border-slate-200"
                }`}
              >
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold mb-2 transition-colors ${
                    activeFeature === index ? "text-emerald-700" : "text-slate-900"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>
                
                {/* Progress bar indicator for active state (optional nice touch) */}
                {activeFeature === index && (
                   <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 animate-pulse w-full opacity-20" />
                )}
              </button>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-[#FDFBF6] via-[#F7FAFF] to-[#F3F5FF] text-slate-900">

      {/* ===== HERO ===== */}
      <section id="hero" className="relative overflow-hidden pt-6 pb-16 scroll-mt-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 lg:flex-row lg:items-center">
          
          {/* LEFT COPY */}
          <FadeInSection className="w-full lg:w-1/2 lg:pr-8">
            
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Track weekly deals.
              <br />
              <span className="text-emerald-600">Auto-build smart carts.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
              Cookwise.ai scans your local grocery deals, your pantry, and your
              meal plan to build an optimized shopping list in minutes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 hover:bg-slate-800 hover:scale-105 transition-all">
                Get Started
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-8 text-slate-600 border-t border-slate-200/60 pt-6">
              <div>
                <div className="text-2xl font-bold text-emerald-600">$18.60</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Avg. Weekly Savings</div>
              </div>
              <div className="w-px bg-slate-200/60" />
              <div>
                <div className="text-2xl font-bold text-slate-900">2–3 hrs</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Time Saved</div>
              </div>
            </div>
          </FadeInSection>

          {/* RIGHT SIDE - HERO IMAGE */}
          <FadeInSection delay={200} className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[700px] h-[500px] sm:h-[600px] lg:h-[700px]">
                {/* Replaced next/image with standard img tag for compatibility */}
                <img
                  src="/photo1.png"
                  alt="Cookwise app interface showing smart savings list"
                  className="absolute inset-0 w-full h-full object-contain"
                />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-24 scroll-mt-32">
        <FadeInSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">How Cookwise.ai works</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Your personal grocery assistant that optimizes for price and nutrition.
          </p>
        </FadeInSection>

        <div className="grid gap-12 md:grid-cols-3">
          {[1,2,3].map((step, i) => (
            <FadeInSection delay={100 * i} key={i}>
              <div className="group relative flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-white shadow-lg shadow-emerald-100/50 text-xl font-bold text-emerald-600 ring-1 ring-emerald-100">
                  {step}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {step === 1 && "Connect your stores"}
                  {step === 2 && "Sync pantry & meals"}
                  {step === 3 && "Auto-build smart list"}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {step === 1 && "Select your local supermarkets to instantly sync weekly flyers and digital coupons."}
                  {step === 2 && "Scan receipts to update your pantry and pick recipes that use what you have."}
                  {step === 3 && "We bundle ingredients and compare prices across stores to maximize savings."}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ===== FEATURES (INTERACTIVE) ===== */}
      <InteractiveShowcase />

      {/* ===== PRICING ===== */}
      <section id="pricing" className="mx-auto max-w-5xl px-4 py-24 scroll-mt-32">
        <FadeInSection>
          <div className="relative rounded-[3rem] bg-slate-900 p-8 md:p-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[300px] w-[300px] rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="md:w-1/2">
                
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Start saving today.
                </h2>
                <p className="mt-4 text-slate-300">
                  Lock in our early-adopter pricing for life. 
                  Cheaper than a single fancy coffee.
                </p>
              </div>

              <div className="md:w-[40%] bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">$2.99</span>
                  <span className="text-slate-400">/week</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 mb-6">Billed monthly. Cancel anytime.</p>
                
                <button className="w-full rounded-xl bg-emerald-500 py-3 text-sm font-bold text-slate-900 hover:bg-emerald-400 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#FDFBF6] py-8 border-t border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-20">
            
            {/* Column 1: Brand & Downloads */}
            <div className="flex flex-col items-start max-w-sm">
              <div className="mb-2">
                <img src="/logo.png" alt="Cookwise Logo" width={150} height={50} className="object-contain h-20 w-auto" />
              </div>
              
              <div className="flex flex-row gap-2 mt-2">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/appstore.png" alt="Download on App Store" width={110} height={34} className="h-8 w-auto" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/googleplay.png" alt="Get it on Google Play" width={110} height={34} className="h-8 w-auto" />
                </a>
              </div>
            </div>

            {/* Links Columns - Compacted */}
            <div className="grid grid-cols-2 gap-10 sm:gap-24 w-full lg:w-auto">
              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-sm">Legal</h3>
                <ul className="space-y-1 text-xs font-medium text-slate-500">
                  <li><a href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-emerald-600 transition-colors">Terms of use</a></li>
                  <li><a href="/cookies" className="hover:text-emerald-600 transition-colors">Cookies Policy</a></li>
                  <li><a href="/dpa" className="hover:text-emerald-600 transition-colors">DPA</a></li>
                  <li><a href="/api-terms" className="hover:text-emerald-600 transition-colors">API Terms</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-sm">Company</h3>
                <ul className="space-y-1 text-xs font-medium text-slate-500">
                  <li><a href="/contact" className="hover:text-emerald-600 transition-colors">Contact</a></li>
                  <li><a href="/partners" className="hover:text-emerald-600 transition-colors">Partners</a></li>
                  <li><a href="/affiliates" className="hover:text-emerald-600 transition-colors">Affiliates</a></li>
                  <li><a href="/branding" className="hover:text-emerald-600 transition-colors">Branding</a></li>
                  <li><a href="/developers" className="hover:text-emerald-600 transition-colors">Developers</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section - Compacted margin */}
          <div className="mt-6 border-t border-slate-200 pt-4 flex flex-row justify-between items-center">
            <p className="text-[10px] sm:text-xs text-slate-400">
              © {new Date().getFullYear()} Cookwise.ai. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
