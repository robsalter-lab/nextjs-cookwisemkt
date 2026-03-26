"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  UtensilsCrossed,
  Salad,
  ListChecks,
  Heart,
  ChevronRight,
  ChevronLeft,
  Star,
  Flame,
  Clock,
  ArrowRight,
  ChefHat,
} from "lucide-react";

/* ─── SHARED CONTAINER ─── */
const C = ({ children, max = "80rem", className = "", style = {} }: { children: React.ReactNode; max?: string; className?: string; style?: React.CSSProperties }) => (
  <div className={className} style={{ maxWidth: max, margin: "0 auto", padding: "0 1.5rem", ...style }}>{children}</div>
);

/* ─── DATA ─── */
const features = [
  { icon: ShoppingCart, title: "Shop Smarter", desc: "Weekly flyer scanning across 10+ stores. See every deal at a glance and never miss a sale.", color: "#34d399", bg: "rgba(16,185,129,0.06)", border: "rgba(16,185,129,0.15)" },
  { icon: UtensilsCrossed, title: "Cook What's On Sale", desc: "1,500+ recipes ranked by savings. Every dish shows real-time deals from your local stores.", color: "#60a5fa", bg: "rgba(59,130,246,0.06)", border: "rgba(59,130,246,0.15)" },
  { icon: Heart, title: "Swipe to Discover", desc: "Card-based recipe discovery. Swipe right to save, left to skip. Find your next favorite meal in seconds.", color: "#f472b6", bg: "rgba(236,72,153,0.06)", border: "rgba(236,72,153,0.15)" },
  { icon: Salad, title: "Eat Healthier", desc: "Nutrition tracking, dietary filters, calorie-aware meal planning, and macro breakdowns for your family.", color: "#fbbf24", bg: "rgba(251,191,36,0.06)", border: "rgba(251,191,36,0.15)" },
  { icon: ListChecks, title: "Auto-Build Your List", desc: "One tap: ingredients grouped by aisle, prices compared across stores, pantry items automatically excluded.", color: "#a78bfa", bg: "rgba(139,92,246,0.06)", border: "rgba(139,92,246,0.15)" },
  { icon: ChefHat, title: "Step-by-Step Cooking", desc: "Guided cooking with built-in timers, pro tips, and portion scaling. Like having a sous chef in your pocket.", color: "#fb923c", bg: "rgba(251,146,60,0.06)", border: "rgba(251,146,60,0.15)" },
];

const showcaseItems = [
  { title: "Swipe & Discover", desc: "Browse recipes with intuitive swipe cards. Each card shows savings, nutrition, cook time, and what's already in your pantry.", videoSrc: "/Swipe.MP4", badge: "Most Popular", badgeColor: "rgba(236,72,153,0.15)", badgeText: "#f9a8d4", badgeBorder: "rgba(236,72,153,0.3)" },
  { title: "Smart Shopping List", desc: "Auto-generated from your meal plan. Grouped by aisle, prices compared across stores, pantry items excluded.", videoSrc: "/Smartshoppinglist.MP4", badge: "Save Money", badgeColor: "rgba(16,185,129,0.15)", badgeText: "#6ee7b7", badgeBorder: "rgba(16,185,129,0.3)" },
  { title: "Pantry Tracking", desc: "Know exactly what you have. Scan receipts to update instantly. Never buy duplicates or let food go to waste.", videoSrc: "/Pantry%20Tracking.MP4", badge: "Zero Waste", badgeColor: "rgba(59,130,246,0.15)", badgeText: "#93c5fd", badgeBorder: "rgba(59,130,246,0.3)" },
];

const recipeCards = [
  { title: "Tandoori Chicken", cuisine: "Indian", time: "25 min", cal: 597, savings: "72%", img: "/recipes/tandoori-chicken.webp" },
  { title: "Thai Green Curry", cuisine: "Thai", time: "30 min", cal: 520, savings: "68%", img: "/recipes/thai-green-curry.webp" },
  { title: "Korean Bibimbap", cuisine: "Korean", time: "20 min", cal: 490, savings: "70%", img: "/recipes/korean-bibimbap.webp" },
  { title: "Mediterranean Bowl", cuisine: "Greek", time: "15 min", cal: 410, savings: "78%", img: "/recipes/mediterranean-bowl.webp" },
  { title: "Avocado Toast", cuisine: "American", time: "6 min", cal: 376, savings: "80%", img: "/recipes/avocado-toast.webp" },
];

