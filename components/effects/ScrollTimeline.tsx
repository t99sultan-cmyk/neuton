"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Step = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
  children?: ReactNode;
};

/**
 * Vertical timeline whose connecting line fills with gold gradient
 * proportionally to scroll progress through the section.
 * Step bubbles scale up when current.
 */
export function ScrollTimeline({ steps }: Props) {
  const ref = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let pending = false;

    const update = () => {
      pending = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.5;
      const passed = Math.min(total, Math.max(0, vh * 0.7 - rect.top));
      const ratio = total > 0 ? Math.min(1, passed / total) : 0;
      setProgress(ratio);
      const idx = Math.min(steps.length - 1, Math.floor(ratio * steps.length));
      setActiveIdx(idx);
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [steps.length]);

  return (
    <ol ref={ref} className="relative">
      <div
        className="timeline-line"
        style={{ ["--progress" as string]: `${progress * 100}%` }}
        aria-hidden
      />
      {steps.map((step, i) => {
        const active = i <= activeIdx;
        return (
          <li key={step.number} className="relative pl-16 pb-7 last:pb-0">
            <div
              className="absolute left-0 top-0 grid place-items-center size-14 rounded-2xl border tabular font-bold text-[16px] tracking-tight transition-all duration-500"
              style={{
                background: active
                  ? "linear-gradient(180deg, rgba(232,181,137,0.25), rgba(212,168,106,0.10))"
                  : "var(--surface-2)",
                borderColor: active ? "rgba(232,181,137,0.55)" : "var(--border-2)",
                color: active ? "var(--accent)" : "var(--muted)",
                transform: active ? "scale(1.04)" : "scale(0.96)",
                boxShadow: active
                  ? "0 12px 32px -12px rgba(232, 181, 137, 0.45)"
                  : "none",
              }}
            >
              {step.number}
            </div>
            <h3 className="font-bold text-[18px] tracking-tight leading-tight pt-2">
              {step.title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-soft">
              {step.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
