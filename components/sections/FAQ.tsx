"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";
import { FAQ_ITEMS } from "@/lib/content";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14 md:py-24">
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow>Частые вопросы</Eyebrow>
            <h2 className="mt-5 font-bold tracking-tight text-balance text-[34px] md:text-[52px] leading-[1.02]">
              Ответы на всё, <br className="hidden md:block" />
              что обычно спрашивают родители
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
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5"
                  >
                    <span className="text-[15px] md:text-[16px] font-semibold text-ink leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 grid place-items-center size-7 rounded-full border transition-all duration-300",
                        isOpen
                          ? "bg-accent border-accent text-bg rotate-45"
                          : "border-border-2 text-muted",
                      )}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 text-[14px] leading-[1.65] text-ink-soft text-pretty">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
