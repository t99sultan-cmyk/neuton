"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppLink, PHONE_DISPLAY, WA_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const LOGO_URL = "https://taplink.st/a/b/5/0/e/cc76ee.jpg";

const NAV = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#pricing", label: "Цены" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "glass" : "bg-transparent",
        )}
      >
        <Container className="flex h-16 md:h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative size-9 rounded-xl overflow-hidden ring-1 ring-border-strong">
              <Image
                src={LOGO_URL}
                alt="Логотип Ньютон"
                fill
                sizes="36px"
                className="object-cover"
                unoptimized
              />
            </span>
            <span>
              <span className="block font-bold text-[16px] tracking-tight leading-none">
                Ньютон
              </span>
              <span className="hidden sm:block mt-0.5 text-[10.5px] uppercase tracking-[0.16em] text-muted leading-none">
                Алматы · Открыто
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13.5px] text-ink-soft hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-[13.5px] text-ink-soft hover:text-ink transition-colors"
            >
              <Phone className="size-3.5" />
              <span className="tabular">{PHONE_DISPLAY}</span>
            </a>
            <LinkButton
              variant="primary"
              size="md"
              href={buildWhatsAppLink(WA_MESSAGES.promoDiagnostic)}
              target="_blank"
              rel="noopener"
            >
              Записаться
            </LinkButton>
          </div>

          <button
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center size-10 rounded-2xl border border-border-2 bg-surface text-ink"
          >
            {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </Container>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border">
          <Container className="py-3 flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-[15px] text-ink-soft hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
              className="py-3 flex items-center gap-2 text-[15px] text-ink-soft border-t border-border mt-1"
            >
              <Phone className="size-4" /> {PHONE_DISPLAY}
            </a>
            <LinkButton
              variant="primary"
              size="lg"
              href={buildWhatsAppLink(WA_MESSAGES.promoDiagnostic)}
              target="_blank"
              rel="noopener"
              className="mt-2 mb-2"
              onClick={() => setOpen(false)}
            >
              Записаться по акции
            </LinkButton>
          </Container>
        </div>
      )}
    </header>
  );
}
