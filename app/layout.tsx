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
        {/* Reduced py-6 to py-4 to tighten the spacing at the top */}
        <header className="w-full z-50 bg-[#FDFBF6]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* LOGO */}
            {/* Reduced h-20 to h-12 so the header isn't huge */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Cookwise.ai"
                width={150} 
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* NAV */}
            {/* Increased text-sm to text-base and added Manage Subscription */}
            <nav className="hidden md:flex items-center gap-8 text-base font-bold text-slate-800">
              <Link href="#how-it-works" className="hover:text-slate-600 transition-colors">How it works</Link>
              <Link href="#features" className="hover:text-slate-600 transition-colors">Features</Link>
              <Link href="#pricing" className="hover:text-slate-600 transition-colors">Pricing</Link>
              <Link href="#manage" className="hover:text-slate-600 transition-colors">Manage Subscription</Link>
            </nav>

            {/* STORE BADGES */}
            {/* Increased h-9 to h-11 to match Cal.ai's larger button style */}
            <div className="hidden sm:flex items-center gap-3">
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image
                  src="/appstore.png"
                  alt="Download on the App Store"
                  width={140}
                  height={45}
                  className="h-11 w-auto"
                />
              </Link>
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image
                  src="/googleplay.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={45}
                  className="h-11 w-auto"
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
