"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /** Maximum tilt angle in degrees (default 7) */
  max?: number;
};

/**
 * 3D perspective tilt that follows the cursor.
 * Inner uses CSS variables `--rx` / `--ry` for the rotation values,
 * so updates avoid React re-renders.
 *
 * Smoothness:
 *  - During hover: 0.08s linear transition (snappy follow)
 *  - On mouseleave: 0.55s spring-ease (graceful return) — handled in CSS
 *    via `.tilt-3d:not(:hover) .tilt-3d-inner`
 *  - `will-change: transform` is permanent on the inner only
 *  - Auto-disabled on touch + reduced-motion via media queries
 */
export function Tilt3D({ children, className, max = 7 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = ((y - 0.5) * -2 * max).toFixed(2);
    const ry = ((x - 0.5) * 2 * max).toFixed(2);
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      className={cn("tilt-3d", className)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="tilt-3d-inner h-full">{children}</div>
    </div>
  );
}
