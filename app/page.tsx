// app/page.tsx
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// Fade-in wrapper
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
    <div className="bg-gradient-to-b from-[#FDFBF6] via-[#F7FAFF] to-[#F3F5FF]">

      {/* ----------------------- */}
      {/* HERO SECTION */}
      {/* ----------------------- */}
      <section id="hero" className="relative overflow-hidden border-b border-slate-200/40 pb-16">

        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-12 pt-10">

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

            <p className="mt-5 text-slate-600 max-w-lg text-[15px]">
              Cookwise.ai scans your local grocery deals, your pantry, and your meal plan 
              to build an optimized shopping list in minutes — saving you real money without 
              spreadsheeting your entire week.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition">
                Join the waitlist
              </button>
              <span className="text-xs text-slate-500">
                Free while in beta. No credit card required.
              </span>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 max-w-sm gap-4 text-xs text-slate-600">
              <div className="rounded-xl bg-white/80 p-3 shadow">
                <div className="text-[11px] text-slate-500">Avg. weekly savings</div>
                <div className="mt-1 text-xl font-semibold text-emerald-600">$18.60</div>
                <div className="text-[11px] text-slate-500 mt-1">Based on early testers.</div>
              </div>
              <div className="rounded-xl bg-white/80 p-3 shadow">
                <div className="text-[11px] text-slate-500">Time saved</div>
                <div className="mt-1 text-xl font-semibold">2–3 hrs</div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Build a full week in under 10 min.
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* RIGHT PHONES */}
          <FadeInSection delay={200} className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative h-[540px] w-[270px]">

              {/* MAIN PHONE */}
              <div className="absolute inset-0 rounded-[38px] bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl shadow-black/40">
                <div className="absolute inset-[6px] rounded-[32px] overflow-hidden bg-black/90">
                  <Image src="/screen-home.png" alt="Cookwise Home" fill className="object-cover" />
                </div>
              </div>

              {/* LEFT SMALL */}
              <div className="absolute -left-28 bottom-10 hidden sm:block h-72 w-40 rotate-[-10deg] rounded-[28px] bg-black shadow-xl">
                <div className="absolute inset-[5px] rounded-[22px] overflow-hidden">
                  <Image src="/screen-recipes.png" alt="Recipes" fill className="object-cover" />
                </div>
              </div>

              {/* RIGHT SMALL */}
              <div className="absolute -right-24 top-10 hidden sm:block h-64 w-40 rotate-[12deg] rounded-[28px] bg-black shadow-xl">
                <div className="absolute inset-[5px] rounded-[22px] overflow-hidden">
                  <Image src="/screen-planner.png" alt="Planner" fill className="object-cover" />
                </div>
              </div>

              {/* GLOW */}
              <div className="pointer-events-none absolute -inset-12 -z-10 bg-gradient-to-b from-emerald-300/40 via-transparent to-transparent blur-2xl" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* More sections unchanged... */}
    </div>
  );
}

