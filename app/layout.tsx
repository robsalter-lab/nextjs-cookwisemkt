import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookwise.ai",
  description: "Smart grocery shopping with automatic deal-aware carts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#FDFBF6] via-[#F7FAFF] to-[#F3F5FF] text-slate-900">

        {/* ------------------------------------------------ */}
        {/* TRUE TRANSPARENT FLOATING HEADER LIKE CAL.AI */}
        {/* ------------------------------------------------ */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">

            {/* LOGO — MADE BIGGER */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Cookwise.ai"
                width={80}
                height={80}
                priority
                className="h-20 w-auto"
              />
            </Link>

            {/* NAV LINKS */}
            <nav className="hidden gap-10 text-sm font-medium text-slate-700 sm:flex">
              <Link href="#hero" className="hover:text-slate-900">Home</Link>
              <Link href="#how-it-works" className="hover:text-slate-900">How it works</Link>
              <Link href="#features" className="hover:text-slate-900">Features</Link>
              <Link href="#pricing" className="hover:text-slate-900">Pricing</Link>
            </nav>

            {/* STORE BUTTONS */}
            <div className="flex items-center gap-3">
              <Image
                src="/appstore.png"
                alt="App Store"
                width={130}
                height={40}
                className="w-[130px] h-auto"
              />
              <Image
                src="/googleplay.png"
                alt="Google Play"
                width={130}
                height={40}
                className="w-[130px] h-auto"
              />
            </div>

          </div>
        </header>

        {/* Prevent overlap */}
        <div className="pt-28">
          {children}
        </div>

      </body>
    </html>
  );
}
