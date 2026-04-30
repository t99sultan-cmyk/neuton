"use client";

import { Star, Quote, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tilt3D } from "@/components/effects/Tilt3D";
import { TESTIMONIALS, SOCIAL_LINKS } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 max-w-5xl">
          <div>
            <Eyebrow>Истории родителей</Eyebrow>
            <h2 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[36px] leading-[1.02]">
              Что говорят те, <br className="hidden md:block" />
              кто уже у нас
            </h2>
          </div>
          <a
            href={SOCIAL_LINKS.twoGis}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-[14px] text-ink-soft hover:text-ink transition-colors"
          >
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-semibold">4.9 / 5</span>
            <span className="text-muted-2">· отзывы на 2GIS</span>
            <ExternalLink className="size-3.5 text-muted-2" />
          </a>
        </div>
        <p className="mt-4 text-[12px] text-muted-2">
          {/* TODO: ссылку на 2GIS заменить на реальный профиль центра, когда появится */}
          Все отзывы можно проверить на 2GIS — мы не модерируем там тексты.
        </p>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-3">
          {TESTIMONIALS.map((t) => (
            <Tilt3D key={t.name} max={5}>
            <figure
              className="relative flex flex-col p-7 card-elevated h-full"
            >
              <Quote
                className="absolute top-6 right-6 size-7 text-surface-3"
                aria-hidden
              />
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="size-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 text-[14.5px] leading-[1.6] text-ink text-pretty flex-1">
                «{t.text}»
              </blockquote>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-3">
                <figcaption>
                  <div className="font-semibold text-[14.5px] text-ink">{t.name}</div>
                  <div className="text-[12px] text-muted">{t.role}</div>
                </figcaption>
                <span className="inline-flex items-center rounded-full bg-mint/15 border border-mint/30 text-mint px-2.5 py-1 text-[10.5px] font-semibold">
                  {t.result}
                </span>
              </div>
            </figure>
            </Tilt3D>
          ))}
        </div>
      </Container>
    </section>
  );
}
