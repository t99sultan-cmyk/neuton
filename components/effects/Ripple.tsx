"use client";

import { useEffect, useRef, useState } from "react";

type RippleItem = { id: number; x: number; y: number; size: number };

export function useRipple() {
  const [ripples, setRipples] = useState<RippleItem[]>([]);
  const idRef = useRef(0);

  const trigger = (e: React.MouseEvent | React.PointerEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.6;
    const x = ("clientX" in e ? e.clientX : 0) - rect.left - size / 2;
    const y = ("clientY" in e ? e.clientY : 0) - rect.top - size / 2;
    const id = ++idRef.current;
    setRipples((prev) => [...prev, { id, x, y, size }]);
  };

  useEffect(() => {
    if (ripples.length === 0) return;
    const t = window.setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 600);
    return () => window.clearTimeout(t);
  }, [ripples]);

  const node = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </span>
  );

  return { trigger, node };
}
