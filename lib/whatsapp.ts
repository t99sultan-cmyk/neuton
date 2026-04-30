export const PHONE_NUMBER = "77071989703";
export const PHONE_DISPLAY = "+7 (707) 198-97-03";
// TODO: заменить на реальный username Telegram
export const TELEGRAM_USERNAME = "neuton_almaty";
export const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;

export function buildWhatsAppLink(message: string): string {
  return `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  promoDiagnostic:
    "Здравствуйте! Хочу записаться на диагностику по акции за 5 000 ₸. Подскажите, пожалуйста, ближайшее свободное время.",
  generalInquiry:
    "Здравствуйте! Хочу узнать подробнее об услугах центра «Ньютон».",
  consultation:
    "Здравствуйте! Хочу записаться на консультацию специалиста центра «Ньютон».",
  ava: "Здравствуйте! Интересует АВА-терапия для ребёнка.",
  speech: "Здравствуйте! Интересуют занятия с логопедом-дефектологом.",
  speechMassage: "Здравствуйте! Интересует логопедический массаж.",
  afk: "Здравствуйте! Интересуют занятия по АФК.",
  sensory: "Здравствуйте! Интересует сенсорная интеграция для ребёнка.",
} as const;

export type WhatsAppMessageKey = keyof typeof WA_MESSAGES;