const testimonials = [
  { text: "Cookwise has saved us over $80/month on groceries. The deal-aware recipes are genius — we eat better AND spend less.", author: "Sarah M.", role: "Mom of 3" },
  { text: "I used to spend hours planning meals and comparing flyers. Now it takes 5 minutes. Absolute game changer.", author: "David R.", role: "Home Cook" },
  { text: "The swipe feature is addictive! I discover new recipes every week that I'd never have found on my own.", author: "Jessica L.", role: "Food Enthusiast" },
  { text: "Finally an app that actually understands grocery deals. The smart shopping list alone is worth every penny.", author: "Marcus T.", role: "Budget Saver" },
  { text: "My family loves the meal planner. Everyone picks their recipes and Cookwise builds one unified shopping list.", author: "Priya K.", role: "Family Planner" },
  { text: "The cooking steps with tips and timers are incredible. Like having a professional chef guiding you in real time.", author: "Alex W.", role: "Aspiring Chef" },
];

/* ─── PAGE ─── */
export default function HomePage() {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [activeRecipe, setActiveRecipe] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveShowcase((p) => (p + 1) % showcaseItems.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveRecipe((p) => (p + 1) % recipeCards.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: "6rem", paddingBottom: "3rem" }}>
        <C>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2.5rem" }}>
            {/* Left — copy */}
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>

              <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.025em", color: "white" }}>
                Save Money.<br />Eat Better.<br />
                <span className="gradient-text-emerald">Cook Smarter.</span>
              </h1>

              <p style={{ marginTop: "1.25rem", fontSize: "1.125rem", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", maxWidth: "32rem" }}>
                Cookwise scans local grocery deals, matches them to 1,500+ chef-quality recipes, and auto-builds your shopping list — saving you time and money every week.
              </p>

              <div style={{ marginTop: "1.75rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
                <a href="#download" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", borderRadius: "9999px", background: "#10b981", padding: "0.875rem 2rem", fontSize: "0.875rem", fontWeight: 600, color: "white", boxShadow: "0 8px 30px rgba(16,185,129,0.3)", transition: "all 0.2s", textDecoration: "none" }}>
                  Download Free <ArrowRight style={{ width: 16, height: 16 }} />
                </a>
                <a href="#features" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", padding: "0.875rem 2rem", fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "all 0.2s" }}>
                  See How It Works
                </a>
              </div>

              <div style={{ marginTop: "2rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                {[
                  { val: "$18.60", label: "Avg. Weekly Savings", accent: true },
                  { val: "1,500+", label: "Chef Recipes" },
                  { val: "10+", label: "Stores Tracked" },
                ].map((s, i) => (
                  <React.Fragment key={s.label}>
                    {i > 0 && <div className="stat-divider" style={{ height: 36 }} />}
                    <div>
                      <div style={{ fontSize: "1.375rem", fontWeight: 700, color: s.accent ? "#34d399" : "white" }}>{s.val}</div>
                      <div style={{ fontSize: "0.6875rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(255,255,255,0.3)" }}>{s.label}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right — dual phone mockup */}
            <div style={{ flex: "1 1 420px", display: "flex", justifyContent: "center", alignItems: "center", minWidth: 0 }}>
              <div style={{ position: "relative", width: 360, height: 620 }}>
                {/* Primary phone — Swipe Discovery */}
                <div style={{
                  position: "absolute", left: 0, top: 40, width: 250, height: 560, zIndex: 2,
                  borderRadius: "2.25rem", overflow: "hidden",
                  border: "3px solid rgba(255,255,255,0.12)",
                  background: "#0a0a0a",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(16,185,129,0.08)"
                }}>
                  <img src="/app-screenshot.png" alt="Cookwise recipe discovery" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                </div>

                {/* Secondary phone — Recipe Detail */}
                <div style={{
                  position: "absolute", right: -10, top: 0, width: 220, height: 460, zIndex: 1,
                  borderRadius: "2rem", overflow: "hidden",
                  border: "3px solid rgba(255,255,255,0.08)",
                  background: "#0a0a0a",
                  transform: "rotate(6deg)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
                }}>
                  <img src="/app-screenshot1.png" alt="Cookwise recipe details" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
                </div>

                {/* Glow effect behind phones */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
              </div>
            </div>
          </div>
        </C>
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section id="features" className="section-dark" style={{ padding: "4rem 0" }}>
        <C>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Everything you need to<br />
              <span className="gradient-text">eat well for less</span>
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "rgba(255,255,255,0.75)", maxWidth: "36rem", margin: "0.75rem auto 0" }}>
              From deal scanning to meal planning to cooking — Cookwise handles it all.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {features.map((f) => (
              <div key={f.title} className="glass-card glass-card-hover" style={{ padding: "1.5rem 1.75rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", background: f.bg, border: `1px solid ${f.border}` }}>
                  <f.icon style={{ width: 22, height: 22, color: f.color }} />
                </div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "white", marginBottom: "0.375rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(255,255,255,0.75)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </C>
      </section>

      {/* ═══════════ INTERACTIVE SHOWCASE ═══════════ */}
      <section style={{ padding: "4rem 0" }}>
        <C>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              See it in <span className="gradient-text-emerald">action</span>
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "rgba(255,255,255,0.75)" }}>
              Watch how Cookwise transforms your weekly grocery routine.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", alignItems: "center" }} className="lg:!grid-cols-[auto_1fr]">
            {/* Phone */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: "-2rem", borderRadius: "50%", background: "rgba(16,185,129,0.06)", filter: "blur(50px)", zIndex: -1 }} />
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <video key={showcaseItems[activeShowcase].videoSrc} src={showcaseItems[activeShowcase].videoSrc} autoPlay loop muted playsInline />
                </div>
              </div>
            </div>

            {/* Feature pills */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {showcaseItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveShowcase(idx)}
                  className={activeShowcase === idx ? "feature-pill-active" : ""}
                  style={{
                    width: "100%", textAlign: "left", padding: "1.25rem 1.5rem", borderRadius: "1rem",
                    border: `1px solid ${activeShowcase === idx ? "rgba(16,185,129,0.35)" : "rgba(255,255,255,0.05)"}`,
                    background: activeShowcase === idx ? "rgba(16,185,129,0.08)" : "rgba(255,255,255,0.02)",
                    transition: "all 0.3s", cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.375rem" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: activeShowcase === idx ? "#6ee7b7" : "white" }}>{item.title}</h3>
                    <span style={{ fontSize: "0.6875rem", fontWeight: 600, padding: "0.125rem 0.625rem", borderRadius: "9999px", background: item.badgeColor, color: item.badgeText, border: `1px solid ${item.badgeBorder}` }}>{item.badge}</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.55, color: "rgba(255,255,255,0.75)" }}>{item.desc}</p>
                  {activeShowcase === idx && (
                    <div style={{ marginTop: "1rem", height: 3, borderRadius: 4, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
                      <motion.div style={{ height: "100%", borderRadius: 4, background: "rgba(16,185,129,0.5)" }} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} key={`prog-${idx}-${activeShowcase}`} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </C>
      </section>

      {/* ═══════════ RECIPE CAROUSEL ═══════════ */}
      <section id="recipes" className="section-dark" style={{ padding: "4rem 0" }}>
        <C max="72rem">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              1,500+ recipes that <span className="gradient-text-emerald">save you money</span>
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "rgba(255,255,255,0.75)" }}>
              Every recipe shows real-time savings based on your local store deals.
            </p>
          </div>

          {/* Spotlight card */}
          <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", height: 400 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRecipe}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                style={{ position: "absolute", inset: 0 }}
              >
                <img src={recipeCards[activeRecipe].img} alt={recipeCards[activeRecipe].title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,11,24,0.92) 0%, rgba(6,11,24,0.65) 45%, rgba(6,11,24,0.2) 100%)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 3rem" }}>
                  <div style={{ maxWidth: 420 }}>
                    <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(16,185,129,0.2)", color: "#6ee7b7", border: "1px solid rgba(16,185,129,0.3)", marginBottom: "0.75rem" }}>
                      ~{recipeCards[activeRecipe].savings} savings
                    </span>
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#34d399", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.375rem" }}>{recipeCards[activeRecipe].cuisine}</div>
                    <h3 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "0.5rem" }}>{recipeCards[activeRecipe].title}</h3>
                    <div style={{ display: "flex", gap: "1.25rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.75)" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}><Clock style={{ width: 16, height: 16 }} /> {recipeCards[activeRecipe].time}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}><Flame style={{ width: 16, height: 16 }} /> {recipeCards[activeRecipe].cal} cal</span>
                    </div>
                    <a href="#download" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1.25rem", borderRadius: "9999px", background: "#10b981", padding: "0.75rem 1.5rem", fontSize: "0.875rem", fontWeight: 600, color: "white", textDecoration: "none", boxShadow: "0 6px 20px rgba(16,185,129,0.25)" }}>
                      View Recipe <ArrowRight style={{ width: 14, height: 14 }} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button onClick={() => setActiveRecipe((p) => (p - 1 + recipeCards.length) % recipeCards.length)} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", zIndex: 5, color: "white" }}>
              <ChevronLeft style={{ width: 20, height: 20 }} />
            </button>
            <button onClick={() => setActiveRecipe((p) => (p + 1) % recipeCards.length)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", zIndex: 5, color: "white" }}>
              <ChevronRight style={{ width: 20, height: 20 }} />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem", justifyContent: "center" }}>
            {recipeCards.map((r, i) => (
              <button
                key={i}
                onClick={() => setActiveRecipe(i)}
                style={{
                  width: 80, height: 56, borderRadius: "0.625rem", overflow: "hidden", cursor: "pointer",
                  border: activeRecipe === i ? "2px solid #10b981" : "2px solid transparent",
                  opacity: activeRecipe === i ? 1 : 0.5,
                  transition: "all 0.3s",
                }}
              >
                <img src={r.img} alt={r.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </button>
            ))}
          </div>
        </C>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section id="how-it-works" style={{ padding: "4rem 0" }}>
        <C max="72rem">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Three steps to <span className="gradient-text">smarter meals</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem", position: "relative" }}>
            {[
              { step: 1, title: "Connect Your Stores", desc: "Select your local supermarkets to sync weekly flyers, digital coupons, and cashback offers.", color: "#34d399", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
              { step: 2, title: "Browse & Plan", desc: "Swipe through deal-aware recipes. Add to your weekly meal plan with a single tap.", color: "#60a5fa", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)" },
              { step: 3, title: "Shop & Save", desc: "Auto-generated smart shopping list grouped by aisle. Check off items as you go.", color: "#a78bfa", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)" },
            ].map((s) => (
              <div key={s.step} style={{ textAlign: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", background: s.bg, border: `1px solid ${s.border}` }}>
                  <span style={{ fontSize: "2rem", fontWeight: 800, color: s.color }}>{s.step}</span>
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "rgba(255,255,255,0.75)", maxWidth: 260, margin: "0 auto" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </C>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="section-dark" style={{ padding: "4rem 0", overflow: "hidden" }}>
        <C style={{ marginBottom: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800 }}>
              Loved by <span className="gradient-text-emerald">home cooks</span>
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "rgba(255,255,255,0.75)" }}>
              See why families trust Cookwise for smarter grocery shopping.
            </p>
          </div>
        </C>

        <div className="relative marquee-container">
          <div className="fade-left" />
          <div className="fade-right" />
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="glass-card" style={{ padding: "1.5rem", width: 320, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", gap: 2, marginBottom: "0.75rem" }}>{[1, 2, 3, 4, 5].map((s) => <Star key={s} style={{ width: 14, height: 14, fill: "#fbbf24", color: "#fbbf24" }} />)}</div>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "rgba(255,255,255,0.55)", marginBottom: "1rem" }}>&ldquo;{t.text}&rdquo;</p>
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "white" }}>{t.author}</div>
                  <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.25)" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section id="pricing" style={{ padding: "4rem 0" }}>
        <C max="64rem">
          <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(15,23,42,0.95), rgba(59,130,246,0.06))" }} />
            <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(16,185,129,0.08)", filter: "blur(100px)", pointerEvents: "none" }} />

            <div style={{ position: "relative", padding: "2.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2.5rem" }}>
              <div style={{ flex: "1 1 300px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#34d399", fontSize: "0.875rem", fontWeight: 500, marginBottom: "1rem" }}><Flame style={{ width: 16, height: 16 }} /> 100% Free</div>
                <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "white", lineHeight: 1.15 }}>Start saving<br />today.</h2>
                <p style={{ marginTop: "1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.75)" }}>No subscriptions, no hidden fees, no paywalls. Every feature is completely free — forever.</p>
              </div>

              <div className="glass-card" style={{ flex: "1 1 300px", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                  <span style={{ fontSize: "3rem", fontWeight: 800, color: "white" }}>Free</span>
                  <span style={{ color: "rgba(255,255,255,0.75)" }}>forever</span>
                </div>
                <p style={{ fontSize: "0.75rem", marginTop: "0.25rem", marginBottom: "1.5rem", color: "rgba(255,255,255,0.25)" }}>No credit card required. Download and start saving.</p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
                  {["Unlimited recipes", "Weekly deal scanning", "Smart shopping lists", "Family meal planning", "Full nutrition data"].map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.625rem" }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />{f}
                    </li>
                  ))}
                </ul>
                <a href="#download" style={{ display: "block", width: "100%", textAlign: "center", borderRadius: "0.75rem", background: "#10b981", padding: "0.875rem", fontSize: "0.875rem", fontWeight: 700, color: "white", border: "none", cursor: "pointer", boxShadow: "0 8px 24px rgba(16,185,129,0.2)", textDecoration: "none" }}>Download Free</a>
              </div>
            </div>
          </div>
        </C>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section id="download" className="cta-gradient" style={{ padding: "4rem 0" }}>
        <C max="56rem" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800 }}>
            Ready to <span className="gradient-text-emerald">save?</span>
          </h2>
          <p style={{ marginTop: "1rem", fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "1rem auto 0" }}>
            Join thousands of families who cook better meals for less. Download Cookwise free today.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <a href="https://apps.apple.com/us/app/cookwise-meal-planner/id6759641268" target="_blank" rel="noopener noreferrer"><img src="/appstore.png" alt="App Store" style={{ height: 52, width: "auto" }} /></a>
            <a href="https://play.google.com/store/apps/details?id=com.cookwisellc.cookwise" target="_blank" rel="noopener noreferrer"><img src="/googleplay.png" alt="Google Play" style={{ height: 52, width: "auto" }} /></a>
          </div>
        </C>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "3rem 0 2rem" }}>
        <C>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2.5rem" }}>
            <div style={{ maxWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <img src="/cookwise-owl.png" alt="Cookwise" style={{ height: 36, width: "auto" }} />
                <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "white" }}>Cookwise</span>
              </div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "rgba(255,255,255,0.25)" }}>Your AI-powered kitchen partner. Track deals, discover recipes, and auto-build smart shopping lists.</p>
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
                <a href="https://apps.apple.com/us/app/cookwise-meal-planner/id6759641268" target="_blank" rel="noopener noreferrer"><img src="/appstore.png" alt="App Store" style={{ height: 30, width: "auto" }} /></a>
                <a href="https://play.google.com/store/apps/details?id=com.cookwisellc.cookwise" target="_blank" rel="noopener noreferrer"><img src="/googleplay.png" alt="Get it on Google Play" style={{ height: 30, width: "auto" }} /></a>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
              {[
                { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }, { label: "Recipes", href: "#recipes" }] },
                { title: "Legal", links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Use", href: "/terms" }] },
                { title: "Company", links: [{ label: "Contact", href: "/contact" }, { label: "Partners", href: "/partners" }] },
              ].map((col) => (
                <div key={col.title}>
                  <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: "0.75rem" }}>{col.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {col.links.map((l) => (
                      <li key={l.label} style={{ marginBottom: "0.5rem" }}>
                        <a href={l.href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.2s" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "2.5rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.15)" }}>© {new Date().getFullYear()} Cookwise. All rights reserved.</p>
          </div>
        </C>
      </footer>
    </div>
  );
}
