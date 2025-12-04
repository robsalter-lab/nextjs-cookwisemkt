// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Cookwise.ai – AI-powered grocery & meal optimization",
  description:
    "Cookwise.ai turns weekly grocery deals and your pantry into optimized meal plans, smart carts, and bigger savings.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-[#FDFBF6] text-slate-900 antialiased">

        {/* Top navigation */}
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 md:py-4">

            {/* Logo ONLY */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Cookwise.ai logo"
                className="h-12 w-auto md:h-16"
              />
            </Link>

            {/* Center navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
              <Link href="#hero" className="hover:text-slate-900">Home</Link>
              <Link href="#how-it-works" className="hover:text-slate-900">How it works</Link>
              <Link href="#features" className="hover:text-slate-900">Features</Link>
              <Link href="#pricing" className="hover:text-slate-900">Pricing</Link>
            </nav>

            {/* App badges */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-1.5 text-xs text-white shadow-sm select-none">
                <span className="text-lg"></span>
                <div className="leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-300">
                    Coming soon on
                  </div>
                  <div className="text-[11px] font-semibold">App Store</div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-1.5 text-xs text-white shadow-sm select-none">
                <span className="text-lg">▶︎</span>
                <div className="leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-300">
                    Coming soon on
                  </div>
                  <div className="text-[11px] font-semibold">Google Play</div>
                </div>
              </div>
            </div>

          </div>
        </header>

        {/* Main content */}
        <main className="min-h-screen">{children}</main>

        {/* Global Footer */}
        <footer className="border-t border-slate-200 bg-white/90">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">

            {/* Footer left */}
            <div>
              <div className="text-sm font-semibold text-slate-800">
                Cookwise.ai
              </div>
              <div className="text-xs text-slate-500 mt-1">
                AI-powered meal and grocery optimization.
              </div>
              <div className="mt-3 text-[11px] text-slate-400">
                © {new Date().getFullYear()} Cookwise.ai. All rights reserved.
              </div>
            </div>

            {/* Footer links */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">

              {/* Legal */}
              <div className="flex flex-col gap-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Legal
                </div>
                <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-slate-900">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-slate-900">Cookies</Link>
                <Link href="/dpa" className="hover:text-slate-900">Data Processing Addendum</Link>
                <Link href="/api-terms" className="hover:text-slate-900">API Terms</Link>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Company
                </div>
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
