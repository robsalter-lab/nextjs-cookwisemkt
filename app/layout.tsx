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
    </body>
    </html>
  );
}
