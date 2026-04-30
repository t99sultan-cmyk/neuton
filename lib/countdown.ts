"use client";

import { useEffect, useState } from "react";

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  deadline: Date;
};

const FRIDAY = 5;

/**
 * Returns the next Friday at 23:59 local time.
 *
 * Логика «недельной акции»:
 *  - Понедельник…четверг → ближайшая пятница этой недели в 23:59
 *  - Пятница до 23:59    → сегодня в 23:59 (последний день акции)
 *  - Пятница 23:59+      → следующая пятница (через 7 дней)
 *  - Суббота, воскресенье → ближайшая будущая пятница
 */
export function getPromoDeadline(now: Date = new Date()): Date {
  const target = new Date(now);
  // 23:59:59.999 — чтобы вся 59-я минута пятницы засчитывалась.
  target.setHours(23, 59, 59, 999);
  const day = now.getDay();

  if (day === FRIDAY) {
    if (now.getTime() <= target.getTime()) return target;
    target.setDate(target.getDate() + 7);
    return target;
  }

  const daysUntilFriday = (FRIDAY - day + 7) % 7;
  target.setDate(target.getDate() + daysUntilFriday);
  return target;
}

export function formatPromoDate(date: Date, locale = "ru-RU"): string {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
  }).format(date);
}

function diffToCountdown(deadline: Date, now: Date): Countdown {
  const diff = deadline.getTime() - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true, deadline };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, isExpired: false, deadline };
}

/**
 * Hydration-safe countdown: до первого useEffect отдаёт null,
 * чтобы SSR-разметка совпала с клиентом и не было mismatch.
 */
export function useCountdown(): Countdown | null {
  const [state, setState] = useState<Countdown | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const deadline = getPromoDeadline(now);
      setState(diffToCountdown(deadline, now));
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return state;
}
