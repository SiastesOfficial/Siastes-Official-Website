import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ARTICLES, HUES, getArticle } from "./articles";
import Image from "next/image";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default function ArticlePage({ params }: Props) {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <main className="pb-32 pt-16">
        <article>
          <Link
            href="/insights"
            className="mx-auto w-full max-w-[720px] px-6 flex gap-2 items-center group/back">
            <Image src="/arrow.svg" alt="arrow" width={16} height={16} />
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-violet-600  group-hover/back:underline">
              Back to insights
            </p>
          </Link>

          <Suspense fallback={<ArticleSkeleton />}>
            <ArticleDetails params={params} />
          </Suspense>
        </article>
      </main>
    </div>
  );
}

async function ArticleDetails({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <header className="mx-auto w-full max-w-[720px] px-6">
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-[#2f7d8c]">
          {article.category}
        </p>
        <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-[52px]">
          {article.title}
        </h1>
        <p className="mt-8 flex items-center gap-3 text-[15px] text-[#5b6b78]">
          <time>{article.date}</time>
          <span aria-hidden>•</span>
          <span>
            By{" "}
            <span className="border-b border-[#9aa8b3] text-[#12283a]">
              {article.author}
            </span>
          </span>
        </p>
      </header>

      <div className="mx-auto mt-12 w-full max-w-[1040px] px-6">
        <div
          className={`aspect-[16/9] rounded-2xl ${HUES[article.hue]}`}
          role="img"
          aria-label=""
        />
      </div>

      <div className="mx-auto mt-14 w-full max-w-[720px] space-y-7 px-6 text-lg leading-9 text-[#3d4f5c]">
        {article.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </>
  );
}

function ArticleSkeleton() {
  return (
    <div aria-hidden className="animate-pulse">
      <div className="mx-auto mt-10 w-full max-w-[720px] px-6">
        <div className="h-3 w-32 rounded bg-neutral-200" />
        <div className="mt-5 h-12 w-full rounded bg-neutral-200" />
        <div className="mt-3 h-12 w-2/3 rounded bg-neutral-200" />
        <div className="mt-8 h-4 w-56 rounded bg-neutral-200" />
      </div>
      <div className="mx-auto mt-12 w-full max-w-[1040px] px-6">
        <div className="aspect-[16/9] rounded-2xl bg-neutral-200" />
      </div>
    </div>
  );
}
