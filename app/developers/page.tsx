import Link from "next/link";

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <p className="text-xs text-emerald-300 font-semibold mb-2">
          For technical partners & integrators
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Cookwise Integration Overview
        </h1>
        <p className="text-sm md:text-base text-slate-300 mb-8 max-w-3xl">
          This page provides a high-level overview of how Cookwise integrates
          with retailer APIs, affiliate links, and cart systems. Detailed
          documentation and sandbox credentials are shared with approved
          partners.
        </p>

        <div className="grid gap-6 md:grid-cols-2 text-sm">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-lg font-semibold mb-2">
              Deep-Link &amp; Affiliate Flows
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                Store selection and item lists are created inside our app, then
                normalized per partner.
              </li>
              <li>
                We generate outbound deep links (or API cart payloads) using
                partner-approved URL patterns or SDKs.
              </li>
              <li>
                Affiliate tracking is handled via network-provided parameters
                (Impact, CJ, etc.) or custom tracking templates.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-lg font-semibold mb-2">
              API Integration Principles
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>No scraping of partner sites.</li>
              <li>All catalog and pricing calls go through official APIs.</li>
              <li>
                We respect partner rate limits, caching rules, and attribution
                guidelines.
              </li>
              <li>
                Customer account, loyalty IDs, and payment are handled directly
                by the retailer&apos;s own systems.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-300">
          <h2 className="text-lg font-semibold mb-3">
            Getting Access to Technical Docs
          </h2>
          <p className="mb-3">
            For full API specs, sandbox access, and integration guides, we share
            a private documentation portal with approved partners.
          </p>
          <p className="mb-3">
            To request access, email{" "}
            <span className="font-semibold">partners@cookwise.ai</span> with:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Company name and primary contact</li>
            <li>Regions and store banners you support</li>
            <li>Whether you prefer API, deep link, or affiliate integrations</li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            For a non-technical overview, see our{" "}
            <Link href="/partners" className="underline">
              Partners page
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
