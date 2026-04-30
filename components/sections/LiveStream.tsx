"use client";

import { Video, Wifi, Eye, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const FEATURES = [
  { icon: Video, title: "Камеры в каждом зале", text: "АВА, логопед, сенсорная — всё под наблюдением." },
  { icon: Wifi, title: "Любое устройство", text: "Смартфон, планшет, ноутбук — где удобно." },
  { icon: Eye, title: "Реальное время", text: "Без записей и монтажа — что вижу, то и есть." },
  { icon: ShieldCheck, title: "Защищённый доступ", text: "Персональная ссылка, видите только своего ребёнка." },
];

const YOUTUBE_ID = "aDavJmA5Ocs";

export function LiveStream() {
  return (
    <section className="py-14 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] card-elevated shadow-app-lg p-6 sm:p-10 md:p-12 lg:p-14">
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

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Eyebrow>Главное отличие</Eyebrow>
              <h2 className="mt-5 font-bold tracking-tight text-balance text-[34px] md:text-[52px] leading-[1.02]">
                Вы видите, как идёт занятие.{" "}
                <span className="shimmer-text">Из дома, с работы, из машины.</span>
              </h2>
              <p className="mt-6 text-[16.5px] leading-[1.55] text-ink-soft text-pretty max-w-lg">
                В каждом зале установлены камеры. После записи мы выдаём вам персональную
                ссылку — заходите со смартфона и наблюдаете за занятием в реальном времени.
                Без догадок «как там мой ребёнок».
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {FEATURES.map((f) => (
                  <div key={f.title} className="flex gap-3">
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
            <div className="relative flex justify-center pt-4 lg:pt-0">
              <div className="relative w-[230px] sm:w-[280px] lg:w-[300px] aspect-[9/19] rounded-[40px] sm:rounded-[44px] bg-black border-[8px] sm:border-[10px] border-[#0A0F0E] shadow-app-lg overflow-hidden">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-[20px] bg-black z-20" />

                <div className="absolute inset-0">
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`}
                    title="Видео центра Ньютон"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
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

              <div className="absolute -bottom-2 sm:bottom-6 -right-3 sm:-right-6 rounded-2xl glass px-4 py-3 shadow-app">
                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted">
                  Сейчас смотрят
                </div>
                <div className="mt-0.5 font-bold text-[20px] tracking-tight tabular text-ink">
                  234 родителя
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
