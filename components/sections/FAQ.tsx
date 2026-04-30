"use client";

import { useState } from "react";
import { Plus, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";
import { FAQ_ITEMS } from "@/lib/content";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-16">
      <Container>
        <div className="grid gap-10">
          <div>
            <Eyebrow>Частые вопросы</Eyebrow>
            <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.05]">
              Ответы на всё, что обычно спрашивают родители
            </h2>
            <p className="mt-5 text-[14.5px] leading-[1.55] text-ink-soft">
              Не нашли свой вопрос? Напишите нам в WhatsApp — отвечаем в течение часа в
              рабочее время.
            </p>
            <LinkButton
              variant="ghost"
              size="lg"
              href={buildWhatsAppLink(WA_MESSAGES.generalInquiry)}
              target="_blank"
              rel="noopener"
              className="mt-6"
              onClick={() => track.ctaWhatsApp("faq", "general")}
            >
              <MessageCircle className="size-4" />
              Задать свой вопрос
            </LinkButton>
          </div>

          <ul className="space-y-2">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={item.question}
                  className={cn(
                    "rounded-2xl border transition-colors",
                    isOpen
                      ? "card-elevated border-border-strong"
                      : "bg-surface/60 border-border hover:border-border-2",
                  )}
                >
                  <button
                    onClick={() => {
                      const next = isOpen ? null : i;
                      setOpen(next);
                      if (next !== null) track.faqOpen(item.question);
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-start justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5"
                  >
                    <span className="text-[15px] md:text-[16px] font-semibold text-ink leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 grid place-items-center size-7 rounded-full border transition-all duration-300",
                        isOpen
                          ? "bg-accent border-accent text-bg rotate-45 scale-110"
                          : "border-border-2 text-muted",
                      )}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  {/* Pure-CSS collapse via grid-template-rows trick — no framer-motion */}
                  <div
                    id={`faq-panel-${i}`}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                    aria-hidden={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-[14px] leading-[1.65] text-ink-soft text-pretty">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
