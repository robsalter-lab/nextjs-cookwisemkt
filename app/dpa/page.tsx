export default function DPA() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-slate-800">
      <h1 className="text-3xl font-bold mb-6">Data Processing Addendum (DPA)</h1>
      <p className="text-sm text-slate-500 mb-12">GDPR Compliance Document</p>

      <p>
        This DPA forms part of the Cookwise.ai Terms of Service and governs how Cookwise.ai
        processes personal data on behalf of users located in the European Union.
      </p>

      <h2 className="text-2xl font-semibold my-6">1. Roles</h2>
      <p>
        The user is the <strong>Data Controller</strong> and Cookwise.ai is the
        <strong> Data Processor</strong>.
      </p>

      <h2 className="text-2xl font-semibold my-6">2. Processor Obligations</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Process data only under documented instructions</li>
        <li>Maintain confidentiality</li>
        <li>Implement security measures</li>
        <li>Assist with data subject rights</li>
      </ul>

      <h2 className="text-2xl font-semibold my-6">3. Sub-processors</h2>
      <p>
        Cookwise.ai may use third-party sub-processors such as AWS, Vercel, Postmark, or analytics providers.
      </p>

      <h2 className="text-2xl font-semibold my-6">4. Data Transfers</h2>
      <p>
        All transfers outside the EU follow Standard Contractual Clauses (SCCs).
      </p>

      <h2 className="text-2xl font-semibold my-6">5. Contact</h2>
      <p>Email: <strong>privacy@cookwise.ai</strong></p>
    </div>
  );
}
