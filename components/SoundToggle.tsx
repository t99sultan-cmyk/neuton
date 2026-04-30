"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSoundEnabled, playSound } from "@/lib/sound";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function SoundToggle({ className }: Props) {
  const [enabled, setEnabled] = useSoundEnabled();

  return (
    <button
      onClick={() => {
        const next = !enabled;
        setEnabled(next);
        if (next) {
          // Pre-warm the audio context with first user gesture
          setTimeout(() => playSound("pop"), 30);
        }
      }}
      aria-label={enabled ? "Выключить звуки" : "Включить звуки"}
      aria-pressed={enabled}
      className={cn(
        "grid place-items-center size-10 rounded-2xl border transition-all",
        enabled
          ? "border-accent/40 bg-accent/15 text-accent"
          : "border-border-2 bg-surface text-ink-soft hover:bg-surface-2",
        className,
      )}
      title={enabled ? "Звуки включены" : "Звуки выключены"}
    >
      {enabled ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
    </button>
  );
}
