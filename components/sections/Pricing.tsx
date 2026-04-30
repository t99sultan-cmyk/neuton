"use client";

import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/utils";

const INCLUDED = [
  "Встреча с командой специалистов 30–60 минут",
  "Оценка речи, поведения, моторики и сенсорики",
  "Индивидуальный маршрут коррекции в письменном виде",
  "Рекомендации по частоте и составу занятий",
  "Ответы на все ваши вопросы — без давления",
];

const OTHER_DIRECTIONS = [
  { name: "АВА-терапия", note: "от 8 000 ₸" },
  { name: "Логопед-дефектолог", note: "от 6 000 ₸" },
  { name: "Логопедический массаж", note: "курс 10–15 процедур" },
  { name: "АФК", note: "от 5 000 ₸" },
  { name: "Сенсорная интеграция", note: "от 7 000 ₸" },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-16">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Цены</Eyebrow>
          <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.02]">
            Начните с диагностики — <span className="text-accent">потом решите</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.55] text-ink-soft text-pretty">
            Никаких «полных пакетов» и обязательных абонементов. Сначала диагностика —
            потом только то, что действительно нужно ребёнку.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid gap-3">
          <div className="relative rounded-[28px] p-7 sm:p-9 md:p-10 overflow-hidden bg-gradient-to-br from-accent/30 via-surface-2 to-surface border border-accent/30">
            <div
              className="absolute -top-40 -right-40 size-[420px] rounded-full opacity-40 blur-[110px]"
              style={{ background: "radial-gradient(closest-side, #E8B589, transparent)" }}
              aria-hidden
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-bold border border-accent/30">
                <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
                Акция этой недели · −50%
              </div>

              <h3 className="mt-6 font-bold text-[30px] md:text-[40px] tracking-tight leading-tight">
                Диагностика
              </h3>

              <div className="mt-5 flex items-baseline gap-2.5 flex-wrap">
                <span className="font-bold text-[52px] sm:text-[64px] md:text-[80px] leading-none tracking-tight">
                  {formatPrice(5000)}{" "}
                  <span className="text-[20px] sm:text-[24px] text-muted font-semibold">₸</span>
                </span>
                <span className="text-muted line-through text-[16px] sm:text-[18px] tabular">
                  {formatPrice(10000)} ₸
                </span>
              </div>

              <ul className="mt-7 space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] text-ink-soft">
                    <Check className="size-4 mt-0.5 shrink-0 text-mint" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="my-7 h-px bg-border" />

              <CountdownTimer variant="default" tone="ink" />

              <LinkButton
                variant="primary"
                size="xl"
                href={buildWhatsAppLink(WA_MESSAGES.promoDiagnostic)}
                target="_blank"
                rel="noopener"
                className="mt-7 w-full"
              >
                Записаться по акции
                <ArrowRight className="size-4" />
              </LinkButton>
              <p className="mt-3 text-[12px] text-muted text-center">
                Без предоплаты · Перенос или отмена за 24 часа
              </p>
            </div>
          </div>

          <div className="card-elevated p-7 sm:p-9 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-muted">
              Остальные направления
            </div>
            <h3 className="mt-3 font-bold text-[24px] tracking-tight leading-tight">
              Точная стоимость — после диагностики
            </h3>
            <p className="mt-3 text-[13.5px] leading-[1.55] text-muted">
              Цена зависит от направления, частоты занятий и квалификации специалиста. Ниже —
              ориентир, точные цены закрепляем в договоре.
            </p>

            <ul className="mt-6 divide-y divide-border">
              {OTHER_DIRECTIONS.map((d) => (
                <li
                  key={d.name}
                  className="flex items-center justify-between py-3.5"
                >
                  <span className="font-semibold text-[14.5px] text-ink">{d.name}</span>
                  <span className="text-[12.5px] text-muted tabular">{d.note}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-2xl bg-mint/10 border border-mint/25 text-[13px] leading-[1.55] text-ink-soft">
              <strong className="font-semibold text-mint">Скидки на абонементы:</strong> 8 занятий — 5%, 12 занятий — 10%.
              Возврат за неиспользованные занятия — по условиям договора-оферты.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
