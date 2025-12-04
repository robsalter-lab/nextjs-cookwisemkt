export default function HomePage() {
  return (
    <main className="w-full bg-[#FAFAF9] text-[#111]">
      {/* ============================
          HERO SECTION (Style A)
      ============================= */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT SIDE — Text */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-3 py-1 rounded-full text-sm mb-6 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span>AI-powered grocery optimization</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111]">
            Cook smarter.<br />
            Spend less.<br />
            Eat better.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-md">
            Cookwise builds meal plans from weekly deals and your pantry—then sends everything straight to your online cart.
          </p>

          <button className="mt-8 bg-[#00D084] text-black font-semibold px-6 py-3 rounded-full shadow hover:opacity-90 transition">
            Join the Waitlist
          </button>
        </div>

        {/* RIGHT SIDE — Placeholder Phone Mockup */}
        <div className="flex-1 flex justify-center">
          <div className="w-[320px] h-[640px] bg-white rounded-[2.5rem] shadow-2xl border border-gray-300 flex items-center justify-center text-gray-400">
            {/* Placeholder block */}
            <span className="text-center px-4">
              <strong>Placeholder App Screenshot</strong>
              <br />
              (Upload real UI later)
            </span>
          </div>
        </div>
      </section>



      {/* ============================
          SECTION: WHAT COOKWISE INCLUDES
      ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          What does Cookwise include?
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Smart shopping automation, meal planning, pantry sync, and AI-powered cost optimization—built around real grocery deals.
        </p>

        {/* Grid of feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              📸
            </div>
            <h3 className="font-semibold text-xl mb-2">Build meals from weekly deals</h3>
            <p className="text-gray-600">
              Cookwise scans store promotions and builds affordable meals that match your budget, preferences, and pantry.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              🧮
            </div>
            <h3 className="font-semibold text-xl mb-2">Smart cart builder</h3>
            <p className="text-gray-600">
              Turn recipes into a structured cart grouped by store & aisle, with estimated totals and swap suggestions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center mb-4">
              🏷️
            </div>
            <h3 className="font-semibold text-xl mb-2">Pantry & deal matching</h3>
            <p className="text-gray-600">
              Cookwise automatically subtracts pantry items and suggests recipes leaning on current promotions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
              🍽️
            </div>
            <h3 className="font-semibold text-xl mb-2">Meal planner with budgeting</h3>
            <p className="text-gray-600">
              See weekly cost estimates before you shop. Adjust servings or swap items to stay under your target.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center mb-4">
              🔗
            </div>
            <h3 className="font-semibold text-xl mb-2">Deep link to store checkouts</h3>
            <p className="text-gray-600">
              Send your optimized cart directly into Instacart, Walmart, or Kroger with a single tap.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
              🤖
            </div>
            <h3 className="font-semibold text-xl mb-2">AI meal + grocery engine</h3>
            <p className="text-gray-600">
              Understands your patterns, ignores items you already own, and optimizes for cost—not just aesthetics.
            </p>
          </div>

        </div>
      </section>



      {/* ============================
          SECTION: PHONE SCREEN + TEXT
          (CalAI-style alternating mockup)
      ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Placeholder phone mockup */}
        <div className="w-[320px] h-[640px] bg-white rounded-[2.5rem] shadow-2xl border border-gray-300 mx-auto flex items-center justify-center text-gray-400">
          <span className="text-center px-4">
            <strong>Placeholder Screen #2</strong>
          </span>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-4">Built for real households</h3>
          <p className="text-gray-600 mb-6">
            Cookwise eliminates unnecessary purchases, reuses pantry staples, and leans heavily on weekly promotions to build bigger baskets for less.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Busy families</li>
            <li>• Budget-conscious shoppers</li>
            <li>• Delivery-first households</li>
            <li>• People who hate scrolling endless recipes</li>
          </ul>
        </div>

      </section>



      {/* ============================
          FOOTER
      ============================= */}
      <footer className="border-t border-gray-200 py-12 mt-16 text-gray-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

          <div>
            <div className="font-bold text-xl mb-2">Cookwise.ai</div>
            <p className="text-sm text-gray-500">
              AI-powered grocery and meal optimization.
            </p>
          </div>

          <div className="flex flex-col space-y-2 text-sm">
            <a href="/privacy" className="hover:text-gray-800">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-800">Terms of Service</a>
            <a href="/contact" className="hover:text-gray-800">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
