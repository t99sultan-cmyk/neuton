"use client";

import { type ReactNode } from "react";
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
 * Pure CSS animation, no JS ticking.
 */
export function Marquee({
  children,
  className,
  speed = 28,
  direction = "left",
  pauseOnHover = true,
}: Props) {
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
        style={{ animationDuration: `${speed}s` }}
        aria-hidden={false}
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
    </div>
  );
}
