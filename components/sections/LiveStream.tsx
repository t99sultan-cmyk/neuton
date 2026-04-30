"use client";

import { Video, Wifi, Eye, ShieldCheck, Sofa, Coffee } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LiteYouTube } from "@/components/effects/LiteYouTube";

const FEATURES = [
  { icon: Video, title: "Камеры в каждом зале", text: "АВА, логопед, сенсорная — всё под наблюдением." },
  { icon: Wifi, title: "Любое устройство", text: "Смартфон, планшет, ноутбук — где удобно." },
  { icon: Eye, title: "Реальное время", text: "Без записей и монтажа — что вижу, то и есть." },
  { icon: ShieldCheck, title: "Защищённый доступ", text: "Персональная ссылка, видите только своего ребёнка." },
];

const YOUTUBE_ID = "aDavJmA5Ocs";

export function LiveStream() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] card-elevated shadow-app-lg p-6 sm:p-10 md:p-12">
          <div
            className="absolute -top-40 -right-40 size-[520px] rounded-full opacity-30 blur-[110px]"
            style={{ background: "radial-gradient(closest-side, #E8B589, transparent)" }}
            aria-hidden
          />
          <div
            className="absolute -bottom-40 -left-32 size-[420px] rounded-full opacity-25 blur-[110px]"
            style={{ background: "radial-gradient(closest-side, #A8D9BC, transparent)" }}
            aria-hidden
          />

          <div className="relative grid gap-10 items-center">
            <div>
              <Eyebrow>Главное отличие</Eyebrow>
              <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.02]">
                Вы видите, как идёт занятие.{" "}
                <span className="shimmer-text">Онлайн или из зоны ожидания.</span>
              </h2>
              <p className="mt-6 text-[16.5px] leading-[1.55] text-ink-soft text-pretty">
                В каждом зале установлены камеры. Заходите со смартфона по персональной
                ссылке — или приходите в наш центр и наблюдайте за занятием прямо из
                комфортной зоны ожидания. Без догадок «как там мой ребёнок».
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-3 p-3 rounded-2xl bg-bg/40 border border-border card-hover-lift"
                  >
                    <span className="shrink-0 grid place-items-center size-9 rounded-xl bg-accent/15 border border-accent/30">
                      <f.icon className="size-4 text-accent" />
                    </span>
                    <div>
                      <div className="font-semibold text-[14px] text-ink">{f.title}</div>
                      <div className="mt-0.5 text-[12.5px] text-muted leading-snug">
                        {f.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockup with vertical video */}
            <div className="relative flex justify-center pt-2">
              <div className="relative w-[230px] sm:w-[280px] aspect-[9/19] rounded-[40px] sm:rounded-[44px] bg-black border-[8px] sm:border-[10px] border-[#0A0F0E] shadow-app-lg overflow-hidden">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-[20px] bg-black z-20" />

                <div className="absolute inset-0">
                  <LiteYouTube videoId={YOUTUBE_ID} title="Видео центра Ньютон" />
                </div>

                <div className="pointer-events-none absolute top-12 left-3 right-3 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-danger/95 px-2 py-0.5 text-[10px] font-bold text-white tracking-wider">
                    <span className="size-1.5 rounded-full bg-white animate-pulse-soft" />
                    LIVE
                  </span>
                  <span className="text-[10px] text-white/80 font-medium tabular bg-black/40 backdrop-blur px-1.5 py-0.5 rounded">
                    Зал 2
                  </span>
                </div>

                <div className="pointer-events-none absolute bottom-4 left-3 right-3 rounded-2xl bg-black/55 backdrop-blur-sm p-3 z-10">
                  <div className="text-[11px] text-white/90 font-semibold">
                    Занятие · Айгуль А.
                  </div>
                  <div className="mt-0.5 text-[10px] text-white/55">
                    Логопедия · 35 / 45 мин
                  </div>
                </div>
              </div>
            </div>

            {/* Зона ожидания — новая премиум-карточка */}
            <div className="relative grid sm:grid-cols-[auto_1fr] gap-4 p-5 sm:p-6 rounded-[24px] bg-gradient-to-br from-mint/15 via-surface-2 to-surface border border-mint/25 card-hover-lift">
              <div className="flex sm:flex-col gap-3">
                <span className="grid place-items-center size-12 rounded-2xl bg-mint/20 border border-mint/40">
                  <Sofa className="size-5 text-mint" />
                </span>
                <span className="grid place-items-center size-12 rounded-2xl bg-mint/15 border border-mint/30">
                  <Coffee className="size-5 text-mint" />
                </span>
              </div>
              <div>
                <div className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-mint">
                  Зона ожидания · Офлайн
                </div>
                <h3 className="mt-1.5 font-bold text-[20px] tracking-tight leading-tight">
                  Можно наблюдать за занятием прямо в центре
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-soft">
                  Уютная зона с экранами, мягкой мебелью, Wi-Fi и кофе. Дождитесь ребёнка
                  с комфортом — и видите, как идёт занятие, в реальном времени.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
