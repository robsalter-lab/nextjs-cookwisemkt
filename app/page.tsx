"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// ------------------------
// Fade-in animation wrapper
// ------------------------
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

      {/* --------------------- */}
      {/* HERO SECTION */}
      {/* --------------------- */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-slate-200/60 pt-20"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-16 lg:flex-row lg:items-stretch lg:pt-16">

          {/* LEFT COPY AREA */}
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
              meal plan to build an optimized shopping list in minutes – so you
              can save real money without spreadsheeting your entire week.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800">
                Join the waitlist
              </button>
              <div className="text-xs text-slate-500">
                Free while in beta. No credit card required.
              </div>
            </div>

            {/* STATS CARDS */}
            <div className="mt-6 grid max-w-md grid-cols-2 gap-4 text-xs text-slate-600">
              {/* Savings card */}
              <div className="rounded-2xl bg-white/70 p-3 shadow-sm shadow-slate-900/5">
                <div className="text-[11px] font-medium text-slate-500">
                  Avg. weekly savings
                </div>
                <div className="mt-1 text-xl font-semibold text-emerald-600">
                  $18.60
                </div>
                <div className="mt-1 text-[11px] text-slate-500">
                  Based on early testers using Publix / Kroger circulars.
                </div>
              </div>

              {/* Time saved card */}
              <div className="rounded-2xl bg-white/70 p-3 shadow-sm shadow-slate-900/5">
                <div className="text-[11px] font-medium text-slate-500">
                  Time saved
                </div>
                <div className="mt-1 text-xl font-semibold text-slate-900">
                  2–3 hrs
                </div>
                <div className="mt-1 text-[11px] text-slate-500">
                  Build a full week of dinners in under 10 minutes.
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* --------------------- */}
          {/* RIGHT PHONE MOCKUPS */}
          {/* --------------------- */}
          <FadeInSection
            delay={200}
            className="relative w-full max-w-sm lg:w-1/2 lg:max-w-none"
          >
            <div className="relative mx-auto h-[520px] w-[260px] sm:h-[560px] sm:w-[280px]">

              {/* MAIN PHONE */}
              <div className="absolute inset-0 rounded-[38px] bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl shadow-slate-900/40">
                <div className="absolute inset-[6px] rounded-[32px] bg-black/90" />
                <div className="absolute inset-[6px] rounded-[32px] overflow-hidden">
                  <Image
                    src="/screen-home.png"
                    alt="Cookwise dashboard"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* LEFT SMALL PHONE */}
              <div className="absolute -left-28 bottom-10 hidden h-72 w-40 rotate-[-10deg] rounded-[32px] bg-slate-900/90 shadow-xl shadow-slate-900/40 sm:block">
                <div className="absolute inset-[5px] rounded-[26px] overflow-hidden bg-black">
                  <Image
                    src="/screen-recipes.png"
                    alt="Recipes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT SMALL PHONE */}
              <div className="absolute -right-24 top-10 hidden h-64 w-40 rotate-[12deg] rounded-[32px] bg-slate-900/90 shadow-xl shadow-slate-900/40 sm:block">
                <div className="absolute inset-[5px] rounded-[26px] overflow-hidden bg-black">
                  <Image
                    src="/screen-planner.png"
                    alt="Meal planner"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* GLOW */}
              <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-b from-emerald-300/40 via-emerald-200/0 to-transparent blur-2xl" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --------------------- */}
      {/* HOW IT WORKS */}
      {/* --------------------- */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <FadeInSection className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            How Cookwise.ai works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Cookwise continually matches your pantry, local deals, and recipes so your meals stay cheap and interesting.
          </p>
        </FadeInSection>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* STEP 1 */}
          <FadeInSection delay={50}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 text-sm font-semibold">
                1
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Connect your area & stores
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Choose preferred stores and shopping mode — Cookwise watches the circulars for you.
              </p>
            </div>
          </FadeInSection>

          {/* STEP 2 */}
          <FadeInSection delay={120}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 text-sm font-semibold">
                2
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Sync pantry & choose meals
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Add pantry items or receipts, then pick meals from our deal-aware recipe library.
              </p>
            </div>
          </FadeInSection>

          {/* STEP 3 */}
          <FadeInSection delay={190}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 text-sm font-semibold">
                3
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Auto-build a smart shopping list
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Cookwise bundles overlapping ingredients and shows your estimated total.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
