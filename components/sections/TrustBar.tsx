"use client";

import { Container } from "@/components/ui/Container";
import { STATS } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="py-6 md:py-10">
      <Container>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="card-elevated p-5 md:p-6 flex flex-col"
            >
              <div className="font-bold text-[28px] md:text-[36px] leading-none tracking-tight">
                {stat.value}
              </div>
              <div className="mt-3 text-[12px] md:text-[13px] text-muted leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
