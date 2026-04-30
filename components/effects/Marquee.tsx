"use client";

import { useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
};

/**
 * Infinite horizontal marquee — duplicates children for seamless loop.
 * Includes a manual pause button (WCAG 2.2.2 — moving content must be stoppable).
 */
export function Marquee({
  children,
  className,
  speed = 28,
  direction = "left",
  pauseOnHover = true,
}: Props) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        pauseOnHover && "marquee-hover-pause",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max gap-3",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
        )}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        <div className="flex shrink-0 gap-3">{children}</div>
        <div className="flex shrink-0 gap-3" aria-hidden>
          {children}
        </div>
      </div>
      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg to-transparent"
      />
      {/* WCAG: pause control for moving content */}
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Возобновить анимацию" : "Приостановить анимацию"}
        aria-pressed={paused}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center size-7 rounded-full bg-surface-2/80 backdrop-blur border border-border-2 text-ink-soft hover:text-ink transition-colors"
      >
        {paused ? <Play className="size-3" /> : <Pause className="size-3" />}
      </button>
    </div>
  );
}
