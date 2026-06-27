import { NextRequest } from 'next/server';

// CAREERS_WEBHOOK_URL must point to a Google Apps Script web-app deployment.
//
// The Apps Script should:
//   1. Append a row to a "Careers Applications" sheet
//      (columns: Timestamp, Name, Email, Phone, Position, Cover Note)
//   2. Call MailApp.sendEmail() to forward the application to
//      siddhyatechnology@gmail.com with the resume as an attachment.
//
// See the Google Apps Script template in .env.local.example for the full script.

const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.CAREERS_WEBHOOK_URL ?? process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json({ error: 'Server not configured' }, { status: 500 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const name = (formData.get('fullName') as string | null)?.trim() ?? '';
  const email = (formData.get('email') as string | null)?.trim() ?? '';
  const phone = (formData.get('phone') as string | null)?.trim() ?? '';
  const position = (formData.get('position') as string | null)?.trim() ?? '';
  const coverNote = (formData.get('coverNote') as string | null)?.trim() ?? '';

  if (!name || !email || !phone || !position) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Convert resume to base64 so the Apps Script can attach it to the email.
  let resumeBase64 = '';
  let resumeFileName = '';
  const resumeFile = formData.get('resume');
  if (resumeFile instanceof File && resumeFile.size > 0) {
    if (resumeFile.size > MAX_FILE_BYTES) {
      return Response.json({ error: 'Resume must be under 5 MB' }, { status: 400 });
    }
    const buffer = await resumeFile.arrayBuffer();
    resumeBase64 = Buffer.from(buffer).toString('base64');
    resumeFileName = resumeFile.name;
  }

  const payload = {
    source: 'careers',
    timestamp: new Date().toISOString(),
    name,
    email,
    phone,
    position,
    coverNote,
    resumeBase64,
    resumeFileName,
  };

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error('Webhook responded', res.status, await res.text());
      return Response.json({ error: 'Failed to save application' }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Webhook fetch error', err);
    return Response.json({ error: 'Could not reach webhook' }, { status: 502 });
  }
}
