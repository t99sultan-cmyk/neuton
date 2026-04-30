"use client";

import { useEffect, useRef } from "react";

type Step = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
};

/**
 * Vertical timeline whose connecting line fills with gold gradient
 * proportionally to scroll progress through the section.
 *
 * Performance: zero React state during scroll. Updates are written
 * directly to DOM via refs, so the component re-renders only on mount.
 */
export function ScrollTimeline({ steps }: Props) {
  const olRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const ol = olRef.current;
    const line = lineRef.current;
    if (!ol || !line) return;

    let raf = 0;
    let lastIdx = -1;

    const update = () => {
      const rect = ol.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.5;
      const passed = Math.min(total, Math.max(0, vh * 0.7 - rect.top));
      const ratio = total > 0 ? Math.min(1, passed / total) : 0;

      // Direct DOM write — bypasses React reconciler entirely
      line.style.setProperty("--progress", `${(ratio * 100).toFixed(2)}%`);

      const idx = Math.min(steps.length - 1, Math.floor(ratio * steps.length));
      if (idx !== lastIdx) {
        for (let i = 0; i < stepRefs.current.length; i++) {
          const node = stepRefs.current[i];
          if (node) node.dataset.active = i <= idx ? "true" : "false";
        }
        lastIdx = idx;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  return (
    <ol ref={olRef} className="relative">
      <div ref={lineRef} className="timeline-line" aria-hidden />
      {steps.map((step, i) => (
        <li
          key={step.number}
          ref={(el) => {
            stepRefs.current[i] = el;
          }}
          data-active="false"
          className="timeline-step relative pl-16 pb-7 last:pb-0"
        >
          <div className="timeline-circle absolute left-0 top-0 grid place-items-center size-14 rounded-2xl border tabular font-bold text-[16px] tracking-tight">
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
  );
}
