// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Cookwise.ai – AI-powered grocery & meal optimization",
  description:
    "Cookwise.ai turns weekly grocery deals and your pantry into optimized meal plans, smart carts, and bigger savings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#FDFBF6] via-[#F7FAFF] to-[#F3F5FF] text-slate-900 antialiased">

        {/* ===== HEADER ===== */}
        <header className="w-full backdrop-blur-xl bg-white/50 border-b border-white/20">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:py-5">

            {/* --- Logo --- */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Cookwise.ai logo"
                width={52}
                height={52}
                className="h-12 w-auto md:h-14"
                priority
              />
            </Link>

            {/* --- Nav links --- */}
            <nav className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-slate-800">
              <Link href="#hero" className="hover:text-slate-900">Home</Link>
              <Link href="#how-it-works" className="hover:text-slate-900">How it works</Link>
              <Link href="#features" className="hover:text-slate-900">Features</Link>
              <Link href="#pricing" className="hover:text-slate-900">Pricing</Link>
            </nav>

            {/* --- App Store Buttons --- */}
            <div className="hidden md:flex items-center gap-4">
              <Image
                src="/appstore-badge.png"
                alt="Download on the App Store"
                width={150}
                height={45}
                className="h-[44px] w-auto"
              />
              <Image
                src="/googleplay-badge.png"
                alt="Get it on Google Play"
                width={150}
                height={45}
                className="h-[44px] w-auto"
              />
            </div>

          </div>
        </header>

        {/* ===== MAIN ===== */}
        <main className="min-h-screen">{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-slate-200/40 bg-white/60 backdrop-blur">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4 py-8 gap-6">

            <div>
              <div className="text-sm font-semibold text-slate-800">Cookwise.ai</div>
              <div className="text-xs text-slate-500 mt-1">AI-powered meal and grocery optimization.</div>
              <div className="mt-3 text-[11px] text-slate-400">
                © {new Date().getFullYear()} Cookwise.ai. All rights reserved.
              </div>
            </div>

            <div className="flex flex-wrap gap-12 text-sm text-slate-600">
              <div className="flex flex-col gap-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Legal</div>
                <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-slate-900">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-slate-900">Cookies</Link>
                <Link href="/dpa" className="hover:text-slate-900">Data Processing Addendum</Link>
                <Link href="/api-terms" className="hover:text-slate-900">API Terms</Link>
              </div>

              <div className="flex flex-col gap-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Company</div>
                <Link href="/partners" className="hover:text-slate-900">For Partners</Link>
                <Link href="/developers" className="hover:text-slate-900">Developers</Link>
                <Link href="/contact" className="hover:text-slate-900">Contact</Link>
                <Link href="/affiliates" className="hover:text-slate-900">Affiliates</Link>
                <Link href="/branding" className="hover:text-slate-900">Branding</Link>
              </div>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
