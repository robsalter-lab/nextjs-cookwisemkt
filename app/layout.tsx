// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookwise.ai",
  description: "AI-powered grocery & recipe optimizer helping you spend less and eat better.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {/* ---------- Top Navigation ---------- */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-900/70 bg-slate-950/80 backdrop-blur">
          <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-md bg-emerald-400" />
              <span className="font-semibold tracking-tight">Cookwise.ai</span>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-5 text-sm text-slate-300">
              <Link href="/partners" className="hover:text-slate-50 transition">
                Partners
              </Link>
              <Link href="/developers" className="hover:text-slate-50 transition">
                Developers
              </Link>
              <Link href="/contact" className="hover:text-slate-50 transition">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* ---------- Page Content ---------- */}
        <main className="pt-14">{children}</main>

        {/* ---------- Footer (Optional — You can remove if using a custom footer on homepage) ---------- */}
        <footer className="border-t border-slate-900/70 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-400 flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-col gap-1 text-slate-400">
              <span className="font-semibold text-slate-200">Cookwise.ai</span>
              <span>AI-powered meal and grocery optimization.</span>
            </div>

            <div className="flex flex-col gap-1">
              <Link href="/privacy" className="hover:text-slate-200 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-200 transition">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-slate-200 transition">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
