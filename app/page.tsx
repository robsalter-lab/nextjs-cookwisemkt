"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* -------------------------------------- */}
      {/* HERO — CalAI Style */}
      {/* -------------------------------------- */}
      <section className="w-full bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">

          {/* LEFT SIDE */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Meet Cookwise AI  
              <br />
              <span className="text-slate-600">Your smart grocery & meal optimizer.</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl">
              Cookwise uses AI to analyze weekly grocery deals, create optimized meal plans,
              reduce waste, and save money — automatically.
            </p>

            <button className="px-6 py-3 rounded-xl bg-black text-white text-lg font-semibold hover:opacity-80 transition">
              Join Waitlist
            </button>
          </div>

          {/* RIGHT SIDE — PHONE MOCKUP */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[280px] h-[560px] md:w-[340px] md:h-[680px]">
              <div className="absolute inset-0 rounded-3xl bg-slate-200 animate-pulse" />
              {/* Replace with real Image: */}
              {/* <Image src="/mockups/phone.png" fill alt="Cookwise App" className="object-cover rounded-3xl" /> */}
            </div>
          </div>

        </div>
      </section>



      {/* -------------------------------------- */}
      {/* WHAT DOES COOKWISE INCLUDE */}
      {/* -------------------------------------- */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">
            What does Cookwise AI include?
          </h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-14">

            {/* PHONE IMAGE LEFT */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-[260px] h-[520px] md:w-[320px] md:h-[640px]">
                <div className="absolute inset-0 rounded-3xl bg-slate-200 animate-pulse" />
              </div>
            </div>

            {/* FEATURE CARDS RIGHT */}
            <div className="flex-1 space-y-6">

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-semibold text-xl mb-2">Scan Your Groceries</h3>
                <p className="text-slate-600">
                  Snap a photo of your groceries or receipt. Cookwise AI detects ingredients 
                  and recommends meals you can cook immediately.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-semibold text-xl mb-2">Weekly Deal Matching</h3>
                <p className="text-slate-600">
                  Automatically match recipes and meal plans to your local grocery store’s 
                  weekly specials to save the most money.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-semibold text-xl mb-2">Smart Meal Planning</h3>
                <p className="text-slate-600">
                  Personalized meal plans that reduce waste, minimize cost, and match your 
                  nutritional goals.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>



      {/* -------------------------------------- */}
      {/* WHY CHOOSE COOKWISE */}
      {/* -------------------------------------- */}
      <section className="w-full py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Why choose Cookwise AI?
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            The smartest way to optimize your groceries and meals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-8 bg-white shadow-sm rounded-2xl border border-slate-200">
              <h3 className="font-semibold text-xl mb-2">Save Money</h3>
              <p className="text-slate-600">
                Cookwise finds the best deals and automatically builds meal plans designed 
                to reduce your grocery bill.
              </p>
            </div>

            <div className="p-8 bg-white shadow-sm rounded-2xl border border-slate-200">
              <h3 className="font-semibold text-xl mb-2">Reduce Waste</h3>
              <p className="text-slate-600">
                Your unused ingredients become new recipes — preventing food waste and saving 
                additional costs.
              </p>
            </div>

            <div className="p-8 bg-white shadow-sm rounded-2xl border border-slate-200">
              <h3 className="font-semibold text-xl mb-2">Eat Better</h3>
              <p className="text-slate-600">
                Optimized meal suggestions that match your goals: weight loss, clean eating, 
                high-protein, family-friendly, and more.
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* -------------------------------------- */}
      {/* DARK MODE PREVIEW */}
      {/* -------------------------------------- */}
      <section className="w-full py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">

          {/* LEFT TEXT */}
          <div className="flex-1">
            <p className="text-rose-500 font-semibold mb-2">NEW FEATURE</p>
            <h2 className="text-4xl font-bold mb-4">
              Dark Mode  
              <br />for a sleek cooking experience
            </h2>
            <p className="text-slate-600">
              Weekly improvements, new recipes, and smarter meal planning — coming soon.
            </p>
          </div>

          {/* RIGHT DARK MODE SCREEN MOCKUP */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[280px] h-[560px] md:w-[340px] md:h-[680px]">
              <div className="absolute inset-0 rounded-3xl bg-slate-300 animate-pulse" />
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
