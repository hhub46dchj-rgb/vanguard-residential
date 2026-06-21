export interface LeadEmail {
  type: string;
  subject: string;
  rows: Array<{ label: string; value: string }>;
}

function renderHtml({ type, rows }: LeadEmail): string {
  const rowsHtml = rows
    .filter((r) => r.value && r.value.trim() !== "")
    .map(
      (r) =>
        `<tr><td style="padding:6px 0;color:#64748b;font-size:13px;width:38%;vertical-align:top">${escapeHtml(r.label)}</td>` +
        `<td style="padding:6px 0;color:#0b1628;font-size:14px;font-weight:600;vertical-align:top">${escapeHtml(r.value)}</td></tr>`,
    )
    .join("");

  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto">
    <div style="background:#0b1628;padding:20px 24px;border-radius:12px 12px 0 0">
      <div style="color:#10b981;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase">Vanguard Residential Acquisitions</div>
      <div style="color:#fff;font-size:20px;font-weight:700;margin-top:4px">${escapeHtml(type)}</div>
    </div>
    <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:8px 24px">
      <table style="width:100%;border-collapse:collapse">${rowsHtml}</table>
    </div>
    <p style="color:#94a3b8;font-size:12px;margin-top:16px">This lead was submitted from the Vanguard Residential Acquisitions website.</p>
  </div>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendLeadEmail(email: LeadEmail): Promise<{ delivered: boolean; skipped: boolean }> {
  const apiKey = process.env.WEB3FORMS_KEY;
  const to = process.env.LEADS_INBOX;

  if (!apiKey) {
    console.log("\n──────────────────────────────────────────────");
    console.log(`📧 [EMAIL SKIPPED — Web3Forms not configured] ${email.type}`);
    console.log(`   To: ${to}  ·  Subject: ${email.subject}`);
    console.table(email.rows.filter((r) => r.value?.trim()));
    console.log("──────────────────────────────────────────────\n");
    return { delivered: false, skipped: true };
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: apiKey,
      subject: email.subject,
      from_name: "Vanguard Residential Acquisitions",
      to: to,
      html: renderHtml(email),
    }),
  });

  const data = await res.json();
  if (!data.success) {
    console.error("Web3Forms error:", data);
    return { delivered: false, skipped: false };
  }

  return { delivered: true, skipped: false };
}
