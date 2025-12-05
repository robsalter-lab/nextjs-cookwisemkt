// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookwise.ai – AI-powered grocery & meal optimization",
  description:
    "Cookwise.ai turns weekly grocery deals and your pantry into optimized meal plans, smart carts, and bigger savings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FDFBF6] text-slate-900 antialiased">
        
        {/* Transparent Floating Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Cookwise.ai logo"
                className="h-10 w-auto md:h-12"
              />
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-slate-900">
              <Link href="#hero" className="hover:opacity-70">Home</Link>
              <Link href="#how-it-works" className="hover:opacity-70">How it works</Link>
              <Link href="#features" className="hover:opacity-70">Features</Link>
              <Link href="#pricing" className="hover:opacity-70">Pricing</Link>
            </nav>

            {/* Store Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <img
                src="/appstore.png"
                alt="Download on the App Store"
                className="h-9 w-auto"
              />
              <img
                src="/googleplay.png"
                alt="Get it on Google Play"
                className="h-9 w-auto"
              />
            </div>

          </div>
        </header>

        {/* Adds space so header doesn't overlap content */}
        <div className="h-24"></div>

        <main className="min-h-screen">{children}</main>

      </body>
    </html>
  );
}
