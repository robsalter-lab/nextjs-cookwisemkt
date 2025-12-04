export default function APITerms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-slate-800">
      <h1 className="text-4xl font-bold mb-6">API Terms of Use</h1>

      <h2 className="text-2xl font-semibold my-6">1. Acceptable Use</h2>
      <p>
        API access must not exceed rate limits or be used to create competing services.
      </p>

      <h2 className="text-2xl font-semibold my-6">2. Data Ownership</h2>
      <p>
        The user retains rights to their input data. Cookwise.ai retains rights to
        model-generated outputs and improvements.
      </p>

      <h2 className="text-2xl font-semibold my-6">3. Security Requirements</h2>
      <p>
        API keys must be stored securely and not shared publicly.
      </p>

      <h2 className="text-2xl font-semibold my-6">4. Termination</h2>
      <p>
        Abuse, scraping, or misuse may result in revoked access.
      </p>
    </div>
  );
}
