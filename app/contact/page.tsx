import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Contact Cookwise.ai
        </h1>
        <p className="text-sm text-slate-300 mb-8">
          Have questions, feedback, or partnership ideas? We&apos;d love to hear
          from you.
        </p>

        <div className="space-y-6 text-sm text-slate-200">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold mb-2">General Support</h2>
            <p className="text-slate-300">
              For help with the app, billing, or account questions:
            </p>
            <p className="mt-2">
              Email:{" "}
              <span className="font-semibold">support@cookwise.ai</span>
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold mb-2">Partnerships</h2>
            <p className="text-slate-300">
              For retailers, delivery platforms, or affiliate networks:
            </p>
            <p className="mt-2">
              Email:{" "}
              <span className="font-semibold">partners@cookwise.ai</span>
            </p>
            <p className="mt-2 text-slate-400 text-xs">
              You can also learn more on our{" "}
              <Link href="/partners" className="underline">
                Partners page
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold mb-2">Privacy</h2>
            <p className="text-slate-300">
              For privacy or data-protection questions:
            </p>
            <p className="mt-2">
              Email:{" "}
              <span className="font-semibold">privacy@cookwise.ai</span>
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          We aim to respond to most messages within 1–2 business days.
        </p>
      </section>
    </main>
  );
}
