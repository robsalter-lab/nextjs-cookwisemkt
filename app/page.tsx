// app/page.tsx
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function FadeInSection({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
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
    <div className="bg-gradient-to-b from-[#FDFBF6] via-[#F7FAFF] to-[#F3F5FF]">

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden pb-24 pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 flex flex-col lg:flex-row gap-12">

          {/* LEFT SIDE */}
          <FadeInSection className="w-full lg:w-1/2 pt-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs text-emerald-700 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Loved by busy households and deal hunters
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Track weekly deals.<br />
              <span className="text-emerald-600">Auto-build smart carts.</span><br />
              Eat better for less.
            </h1>

            <p className="mt-4 text-slate-600 max-w-lg text-sm md:text-base">
              Cookwise.ai scans your local grocery deals, your pantry, and your
              meal plan to build an optimized shopping list in minutes — so you
              can save real money without spreadsheeting your entire week.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <button className="rounded-full bg-slate-900 px-6 py-3 text-white text-sm shadow-lg hover:bg-slate-800">
                Join the waitlist
              </button>
              <p className="text-xs text-slate-500">Free while in beta. No credit card required.</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md text-xs text-slate-600">
              <div className="rounded-2xl bg-white/70 p-3 shadow">
                <div className="text-[11px] text-slate-500">Avg. weekly savings</div>
                <div className="text-xl font-semibold text-emerald-600 mt-1">$18.60</div>
                <div className="text-[11px] mt-1">Based on early testers using Publix / Kroger circulars.</div>
              </div>

              <div className="rounded-2xl bg-white/70 p-3 shadow">
                <div className="text-[11px] text-slate-500">Time saved</div>
                <div className="text-xl font-semibold text-slate-900 mt-1">2–3 hrs</div>
                <div className="text-[11px] mt-1">Build a full week of dinners in under 10 minutes.</div>
              </div>
            </div>
          </FadeInSection>

          {/* RIGHT SIDE IMAGES */}
          <FadeInSection delay={150} className="w-full lg:w-1/2 relative flex justify-center">

            <div className="relative h-[520px] w-[260px] sm:h-[560px] sm:w-[280px]">
              {/* Main phone */}
              <div className="absolute inset-0 rounded-[38px] bg-gradient-to-b from-slate-900 to-slate-800 shadow-xl">
                <div className="absolute inset-[6px] rounded-[32px] bg-black overflow-hidden">
                  <Image src="/screen-home.png" alt="Main screen" fill priority className="object-cover" />
                </div>
              </div>

              {/* Left floating */}
              <div className="absolute -left-28 bottom-10 hidden sm:block h-72 w-40 rounded-[32px] bg-slate-900 shadow-xl rotate-[-10deg]">
                <div className="absolute inset-[5px] rounded-[26px] bg-black overflow-hidden">
                  <Image src="/screen-recipes.png" alt="Recipes" fill className="object-cover" />
                </div>
              </div>

              {/* Right floating */}
              <div className="absolute -right-24 top-14 hidden sm:block h-64 w-40 rounded-[32px] bg-slate-900 shadow-xl rotate-[12deg]">
                <div className="absolute inset-[5px] rounded-[26px] bg-black overflow-hidden">
                  <Image src="/screen-planner.png" alt="Planner" fill className="object-cover" />
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-14 bg-emerald-300/30 blur-3xl rounded-full pointer-events-none" />
            </div>

          </FadeInSection>

        </div>
      </section>

      {/* REST OF PAGE UNCHANGED (your features, pricing, etc.) */}
      
    </div>
  );
}
