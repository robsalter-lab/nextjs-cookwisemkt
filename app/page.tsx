"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// Removing external dependency to fix build error
// import { Linkedin, Instagram, Twitter } from "lucide-react"; 

// --- Inline Icons ---
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 14.6-5.5-4.6 1.1-11 3.6-12.3-1.6.4-2.8-2.3-2.3-3.7 3.2 2.7 7.6 2.5 8.3-.3.1-3.6 5.8-5.3 7-1.9 1.4-.4 2.8-1 2.8-1s-1 1.7-2.3 2.6c1.3-.1 2.5-.5 2.5-.5z" />
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

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-[#FDFBF6] via-[#F7FAFF] to-[#F3F5FF] text-slate-900">

      {/* ===== HERO ===== */}
      <section id="hero" className="relative overflow-hidden pt-40 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 lg:flex-row lg:items-center">
          
          {/* LEFT COPY */}
          <FadeInSection className="w-full lg:w-1/2">
            
            {/* AVATAR PILE */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-[3px] border-white bg-slate-200" />
                <div className="h-10 w-10 rounded-full border-[3px] border-white bg-slate-300" />
                <div className="h-10 w-10 rounded-full border-[3px] border-white bg-slate-400" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <span className="text-xs font-semibold text-slate-600">Loved by 2,000+ early testers</span>
              </div>
            </div>

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
                Join the waitlist
              </button>
              <div className="text-sm font-medium text-slate-500 px-4">
                Free while in beta.
              </div>
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

          {/* RIGHT PHONES */}
          <FadeInSection delay={200} className="relative w-full max-w-md lg:w-1/2 lg:max-w-none flex justify-center">
            <div className="relative h-[580px] w-[300px]">

              {/* Floating Bubble */}
              <div className="absolute -left-16 top-32 z-30 animate-bounce rounded-2xl bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hidden md:block" style={{ animationDuration: '3s' }}>
                 <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg">💰</div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Total Saved</p>
                      <p className="text-sm font-bold text-slate-900">$12.50</p>
                    </div>
                 </div>
              </div>

              {/* Main phone */}
              <div className="absolute inset-0 z-20 rounded-[40px] border-[8px] border-slate-900 bg-slate-900 shadow-2xl shadow-slate-400/20">
                <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-white">
                  <Image src="/screen-home.png" alt="Dashboard" fill priority className="object-cover" />
                </div>
              </div>

              {/* Back Phone */}
              <div className="absolute -right-12 top-12 z-10 h-full w-full rotate-6 rounded-[40px] bg-slate-100/50 border border-slate-200 blur-[1px]"></div>
              
              <div className="pointer-events-none absolute -inset-20 -z-10 bg-gradient-to-tr from-emerald-200/30 via-purple-100/30 to-transparent blur-3xl" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-24">
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

      {/* ===== FEATURES ===== */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-24 border-t border-slate-200/50">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            
          <FadeInSection>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                Everything you need to <br />
                <span className="text-emerald-600">shop smarter.</span>
             </h2>
             
             <div className="space-y-8">
               {[
                 { title: "Smart cart builder", desc: "Automatically groups items by aisle for faster shopping." },
                 { title: "Deal-aware recipes", desc: "Suggests dinner ideas based on what's on sale this week." },
                 { title: "Pantry-first planning", desc: "Stop buying duplicates. We track what you already own." },
                 { title: "Cross-store comparison", desc: "See which store has the cheapest total cart price." },
               ].map((feature, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                     <span className="h-2 w-2 rounded-full bg-emerald-500" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                     <p className="text-sm text-slate-600 mt-1">{feature.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </FadeInSection>

          <FadeInSection delay={200} className="relative">
             <div className="aspect-square relative rounded-3xl bg-gradient-to-br from-slate-100 to-white border border-slate-200/60 p-8 shadow-sm">
                <div className="absolute inset-8 rounded-2xl bg-white shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
                   <Image src="/screen-recipes.png" alt="App Features" fill className="object-cover object-top" />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-4 rounded-2xl shadow-xl max-w-[200px]">
                  <p className="text-xs font-medium text-slate-300 mb-1">Weekly Challenge</p>
                  <p className="font-semibold">Under $50 budget ✅</p>
                </div>
             </div>
          </FadeInSection>

        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="mx-auto max-w-5xl px-4 py-24">
        <FadeInSection>
          <div className="relative rounded-[3rem] bg-slate-900 p-8 md:p-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[300px] w-[300px] rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="md:w-1/2">
                <div className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 mb-4 border border-emerald-500/20">
                  LIMITED BETA ACCESS
                </div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Start saving today.
                </h2>
                <p className="mt-4 text-slate-300">
                  Join the waitlist to lock in our early-adopter pricing for life. 
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
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ===== CAL.AI STYLE FOOTER ===== */}
      <footer className="bg-[#FDFBF6] pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Top Section: Flex Container with Side-by-Side Links */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20">
            
            {/* Column 1: Brand & Downloads */}
            <div className="flex flex-col items-start max-w-sm">
              <div className="flex items-center gap-2 mb-6">
                <Image src="/logo.png" alt="Cookwise Logo" width={50} height={50} className="object-contain" />
                <span className="text-xl font-bold text-slate-900">Cookwise.ai</span>
              </div>
              
              <p className="text-sm font-medium text-slate-500 mb-4">Download Cookwise.ai</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/appstore.png" alt="Download on App Store" width={140} height={42} className="h-[42px] w-auto" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/googleplay.png" alt="Get it on Google Play" width={140} height={42} className="h-[42px] w-auto" />
                </a>
              </div>
            </div>

            {/* Links Columns: Grid 2 cols to save vertical space on mobile */}
            <div className="grid grid-cols-2 gap-12 sm:gap-24 w-full lg:w-auto">
              {/* Column 2: Legal Links */}
              <div>
                <h3 className="font-bold text-slate-900 mb-6">Legal</h3>
                <ul className="space-y-4 text-sm font-medium text-slate-500">
                  <li><a href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-emerald-600 transition-colors">Terms of use</a></li>
                  <li><a href="/cookies" className="hover:text-emerald-600 transition-colors">Cookies Policy</a></li>
                  <li><a href="/dpa" className="hover:text-emerald-600 transition-colors">DPA</a></li>
                  <li><a href="/api-terms" className="hover:text-emerald-600 transition-colors">API Terms</a></li>
                </ul>
              </div>

              {/* Column 3: Company Links */}
              <div>
                <h3 className="font-bold text-slate-900 mb-6">Company</h3>
                <ul className="space-y-4 text-sm font-medium text-slate-500">
                  <li><a href="/contact" className="hover:text-emerald-600 transition-colors">Contact</a></li>
                  <li><a href="/partners" className="hover:text-emerald-600 transition-colors">Partners</a></li>
                  <li><a href="/affiliates" className="hover:text-emerald-600 transition-colors">Affiliates</a></li>
                  <li><a href="/branding" className="hover:text-emerald-600 transition-colors">Branding</a></li>
                  <li><a href="/developers" className="hover:text-emerald-600 transition-colors">Developers</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright & Socials */}
          <div className="mt-20 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © Copyright {new Date().getFullYear()}, All rights reserved
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-slate-900 hover:text-emerald-600 transition-colors">
                <LinkedinIcon />
              </a>
              <a href="#" className="text-slate-900 hover:text-emerald-600 transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="text-slate-900 hover:text-emerald-600 transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
