"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "neuton:sound";

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export type SoundKind = "tap" | "pop" | "success";

/** Synthesizes a short, premium-sounding tap. No audio file needed. */
export function playSound(kind: SoundKind = "tap"): void {
  if (!isSoundEnabled()) return;
  const c = getCtx();
  if (!c) return;
  const now = c.currentTime;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = "sine";

  if (kind === "tap") {
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(420, now + 0.07);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
    osc.connect(gain).connect(c.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  } else if (kind === "pop") {
    osc.frequency.setValueAtTime(620, now);
    osc.frequency.exponentialRampToValueAtTime(280, now + 0.05);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.16, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
    osc.connect(gain).connect(c.destination);
    osc.start(now);
    osc.stop(now + 0.07);
  } else {
    // success: two-tone
    const osc2 = c.createOscillator();
    osc.type = "triangle";
    osc2.type = "triangle";
    osc.frequency.setValueAtTime(660, now);
    osc2.frequency.setValueAtTime(990, now + 0.06);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.16, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    osc.connect(gain);
    osc2.connect(gain).connect(c.destination);
    osc.start(now);
    osc.stop(now + 0.08);
    osc2.start(now + 0.06);
    osc2.stop(now + 0.18);
  }
}

export function isSoundEnabled(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "1";
}

export function setSoundEnabled(on: boolean): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, on ? "1" : "0");
  window.dispatchEvent(new CustomEvent("neuton:sound", { detail: on }));
}

export function useSoundEnabled(): [boolean, (on: boolean) => void] {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(isSoundEnabled());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<boolean>).detail;
      setEnabled(typeof detail === "boolean" ? detail : isSoundEnabled());
    };
    window.addEventListener("neuton:sound", onChange);
    return () => window.removeEventListener("neuton:sound", onChange);
  }, []);
  return [
    enabled,
    (on: boolean) => {
      setSoundEnabled(on);
      setEnabled(on);
    },
  ];
}
