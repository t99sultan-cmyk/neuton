"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /** Maximum tilt angle in degrees (default 7) */
  max?: number;
  /** Lift the card slightly on hover */
  lift?: boolean;
};

/**
 * 3D perspective tilt that follows the cursor.
 * Inner content gets transformed; outer wrapper preserves layout.
 * Auto-disabled on touch devices and reduced-motion via CSS.
 */
export function Tilt3D({ children, className, max = 7, lift = true }: Props) {
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
    if (lift) el.style.setProperty("--lift", "translateZ(8px)");
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--lift", "translateZ(0)");
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
