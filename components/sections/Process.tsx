"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PROCESS_STEPS } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="py-12 md:py-16">
      <Container>
        <div>
          <Eyebrow>Как мы работаем</Eyebrow>
          <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.05]">
            От первого сообщения до видимого прогресса
          </h2>
        </div>

        <ol className="mt-8 relative">
          <div
            aria-hidden
            className="absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/50 via-border-strong to-border"
          />
          {PROCESS_STEPS.map((step) => (
            <li key={step.number} className="relative pl-16 pb-7 last:pb-0">
              <div className="absolute left-0 top-0 grid place-items-center size-14 rounded-2xl bg-surface-2 border border-border-2 font-bold text-[16px] tracking-tight text-accent shadow-app tabular">
                {step.number}
              </div>
              <h3 className="font-bold text-[18px] tracking-tight leading-tight pt-2">
                {step.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-soft">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
