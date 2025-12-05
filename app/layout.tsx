import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookwise.ai",
  description: "Smart grocery shopping with automatic deal-aware carts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#FDFBF6] via-[#F7FAFF] to-[#F3F5FF] text-slate-900">

        {/* HEADER */}
        <header className="w-full z-50 bg-[#FDFBF6]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Cookwise.ai"
                width={150} 
                height={50}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* NAV */}
            <nav className="hidden md:flex items-center gap-8 text-base font-bold text-slate-800">
              <Link href="#how-it-works" className="hover:text-slate-600 transition-colors">How it works</Link>
              <Link href="#features" className="hover:text-slate-600 transition-colors">Features</Link>
              <Link href="#pricing" className="hover:text-slate-600 transition-colors">Pricing</Link>
              <Link href="#manage" className="hover:text-slate-600 transition-colors">Manage Subscription</Link>
            </nav>

            {/* STORE BADGES */}
            {/* Increased spacing to gap-5 and forced explicit height of h-[42px] for perfect matching */}
            <div className="hidden sm:flex items-center gap-5">
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image
                  src="/appstore.png"
                  alt="Download on the App Store"
                  width={135}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </Link>
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image
                  src="/googleplay.png"
                  alt="Get it on Google Play"
                  width={135}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
