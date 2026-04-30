import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { BottomDock } from "@/components/BottomDock";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Блог о развитии и коррекции",
  description:
    "Экспертные статьи о логопедии, АВА-терапии, сенсорной интеграции и развитии детей с особенностями. От специалистов центра «Ньютон» в Алматы.",
};

export default function BlogIndex() {
  return (
    <div className="app-frame max-w-[680px]">
      <Header />
      <main className="flex-1 pb-28">
        <section className="pt-6 pb-12 md:pt-10 md:pb-16">
          <Container>
            <Eyebrow>Блог</Eyebrow>
            <h1 className="mt-5 font-bold tracking-tight text-balance text-[34px] sm:text-[44px] leading-[1.05]">
              Экспертные статьи <span className="text-accent">от специалистов центра</span>
            </h1>
            <p className="mt-5 text-[15px] leading-[1.55] text-ink-soft text-pretty">
              Простыми словами объясняем, что такое АВА, как работает сенсорная
              интеграция и когда стоит обратиться к логопеду. Без воды и
              «материнского хейтерства».
            </p>

            <ul className="mt-10 grid gap-3">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block card-elevated p-5 sm:p-6 hover:border-border-strong transition-colors"
                  >
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] font-semibold text-muted">
                      <span className="text-accent">{post.category}</span>
                      <span aria-hidden>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3" /> {post.readMinutes} мин
                      </span>
                    </div>
                    <h2 className="mt-3 font-bold text-[20px] sm:text-[22px] tracking-tight leading-tight">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">
                      Читать
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[12px] text-muted-2">
              Скоро добавим больше статей. Подпишитесь на наш Instagram, чтобы
              не пропустить.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
      <BottomDock />
    </div>
  );
}
