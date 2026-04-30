"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Target value to count up to (digits only — non-digit chars stay as suffix) */
  value: string;
  duration?: number;
  className?: string;
};

/**
 * Animates a number from 0 to its target when scrolled into view.
 * Accepts strings like "500+" or "4.9" or "100%" — preserves formatting.
 */
export function CountUp({ value, duration = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [played, setPlayed] = useState(false);

  // Parse the numeric portion
  const match = value.match(/^([\d.,]+)(.*)$/);
  const numStr = match?.[1] ?? "0";
  const suffix = match?.[2] ?? "";
  const target = parseFloat(numStr.replace(",", "."));
  const decimals = (numStr.split(".")[1] || "").length;

  useEffect(() => {
    if (played || !Number.isFinite(target)) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      setPlayed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        setPlayed(true);
        observer.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const progress = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          const formatted =
            decimals > 0
              ? current.toFixed(decimals).replace(".", numStr.includes(",") ? "," : ".")
              : Math.round(current).toString();
          setDisplay(`${formatted}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration, suffix, decimals, value, numStr, played]);

  // Render initial state matching SSR: full target value.
  // Only after IntersectionObserver fires does counting take over.
  return (
    <span ref={ref} className={className} suppressHydrationWarning>
      {display}
    </span>
  );
}
