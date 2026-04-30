"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  threshold?: number;
};

/**
 * Reveals content with transform-only animation (no opacity flicker).
 * Until intersected: scaled 0.985 + translated 8px down.
 * After: snaps to natural position with smooth ease.
 */
export function RevealOnScroll({
  children,
  className,
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            obs.disconnect();
            return;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn("reveal-on-scroll", className)}
      data-revealed={revealed ? "true" : "false"}
    >
      {children}
    </div>
  );
}
