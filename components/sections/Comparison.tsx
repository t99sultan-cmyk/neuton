"use client";

import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Row = {
  label: string;
  us: string | boolean;
  them: string | boolean;
};

const ROWS: Row[] = [
  { label: "Камеры онлайн в каждом зале", us: true, them: false },
  { label: "Зона ожидания с экраном для родителей", us: true, them: false },
  { label: "Письменный маршрут коррекции на 1/3/6 месяцев", us: true, them: false },
  { label: "Контрольные срезы каждые 1–3 месяца в данных", us: true, them: false },
  { label: "Цена и состав абонемента в договоре", us: true, them: false },
  { label: "Обратная связь после каждого занятия", us: true, them: false },
  { label: "Тариф «полный курс на год вперёд»", us: false, them: "Часто" },
  { label: "Дополнительные платежи по ходу", us: false, them: "Бывают" },
];

export function Comparison() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <Eyebrow>Чем мы отличаемся</Eyebrow>
        <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.05]">
          Ньютон vs <span className="text-muted">обычный центр</span>
        </h2>
        <p className="mt-4 text-[14.5px] leading-[1.55] text-ink-soft max-w-lg">
          Мы запускали центр для своих детей, поэтому конвейерный подход и
          непрозрачные цены — не наш стиль.
        </p>

        <div className="mt-7 card-elevated overflow-hidden">
          <div className="grid grid-cols-[1fr_auto_auto] text-[12px] uppercase tracking-[0.16em] font-bold text-muted-2 px-4 sm:px-6 py-3 border-b border-border">
            <span>Параметр</span>
            <span className="px-2 sm:px-3 text-accent">Ньютон</span>
            <span className="pl-2 sm:pl-4">Обычный центр</span>
          </div>
          <ul>
            {ROWS.map((r, i) => (
              <li
                key={r.label}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-2 px-4 sm:px-6 py-3.5 border-b border-border last:border-b-0"
              >
                <span className="text-[13.5px] sm:text-[14px] text-ink leading-snug">
                  {r.label}
                </span>
                <span className="px-2 sm:px-3">
                  {r.us === true ? (
                    <span className="grid place-items-center size-7 rounded-full bg-mint/15 border border-mint/40 text-mint">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                  ) : r.us === false ? (
                    <span className="grid place-items-center size-7 rounded-full bg-surface-3 border border-border-2 text-muted">
                      <X className="size-3.5" strokeWidth={2.5} />
                    </span>
                  ) : (
                    <span className="text-[13px] font-semibold text-ink whitespace-nowrap tabular">{r.us}</span>
                  )}
                </span>
                <span className="pl-2 sm:pl-4">
                  {r.them === false ? (
                    <span className="grid place-items-center size-7 rounded-full bg-surface-3 border border-border-2 text-muted">
                      <X className="size-3.5" strokeWidth={2.5} />
                    </span>
                  ) : r.them === true ? (
                    <span className="grid place-items-center size-7 rounded-full bg-mint/10 border border-mint/30 text-mint">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                  ) : (
                    <span className="text-[13px] text-muted whitespace-nowrap">{r.them}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-[12px] text-muted-2">
          Сравнение — обобщение нашего опыта общения с родителями, переходящими из
          других центров. Мы не указываем конкретные центры; речь о типичных
          практиках в нише.
        </p>
      </Container>
    </section>
  );
}
