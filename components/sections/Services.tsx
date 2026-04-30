"use client";

import { ChevronRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tilt3D } from "@/components/effects/Tilt3D";
import { ANIM_ICONS } from "@/components/icons/AnimatedServiceIcons";
import { SERVICES } from "@/lib/content";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16">
      <Container>
        <div>
          <Eyebrow>Услуги</Eyebrow>
          <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.05]">
            Шесть направлений — <span className="text-accent">один результат</span>
          </h2>
          <p className="mt-3 text-[14.5px] leading-[1.55] text-ink-soft">
            Подбираем программу индивидуально после диагностики. Только то, что действительно
            нужно ребёнку.
          </p>
        </div>

        <div className="mt-8 app-list">
          {SERVICES.map((s) => {
            const Icon = ANIM_ICONS[s.iconKey];
            const isHero = !!s.highlight;
            return (
              <Tilt3D key={s.id} max={6}>
                <a
                  href={buildWhatsAppLink(WA_MESSAGES[s.whatsappKey])}
                  target="_blank"
                  rel="noopener"
                  className={cn(
                    "group relative flex flex-col p-5 sm:p-6 rounded-3xl overflow-hidden card-hover-lift h-full",
                    isHero
                      ? "bg-gradient-to-br from-accent/25 via-surface-2 to-surface border border-accent/30 hover:border-accent/55"
                      : "card-elevated hover:border-border-strong",
                  )}
                >
                  {isHero && (
                    <div
                      className="absolute -top-32 -right-32 size-72 rounded-full opacity-50 blur-[80px]"
                      style={{ background: "radial-gradient(closest-side, #E8B589, transparent)" }}
                      aria-hidden
                    />
                  )}

                  <div className="relative flex items-start gap-4">
                    <span
                      className={cn(
                        "shrink-0 grid place-items-center rounded-2xl border halo-pulse",
                        isHero
                          ? "size-12 bg-accent/20 border-accent/40 text-accent"
                          : "size-11 bg-surface-2 border-border-2 text-ink",
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        className={cn(
                          "font-bold leading-tight tracking-tight",
                          isHero ? "text-[22px] sm:text-[26px]" : "text-[18px]",
                        )}
                      >
                        {s.title}
                      </h3>
                      {isHero ? (
                        <span className="shrink-0 inline-flex items-center rounded-full bg-accent text-[#1A0F08] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                          −50%
                        </span>
                      ) : (
                        <ChevronRight className="size-5 text-muted shrink-0 mt-0.5 group-hover:text-ink transition-colors" />
                      )}
                    </div>
                    <p
                      className={cn(
                        "mt-1.5 leading-snug",
                        isHero ? "text-[14px] text-ink-soft" : "text-[13px] text-muted",
                      )}
                    >
                      {s.short}
                    </p>
                  </div>
                </div>

                {isHero && (
                  <div className="relative mt-5 flex items-baseline gap-2.5 flex-wrap">
                    <span className="font-bold text-[36px] sm:text-[42px] tracking-tight tabular leading-none">
                      5 000 <span className="text-[18px] text-muted">₸</span>
                    </span>
                    <span className="text-muted line-through text-[14px] tabular">
                      10 000 ₸
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-bg/40 backdrop-blur border border-border-2 px-3 py-1.5 text-[12px] font-semibold text-ink">
                      Записаться
                      <ChevronRight className="size-3.5" />
                    </span>
                  </div>
                )}

                <div className="relative mt-4 flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 rounded-full bg-bg/60 border border-border px-2.5 py-1 text-[11.5px] text-muted">
                    <Clock className="size-3" />
                    {s.duration}
                  </span>
                  {s.forWhom.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-bg/60 border border-border px-2.5 py-1 text-[11.5px] text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </a>
              </Tilt3D>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
