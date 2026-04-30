"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  count?: number;
};

/**
 * Floating dust particles drifting upward — adds depth without distraction.
 * Canvas-based; respects prefers-reduced-motion.
 * Auto-pauses when canvas leaves viewport (saves CPU on long pages).
 */
export function ParticleField({ className, count = 18 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let visible = true;
    let particles: Array<{
      x: number;
      y: number;
      r: number;
      vy: number;
      vx: number;
      hue: number;
      a: number;
    }> = [];

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = rect.width;
      const h = rect.height;
      particles = Array.from({ length: count }, () => spawn(w, h, true));
    };

    const spawn = (w: number, h: number, anywhere = false) => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 8,
      r: 0.8 + Math.random() * 1.6,
      vy: -(0.12 + Math.random() * 0.28),
      vx: -0.12 + Math.random() * 0.24,
      hue: Math.random() < 0.6 ? 32 : 150,
      a: 0.18 + Math.random() * 0.28,
    });

    const tick = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10 || p.x < -10 || p.x > w + 10) {
          Object.assign(p, spawn(w, h));
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 60%, 75%, ${p.a})`;
        ctx.fill();
      }
      if (visible) raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    // Pause animation when canvas is fully out of viewport
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const wasVisible = visible;
          visible = entry.isIntersecting;
          if (!wasVisible && visible) raf = requestAnimationFrame(tick);
        }
      },
      { rootMargin: "100px" },
    );
    io.observe(canvas);

    return () => {
      ro.disconnect();
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden
    />
  );
}
