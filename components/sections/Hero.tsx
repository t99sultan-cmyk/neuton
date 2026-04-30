import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Video } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CountdownTimer } from "@/components/CountdownTimer";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/utils";

const LOGO_URL = "https://taplink.st/a/b/5/0/e/cc76ee.jpg";
const YOUTUBE_ID = "aDavJmA5Ocs";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden"
    >
      {/* Атмосферные blobs */}
      <div
        className="absolute -top-32 -right-32 size-[640px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #E8B589, transparent)" }}
        aria-hidden
      />
      <div
        className="absolute top-40 -left-32 size-[520px] rounded-full opacity-25 blur-[110px]"
        style={{ background: "radial-gradient(closest-side, #A8D9BC, transparent)" }}
        aria-hidden
      />

      <Container className="relative">
        <Eyebrow>Алматы · Открыто сегодня · 09:00 — 19:00</Eyebrow>

        <div className="mt-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-10">
          {/* LEFT — main hero card */}
          <div className="relative card-elevated shadow-app-lg overflow-hidden p-6 sm:p-10 lg:p-12">
            <div
              className="absolute -top-40 -right-40 size-[420px] rounded-full opacity-30 blur-[80px]"
              style={{ background: "radial-gradient(closest-side, #E8B589, transparent)" }}
              aria-hidden
            />

            {/* Лого + название */}
            <div className="relative flex items-center gap-3 flex-wrap">
              <span className="relative shrink-0 size-11 rounded-2xl overflow-hidden ring-1 ring-border-strong shadow-app">
                <Image
                  src={LOGO_URL}
                  alt="Логотип Ньютон"
                  fill
                  sizes="44px"
                  className="object-cover"
                  unoptimized
                />
              </span>
              <div className="min-w-0">
                <div className="font-bold text-[17px] leading-none">Ньютон</div>
                <div className="mt-1 text-[11.5px] text-muted">
                  Детский коррекционный центр
                </div>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-mint/15 text-mint border border-mint/30 px-2.5 py-1 text-[10.5px] font-semibold tracking-wide">
                <span className="size-1.5 rounded-full bg-mint animate-pulse-soft" />
                Сейчас работаем
              </span>
            </div>

            <h1 className="relative mt-7 font-bold tracking-tight text-balance text-[34px] sm:text-[52px] lg:text-[68px] leading-[1.02]">
              Помогаем детям{" "}
              <span className="shimmer-text">расти спокойно</span>
              <br className="hidden sm:block" />
              а родителям —{" "}
              <span className="text-accent">быть рядом</span>
            </h1>

            <p className="relative mt-6 max-w-[560px] text-[15.5px] sm:text-[17.5px] leading-[1.55] text-ink-soft text-pretty">
              Профессиональная коррекция речи, поведения и развития под наблюдением
              сертифицированных специалистов. В каждом зале — камеры прямой
              трансляции: вы видите занятие в реальном времени с любого устройства.
            </p>

            <div className="relative mt-7 flex flex-col sm:flex-row gap-3">
              <LinkButton
                variant="primary"
                size="lg"
                href={buildWhatsAppLink(WA_MESSAGES.promoDiagnostic)}
                target="_blank"
                rel="noopener"
              >
                Записаться за {formatPrice(5000)} ₸
                <ArrowRight className="size-4" />
              </LinkButton>
              <LinkButton variant="ghost" size="lg" href="#services">
                Посмотреть услуги
              </LinkButton>
            </div>

            {/* mini stats row */}
            <div className="relative mt-9 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { v: "500+", l: "детей у нас" },
                { v: "4.9", l: "★ от родителей" },
                { v: "6", l: "направлений" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl bg-surface-2/60 border border-border px-3 py-2.5 sm:px-4 sm:py-3"
                >
                  <div className="font-bold text-[18px] sm:text-[22px] leading-none tracking-tight">
                    {s.v}
                  </div>
                  <div className="mt-1.5 text-[10.5px] sm:text-[11.5px] text-muted leading-tight">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — vertical promo with video + timer */}
          <div className="grid gap-4">
            {/* Video reel */}
            <div className="relative overflow-hidden rounded-[28px] card-elevated shadow-app-lg">
              <div className="relative aspect-[10/13] sm:aspect-[9/12]">
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`}
                  title="Видео центра Ньютон"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
                {/* Top overlay */}
                <div className="pointer-events-none absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-bg/70 backdrop-blur px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-ink border border-border-2">
                    <Video className="size-3" />
                    Внутри центра
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-danger/95 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white">
                    <span className="size-1.5 rounded-full bg-white animate-pulse-soft" />
                    LIVE
                  </span>
                </div>
              </div>
            </div>

            {/* Promo card */}
            <div className="relative card-elevated shadow-app-lg p-6 sm:p-7 overflow-hidden">
              <div
                className="absolute -top-20 -right-20 size-60 rounded-full opacity-35 blur-3xl"
                style={{ background: "radial-gradient(closest-side, #E8B589, transparent)" }}
                aria-hidden
              />
              <div className="relative flex items-start gap-3">
                <span className="grid place-items-center size-10 rounded-2xl bg-accent/15 border border-accent/30">
                  <Star className="size-5 text-accent fill-accent/30" />
                </span>
                <div className="flex-1">
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-accent">
                    Акция этой недели · −50%
                  </div>
                  <div className="mt-1 font-bold text-[20px] leading-tight">
                    Диагностика ребёнка
                  </div>
                </div>
              </div>

              <div className="relative mt-5 flex items-baseline gap-2.5 flex-wrap">
                <span className="font-bold text-[40px] sm:text-[52px] leading-none tracking-tight">
                  {formatPrice(5000)}{" "}
                  <span className="text-muted text-[20px] sm:text-[24px] font-semibold">₸</span>
                </span>
                <span className="text-muted line-through text-[15px] sm:text-[16px] tabular">
                  {formatPrice(10000)} ₸
                </span>
              </div>

              <ul className="relative mt-5 space-y-1.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="size-3.5 text-mint" />
                  Командная диагностика 30–60 мин
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="size-3.5 text-mint" />
                  Индивидуальный маршрут коррекции
                </li>
              </ul>

              <div className="relative my-5 h-px bg-border" />

              <CountdownTimer variant="compact" tone="ink" />

              <LinkButton
                variant="primary"
                size="lg"
                href={buildWhatsAppLink(WA_MESSAGES.promoDiagnostic)}
                target="_blank"
                rel="noopener"
                className="relative mt-5 w-full"
              >
                Записаться по акции
                <ArrowRight className="size-4" />
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
