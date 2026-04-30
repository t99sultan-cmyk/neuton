"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/utils";

export function PromoBanner() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 md:p-14 lg:p-16 text-ink bg-gradient-to-br from-[#1A1410] via-surface-2 to-surface border border-accent/25">
          <div
            className="absolute -top-40 -right-32 size-[480px] rounded-full opacity-40 blur-[100px]"
            style={{ background: "radial-gradient(closest-side, #E8B589, transparent)" }}
            aria-hidden
          />
          <div
            className="absolute -bottom-32 -left-32 size-[380px] rounded-full opacity-25 blur-[100px]"
            style={{ background: "radial-gradient(closest-side, #D4A86A, transparent)" }}
            aria-hidden
          />

          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-bold border border-accent/30">
                <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
                Только до пятницы
              </div>

              <h2 className="mt-5 font-bold tracking-tight text-balance text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.02]">
                Диагностика {formatPrice(5000)} ₸{" "}
                <br className="hidden md:block" />
                вместо{" "}
                <span className="text-muted line-through font-semibold">
                  {formatPrice(10000)} ₸
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] sm:text-[16px] md:text-[17px] leading-[1.55] text-ink-soft text-pretty">
                Получите индивидуальный маршрут коррекции по специальной цене. Места ограничены —
                записывайтесь, пока действует акция.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-2.5">
                <LinkButton
                  href={buildWhatsAppLink(WA_MESSAGES.promoDiagnostic)}
                  target="_blank"
                  rel="noopener"
                  variant="primary"
                  size="lg"
                >
                  Записаться по акции
                  <ArrowRight className="size-4" />
                </LinkButton>
                <LinkButton
                  href={buildWhatsAppLink(WA_MESSAGES.generalInquiry)}
                  target="_blank"
                  rel="noopener"
                  variant="ghost"
                  size="lg"
                >
                  <MessageCircle className="size-4" />
                  Сначала задать вопрос
                </LinkButton>
              </div>
            </div>

            <div className="lg:justify-self-end w-full lg:w-auto">
              <div className="rounded-3xl glass p-6 md:p-7 shadow-app-lg">
                <CountdownTimer variant="default" tone="ink" />
                <p className="mt-5 text-[12.5px] text-muted leading-snug">
                  После окончания таймера цена вернётся к {formatPrice(10000)} ₸. Акция обновляется
                  каждую пятницу в 23:59.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
