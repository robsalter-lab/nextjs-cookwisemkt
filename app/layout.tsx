import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookwise — Save Money. Eat Better. Cook Smarter.",
  description:
    "Cookwise scans local grocery deals, matches them to 1,500+ recipes, and builds your smart shopping list — automatically. Download free on iOS.",
  openGraph: {
    title: "Cookwise — Save Money. Eat Better. Cook Smarter.",
    description:
      "Your AI-powered kitchen partner. Track deals, discover recipes, auto-build shopping lists.",
    url: "https://www.cookwise.ai",
    siteName: "Cookwise",
    type: "website",
  },
  verification: {
    google: "E4rZFHE35_MehzglSuMZ12oTMjEihjOnLsjhbeGmNIo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
