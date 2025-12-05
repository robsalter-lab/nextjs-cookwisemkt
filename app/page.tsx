// app/page.tsx
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

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

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden pt-16 pb-20 border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start px-4 gap-12">

          {/* LEFT */}
          <FadeInSection className="w-full lg:w-1/2">

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Loved by busy households and deal hunters
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl leading-tight">
              Track weekly deals.
              <br />
              <span className="text-emerald-600">Auto-build smart carts.</span>
              <br />
              Eat better for less.
            </h1>

            <p className="mt-4 text-base text-slate-600 max-w-xl">
              Cookwise.ai scans your local grocery deals, your pantry, and your meal plan to build an optimized shopping list in minutes.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <button className="rounded-full bg-slate-900 px-6 py-2.5 text-white text-sm font-semibold shadow-lg shadow-slate-900/15 hover:bg-slate-800">
                Join the waitlist
              </button>
              <div className="text-xs text-slate-500">Free while in beta. No credit card required.</div>
            </div>

            <div className="mt-6 grid grid-cols-2 max-w-md gap-4 text-xs text-slate-600">
              <div className="rounded-2xl bg-white/70 p-3 shadow-sm"> 
                <div className="text-[11px] font-medium text-slate-500">Avg. weekly savings</div>
                <div className="text-xl font-semibold text-emerald-600">$18.60</div>
                <div className="text-[11px] text-slate-500">Based on early testers.</div>
              </div>

              <div className="rounded-2xl bg-white/70 p-3 shadow-sm">
                <div className="text-[11px] font-medium text-slate-500">Time saved</div>
                <div className="text-xl font-semibold">2–3 hrs</div>
                <div className="text-[11px] text-slate-500">Build a full week in minutes.</div>
              </div>
            </div>

          </FadeInSection>

          {/* RIGHT — Phone mockups */}
          <FadeInSection delay={200} className="relative w-full lg:w-1/2 flex justify-center">

            <div className="relative h-[560px] w-[280px]">
              {/* Main phone */}
              <div className="absolute inset-0 rounded-[38px] bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl shadow-slate-900/40">
                <div className="absolute inset-[6px] rounded-[32px] overflow-hidden bg-black/90">
                  <Image src="/screen-home.png" fill alt="Cookwise dashboard" className="object-cover" />
                </div>
              </div>

              {/* Left floating phone */}
              <div className="absolute -left-28 bottom-10 hidden sm:block h-72 w-40 rotate-[-10deg] rounded-[32px] bg-slate-900/90 shadow-xl">
                <div className="absolute inset-[5px] overflow-hidden rounded-[26px] bg-black">
                  <Image src="/screen-recipes.png" fill alt="Recipes" className="object-cover" />
                </div>
              </div>

              {/* Right floating phone */}
              <div className="absolute -right-24 top-10 hidden sm:block h-64 w-40 rotate-[12deg] rounded-[32px] bg-slate-900/90 shadow-xl">
                <div className="absolute inset-[5px] overflow-hidden rounded-[26px] bg-black">
                  <Image src="/screen-planner.png" fill alt="Meal planner" className="object-cover" />
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-14 bg-gradient-to-b from-emerald-300/40 to-transparent blur-2xl -z-10" />
            </div>

          </FadeInSection>

        </div>
      </section>

      {/* Rest of sections unchanged... */}
      
    </div>
  );
}
