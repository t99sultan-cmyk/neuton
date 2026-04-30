import Image from "next/image";
import Link from "next/link";
import { Phone, Send } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import {
  PHONE_DISPLAY,
  PHONE_NUMBER,
  TELEGRAM_LINK,
} from "@/lib/whatsapp";
import { SOCIAL_LINKS, COMPANY } from "@/lib/content";

const LOGO_URL = "https://taplink.st/a/b/5/0/e/cc76ee.jpg";

const NAV = [
  { href: "/#services", label: "Услуги" },
  { href: "/#process", label: "Как работаем" },
  { href: "/#pricing", label: "Цены" },
  { href: "/#selftest", label: "Самопроверка" },
  { href: "/blog", label: "Блог" },
  { href: "/#faq", label: "Вопросы" },
  { href: "/#contact", label: "Контакты" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg-2">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative size-10 rounded-2xl overflow-hidden ring-1 ring-border-strong">
                <Image
                  src={LOGO_URL}
                  alt="Логотип Ньютон"
                  fill
                  sizes="40px"
                  className="object-cover"
                  unoptimized
                />
              </span>
              <span className="font-bold text-[18px] tracking-tight text-ink">
                {COMPANY.fullName}
              </span>
            </div>
            <p className="mt-4 text-[13.5px] leading-[1.6] text-muted max-w-md">
              Помогаем детям с особенностями развития расти спокойно и уверенно.
              Камеры онлайн в каждом зале, зона ожидания, прозрачные цены.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="grid place-items-center size-10 rounded-full border border-border-2 hover:border-border-strong hover:bg-surface transition-colors"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener"
                aria-label="TikTok"
                className="grid place-items-center size-10 rounded-full border border-border-2 hover:border-border-strong hover:bg-surface transition-colors"
              >
                <TikTokIcon className="size-4" />
              </a>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener"
                aria-label="Telegram"
                className="grid place-items-center size-10 rounded-full border border-border-2 hover:border-border-strong hover:bg-surface transition-colors"
              >
                <Send className="size-4" />
              </a>
              <a
                href={`tel:+${PHONE_NUMBER}`}
                aria-label="Позвонить"
                className="grid place-items-center size-10 rounded-full border border-border-2 hover:border-border-strong hover:bg-surface transition-colors"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted-2">
                Навигация
              </div>
              <ul className="mt-4 space-y-2.5">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13.5px] text-ink-soft hover:text-ink transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted-2">
                Связаться
              </div>
              <ul className="mt-4 space-y-2.5 text-[13.5px] text-ink-soft">
                <li>
                  <a
                    href={`tel:+${PHONE_NUMBER}`}
                    className="hover:text-ink transition-colors tabular"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="text-muted">{COMPANY.address}</li>
                <li className="text-muted">Пн–Сб · 09:00 — 19:00</li>
              </ul>
            </div>
          </div>

          {/* Юр. данные */}
          <div className="rounded-2xl bg-surface/40 border border-border p-4 text-[12px] leading-relaxed text-muted-2 space-y-1">
            <div>
              <strong className="text-ink-soft font-semibold">{COMPANY.legalName}</strong>{" "}
              · БИН {COMPANY.bin}
            </div>
            <div>
              <a
                href={SOCIAL_LINKS.offer}
                target="_blank"
                rel="noopener"
                className="hover:text-ink underline-offset-4 hover:underline"
              >
                Договор-оферта
              </a>{" "}
              · Политика конфиденциальности (TODO)
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-muted-2">
          <div>© {year} {COMPANY.fullName}. Все права защищены.</div>
          <div>{COMPANY.city}, Казахстан · neuton.kz</div>
        </div>
      </Container>
    </footer>
  );
}
