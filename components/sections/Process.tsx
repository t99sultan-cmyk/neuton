"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollTimeline } from "@/components/effects/ScrollTimeline";
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

        <div className="mt-8">
          <ScrollTimeline steps={PROCESS_STEPS} />
        </div>
      </Container>
    </section>
  );
}
