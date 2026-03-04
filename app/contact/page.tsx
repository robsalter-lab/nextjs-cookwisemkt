import Link from "next/link";

export default function ContactPage() {
  return (
    <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "4rem 1.5rem", color: "rgba(255,255,255,0.8)" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 800, color: "white", marginBottom: "0.75rem" }}>Contact Cookwise.ai</h1>
      <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem" }}>
        Have questions, feedback, or partnership ideas? We&apos;d love to hear from you.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {/* General Support */}
        <div style={{ borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>General Support</h2>
          <p style={{ lineHeight: 1.7 }}>For help with the app, billing, or account questions:</p>
          <p style={{ marginTop: "0.5rem" }}>Email: <strong style={{ color: "#34d399" }}>support@cookwise.ai</strong></p>
        </div>

        {/* Partnerships */}
        <div style={{ borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>Partnerships</h2>
          <p style={{ lineHeight: 1.7 }}>For retailers, delivery platforms, or affiliate networks:</p>
          <p style={{ marginTop: "0.5rem" }}>Email: <strong style={{ color: "#34d399" }}>partners@cookwise.ai</strong></p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>
            You can also learn more on our{" "}
            <Link href="/partners" style={{ color: "#6ee7b7", textDecoration: "underline" }}>Partners page</Link>.
          </p>
        </div>

        {/* Privacy */}
        <div style={{ borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>Privacy</h2>
          <p style={{ lineHeight: 1.7 }}>For privacy or data-protection questions:</p>
          <p style={{ marginTop: "0.5rem" }}>Email: <strong style={{ color: "#34d399" }}>privacy@cookwise.ai</strong></p>
        </div>
      </div>

      <p style={{ marginTop: "2.5rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
        We aim to respond to most messages within 1–2 business days.
      </p>
    </div>
  );
}
