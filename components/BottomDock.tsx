"use client";

import { useEffect, useState } from "react";
import { Home, Sparkles, ListOrdered, MessageCircle, Tag } from "lucide-react";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type DockItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const ITEMS: DockItem[] = [
  { href: "#top", label: "Главная", icon: Home },
  { href: "#services", label: "Услуги", icon: Sparkles },
  { href: "#pricing", label: "Цены", icon: Tag },
  { href: "#faq", label: "Вопросы", icon: ListOrdered },
];

const SECTIONS = ["top", "services", "pricing", "faq"];

export function BottomDock() {
  const [active, setActive] = useState<string>("top");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 flex justify-center pointer-events-none dock-safe",
        "transition-[opacity,transform] duration-300 ease-out will-change-[opacity,transform]",
        scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full",
      )}
      aria-hidden={!scrolled}
    >
      <div
        className={cn(
          "pointer-events-auto flex items-center gap-1 rounded-[24px] sm:rounded-[28px] glass shadow-app-lg",
          "p-1 sm:p-1.5",
          "mx-3 mb-3 max-w-[calc(100vw-24px)]",
        )}
      >
        {ITEMS.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = active === sectionId;
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={cn(
                "flex items-center justify-center gap-2 rounded-[20px] sm:rounded-[22px] transition-all",
                "h-11 sm:h-11",
                isActive
                  ? "bg-ink text-bg shadow-app px-3 sm:px-4"
                  : "text-ink-soft hover:bg-surface-2 px-2.5 sm:px-3",
              )}
            >
              <Icon className="size-[18px] shrink-0" />
              <span
                className={cn(
                  "text-[12.5px] sm:text-[13px] font-semibold tracking-tight",
                  isActive ? "block" : "hidden md:block",
                )}
              >
                {item.label}
              </span>
            </a>
          );
        })}

        <span className="mx-0.5 sm:mx-1 h-7 w-px bg-border shrink-0" aria-hidden />

        <a
          href={buildWhatsAppLink(WA_MESSAGES.promoDiagnostic)}
          target="_blank"
          rel="noopener"
          onClick={() => track.ctaWhatsApp("dock", "promo")}
          className={cn(
            "btn-base btn-primary",
            "h-11 px-3 sm:px-5",
            "text-[12.5px] sm:text-[13.5px]",
          )}
        >
          <MessageCircle className="size-4 shrink-0" />
          <span className="hidden sm:inline">Записаться</span>
          <span className="sm:hidden">5 000 ₸</span>
        </a>
      </div>
    </div>
  );
}
