"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Slot = { day: string; date: Date; times: string[] };

const SAMPLE_TIMES = ["10:00", "12:30", "15:00", "17:30"];

function buildNextDays(count: number): Slot[] {
  const out: Slot[] = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i + 1);
    if (d.getDay() === 0) continue; // воскресенье — закрыто
    out.push({
      day: new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(d),
      date: d,
      times: SAMPLE_TIMES,
    });
    if (out.length >= 5) break;
  }
  return out;
}

function fmt(d: Date): string {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
  }).format(d);
}

export function Booking() {
  const slots = useMemo(() => buildNextDays(7), []);
  const [activeDay, setActiveDay] = useState(0);
  const [activeTime, setActiveTime] = useState<string | null>(null);

  const selectedDate = slots[activeDay]?.date;
  const message = selectedDate && activeTime
    ? `Здравствуйте! Хочу записаться на диагностику ${fmt(selectedDate)} в ${activeTime}.`
    : "Здравствуйте! Хочу записаться на диагностику по акции за 5 000 ₸.";

  return (
    <section className="py-12 md:py-16">
      <Container>
        <Eyebrow>Запись · ориентир</Eyebrow>
        <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.05]">
          Выберите удобное время
        </h2>
        <p className="mt-4 text-[14.5px] leading-[1.55] text-ink-soft max-w-lg">
          Выберите день и время — мы подтвердим в WhatsApp за 10 минут. Если слот занят,
          предложим ближайший свободный.
        </p>

        <div className="mt-7 card-elevated p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="size-4 text-muted" />
            <span className="text-[12px] uppercase tracking-[0.16em] font-bold text-muted-2">
              Ближайшие даты
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2 mb-5">
            {slots.map((s, i) => {
              const isActive = i === activeDay;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setActiveDay(i);
                    setActiveTime(null);
                  }}
                  className={cn(
                    "flex flex-col items-center justify-center py-2.5 rounded-2xl border transition-colors",
                    isActive
                      ? "bg-accent text-[#1A0F08] border-accent"
                      : "bg-surface-2 border-border-2 text-ink hover:border-border-strong",
                  )}
                >
                  <span className="text-[10.5px] uppercase tracking-wider font-semibold opacity-80">
                    {s.day}
                  </span>
                  <span className="font-bold text-[18px] leading-none mt-1 tabular">
                    {s.date.getDate()}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            {slots[activeDay]?.times.map((t) => {
              const isActive = activeTime === t;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTime(t)}
                  className={cn(
                    "h-10 px-4 rounded-full border text-[13.5px] font-semibold transition-colors tabular",
                    isActive
                      ? "bg-ink text-bg border-ink"
                      : "bg-surface-2 border-border-2 text-ink-soft hover:text-ink",
                  )}
                >
                  {t}
                </button>
              );
            })}
          </div>

          <LinkButton
            variant="primary"
            size="lg"
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noopener"
            className="mt-6 w-full"
            onClick={() =>
              track.ctaWhatsApp(
                "booking-stub",
                activeTime ? `slot:${fmt(selectedDate!)} ${activeTime}` : "no-slot",
              )
            }
          >
            {activeTime
              ? `Подтвердить: ${fmt(selectedDate!)} в ${activeTime}`
              : "Подтвердить в WhatsApp"}
            <ArrowRight className="size-4" />
          </LinkButton>
          <p className="mt-3 text-[12px] text-muted-2 text-center">
            Календарь — ориентир. Финальный слот мы согласуем перепиской.
          </p>
        </div>
      </Container>
    </section>
  );
}
