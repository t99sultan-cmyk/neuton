"use client";

import { Sparkles } from "lucide-react";
import { Marquee } from "@/components/effects/Marquee";

const TAGS = [
  "АВА-терапия",
  "Логопед-дефектолог",
  "Сенсорная интеграция",
  "Логопедический массаж",
  "АФК",
  "Камеры онлайн 24/7",
  "Зона ожидания",
  "Сертифицированные специалисты",
  "Индивидуальный маршрут",
  "Прозрачные цены",
  "Без давления",
  "200+ отзывов 4.9★",
];

export function TagMarquee() {
  return (
    <section className="py-4 md:py-6">
      <Marquee speed={32}>
        {TAGS.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2/80 border border-border-2 text-[13px] font-medium text-ink-soft whitespace-nowrap"
          >
            <Sparkles className="size-3.5 text-accent" />
            {t}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
