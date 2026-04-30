"use client";

declare global {
  interface Window {
    ym?: (id: number, action: string, ...rest: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const YANDEX_METRIKA_ID = 44929738;

/** Track a custom event in both Yandex.Metrika and GA4 (if installed). */
export function trackEvent(
  name: string,
  params: Record<string, string | number | boolean> = {},
): void {
  if (typeof window === "undefined") return;
  try {
    window.ym?.(YANDEX_METRIKA_ID, "reachGoal", name, params);
  } catch {}
  try {
    window.gtag?.("event", name, params);
  } catch {}
}

/** Convenience wrappers for common events. */
export const track = {
  ctaBook: (where: string) => trackEvent("cta_book", { placement: where }),
  ctaWhatsApp: (where: string, message: string) =>
    trackEvent("cta_whatsapp", { placement: where, message }),
  ctaTelegram: (where: string) => trackEvent("cta_telegram", { placement: where }),
  ctaCall: (where: string) => trackEvent("cta_call", { placement: where }),
  callbackSubmit: (where: string) =>
    trackEvent("callback_submit", { placement: where }),
  selfTestComplete: (score: number) =>
    trackEvent("selftest_complete", { score }),
  faqOpen: (question: string) =>
    trackEvent("faq_open", { question: question.slice(0, 60) }),
  serviceClick: (id: string) => trackEvent("service_click", { id }),
};
