"use client";

import {
  Video,
  Award,
  Users,
  BookOpen,
  Wallet,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ADVANTAGES, type AdvantageIconKey } from "@/lib/content";

const ICONS: Record<AdvantageIconKey, React.ComponentType<{ className?: string }>> = {
  video: Video,
  award: Award,
  users: Users,
  bookOpen: BookOpen,
  wallet: Wallet,
  mapPin: MapPin,
};

export function WhyUs() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Почему нам доверяют</Eyebrow>
          <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.02]">
            Шесть причин, почему родители выбирают «Ньютон»
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-3">
          {ADVANTAGES.map((adv, i) => {
            const Icon = ICONS[adv.iconKey];
            return (
              <div
                key={adv.title}
                className="card-elevated p-7"
              >
                <div className="grid place-items-center size-12 rounded-2xl bg-accent/12 border border-accent/25">
                  <Icon className="size-5 text-accent" />
                </div>
                <h3 className="mt-5 font-bold text-[19px] tracking-tight leading-tight">
                  {adv.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink-soft">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
