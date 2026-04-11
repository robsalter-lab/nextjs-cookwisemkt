import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/stripe-connect/refresh?creator_id=xxx
 * 
 * If the onboarding link expired, redirect the creator to
 * re-generate a new one by calling create-account again.
 */
export async function GET(req: NextRequest) {
  const creatorId = req.nextUrl.searchParams.get('creator_id');
  
  return new NextResponse(
    `<!DOCTYPE html>
    <html>
    <head><title>Link Expired</title>
    <style>
      body { font-family: Inter, sans-serif; background: #060b18; color: #f1f5f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
      .card { text-align: center; max-width: 420px; padding: 2rem; }
      h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
      p { color: rgba(241,245,249,0.6); font-size: 0.9rem; line-height: 1.6; }
      button { margin-top: 1rem; padding: 0.75rem 2rem; border-radius: 0.75rem; border: none; background: #10b981; color: #fff; font-size: 0.9rem; font-weight: 700; cursor: pointer; }
    </style>
    </head>
    <body>
      <div class="card">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔄</div>
        <h1>Link Expired</h1>
        <p>Your Stripe onboarding link has expired. Click below to generate a new one.</p>
        <button onclick="retry()">Retry Setup</button>
      </div>
      <script>
        async function retry() {
          const res = await fetch('/api/stripe-connect/create-account', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ creator_id: '${creatorId || ''}' }),
          });
          const data = await res.json();
          if (data.url) window.location.href = data.url;
          else alert(data.error || 'Failed to generate link');
        }
      </script>
    </body>
    </html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}
