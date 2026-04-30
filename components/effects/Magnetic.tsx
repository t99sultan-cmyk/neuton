"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/**
 * Wraps a child element with a subtle "magnetic" pull toward the cursor.
 * Pure CSS transform — no JS-based scroll, no flash on hydration.
 * `will-change` only set during hover (avoids permanent GPU layer).
 */
export function Magnetic({ children, className, strength = 0.25 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const onEnter = () => {
    const el = ref.current;
    if (!el) return;
    el.style.willChange = "transform";
  };

  const onMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    el.style.setProperty("--mx", `${dx}px`);
    el.style.setProperty("--my", `${dy}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
    // Clean up will-change after the exit transition completes
    window.setTimeout(() => {
      if (el) el.style.willChange = "auto";
    }, 350);
  };

  return (
    <span
      ref={ref}
      className={cn("inline-block magnetic-anchor", className)}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={
        {
          "--mx": "0px",
          "--my": "0px",
          transform:
            "translate3d(var(--mx, 0px), var(--my, 0px), 0)",
          transition: "transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1)",
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}
