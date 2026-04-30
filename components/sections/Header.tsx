"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Menu, X, Wifi, BatteryFull, Signal } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SoundToggle } from "@/components/SoundToggle";
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

function StatusBar() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }).format(now),
      );
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="hidden sm:flex items-center justify-between px-5 pt-2 pb-1 text-[11px] font-semibold text-ink-soft tabular">
      <span>{time ?? "··:··"}</span>
      <span className="flex items-center gap-1.5 text-ink-soft/85">
        <Signal className="size-3" />
        <Wifi className="size-3" />
        <BatteryFull className="size-3.5" />
      </span>
    </div>
  );
}

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
        <StatusBar />
        <Container className="flex h-14 sm:h-16 items-center justify-between">
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
              <span className="block font-bold text-[15px] tracking-tight leading-none">
                Ньютон
              </span>
              <span className="mt-0.5 block text-[10px] uppercase tracking-[0.16em] text-muted leading-none">
                Алматы · Открыто
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <SoundToggle className="hidden xs:grid sm:grid" />
            <LinkButton
              variant="primary"
              size="md"
              href={buildWhatsAppLink(WA_MESSAGES.promoDiagnostic)}
              target="_blank"
              rel="noopener"
              className="!h-10 !px-4 !text-[12.5px]"
            >
              Записаться
            </LinkButton>

            <button
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid place-items-center size-10 rounded-2xl border border-border-2 bg-surface text-ink"
            >
              {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </Container>
      </div>

      {open && (
        <div className="glass border-t border-border">
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
          </Container>
        </div>
      )}
    </header>
  );
}
