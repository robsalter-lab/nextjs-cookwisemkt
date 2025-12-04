"use client";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pb-24">
      {/* Hero Section */}
      <section className="px-6 py-24 lg:py-32 max-w-6xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-300 px-4 py-1 text-sm font-medium mb-6">
          Partner With Cookwise.ai
        </span>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Smarter carts. Higher conversions.  
          <span className="block text-emerald-400 mt-2">
            The AI engine powering profitable grocery journeys.
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Cookwise.ai transforms store catalogs and weekly deals into dynamic 
          meal plans and optimized shopping carts.  
          We help retailers, delivery platforms, and affiliate partners drive 
          **larger baskets**, **more frequent orders**, and **higher conversion rates**.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#apply"
            className="inline-flex justify-center items-center rounded-full bg-emerald-400 px-6 py-3 text-slate-900 text-sm font-semibold shadow-lg hover:bg-emerald-300 transition"
          >
            Apply to Partner
          </a>

          <a
            href="#why"
            className="inline-flex justify-center items-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Why Partner Section */}
      <section id="why" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
          Why Retailers & Delivery Platforms Choose Cookwise.ai
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">
              Bigger Basket Sizes
            </h3>
            <p className="text-slate-300">
              Personalized recipes and cart suggestions encourage customers 
              to add more items — with retailers seeing 12–28% higher AOV.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">
              Weekly Deal Optimization
            </h3>
            <p className="text-slate-300">
              Cookwise automatically promotes your weekly specials and 
              highest-margin products inside recipe and cart recommendations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">
              Seamless Cart Integration
            </h3>
            <p className="text-slate-300">
              Customers can jump from Cookwise directly into their Instacart, 
              Kroger, Walmart, or Publix cart — driving immediate conversions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">
              AI-Generated Recipes
            </h3>
            <p className="text-slate-300">
              Our engine uses pantry + weekly deals to build "zero-waste" 
              meal plans — increasing shopper loyalty and repeat usage.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">
              Affiliate-Ready Tracking
            </h3>
            <p className="text-slate-300">
              Supports Impact, CJ, Ascend, Skimlinks and custom tracking.  
              Plug-and-play links help maximize affiliate payouts.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">
              Fast Partnership Approvals
            </h3>
            <p className="text-slate-300">
              Cookwise meets all technical requirements for API, deep link, 
              and affiliate integrations — making approvals simple and fast.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h3 className="text-center text-slate-400 tracking-wide uppercase text-sm mb-8">
          Our Ideal Partners
        </h3>

        <div className="flex flex-wrap justify-center gap-10 opacity-80">
          <span className="text-xl font-semibold text-slate-300">Instacart</span>
          <span className="text-xl font-semibold text-slate-300">Publix</span>
          <span className="text-xl font-semibold text-slate-300">Kroger</span>
          <span className="text-xl font-semibold text-slate-300">DoorDash</span>
          <span className="text-xl font-semibold text-slate-300">Walmart</span>
          <span className="text-xl font-semibold text-slate-300">Albertsons</span>
        </div>
      </section>

      {/* Application Form CTA */}
      <section
        id="apply"
        className="px-6 py-28 max-w-4xl mx-auto text-center bg-slate-900/40 rounded-3xl border border-slate-800 mt-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Apply to Partner with Cookwise.ai
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-10">
          Tell us about your platform, and our integrations team will reach out 
          within 24 hours to activate API or affiliate onboarding.
        </p>

        <a
          href="mailto:partners@cookwise.ai"
          className="inline-flex justify-center items-center rounded-full bg-emerald-400 px-10 py-4 text-slate-900 text-lg font-semibold shadow-xl hover:bg-emerald-300 transition"
        >
          partners@cookwise.ai
        </a>

        <p className="mt-6 text-slate-500 text-sm">
          Prefer a call? Reach us at <span className="text-slate-300">+1 (305) 555-1212</span>.
        </p>
      </section>
    </main>
  );
}

