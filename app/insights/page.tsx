'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ARTICLES, HUES, type Article } from './[slug]/articles'


const PAGE_SIZE = 6

const container = 'mx-auto w-full max-w-[1160px] px-6'
const cardShadow =
  'shadow-[0_1px_2px_rgba(18,40,58,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(18,40,58,0.12)]'

export default function Page() {
  const [active, setActive] = useState('All')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const filtered = useMemo(
    () => (active === 'All' ? ARTICLES : ARTICLES.filter((a) => a.category === active)),
    [active]
  )

  const [featured, ...rest] = filtered
  const shown = rest.slice(0, visible)
  const hasMore = rest.length > visible

  const select = (category: string) => {
    setActive(category)
    setVisible(PAGE_SIZE)
  }

  return (
    <div className="min-h-screen font-sans text-[#12283a] antialiased mb-24">
      <section className="pb-14 pt-[72px] sm:pb-24 sm:pt-[120px]">
        <div className={container}>
          <p className="mb-6 text-[13px] font-semibold uppercase tracking-[0.25em] text-violet-700">
            Insights
          </p>
          <h1 className="mb-8 text-[clamp(32px,7vw,70px)] font-bold leading-[1.2] tracking-tight text-violet-700">
            <span className="border-b-[3px] border-violet-700">The latest</span> from us
          </h1>
          <p className="text-xl text-violet-700/70">
            News, ideas, and perspectives from our team on building global tech companies.
          </p>
        </div>
      </section>

      <main className="pb-24">
        <div className={container}>
          {featured && (
            <Link
              href={`/insights/${featured.slug}`}
              className={`grid overflow-hidden rounded-xl bg-white lg:grid-cols-[1.1fr_1fr] border border-black/20 ${cardShadow}`}
            >
              <div className={`min-h-65 lg:min-h-105 ${HUES[featured.hue]}`} />
              <div className="flex flex-col justify-center gap-6 px-7 py-8 lg:px-12 lg:py-14">
                <Meta article={featured} />
                <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-[40px]">
                  {featured.title}
                </h2>
                <p className="text-lg leading-relaxed text-[#5b6b78]">{featured.excerpt}</p>
                <ReadMore />
              </div>
            </Link>
          )}

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((a) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className={`flex flex-col overflow-hidden rounded-[10px] bg-white border border-black/20 ${cardShadow}`}
              >
                <div className={`aspect-video ${HUES[a.hue]}`} />
                <div className="flex flex-1 flex-col gap-3.5 px-7 pb-7 pt-6">
                  <Meta article={a} />
                  <h3 className="text-[20px] font-semibold leading-snug tracking-tight">{a.title}</h3>
                  <p className="flex-1 text-[15px] leading-relaxed text-[#5b6b78]">{a.excerpt}</p>
                  <ReadMore />
                </div>
              </Link>
            ))}
          </div>

          {hasMore && (
            <div className="mt-14 flex justify-center">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="rounded border border-[#c4cacf] px-10 py-[18px] text-[13px] font-semibold uppercase tracking-[0.2em] text-[#4a5a67] transition-colors hover:bg-[#eceeef]"
              >
                Load more articles
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function Meta({ article }: { article: Article }) {
  return (
    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7d8c]">
      {article.category} <i aria-hidden className="mx-1.5 not-italic">•</i> {article.date}
    </span>
  )
}

function ReadMore() {
  return (
    <span className="inline-block text-[13px] font-bold uppercase  text-violet-600 underline underline-offset-2">
      Read more 
    </span>
  )
}