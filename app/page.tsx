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
      <section
        id="hero"
        className="relative overflow-hidden border-b border-slate-200/60"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-16 pt-12 lg:flex-row lg:items-stretch lg:pt-16">
          {/* Left side – copy */}
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
              <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100">
                Join the waitlist
              </button>
              <div className="text-xs text-slate-500">
                Free while in beta. No credit card required.
              </div>
            </div>

            <div className="mt-6 grid max-w-md grid-cols-2 gap-4 text-xs text-slate-600">
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

          {/* Right side – phone mockups */}
          <FadeInSection
            delay={200}
            className="relative w-full max-w-sm lg:w-1/2 lg:max-w-none"
          >
            <div className="relative mx-auto h-[520px] w-[260px] sm:h-[560px] sm:w-[280px]">
              {/* Main phone */}
              <div className="absolute inset-0 rounded-[38px] bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl shadow-slate-900/40">
                <div className="absolute inset-[6px] rounded-[32px] bg-black/90" />
                <div className="absolute inset-[6px] rounded-[32px] overflow-hidden">
                  <Image
                    src="/screen-home.png"
                    alt="Cookwise.ai smart cart dashboard"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating secondary phones */}
              <div className="absolute -left-28 bottom-10 hidden h-72 w-40 rotate-[-10deg] rounded-[32px] bg-slate-900/90 shadow-xl shadow-slate-900/40 sm:block">
                <div className="absolute inset-[5px] rounded-[26px] overflow-hidden bg-black">
                  <Image
                    src="/screen-recipes.png"
                    alt="Cookwise recipe picker"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -right-24 top-10 hidden h-64 w-40 rotate-[12deg] rounded-[32px] bg-slate-900/90 shadow-xl shadow-slate-900/40 sm:block">
                <div className="absolute inset-[5px] rounded-[26px] overflow-hidden bg-black">
                  <Image
                    src="/screen-planner.png"
                    alt="Cookwise weekly meal planner"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Glow */}
              <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-b from-emerald-300/40 via-emerald-200/0 to-transparent blur-2xl" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="mx-auto max-w-6xl px-4 py-14 sm:py-16"
      >
        <FadeInSection className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            How Cookwise.ai works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Under the hood, Cookwise is constantly matching your pantry, local
            deals, and recipes – so your cart stays cheap and your meals stay
            interesting.
          </p>
        </FadeInSection>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FadeInSection delay={50}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 text-sm font-semibold">
                1
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Connect your area & stores
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Choose your region, preferred stores, and shopping mode (in-
                store or delivery). Cookwise watches those circulars for you.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={120}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 text-sm font-semibold">
                2
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Sync pantry & choose meals
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Scan receipts or add pantry items in a couple taps. Then pick
                dinners you actually want to cook from our deal-aware recipe
                library.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={190}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 text-sm font-semibold">
                3
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Auto-build a smart shopping list
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Cookwise bundles overlapping ingredients, leans on weekly
                specials, and shows the total before you ever step into the
                store.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="mx-auto max-w-6xl px-4 pb-14 sm:pb-16"
      >
        <FadeInSection className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Everything you need to plan, shop, and cook smarter
          </h2>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-3">
          <FadeInSection delay={40}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <h3 className="text-sm font-semibold text-slate-900">
                Smart cart builder
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Turn your selected meals into a structured cart grouped by
                aisle, with an estimated total and deal badges.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={110}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <h3 className="text-sm font-semibold text-slate-900">
                Deal-aware recipes
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Recipes automatically lean on items that are on sale this week,
                so you save money without eating boring food.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={180}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <h3 className="text-sm font-semibold text-slate-900">
                Pantry-first planning
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Cookwise subtracts what you already own so you stop over-buying
                spices, sauces, and freezer-burn chicken.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={250}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <h3 className="text-sm font-semibold text-slate-900">
                Weekly meal planner
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Drag meals into a visual weekly calendar and let Cookwise handle
                the math and leftovers.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={320}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <h3 className="text-sm font-semibold text-slate-900">
                In-store friendly mode
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Big, tappable checklist view for walking the aisles without
                juggling notes apps and screenshots.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={390}>
            <div className="h-full rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-900/5">
              <h3 className="text-sm font-semibold text-slate-900">
                Ready for Instacart & partners
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Deep-link into your favourite retailers as we roll out partner
                APIs and 1-tap “Build my cart” flows.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* PRICING / WAITLIST */}
      <section
        id="pricing"
        className="mx-auto max-w-6xl px-4 pb-20 sm:pb-24"
      >
        <FadeInSection>
          <div className="overflow-hidden rounded-3xl bg-slate-900 text-slate-50 shadow-xl shadow-slate-900/40">
            <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 md:grid-cols-[1.3fr,1fr] md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-200">
                  Early access pricing
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Start free while we&apos;re in beta
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-200/90 max-w-xl">
                  We&apos;re launching Cookwise with a small group of early
                  households. Lock in discounted pricing for life and help us
                  shape which stores and features we build first.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-200/90">
                  <li>• Generate full weeks of meals from weekly deals.</li>
                  <li>• Build optimized shopping lists in a few taps.</li>
                  <li>• Export to Instacart / delivery as we ship partners.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-800/80 p-5">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                  Beta price
                </div>
                <div className="mt-2 flex items-baseline gap-1 text-3xl font-semibold">
                  <span>$2.99</span>
                  <span className="text-xs font-normal text-slate-300">
                    / week
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-300">
                  Or roughly one grocery-store coffee per month.
                </p>

                <button className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                  Join the waitlist
                </button>

                <p className="mt-3 text-[11px] text-slate-300">
                  No charge until we launch publicly. Cancel anytime. You can
                  switch to the App Store / Google Play subscription once the
                  app is live.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
