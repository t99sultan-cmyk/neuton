"use client";

import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";
import { InstagramIcon, TikTokIcon } from "@/components/ui/BrandIcons";
import { CallbackForm } from "@/components/CallbackForm";
import {
  buildWhatsAppLink,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  TELEGRAM_LINK,
  WA_MESSAGES,
} from "@/lib/whatsapp";
import { SOCIAL_LINKS, COMPANY } from "@/lib/content";
import { track } from "@/lib/analytics";

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16">
      <Container>
        <Eyebrow>Контакты</Eyebrow>
        <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.05]">
          Свяжитесь удобным способом
        </h2>
        <p className="mt-4 text-[14.5px] leading-[1.55] text-ink-soft">
          Самый быстрый канал — WhatsApp. Если удобнее — оставьте номер, мы
          перезвоним сами.
        </p>

        <div className="mt-8 grid gap-3">
          {/* Контакты карточкой */}
          <div className="card-elevated p-6 sm:p-7 flex flex-col">
            <div className="space-y-4">
              <a
                href={`tel:+${PHONE_NUMBER}`}
                onClick={() => track.ctaCall("contact")}
                className="flex items-center gap-3.5 group"
              >
                <span className="grid place-items-center size-11 rounded-2xl bg-accent/15 border border-accent/30 halo-pulse">
                  <Phone className="size-4.5 text-accent" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10.5px] uppercase tracking-[0.18em] font-semibold text-muted">
                    Телефон
                  </span>
                  <span className="block mt-0.5 font-bold text-[17px] text-ink group-hover:text-accent transition-colors tabular">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>

              <a
                href={buildWhatsAppLink(WA_MESSAGES.generalInquiry)}
                target="_blank"
                rel="noopener"
                onClick={() => track.ctaWhatsApp("contact", "general")}
                className="flex items-center gap-3.5 group"
              >
                <span className="grid place-items-center size-11 rounded-2xl bg-mint/15 border border-mint/30">
                  <MessageCircle className="size-4.5 text-mint" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10.5px] uppercase tracking-[0.18em] font-semibold text-muted">
                    WhatsApp
                  </span>
                  <span className="block mt-0.5 font-bold text-[17px] text-ink group-hover:text-mint transition-colors">
                    Написать в WhatsApp
                  </span>
                </span>
              </a>

              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener"
                onClick={() => track.ctaTelegram("contact")}
                className="flex items-center gap-3.5 group"
              >
                <span className="grid place-items-center size-11 rounded-2xl bg-[#229ED9]/15 border border-[#229ED9]/30">
                  <Send className="size-4.5 text-[#5BB8E2]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10.5px] uppercase tracking-[0.18em] font-semibold text-muted">
                    Telegram
                  </span>
                  <span className="block mt-0.5 font-bold text-[17px] text-ink group-hover:text-[#5BB8E2] transition-colors">
                    Написать в Telegram
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-3.5">
                <span className="grid place-items-center size-11 rounded-2xl bg-surface-3 border border-border-2">
                  <MapPin className="size-4.5 text-ink-soft" />
                </span>
                <span>
                  <span className="block text-[10.5px] uppercase tracking-[0.18em] font-semibold text-muted">
                    Адрес
                  </span>
                  <span className="block mt-0.5 font-bold text-[17px] text-ink">
                    {COMPANY.address}
                  </span>
                  <span className="block text-[12px] text-muted-2">
                    Парковка · Wi-Fi · Зона ожидания
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <span className="grid place-items-center size-11 rounded-2xl bg-surface-3 border border-border-2">
                  <Clock className="size-4.5 text-ink-soft" />
                </span>
                <span>
                  <span className="block text-[10.5px] uppercase tracking-[0.18em] font-semibold text-muted">
                    Часы работы
                  </span>
                  <span className="block mt-0.5 font-bold text-[17px] text-ink">
                    Пн–Сб · 09:00 — 19:00
                  </span>
                </span>
              </div>
            </div>

            <div className="my-6 h-px bg-border" />

            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">
                Соцсети
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-border-2 bg-surface text-[13.5px] text-ink hover:bg-surface-2 hover:border-border-strong transition-colors"
                >
                  <InstagramIcon className="size-4" /> Instagram
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-border-2 bg-surface text-[13.5px] text-ink hover:bg-surface-2 hover:border-border-strong transition-colors"
                >
                  <TikTokIcon className="size-4" /> TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Callback-форма */}
          <div className="card-elevated p-6 sm:p-7">
            <Eyebrow dot={false}>Перезвоним за час</Eyebrow>
            <h3 className="mt-4 font-bold text-[22px] tracking-tight leading-tight">
              Оставьте номер — позвоним сами
            </h3>
            <p className="mt-2 text-[13.5px] leading-[1.55] text-muted">
              Если неудобно писать первым — напишите имя и телефон. Перезвоним
              в рабочее время и согласуем диагностику.
            </p>
            <div className="mt-5">
              <CallbackForm source="contact" />
            </div>
          </div>

          {/* Карта */}
          <div className="card-elevated overflow-hidden min-h-[360px] relative">
            <iframe
              title="Алматы — карта"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.85%2C43.20%2C76.99%2C43.28&layer=mapnik"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.85) brightness(0.85)" }}
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl glass p-4 shadow-app">
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">
                Где мы
              </div>
              <div className="mt-1 font-bold text-[18px] tracking-tight text-ink">
                {COMPANY.address}
              </div>
              <div className="mt-1 text-[12.5px] text-muted">
                Точная точка появится на карте после публикации адреса.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
