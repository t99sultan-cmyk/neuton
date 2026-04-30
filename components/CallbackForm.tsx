"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  className?: string;
  source?: string;
};

export function CallbackForm({ className, source = "callback-form" }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [childAge, setChildAge] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, phone, childAge, source }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Ошибка отправки");
      setStatus("success");
      track.callbackSubmit(source);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Что-то пошло не так");
    }
  };

  if (status === "success") {
    return (
      <div
        className={cn(
          "card-elevated p-6 sm:p-7 flex flex-col items-center text-center gap-3",
          className,
        )}
      >
        <span className="grid place-items-center size-14 rounded-full bg-mint/15 border border-mint/40 text-mint">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="font-bold text-[20px] tracking-tight">Заявка принята</h3>
        <p className="text-[14px] leading-[1.55] text-ink-soft max-w-sm">
          Перезвоним в течение часа в рабочее время. Если очень срочно —
          напишите нам в WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={cn("flex flex-col gap-3", className)}>
      <div className="grid grid-cols-1 gap-3">
        <input
          type="text"
          name="name"
          required
          minLength={2}
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          className="h-12 px-4 rounded-2xl bg-surface-2 border border-border-2 text-[15px] text-ink placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
        />
        <input
          type="tel"
          name="phone"
          required
          inputMode="tel"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
          className="h-12 px-4 rounded-2xl bg-surface-2 border border-border-2 text-[15px] text-ink placeholder:text-muted focus:outline-none focus:border-accent transition-colors tabular"
        />
        <input
          type="text"
          name="childAge"
          placeholder="Возраст ребёнка (необязательно)"
          value={childAge}
          onChange={(e) => setChildAge(e.target.value)}
          className="h-12 px-4 rounded-2xl bg-surface-2 border border-border-2 text-[15px] text-ink placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Отправляем…
          </>
        ) : (
          <>
            Перезвоните мне
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
      {error && (
        <p className="text-[13px] text-danger" role="alert">
          {error}
        </p>
      )}
      <p className="text-[12px] text-muted-2 leading-snug">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
        Перезвоним в течение часа в рабочее время.
      </p>
    </form>
  );
}
