import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json({ error: 'Webhook not configured' }, { status: 500 });
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return Response.json({ error: 'Failed to save inquiry' }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Could not reach sheet webhook' }, { status: 502 });
  }
}
