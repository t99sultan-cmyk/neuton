"use client";

/**
 * Hand-crafted SVG icons for each service with subtle micro-animations
 * that activate on parent `.group:hover`. Pure SVG + CSS, no JS.
 */

import { cn } from "@/lib/utils";

type IconProps = { className?: string };

const stroke = "currentColor";
const sw = 1.6;
const props = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke,
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function StethoscopeAnim({ className }: IconProps) {
  return (
    <svg {...props} className={cn("service-icon", className)} aria-hidden>
      <path d="M5 4v5a4 4 0 0 0 8 0V4" />
      <circle cx="18" cy="14" r="2.2" className="origin-center service-icon-pulse" />
      <path d="M9 13v2a4.5 4.5 0 0 0 9 0v-1" />
      <style>{`
        .group:hover .service-icon-pulse {
          animation: stetho-pulse 1.4s ease-in-out infinite;
        }
        @keyframes stetho-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.18); }
        }
      `}</style>
    </svg>
  );
}

export function BrainAnim({ className }: IconProps) {
  return (
    <svg {...props} className={cn("service-icon", className)} aria-hidden>
      <path d="M9.5 4.5a2.5 2.5 0 0 0-2.5 2.5v.5a2.5 2.5 0 0 0-2 2.5v.5a2.5 2.5 0 0 0 2 2.5v.5a2.5 2.5 0 0 0 2.5 2.5h.5v3a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2z" />
      <path d="M14.5 4.5a2.5 2.5 0 0 1 2.5 2.5v.5a2.5 2.5 0 0 1 2 2.5v.5a2.5 2.5 0 0 1-2 2.5v.5a2.5 2.5 0 0 1-2.5 2.5h-.5v3a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" />
      <path d="M8 11h.01M16 11h.01" className="service-icon-spark" />
      <style>{`
        .group:hover .service-icon-spark {
          animation: brain-spark 1.4s ease-in-out infinite;
        }
        @keyframes brain-spark {
          0%, 100% { stroke-width: 2.4; opacity: 1; }
          50% { stroke-width: 4; opacity: 0.4; }
        }
      `}</style>
    </svg>
  );
}

export function MessageAnim({ className }: IconProps) {
  return (
    <svg {...props} className={cn("service-icon", className)} aria-hidden>
      <path d="M21 12a8.5 8.5 0 0 1-12.5 7.5L3 21l1.5-5.5A8.5 8.5 0 1 1 21 12z" />
      <circle cx="9" cy="12" r="1" className="msg-dot msg-dot-1" />
      <circle cx="12" cy="12" r="1" className="msg-dot msg-dot-2" />
      <circle cx="15" cy="12" r="1" className="msg-dot msg-dot-3" />
      <style>{`
        .group:hover .msg-dot {
          animation: msg-bounce 1.2s ease-in-out infinite;
          fill: currentColor;
        }
        .group:hover .msg-dot-2 { animation-delay: 0.15s; }
        .group:hover .msg-dot-3 { animation-delay: 0.30s; }
        @keyframes msg-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2.5px); }
        }
      `}</style>
    </svg>
  );
}

export function HandAnim({ className }: IconProps) {
  return (
    <svg {...props} className={cn("service-icon", className)} aria-hidden>
      <g className="hand-wave origin-bottom-right">
        <path d="M18 11V7.5a1.5 1.5 0 0 0-3 0V11" />
        <path d="M15 11V5.5a1.5 1.5 0 0 0-3 0V11" />
        <path d="M12 11V6.5a1.5 1.5 0 0 0-3 0V13" />
        <path d="M9 13.5V9a1.5 1.5 0 0 0-3 0v6.5a6 6 0 0 0 6 6h1a6 6 0 0 0 6-6V11a1.5 1.5 0 0 0-3 0v2" />
      </g>
      <style>{`
        .group:hover .hand-wave {
          animation: hand-wave 1.2s ease-in-out infinite;
          transform-origin: 80% 100%;
        }
        @keyframes hand-wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-12deg); }
          75% { transform: rotate(12deg); }
        }
      `}</style>
    </svg>
  );
}

export function ActivityAnim({ className }: IconProps) {
  return (
    <svg {...props} className={cn("service-icon", className)} aria-hidden>
      <path
        d="M3 12h4l2-7 4 14 2-7h6"
        className="ecg-line"
        style={{ strokeDasharray: 60, strokeDashoffset: 0 }}
      />
      <style>{`
        .group:hover .ecg-line {
          animation: ecg-draw 1.6s linear infinite;
        }
        @keyframes ecg-draw {
          from { stroke-dashoffset: 60; }
          to { stroke-dashoffset: -60; }
        }
      `}</style>
    </svg>
  );
}

export function SparklesAnim({ className }: IconProps) {
  return (
    <svg {...props} className={cn("service-icon", className)} aria-hidden>
      <path
        d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5z"
        className="spark-main"
      />
      <path d="M19 14l.7 1.6L21 16l-1.3.4L19 18l-.7-1.6L17 16l1.3-.4z" className="spark-mini" />
      <path d="M5 16l.6 1.4L7 18l-1.4.4L5 20l-.6-1.6L3 18l1.4-.6z" className="spark-mini2" />
      <style>{`
        .group:hover .spark-main {
          animation: sparkle-rot 3.5s linear infinite;
          transform-origin: 12px 9px;
        }
        .group:hover .spark-mini {
          animation: sparkle-twinkle 1.6s ease-in-out infinite;
          transform-origin: 19px 16px;
        }
        .group:hover .spark-mini2 {
          animation: sparkle-twinkle 1.6s ease-in-out infinite;
          animation-delay: 0.4s;
          transform-origin: 5px 18px;
        }
        @keyframes sparkle-rot {
          to { transform: rotate(360deg); }
        }
        @keyframes sparkle-twinkle {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.4); opacity: 0.4; }
        }
      `}</style>
    </svg>
  );
}

export const ANIM_ICONS = {
  stethoscope: StethoscopeAnim,
  brain: BrainAnim,
  messageCircle: MessageAnim,
  hand: HandAnim,
  activity: ActivityAnim,
  sparkles: SparklesAnim,
} as const;
