"use client";

import { cn } from "@/lib/utils";

type Props = {
  value: string;
  className?: string;
};

/**
 * Slot-machine style digit flip: when `value` changes, the new value
 * slides up from below while the old slides up and out.
 *
 * Implemented via React `key` remount + CSS keyframe — no JS state needed.
 * SSR-safe.
 */
export function FlipDigit({ value, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex justify-center overflow-hidden align-baseline",
        "tabular leading-none",
        className,
      )}
      aria-label={value}
    >
      <span key={value} className="inline-block animate-digit-in">
        {value}
      </span>
    </span>
  );
}
