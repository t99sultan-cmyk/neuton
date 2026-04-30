"use client";

import { ShieldCheck, HeartHandshake, Lightbulb } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PILLARS = [
  {
    icon: HeartHandshake,
    title: "Без давления",
    text: "Не пугаем диагнозами и не продаём «полные курсы на год». Сначала честная диагностика — потом точечная программа.",
  },
  {
    icon: ShieldCheck,
    title: "Доказательные методики",
    text: "АВА, TEACCH, сенсорная интеграция по Айрес, классическая логопедия. Только методы с подтверждённой эффективностью.",
  },
  {
    icon: Lightbulb,
    title: "Прозрачность",
    text: "Камеры в каждом зале, протоколы занятий, контрольные срезы каждые 1–3 месяца. Прогресс в данных, а не на словах.",
  },
];

export function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <Container>
        <div className="grid gap-10 items-start">
          <div
          >
            <Eyebrow>О центре</Eyebrow>
            <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.02]">
              Помогаем детям расти —{" "}
              <span className="text-accent">а родителям дышать ровнее</span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.55] text-ink-soft text-pretty">
              «Ньютон» — детский коррекционный центр в Алматы. Мы работаем с речью,
              поведением, моторикой и сенсорикой детей от 1,5 лет.
            </p>
            <p className="mt-3 text-[15.5px] leading-[1.55] text-muted">
              Каждый ребёнок получает индивидуальную программу. Каждый родитель — возможность
              видеть занятие со смартфона. Без конвейера и «занятий по шаблону».
            </p>
          </div>

          <div className="grid gap-3">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="flex gap-5 p-6 md:p-7 card-elevated"
              >
                <div className="shrink-0 grid place-items-center size-12 rounded-2xl bg-mint/15 border border-mint/30">
                  <p.icon className="size-5 text-mint" />
                </div>
                <div>
                  <h3 className="font-bold text-[19px] tracking-tight">{p.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.55] text-ink-soft">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
