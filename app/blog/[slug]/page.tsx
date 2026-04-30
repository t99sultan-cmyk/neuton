import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { BottomDock } from "@/components/BottomDock";
import { BLOG_POSTS, getPost } from "@/lib/blog";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Статья не найдена" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="app-frame max-w-[680px]">
      <Header />
      <main className="flex-1 pb-28">
        <article className="pt-6 pb-12 md:pt-10 md:pb-16">
          <Container>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-ink transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              Все статьи
            </Link>

            <div className="mt-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] font-semibold text-muted">
              <Eyebrow>{post.category}</Eyebrow>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3" /> {post.readMinutes} мин
              </span>
            </div>

            <h1 className="mt-5 font-bold tracking-tight text-balance text-[30px] sm:text-[40px] leading-[1.05]">
              {post.title}
            </h1>

            <p className="mt-5 text-[16px] leading-[1.65] text-ink-soft">
              {post.excerpt}
            </p>

            <div className="mt-8 card-elevated p-6 sm:p-7 text-[14.5px] leading-[1.7] text-ink-soft space-y-4">
              <p className="font-semibold text-ink">
                Статья готовится — наши специалисты пишут материал.
              </p>
              <p>
                Полная версия статьи появится здесь в ближайшее время. Пока что
                вы можете задать конкретный вопрос напрямую нашему специалисту в
                WhatsApp — отвечаем в течение часа в рабочее время.
              </p>
              <p className="text-[13px] text-muted-2">
                Хотите получать материалы первыми? Подпишитесь на наш Instagram
                @neuton_almaty — там анонсы, истории родителей и ответы на
                частые вопросы.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <LinkButton
                variant="primary"
                size="lg"
                href={buildWhatsAppLink(WA_MESSAGES.generalInquiry)}
                target="_blank"
                rel="noopener"
              >
                <MessageCircle className="size-4" />
                Задать вопрос специалисту
              </LinkButton>
              <Link
                href="/blog"
                className="btn-base btn-ghost btn-lg"
              >
                Другие статьи
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Container>
        </article>
      </main>
      <Footer />
      <BottomDock />
    </div>
  );
}
