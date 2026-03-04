export default function PrivacyPage() {
  const h2Style = { fontSize: "1.5rem", fontWeight: 700, color: "white", marginTop: "2.5rem", marginBottom: "1rem" };
  const pStyle = { marginBottom: "1rem", lineHeight: 1.7 };

  return (
    <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "4rem 1.5rem", color: "rgba(255,255,255,0.8)" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Privacy Policy</h1>
      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginBottom: "3rem" }}>Last updated: February 27, 2026</p>

      <h2 style={h2Style}>1. Introduction</h2>
      <p style={pStyle}>
        At Cookwise.ai (&ldquo;Cookwise&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), your privacy is important to us. This Privacy Policy describes how we collect, use, and protect your personal information when you use our websites, mobile applications, and related services (collectively, the &ldquo;Services&rdquo;).
      </p>

      <h2 style={h2Style}>2. Information We Collect</h2>
      <p style={{ ...pStyle, marginBottom: "0.5rem" }}>We may collect the following types of information:</p>
      <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", lineHeight: 1.8 }}>
        <li><strong style={{ color: "white" }}>Account information:</strong> Name, email address, and authentication credentials when you create an account.</li>
        <li><strong style={{ color: "white" }}>Pantry and preference data:</strong> Items you add to your pantry, dietary preferences, and saved recipes.</li>
        <li><strong style={{ color: "white" }}>Location data:</strong> Your ZIP code to match local store deals and flyer availability.</li>
        <li><strong style={{ color: "white" }}>Usage data:</strong> How you interact with the Services, including pages visited, features used, and actions taken.</li>
        <li><strong style={{ color: "white" }}>Device information:</strong> Device type, operating system, browser type, and unique device identifiers.</li>
      </ul>

      <h2 style={h2Style}>3. How We Use Your Information</h2>
      <p style={{ ...pStyle, marginBottom: "0.5rem" }}>We use your information to:</p>
      <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", lineHeight: 1.8 }}>
        <li>Provide, maintain, and improve the Services</li>
        <li>Match recipes to your local grocery deals and pantry items</li>
        <li>Generate personalized shopping lists and meal plans</li>
        <li>Send important service updates and notifications</li>
        <li>Analyze usage trends to enhance user experience</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 style={h2Style}>4. Data Sharing</h2>
      <p style={pStyle}>
        We do not sell your personal information. We may share data with trusted third-party service providers (such as hosting, analytics, and authentication providers) who assist us in operating the Services. These providers are contractually required to keep your data secure and use it only for the purposes we specify.
      </p>
      <p style={pStyle}>
        We may also share information when required by law, to protect our rights, or in connection with a merger, acquisition, or sale of assets.
      </p>

      <h2 style={h2Style}>5. Affiliate and Third-Party Links</h2>
      <p style={pStyle}>
        The Services may contain links to third-party retailers, delivery platforms, and affiliate partners. When you click these links, those third parties may collect information about you according to their own privacy policies. We encourage you to review the privacy policies of any third-party sites you visit through Cookwise.
      </p>

      <h2 style={h2Style}>6. Cookies and Tracking</h2>
      <p style={pStyle}>
        We use cookies and similar technologies to improve your experience, remember your preferences, and analyze how you use our Services. You can manage cookie preferences through your browser settings. For more details, see our Cookie Policy.
      </p>

      <h2 style={h2Style}>7. Data Security</h2>
      <p style={pStyle}>
        We implement industry-standard security measures to protect your personal information, including encryption in transit and at rest, secure authentication, and regular security audits. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 style={h2Style}>8. Data Retention</h2>
      <p style={pStyle}>
        We retain your personal information for as long as your account is active or as needed to provide you with the Services. You can request deletion of your account and associated data at any time by contacting us.
      </p>

      <h2 style={h2Style}>9. Your Rights</h2>
      <p style={{ ...pStyle, marginBottom: "0.5rem" }}>Depending on your location, you may have the right to:</p>
      <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", lineHeight: 1.8 }}>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to or restrict certain data processing</li>
        <li>Data portability (receive your data in a structured format)</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <p style={pStyle}>
        To exercise any of these rights, contact us at <strong style={{ color: "#34d399" }}>privacy@cookwise.ai</strong>.
      </p>

      <h2 style={h2Style}>10. Children&apos;s Privacy</h2>
      <p style={pStyle}>
        The Services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will take steps to delete it promptly.
      </p>

      <h2 style={h2Style}>11. Changes to This Policy</h2>
      <p style={pStyle}>
        We may update this Privacy Policy from time to time. When we make material changes, we will update the &ldquo;Last updated&rdquo; date above and may provide additional notice as required by law. Your continued use of the Services after any changes constitutes your acceptance of the updated policy.
      </p>

      <h2 style={h2Style}>12. Contact</h2>
      <p style={pStyle}>
        If you have questions about this Privacy Policy, contact us at:
        <br />
        <strong style={{ color: "#34d399" }}>privacy@cookwise.ai</strong>
      </p>
    </div>
  );
}
