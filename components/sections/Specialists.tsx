"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tilt3D } from "@/components/effects/Tilt3D";
import { SPECIALISTS } from "@/lib/content";

const GRADIENTS = [
  "linear-gradient(135deg, #6FB99A 0%, #2E5240 100%)",
  "linear-gradient(135deg, #E8B589 0%, #B47045 100%)",
  "linear-gradient(135deg, #D4A86A 0%, #6F4E1F 100%)",
  "linear-gradient(135deg, #A8D9BC 0%, #4A8266 100%)",
];

function Initials({ name }: { name: string }) {
  return (
    <span className="font-bold text-[36px] text-white/90 tracking-tight select-none">
      {name
        .split(" ")
        .map((p) => p[0])
        .join("")}
    </span>
  );
}

export function Specialists() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Команда</Eyebrow>
          <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.02]">
            Наши специалисты — <span className="text-accent">лица, а не профили</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.55] text-ink-soft text-pretty">
            У всех профильное образование, регулярное обучение и опыт от 5 лет. На диагностике
            вы познакомитесь с теми, кто будет работать с вашим ребёнком.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 gap-3">
          {SPECIALISTS.map((s, i) => (
            <Tilt3D key={s.name} max={6}>
            <div
              className="card-elevated overflow-hidden flex flex-col h-full"
            >
              <div
                className="aspect-[4/5] grid place-items-center"
                style={{ background: GRADIENTS[i % GRADIENTS.length] }}
              >
                <Initials name={s.name} />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[18px] tracking-tight leading-tight">
                  {s.name}
                </h3>
                <div className="mt-1 text-[12.5px] text-accent font-semibold">
                  {s.role}
                </div>
                <div className="mt-3 text-[12px] text-muted">Опыт: {s.experience}</div>
                <p className="mt-2 text-[13px] leading-[1.55] text-ink-soft">{s.bio}</p>
              </div>
            </div>
            </Tilt3D>
          ))}
        </div>
        <p className="mt-6 text-[12px] text-muted-2 text-center">
          Фото и подробные регалии каждого специалиста — на первой встрече.
        </p>
      </Container>
    </section>
  );
}
