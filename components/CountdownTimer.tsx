"use client";

import { useCountdown, formatPromoDate } from "@/lib/countdown";
import { cn } from "@/lib/utils";
import { FlipDigit } from "@/components/effects/FlipDigit";

type Tone = "ink" | "light";
type Variant = "default" | "compact" | "huge";

type Props = {
  className?: string;
  tone?: Tone;
  variant?: Variant;
  showDate?: boolean;
};

const LABELS = ["дней", "часов", "минут", "сек"] as const;

export function CountdownTimer({
  className,
  tone = "ink",
  variant = "default",
  showDate = true,
}: Props) {
  const cd = useCountdown();
  const values = cd ? [cd.days, cd.hours, cd.minutes, cd.seconds] : [null, null, null, null];

  const sizes = {
    compact: { num: "text-[22px]", cell: "px-2.5 py-2 min-w-[48px]", label: "text-[9px]" },
    default: { num: "text-[34px] sm:text-[40px]", cell: "px-3.5 py-3 min-w-[68px] sm:min-w-[78px]", label: "text-[10px]" },
    huge:    { num: "text-[44px] sm:text-[60px]", cell: "px-5 py-4 min-w-[88px] sm:min-w-[110px]", label: "text-[11px]" },
  } as const;

  const s = sizes[variant];
  const isLight = tone === "light";

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      {showDate && (
        <div
          className={cn(
            "text-[11px] uppercase tracking-[0.18em] font-semibold",
            isLight ? "text-bg/65" : "text-muted",
          )}
        >
          {cd
            ? `Действует до ${formatPromoDate(cd.deadline)}, 23:59`
            : "Загрузка таймера…"}
        </div>
      )}
      <div className="flex items-stretch gap-2 sm:gap-2.5">
        {values.map((v, i) => {
          const display = v === null ? "··" : String(v).padStart(2, "0");
          return (
            <div
              key={LABELS[i]}
              className={cn(
                "flex flex-col items-center justify-center rounded-2xl border tabular",
                s.cell,
                isLight
                  ? "bg-bg/95 border-bg/10 text-ink"
                  : "bg-surface-2 border-border-2 text-ink",
              )}
            >
              <span className={cn("font-bold leading-none tracking-tight", s.num)}>
                <FlipDigit value={display} />
              </span>
              <span
                className={cn(
                  "mt-1.5 uppercase tracking-[0.16em] font-semibold",
                  s.label,
                  isLight ? "text-muted-2" : "text-muted",
                )}
              >
                {LABELS[i]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
