import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  childAge?: string;
  message?: string;
  source?: string;
};

/**
 * POST /api/lead — receives a callback request from the site.
 *
 * Configuration:
 *   env LEAD_WEBHOOK_URL  — POST endpoint (Telegram bot, n8n, Make.com, etc).
 *                           Body: JSON of the lead payload + meta.
 *   env LEAD_TELEGRAM_TOKEN + LEAD_TELEGRAM_CHAT_ID — direct Telegram delivery.
 *
 * If neither env is set, the lead is logged to server console only —
 * useful for testing before backend is wired.
 */
export async function POST(request: Request) {
  let data: LeadPayload;
  try {
    data = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const phone = (data.phone ?? "").replace(/\D/g, "");
  if (phone.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Укажите корректный номер телефона" },
      { status: 400 },
    );
  }

  const meta = {
    receivedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent")?.slice(0, 200) ?? "",
    referer: request.headers.get("referer") ?? "",
  };

  const payload = { ...data, phone, meta };

  // Strategy 1: forward to a webhook (n8n / Make / Zapier / your own bot)
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("[lead] webhook failed:", err);
    }
  }

  // Strategy 2: direct Telegram bot
  const tgToken = process.env.LEAD_TELEGRAM_TOKEN;
  const tgChat = process.env.LEAD_TELEGRAM_CHAT_ID;
  if (tgToken && tgChat) {
    const text = [
      "🆕 *Заявка с сайта Ньютон*",
      "",
      `*Имя:* ${data.name ?? "—"}`,
      `*Телефон:* +${phone}`,
      `*Возраст ребёнка:* ${data.childAge ?? "—"}`,
      `*Источник:* ${data.source ?? "callback-form"}`,
      data.message ? `*Сообщение:* ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    try {
      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          chat_id: tgChat,
          text,
          parse_mode: "Markdown",
        }),
      });
    } catch (err) {
      console.error("[lead] telegram failed:", err);
    }
  }

  if (!webhookUrl && !(tgToken && tgChat)) {
    console.log("[lead] received (no backend configured):", payload);
  }

  return NextResponse.json({ ok: true });
}
