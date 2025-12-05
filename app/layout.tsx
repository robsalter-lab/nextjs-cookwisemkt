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
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-[2px]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Cookwise.ai"
                width={100} 
                height={100}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* NAV */}
            <nav className="hidden sm:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <Link href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</Link>
              <Link href="#features" className="hover:text-slate-900 transition-colors">Features</Link>
              <Link href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
            </nav>

            {/* ACTION */}
            <div className="hidden sm:block">
              <button className="rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-lg shadow-emerald-500/10">
                Get App
              </button>
            </div>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
