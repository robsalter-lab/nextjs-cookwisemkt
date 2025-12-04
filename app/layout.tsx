import "./globals.css";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Cookwise.ai",
  description: "AI-powered grocery and meal optimization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased flex flex-col min-h-screen">

        {/* ================================
            TOP NAVIGATION
        =================================== */}
        <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="text-xl font-semibold">
              Cookwise.ai
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link href="/partners" className="hover:text-slate-900 transition">Partners</Link>
              <Link href="/developers" className="hover:text-slate-900 transition">Developers</Link>
              <Link href="/contact" className="hover:text-slate-900 transition">Contact</Link>
            </div>
          </nav>
        </header>

        {/* ================================
            PAGE CONTENT
        =================================== */}
        <main className="flex-grow">
          {children}
        </main>

        {/* ================================
            GLOBAL FOOTER (CalAI-Style)
        =================================== */}
        <footer className="w-full border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Column 1 – Logo + tagline */}
            <div>
              <h3 className="text-lg font-semibold">Cookwise.ai</h3>
              <p className="mt-2 text-sm text-slate-500">
                AI-powered meal and grocery optimization.
              </p>
            </div>

            {/* Column 2 – Legal */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Legal</h4>
              <ul className="flex flex-col gap-2 text-sm text-slate-600">
                <li><Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-slate-900">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-slate-900">Cookies</Link></li>
                <li><Link href="/dpa" className="hover:text-slate-900">Data Processing Addendum</Link></li>
                <li><Link href="/api-terms" className="hover:text-slate-900">API Terms</Link></li>
                <li><Link href="/branding" className="hover:text-slate-900">Branding</Link></li>
              </ul>
            </div>

            {/* Column 3 – Company */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Company</h4>
              <ul className="flex flex-col gap-2 text-sm text-slate-600">
                <li>
                  <Link href="/contact" className="hover:text-slate-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/affiliates" className="hover:text-slate-900">
                    Affiliates
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-slate-900">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Cookwise.ai. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
