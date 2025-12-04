import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Cookwise.ai",
  description: "AI-powered grocery and meal optimization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">

        {/* ---------- TOP NAVIGATION ---------- */}
        <header className="border-b bg-white/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="text-lg font-semibold text-slate-800">
              Cookwise.ai
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-6 text-sm text-slate-600">
              <Link href="/partners" className="hover:text-slate-900">Partners</Link>
              <Link href="/developers" className="hover:text-slate-900">Developers</Link>
              <Link href="/contact" className="hover:text-slate-900">Contact</Link>
            </nav>
          </div>
        </header>

        {/* ---------- PAGE CONTENT ---------- */}
        <main>{children}</main>

        {/* ---------- CALAI-STYLE FOOTER ---------- */}
        <footer className="border-t bg-gradient-to-b from-white to-slate-50 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Branding */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800">Cookwise.ai</h3>
              <p className="text-slate-500 mt-1 text-sm">
                AI-powered grocery and meal optimization.
              </p>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-slate-500 hover:text-slate-700">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-slate-500 hover:text-slate-700">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-slate-500 hover:text-slate-700">Cookie Policy</Link></li>
                <li><Link href="/dpa" className="text-slate-500 hover:text-slate-700">Data Processing Agreement</Link></li>
                <li><Link href="/api-terms" className="text-slate-500 hover:text-slate-700">API Terms</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/partners" className="text-slate-500 hover:text-slate-700">Partners</Link></li>
                <li><Link href="/affiliates" className="text-slate-500 hover:text-slate-700">Affiliates</Link></li>
                <li><Link href="/branding" className="text-slate-500 hover:text-slate-700">Branding</Link></li>
                <li><Link href="/contact" className="text-slate-500 hover:text-slate-700">Contact</Link></li>
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t py-4 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Cookwise.ai. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
