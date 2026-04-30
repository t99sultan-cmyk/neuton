"use client";

import {
  Stethoscope,
  Brain,
  MessageCircle,
  Hand,
  Activity,
  Sparkles,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SERVICES, type ServiceIconKey } from "@/lib/content";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const ICONS: Record<ServiceIconKey, React.ComponentType<{ className?: string }>> = {
  stethoscope: Stethoscope,
  brain: Brain,
  messageCircle: MessageCircle,
  hand: Hand,
  activity: Activity,
  sparkles: Sparkles,
};

// Bento grid placement (6-column grid on desktop)
// diagnostics: широкая 4-колоночная highlight карточка
// ava: 2 колонки
// speech: 3 колонки
// speech-massage: 3 колонки
// afk: 2 колонки
// sensory: 4 колонки
const SPAN: Record<string, string> = {
  diagnostics: "md:col-span-4",
  ava: "md:col-span-2",
  speech: "md:col-span-3",
  "speech-massage": "md:col-span-3",
  afk: "md:col-span-2",
  sensory: "md:col-span-4",
};

export function Services() {
  return (
    <section id="services" className="py-14 md:py-24">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
          <div>
            <Eyebrow>Услуги</Eyebrow>
            <h2 className="mt-5 font-bold tracking-tight text-balance text-[34px] md:text-[52px] leading-[1.02]">
              Шесть направлений —{" "}
              <span className="text-accent">один результат</span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.55] text-ink-soft max-w-md">
            Подбираем программу индивидуально после диагностики. Не заставляем брать
            «полный пакет» — только то, что действительно нужно ребёнку.
          </p>
        </div>

        <div className="mt-12 md:mt-16 bento-grid">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.iconKey];
            const isHero = !!s.highlight;
            return (
              <a
                key={s.id}
                href={buildWhatsAppLink(WA_MESSAGES[s.whatsappKey])}
                target="_blank"
                rel="noopener"
                className={cn(
                  "group relative flex flex-col p-6 md:p-7 rounded-[28px] overflow-hidden transition-all",
                  SPAN[s.id],
                  isHero
                    ? "bg-gradient-to-br from-accent/25 via-surface-2 to-surface border border-accent/30 hover:border-accent/55"
                    : "card-elevated hover:border-border-strong",
                )}
              >
                {isHero && (
                  <>
                    <div
                      className="absolute -top-32 -right-32 size-72 rounded-full opacity-50 blur-[80px]"
                      style={{ background: "radial-gradient(closest-side, #E8B589, transparent)" }}
                      aria-hidden
                    />
                    <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-accent text-[#1A0F08] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                      −50% по акции
                    </span>
                  </>
                )}

                <div className="relative flex items-start justify-between">
                  <span
                    className={cn(
                      "grid place-items-center rounded-2xl border",
                      isHero
                        ? "size-12 bg-accent/20 border-accent/40 text-accent"
                        : "size-11 bg-surface-2 border-border-2 text-ink",
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  {!isHero && (
                    <ArrowUpRight className="size-5 text-muted group-hover:text-ink transition-colors" />
                  )}
                </div>

                <h3
                  className={cn(
                    "relative mt-6 font-bold leading-tight tracking-tight",
                    isHero ? "text-[28px] md:text-[34px]" : "text-[22px]",
                  )}
                >
                  {s.title}
                </h3>
                <p
                  className={cn(
                    "relative mt-2 leading-snug",
                    isHero ? "text-[15.5px] text-ink-soft" : "text-[14px] text-muted",
                  )}
                >
                  {s.short}
                </p>

                {isHero ? (
                  <div className="relative mt-6 flex flex-wrap items-center gap-3">
                    <span className="font-bold text-[36px] tracking-tight tabular">
                      5 000 ₸
                    </span>
                    <span className="text-muted line-through text-[15px] tabular">
                      10 000 ₸
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-bg/40 backdrop-blur border border-border-2 px-3 py-1.5 text-[12px] font-semibold text-ink">
                      Записаться
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                ) : (
                  <p className="relative mt-3 text-[13.5px] text-ink-soft/85 leading-[1.6] line-clamp-3">
                    {s.description}
                  </p>
                )}

                <div className="relative mt-auto pt-5 flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-[12px] text-muted">
                    <Clock className="size-3.5" />
                    {s.duration}
                  </div>
                  {!isHero && (
                    <div className="flex flex-wrap gap-1.5 ml-auto">
                      {s.forWhom.slice(0, 1).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-bg/60 border border-border px-2.5 py-1 text-[11px] text-ink-soft"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
