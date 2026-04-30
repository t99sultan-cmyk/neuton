"use client";

import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";
import { InstagramIcon, TikTokIcon } from "@/components/ui/BrandIcons";
import { buildWhatsAppLink, PHONE_DISPLAY, PHONE_NUMBER, WA_MESSAGES } from "@/lib/whatsapp";
import { SOCIAL_LINKS } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Контакты</Eyebrow>
          <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.02]">
            Свяжитесь удобным способом
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.55] text-ink-soft">
            Самый быстрый канал — WhatsApp. Отвечаем в течение часа в рабочее время.
          </p>
        </div>

        <div
          className="mt-12 md:mt-16 grid gap-3"
        >
          <div className="card-elevated p-8 md:p-10 flex flex-col">
            <div className="space-y-5 flex-1">
              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="flex items-center gap-4 group"
              >
                <span className="grid place-items-center size-12 rounded-2xl bg-accent/12 border border-accent/25">
                  <Phone className="size-5 text-accent" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">
                    Телефон
                  </span>
                  <span className="block mt-0.5 font-bold text-[18px] text-ink group-hover:text-accent transition-colors tabular">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>

              <a
                href={buildWhatsAppLink(WA_MESSAGES.generalInquiry)}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 group"
              >
                <span className="grid place-items-center size-12 rounded-2xl bg-mint/15 border border-mint/30">
                  <MessageCircle className="size-5 text-mint" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">
                    WhatsApp
                  </span>
                  <span className="block mt-0.5 font-bold text-[18px] text-ink group-hover:text-mint transition-colors">
                    Написать в мессенджер
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="grid place-items-center size-12 rounded-2xl bg-surface-3 border border-border-2">
                  <MapPin className="size-5 text-ink-soft" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">
                    Адрес
                  </span>
                  <span className="block mt-0.5 font-bold text-[18px] text-ink">
                    Алматы
                  </span>
                  <span className="block text-[12px] text-muted-2">
                    Точный адрес отправляем после записи
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="grid place-items-center size-12 rounded-2xl bg-surface-3 border border-border-2">
                  <Clock className="size-5 text-ink-soft" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">
                    Часы работы
                  </span>
                  <span className="block mt-0.5 font-bold text-[18px] text-ink">
                    Пн–Сб · 09:00 — 19:00
                  </span>
                </span>
              </div>
            </div>

            <div className="my-7 h-px bg-border" />

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

            <LinkButton
              variant="primary"
              size="xl"
              href={buildWhatsAppLink(WA_MESSAGES.promoDiagnostic)}
              target="_blank"
              rel="noopener"
              className="mt-8 w-full"
            >
              Записаться по акции 5 000 ₸
            </LinkButton>
          </div>

          <div className="card-elevated overflow-hidden min-h-[420px] relative">
            <iframe
              title="Алматы — карта"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.85%2C43.20%2C76.99%2C43.28&layer=mapnik"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.85) brightness(0.85)" }}
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl glass p-4 shadow-app">
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">
                Где мы
              </div>
              <div className="mt-1 font-bold text-[19px] tracking-tight text-ink">
                Алматы, Казахстан
              </div>
              <div className="mt-1 text-[12.5px] text-muted">
                Парковка для гостей · Wi-Fi · Зона ожидания
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
