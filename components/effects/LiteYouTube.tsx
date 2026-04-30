"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  videoId: string;
  title?: string;
  className?: string;
  /** Auto-load on mount (skip thumbnail click) — for hero reels in viewport */
  eager?: boolean;
};

/**
 * Loads a YouTube thumbnail first, embeds the iframe only on click
 * (or on mount if `eager`). Saves ~200KB of YouTube SDK on first paint.
 */
export function LiteYouTube({ videoId, title, className, eager = false }: Props) {
  const [active, setActive] = useState(eager);

  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (active) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`}
        title={title ?? "Видео"}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className={cn("absolute inset-0 w-full h-full", className)}
        loading="lazy"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Включить видео${title ? `: ${title}` : ""}`}
      className={cn(
        "group absolute inset-0 w-full h-full overflow-hidden cursor-pointer",
        className,
      )}
    >
      <Image
        src={thumb}
        alt=""
        fill
        sizes="(max-width: 720px) 100vw, 680px"
        className="object-cover scale-110 transition-transform duration-500 group-hover:scale-100"
        unoptimized
      />
      <span
        className="absolute inset-0 bg-black/35"
        aria-hidden
      />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center size-16 rounded-full bg-accent/90 text-[#1A0F08] shadow-app-lg transition-transform group-hover:scale-110">
        <Play className="size-6 fill-current" />
      </span>
    </button>
  );
}
