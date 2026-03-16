import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account — Cookwise",
  description:
    "Learn how to permanently delete your Cookwise account and all associated data.",
};

export default function DeleteAccountPage() {
  const h2Style = {
    fontSize: "1.5rem",
    fontWeight: 700 as const,
    color: "white",
    marginTop: "2.5rem",
    marginBottom: "1rem",
  };
  const pStyle = { marginBottom: "1rem", lineHeight: 1.7 };

  return (
    <div
      style={{
        maxWidth: "48rem",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        color: "rgba(255,255,255,0.8)",
      }}
    >
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: 800,
          color: "white",
          marginBottom: "1.5rem",
        }}
      >
        Delete Your Account
      </h1>
      <p
        style={{
          fontSize: "0.875rem",
          color: "rgba(255,255,255,0.4)",
          marginBottom: "3rem",
        }}
      >
        Cookwise by Cookwise.ai
      </p>

      {/* ── How to delete ── */}
      <h2 style={h2Style}>How to Delete Your Account</h2>
      <p style={pStyle}>
        You can permanently delete your Cookwise account directly from the app.
        Follow these steps:
      </p>
      <ol
        style={{
          paddingLeft: "1.5rem",
          marginBottom: "1.5rem",
          lineHeight: 2,
        }}
      >
        <li>
          Open the <strong style={{ color: "white" }}>Cookwise</strong> app on
          your device.
        </li>
        <li>
          Tap the{" "}
          <strong style={{ color: "white" }}>⚙️ Settings</strong> icon in the
          top-right corner of the Home screen.
        </li>
        <li>
          Scroll down to the bottom of the Settings screen.
        </li>
        <li>
          Tap{" "}
          <strong style={{ color: "#f87171" }}>Delete Account</strong>.
        </li>
        <li>
          Confirm the deletion when prompted. This action is{" "}
          <strong style={{ color: "#f87171" }}>irreversible</strong>.
        </li>
      </ol>

      {/* ── What gets deleted ── */}
      <h2 style={h2Style}>What Data Is Deleted</h2>
      <p style={pStyle}>
        When you delete your account, the following data is permanently removed:
      </p>
      <ul
        style={{
          paddingLeft: "1.5rem",
          marginBottom: "1.5rem",
          lineHeight: 1.8,
        }}
      >
        <li>
          <strong style={{ color: "white" }}>Account credentials</strong> —
          email address and authentication data
        </li>
        <li>
          <strong style={{ color: "white" }}>Profile information</strong> — name,
          dietary preferences, kitchen equipment, and household settings
        </li>
        <li>
          <strong style={{ color: "white" }}>Pantry data</strong> — all items
          you added to your digital pantry
        </li>
        <li>
          <strong style={{ color: "white" }}>Recipes</strong> — saved,
          favorited, and custom-created recipes
        </li>
        <li>
          <strong style={{ color: "white" }}>Meal plans</strong> — all current
          and historical meal plans
        </li>
        <li>
          <strong style={{ color: "white" }}>Shopping lists</strong> — all
          generated and saved shopping lists
        </li>
        <li>
          <strong style={{ color: "white" }}>Health &amp; cycle data</strong> —
          any health tracking or cycle-sync information
        </li>
        <li>
          <strong style={{ color: "white" }}>Usage &amp; analytics data</strong>{" "}
          — interaction history, savings tracking, and cooking streaks
        </li>
      </ul>

      {/* ── Retention ── */}
      <h2 style={h2Style}>Data Retention</h2>
      <p style={pStyle}>
        Account deletion is processed immediately. All personal data is
        permanently deleted from our systems within{" "}
        <strong style={{ color: "white" }}>30 days</strong> of your request.
        During this period, anonymized and aggregated analytics data may be
        retained but cannot be linked back to your account.
      </p>

      {/* ── Alternative contact ── */}
      <h2 style={h2Style}>Need Help?</h2>
      <p style={pStyle}>
        If you are unable to access the app or need assistance deleting your
        account, you can also request deletion by emailing us at:
      </p>
      <p style={{ ...pStyle, fontSize: "1.125rem" }}>
        <strong style={{ color: "#34d399" }}>privacy@cookwise.ai</strong>
      </p>
      <p style={pStyle}>
        Please include the email address associated with your Cookwise account.
        We will process your request within 5 business days and send a
        confirmation once complete.
      </p>
    </div>
  );
}
