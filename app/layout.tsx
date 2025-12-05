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

        {/* -------------------------------------------------- */}
        {/* HEADER */}
        {/* -------------------------------------------------- */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

            {/* LOGO - MADE LARGER */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Cookwise.ai"
                // Increased width/height prop for better resolution
                width={100} 
                height={100}
                // Changed from h-14 to h-20 for a bigger logo
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* NAVIGATION */}
            <nav className="hidden sm:flex items-center gap-10 text-[15px] font-semibold text-slate-800">
              <Link href="#hero" className="hover:text-black transition">Home</Link>
              <Link href="#how-it-works" className="hover:text-black transition">How it works</Link>
              <Link href="#features" className="hover:text-black transition">Features</Link>
              <Link href="#pricing" className="hover:text-black transition">Pricing</Link>
            </nav>

            {/* STORE BADGES */}
            <div className="flex items-center gap-3">
              <Image
                src="/appstore.png"
                alt="Download on the App Store"
                width={130}
                height={40}
                className="w-[120px] lg:w-[130px] h-auto"
              />
              <Image
                src="/googleplay.png"
                alt="Get it on Google Play"
                width={130}
                height={40}
                className="w-[120px] lg:w-[130px] h-auto"
              />
            </div>
          </div>
        </header>

        {/* REMOVED the 'pt-28' here so the background flows seamlessly behind the header */}
        <main>{children}</main>
      </body>
    </html>
  );
}
