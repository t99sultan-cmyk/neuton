"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PROCESS_STEPS } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="py-14 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Как мы работаем</Eyebrow>
          <h2 className="mt-5 font-bold tracking-tight text-balance text-[34px] md:text-[52px] leading-[1.02]">
            От первого сообщения <br className="hidden md:block" />
            до видимого прогресса
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-5 gap-3">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.number}
              className="card-elevated p-6 md:p-7 flex flex-col gap-4 relative overflow-hidden"
            >
              <span className="font-bold text-[36px] tracking-tight text-accent leading-none">
                {step.number}
              </span>
              <h3 className="font-bold text-[18px] tracking-tight leading-tight">
                {step.title}
              </h3>
              <p className="text-[13.5px] leading-[1.6] text-ink-soft">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
