// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 lg:py-28 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-300 px-3 py-1 text-xs font-medium mb-4">
            AI-powered grocery optimizer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Cook smarter. <br /> Spend less. <br /> Eat better.
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-xl">
            Cookwise builds meal plans from your pantry and your store&apos;s weekly
            deals, then sends everything straight to your online cart. Less
            scrolling, more saving.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              className="inline-flex justify-center items-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 transition"
            >
              Get early access
            </a>
            <a
              href="#how-it-works"
              className="inline-flex justify-center items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-900/60 transition"
            >
              See how it works
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Save money on Publix, Walmart, Target, Aldi, Kroger & more.
          </p>
        </div>

        {/* Right column – placeholder for phone mock / screenshots */}
        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl">
            <p className="text-xs font-medium text-emerald-300 mb-2">
              Weekly Spend (Est.)
            </p>
            <p className="text-3xl font-semibold">$52.45</p>
            <p className="text-xs text-slate-400 mb-4">4 dinners • 3 lunches</p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-200">Deals used</span>
                <span className="text-emerald-300 font-medium">13 items</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-200">Pantry items</span>
                <span className="text-slate-300">7 matched</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-200">Estimated savings</span>
                <span className="text-emerald-300 font-medium">$18.60 / week</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900/80 border border-slate-800 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Strict Budget Plan</span>
                <span className="rounded-full bg-emerald-500/15 text-emerald-300 px-3 py-1">
                  Under $60
                </span>
              </div>
              <ul className="space-y-1 text-xs text-slate-400">
                <li>✓ Publix weekly BOGO on proteins</li>
                <li>✓ Pantry: olive oil, salt, spices</li>
                <li>✓ Auto-built cart for delivery</li>
              </ul>
            </div>

            <p className="mt-4 text-[11px] text-slate-500">
              Mock data for illustration. Actual prices and availability vary by
              store and region.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section
        id="how-it-works"
        className="bg-slate-950 border-t border-slate-800/80"
      >
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-18">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            How Cookwise works
          </h2>
          <p className="text-sm md:text-base text-slate-300 mb-8 max-w-2xl">
            We connect your favorite grocery stores, weekly deals, and pantry
            inventory into one simple flow.
          </p>

          <div className="grid gap-6 md:grid-cols-3 text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-xs font-semibold text-emerald-300 mb-2">
                STEP 1
              </div>
              <h3 className="font-medium mb-2">Pick your store & budget</h3>
              <p className="text-slate-300">
                Choose Publix, Walmart, Target, Aldi, Kroger & more. Set your
                budget, delivery or pickup, and how many meals you want.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-xs font-semibold text-emerald-300 mb-2">
                STEP 2
              </div>
              <h3 className="font-medium mb-2">
                Deals + pantry → smart recipes
              </h3>
              <p className="text-slate-300">
                Our engine scans weekly specials and what you already have at
                home to build affordable recipes and a combined shopping list.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-xs font-semibold text-emerald-300 mb-2">
                STEP 3
              </div>
              <h3 className="font-medium mb-2">Review cart & checkout online</h3>
              <p className="text-slate-300">
                Adjust items, swap brands, then deep-link into your store&apos;s
                online experience to add everything to cart and checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-18">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Why Cookwise is different
          </h2>
          <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base">
            <div className="space-y-4">
              <p className="text-slate-300">
                Most recipe or meal-planning apps start with food photos and
                work backwards. Cookwise starts with{" "}
                <span className="font-semibold text-slate-100">
                  real prices, weekly deals, and your pantry
                </span>{" "}
                — then builds meals that actually fit your budget.
              </p>
              <p className="text-slate-300">
                It&apos;s like having a personal grocery analyst that turns store
                circulars and receipts into an optimized meal plan every week.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>• Built around real grocery circulars and promotions</li>
              <li>• Understands what you already own to reduce waste</li>
              <li>• Designed for delivery & pickup flows from day one</li>
              <li>• AI that optimizes for cost, not just aesthetics</li>
              <li>• Ready for partner APIs: Instacart, Walmart, Kroger & more</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-18">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Everything you need to plan, shop, and cook smarter
          </h2>
          <div className="grid gap-6 md:grid-cols-3 text-sm">
            {[
              {
                title: "Smart cart builder",
                body: "Turn your selected meals into a structured cart, grouped by store and aisle, with estimated totals."
              },
              {
                title: "Pantry sync",
                body: "Scan your fridge or add items manually. Cookwise subtracts what you already have from your list."
              },
              {
                title: "Weekly deals engine",
                body: "We surface recipes that lean on current promotions first, so you naturally save more each week."
              },
              {
                title: "AI meal planner",
                body: "Tell us how many people, meals, and dietary preferences. We handle the combinations and math."
              },
              {
                title: "Budget tracking",
                body: "See an estimated total before you shop. Swap meals or ingredients to stay under your target."
              },
              {
                title: "Deep links to stores",
                body: "Tap an item to jump directly into your retailer’s product search and add it to your real cart."
              }
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <h3 className="font-medium mb-2">{f.title}</h3>
                <p className="text-slate-300">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-18">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Built for real households and real grocery habits
          </h2>
          <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="font-medium mb-2">Busy families</h3>
              <p>
                Plan a week of dinners in minutes, reuse staples in the pantry,
                and avoid last-minute takeout.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="font-medium mb-2">Budget-conscious shoppers</h3>
              <p>
                Automatically lean on weekly deals instead of reading every
                circular or clipping coupons manually.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="font-medium mb-2">Delivery-first households</h3>
              <p>
                Turn recipes into delivery-ready carts with a few taps using our
                integrations with leading platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing + CTA */}
      <section
        id="cta"
        className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/80"
      >
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-18">
          <div className="grid gap-8 md:grid-cols-[2fr,1.2fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Start free while we&apos;re in early access
              </h2>
              <p className="text-slate-300 mb-4 max-w-xl">
                We&apos;re launching Cookwise with a focus group of early users who
                care about saving money and reducing food waste. Help shape the
                product and lock in our lowest pricing.
              </p>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• Generate meal plans from weekly deals</li>
                <li>• Build shopping lists and smart carts</li>
                <li>• Track your pantry, fridge, and freezer</li>
                <li>• Deep link into supported delivery partners</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-xs font-medium text-emerald-300 mb-1">
                Coming soon
              </p>
              <h3 className="text-xl font-semibold mb-1">Cookwise+</h3>
              <p className="text-3xl font-semibold mb-4">$2.99</p>
              <p className="text-xs text-slate-400 mb-4">per month • cancel anytime</p>
              <ul className="text-sm text-slate-300 space-y-2 mb-6">
                <li>• Cheapest-store optimization</li>
                <li>• One-tap &quot;Build My Cart&quot; for delivery</li>
                <li>• Viral recipe and social discovery feed</li>
                <li>• Priority access to new store integrations</li>
              </ul>
              <button className="w-full rounded-full bg-emerald-400 text-slate-950 text-sm font-semibold py-3 hover:bg-emerald-300 transition">
                Join the waitlist
              </button>
              <p className="mt-3 text-[11px] text-slate-500">
                Pricing and features may change as we learn from early users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners CTA */}
      <section className="bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              For retailers & platforms
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-xl">
              Cookwise drives high-intent, meal-based grocery orders into your
              existing ecommerce flows. We start with deals, pantry, and
              delivery preferences—so baskets are larger and more repeatable.
            </p>
          </div>
          <Link
            href="/partners"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-900/70 transition"
          >
            Learn about partnering →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Cookwise.ai. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-slate-200">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-200">
              Terms
            </Link>
            <Link href="/partners" className="hover:text-slate-200">
              For Partners
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
