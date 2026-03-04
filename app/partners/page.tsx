"use client";

export default function PartnersPage() {
  const cards = [
    { title: "Bigger Basket Sizes", desc: "Personalized recipes and cart suggestions encourage customers to add more items — with retailers seeing 12–28% higher AOV." },
    { title: "Weekly Deal Optimization", desc: "Cookwise automatically promotes your weekly specials and highest-margin products inside recipe and cart recommendations." },
    { title: "Seamless Cart Integration", desc: "Customers can jump from Cookwise directly into their Instacart, Kroger, Walmart, or Publix cart — driving immediate conversions." },
    { title: "AI-Generated Recipes", desc: "Our engine uses pantry + weekly deals to build zero-waste meal plans — increasing shopper loyalty and repeat usage." },
    { title: "Affiliate-Ready Tracking", desc: "Supports Impact, CJ, Ascend, Skimlinks and custom tracking. Plug-and-play links help maximize affiliate payouts." },
    { title: "Fast Partnership Approvals", desc: "Cookwise meets all technical requirements for API, deep link, and affiliate integrations — making approvals simple and fast." },
  ];

  const idealPartners = ["Instacart", "Publix", "Kroger", "DoorDash", "Walmart", "Albertsons"];

  return (
    <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
      {/* Hero */}
      <section style={{ textAlign: "center", padding: "5rem 0 3rem" }}>
        <span style={{ display: "inline-block", fontSize: "0.875rem", fontWeight: 500, color: "#6ee7b7", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "9999px", padding: "0.375rem 1rem", marginBottom: "1.5rem" }}>
          Partner With Cookwise.ai
        </span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "white", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Smarter carts. Higher conversions.
          <span style={{ display: "block", color: "#34d399", marginTop: "0.5rem" }}>
            The AI engine powering profitable grocery journeys.
          </span>
        </h1>
        <p style={{ marginTop: "1.5rem", fontSize: "1.0625rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: "42rem", margin: "1.5rem auto 0" }}>
          Cookwise.ai transforms store catalogs and weekly deals into dynamic meal plans and optimized shopping carts. We help retailers, delivery platforms, and affiliate partners drive larger baskets, more frequent orders, and higher conversion rates.
        </p>
        <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#apply" style={{ display: "inline-flex", alignItems: "center", borderRadius: "9999px", background: "#10b981", padding: "0.75rem 1.75rem", fontSize: "0.875rem", fontWeight: 600, color: "white", textDecoration: "none", boxShadow: "0 8px 30px rgba(16,185,129,0.3)" }}>
            Apply to Partner
          </a>
          <a href="#why" style={{ display: "inline-flex", alignItems: "center", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", padding: "0.75rem 1.75rem", fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
            Learn More
          </a>
        </div>
      </section>

      {/* Why Partner */}
      <section id="why" style={{ padding: "4rem 0" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "white", textAlign: "center", marginBottom: "3rem" }}>
          Why Retailers & Delivery Platforms Choose Cookwise.ai
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {cards.map((c) => (
            <div key={c.title} style={{ borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "1.75rem", transition: "border-color 0.2s" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#6ee7b7", marginBottom: "0.75rem" }}>{c.title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(255,255,255,0.7)" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ideal Partners */}
      <section style={{ padding: "3rem 0", textAlign: "center" }}>
        <h3 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginBottom: "2rem" }}>
          Our Ideal Partners
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2.5rem" }}>
          {idealPartners.map((p) => (
            <span key={p} style={{ fontSize: "1.25rem", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>{p}</span>
          ))}
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" style={{ textAlign: "center", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "4rem 2rem", margin: "3rem 0 5rem" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
          Apply to Partner with Cookwise.ai
        </h2>
        <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "32rem", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Tell us about your platform, and our integrations team will reach out within 24 hours to activate API or affiliate onboarding.
        </p>
        <a href="mailto:partners@cookwise.ai" style={{ display: "inline-flex", alignItems: "center", borderRadius: "9999px", background: "#10b981", padding: "0.875rem 2.5rem", fontSize: "1rem", fontWeight: 600, color: "white", textDecoration: "none", boxShadow: "0 8px 30px rgba(16,185,129,0.3)" }}>
          partners@cookwise.ai
        </a>
        <p style={{ marginTop: "1.5rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
          Prefer a call? Reach us at <span style={{ color: "rgba(255,255,255,0.6)" }}>+1 (305) 555-1212</span>.
        </p>
      </section>
    </div>
  );
}
