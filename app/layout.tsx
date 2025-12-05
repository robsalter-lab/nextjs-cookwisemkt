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
          {/* Reverted py-4 back to py-6 to give the larger logo room to breathe */}
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

            {/* LOGO */}
            {/* Restored size: changed h-12 back to h-20 */}
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
