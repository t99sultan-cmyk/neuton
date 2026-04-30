"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton, Button } from "@/components/ui/Button";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  "Ребёнок не говорит или говорит значительно меньше сверстников",
  "Ребёнку сложно концентрироваться, часто отвлекается",
  "Часто бывают истерики, которые сложно успокоить",
  "Не идёт на контакт со сверстниками или избегает игр",
  "Странные повторяющиеся движения / интенсивный интерес к одной теме",
  "Чувствительность к звукам, прикосновениям, ярким огням",
  "Сложности с самообслуживанием (одеться, поесть) для возраста",
  "Невролог / психиатр / ПМПК уже что-то заподозрили или назначили",
];

function resultFor(score: number): { tone: "ok" | "soft" | "act"; title: string; body: string } {
  if (score === 0)
    return {
      tone: "ok",
      title: "Скорее всего, всё в норме",
      body: "По вашим ответам нет тревожных сигналов. Если что-то всё-таки беспокоит — приходите на диагностику, она недорогая, лишней не будет.",
    };
  if (score <= 2)
    return {
      tone: "soft",
      title: "Стоит понаблюдать",
      body: "Один-два пункта — нормально для многих детей. Рекомендуем диагностику, чтобы точно понять, нужна ли коррекция или это особенности развития, которые пройдут.",
    };
  return {
    tone: "act",
    title: "Рекомендуем диагностику",
    body: `${score} из ${QUESTIONS.length} тревожных пунктов. Это сигнал, что стоит как минимум показать ребёнка специалисту. Чем раньше начнёте — тем эффективнее коррекция.`,
  };
}

export function SelfTest() {
  const [answers, setAnswers] = useState<Array<boolean | null>>(
    () => QUESTIONS.map(() => null),
  );
  const [submitted, setSubmitted] = useState(false);

  const score = answers.filter((a) => a === true).length;
  const allAnswered = answers.every((a) => a !== null);

  const reset = () => {
    setAnswers(QUESTIONS.map(() => null));
    setSubmitted(false);
  };

  if (submitted) {
    const r = resultFor(score);
    const tone =
      r.tone === "act"
        ? "from-accent/30 via-surface-2 to-surface border-accent/30"
        : r.tone === "soft"
          ? "from-gold/20 via-surface-2 to-surface border-gold/30"
          : "from-mint/20 via-surface-2 to-surface border-mint/30";
    return (
      <section id="selftest" className="py-12 md:py-16">
        <Container>
          <Eyebrow>Самопроверка</Eyebrow>
          <div
            className={cn(
              "mt-5 rounded-[28px] p-7 sm:p-9 bg-gradient-to-br border",
              tone,
            )}
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center size-12 rounded-2xl bg-bg/40 border border-border-2">
                <CheckCircle2 className="size-5 text-accent" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-muted">
                  Результат · {score} из {QUESTIONS.length}
                </div>
                <h3 className="mt-1 font-bold text-[22px] sm:text-[26px] tracking-tight leading-tight">
                  {r.title}
                </h3>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-[1.55] text-ink-soft text-pretty">
              {r.body}
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <LinkButton
                variant="primary"
                size="lg"
                href={buildWhatsAppLink(WA_MESSAGES.promoDiagnostic)}
                target="_blank"
                rel="noopener"
                onClick={() => track.ctaWhatsApp("selftest", "promo")}
              >
                Записаться на диагностику
                <ArrowRight className="size-4" />
              </LinkButton>
              <Button variant="ghost" size="lg" onClick={reset}>
                <RotateCcw className="size-4" />
                Пройти заново
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="selftest" className="py-12 md:py-16">
      <Container>
        <Eyebrow>Самопроверка · 1 минута</Eyebrow>
        <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.05]">
          Нужна ли вашему ребёнку диагностика?
        </h2>
        <p className="mt-4 text-[14.5px] leading-[1.55] text-ink-soft">
          Отметьте те пункты, которые точно про вас. Чем больше совпадений —
          тем больше смысла прийти. Анонимно, без email.
        </p>

        <ol className="mt-7 space-y-2">
          {QUESTIONS.map((q, i) => {
            const value = answers[i];
            const yes = value === true;
            const no = value === false;
            return (
              <li
                key={q}
                className={cn(
                  "rounded-2xl border p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3",
                  yes
                    ? "bg-accent/8 border-accent/40"
                    : no
                      ? "bg-surface/40 border-border"
                      : "bg-surface/60 border-border",
                )}
              >
                <div className="flex-1 text-[14.5px] leading-snug text-ink">
                  <span className="text-muted-2 mr-2 tabular">{String(i + 1).padStart(2, "0")}.</span>
                  {q}
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      const next = [...answers];
                      next[i] = true;
                      setAnswers(next);
                    }}
                    aria-pressed={yes}
                    className={cn(
                      "h-9 px-4 rounded-full text-[13px] font-semibold transition-colors",
                      yes
                        ? "bg-accent text-[#1A0F08]"
                        : "bg-surface-2 border border-border-2 text-ink-soft hover:text-ink",
                    )}
                  >
                    Да
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const next = [...answers];
                      next[i] = false;
                      setAnswers(next);
                    }}
                    aria-pressed={no}
                    className={cn(
                      "h-9 px-4 rounded-full text-[13px] font-semibold transition-colors",
                      no
                        ? "bg-surface-3 text-ink border border-border-strong"
                        : "bg-surface-2 border border-border-2 text-ink-soft hover:text-ink",
                    )}
                  >
                    Нет
                  </button>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-7 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <Button
            variant="primary"
            size="lg"
            disabled={!allAnswered}
            onClick={() => {
              setSubmitted(true);
              track.selfTestComplete(score);
            }}
          >
            Показать результат
            <ArrowRight className="size-4" />
          </Button>
          <span className="text-[12px] text-muted-2">
            {allAnswered
              ? "Готово — нажмите кнопку выше"
              : `Ответьте на все ${QUESTIONS.length} пунктов`}
          </span>
        </div>

        <div className="mt-5 text-[12px] text-muted-2 leading-snug">
          Это не медицинский тест. Окончательное заключение даёт только
          сертифицированный специалист на очной диагностике.{" "}
          <a
            href={buildWhatsAppLink(WA_MESSAGES.generalInquiry)}
            target="_blank"
            rel="noopener"
            className="text-ink-soft underline-offset-4 hover:underline inline-flex items-center gap-1"
          >
            Спросить специалиста <MessageCircle className="size-3" />
          </a>
        </div>
      </Container>
    </section>
  );
}
