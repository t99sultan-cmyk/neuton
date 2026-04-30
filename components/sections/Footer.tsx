import Image from "next/image";
import { Phone } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { PHONE_DISPLAY, PHONE_NUMBER } from "@/lib/whatsapp";
import { SOCIAL_LINKS, COMPANY } from "@/lib/content";

const LOGO_URL = "https://taplink.st/a/b/5/0/e/cc76ee.jpg";

const NAV = [
  { href: "#about", label: "О центре" },
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Как работаем" },
  { href: "#pricing", label: "Цены" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contact", label: "Контакты" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg-2">
      <Container className="py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-10 lg:gap-16">
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
            <p className="mt-5 text-[14px] leading-[1.6] text-muted max-w-md">
              Помогаем детям с особенностями развития расти спокойно и уверенно.
              Прямые трансляции занятий, сертифицированные специалисты, прозрачные цены.
            </p>
            <div className="mt-7 flex gap-2">
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
                href={`tel:+${PHONE_NUMBER}`}
                aria-label="Позвонить"
                className="grid place-items-center size-10 rounded-full border border-border-2 hover:border-border-strong hover:bg-surface transition-colors"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted-2">
              Навигация
            </div>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[14px] text-ink-soft hover:text-ink transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted-2">
              Связаться
            </div>
            <ul className="mt-5 space-y-3 text-[14px] text-ink-soft">
              <li>
                <a
                  href={`tel:+${PHONE_NUMBER}`}
                  className="hover:text-ink transition-colors tabular"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="text-muted">{COMPANY.city}, Казахстан</li>
              <li className="text-muted">Пн–Сб · 09:00 — 19:00</li>
              <li className="pt-2">
                <a
                  href={SOCIAL_LINKS.offer}
                  target="_blank"
                  rel="noopener"
                  className="text-muted hover:text-ink underline-offset-4 hover:underline"
                >
                  Договор-оферта
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-[12px] text-muted-2">
          <div>© {year} {COMPANY.fullName}. Все права защищены.</div>
          <div>Алматы, Казахстан · neuton.kz</div>
        </div>
      </Container>
    </footer>
  );
}
