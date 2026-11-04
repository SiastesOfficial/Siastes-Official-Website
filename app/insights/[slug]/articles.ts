export type Hue = 'violet' | 'slate' | 'teal' | 'ink' | 'mist' | 'navy'

export type Article = {
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  author: string
  hue: Hue
  body: string[]
}

export const HUES: Record<Hue, string> = {
  violet: 'bg-[linear-gradient(135deg,#2c3cc4_0%,#8a4fd8_45%,#ff7a59_100%)]',
  slate: 'bg-[linear-gradient(135deg,#1d2b3a_0%,#4a5f73_100%)]',
  teal: 'bg-[linear-gradient(135deg,#2f7d8c_0%,#5fb1bd_100%)]',
  ink: 'bg-[linear-gradient(135deg,#0f2233_0%,#2b4a63_100%)]',
  mist: 'bg-[linear-gradient(135deg,#f3f4f5_0%,#d9dde0_100%)]',
  navy: 'bg-[linear-gradient(135deg,#0b2a5b_0%,#1f5fc2_100%)]',
}

const PLACEHOLDER_BODY = [
  'Replace this with your article content. Each string in this array renders as one paragraph, so the page stays easy to feed from a CMS or markdown pipeline later.',
  'Keep paragraphs short and focused. The reading column is capped at a comfortable line length, with generous leading, so long-form pieces stay easy on the eye.',
  'When you are ready to go dynamic, swap getArticle for a fetch against your CMS. Nothing in the page component needs to change.',
]

export const ARTICLES: Article[] = [
  {
    slug: 'q3-portfolio-recap',
    category: 'Newsletter',
    date: 'October 5, 2026',
    title: 'Q3 recap: major portfolio rounds, six new investments, and key ecosystem events',
    excerpt:
      'Q3 was a busy quarter, with several new investments, major portfolio transactions in the making, and plenty happening across the tech ecosystem.',
    author: 'The Team',
    hue: 'violet',
    body: PLACEHOLDER_BODY,
  },
  {
    slug: 'building-global-ai-champions-from-home',
    category: 'Industry Insights',
    date: 'September 15, 2026',
    title: 'The Next Chapter: Building Global AI Champions From Home',
    excerpt:
      'I sat down with a founder at this week’s growth forum to talk about what it takes to build a global AI company from here…',
    author: 'Jane Doe',
    hue: 'slate',
    body: PLACEHOLDER_BODY,
  },
  {
    slug: 'the-open-source-inflection-point',
    category: 'Industry Insights',
    date: 'July 29, 2026',
    title: 'The Open Source Inflection Point',
    excerpt:
      'Open source is everywhere. Building a business on top of it has never been harder. The developer toolchain has fundamentally…',
    author: 'Jane Doe',
    hue: 'teal',
    body: PLACEHOLDER_BODY,
  },
  {
    slug: 'q2-portfolio-recap',
    category: 'Newsletter',
    date: 'July 2, 2026',
    title: 'Q2 recap: two exits, two new investments, one new partner, and key ecosystem events',
    excerpt: 'We hope you’re enjoying the start of summer.',
    author: 'The Team',
    hue: 'ink',
    body: PLACEHOLDER_BODY,
  },
  {
    slug: 'promoting-a-new-partner',
    category: 'Company News',
    date: 'June 5, 2026',
    title: 'Promoting a new partner to the investment team',
    excerpt:
      'She joins the growth investment partnership after seven years of building the firm, its portfolio, and its people…',
    author: 'The Team',
    hue: 'mist',
    body: PLACEHOLDER_BODY,
  },
  {
    slug: 'velocity-and-innovation-as-a-strategy',
    category: 'Industry Insights',
    date: 'May 13, 2026',
    title: 'Velocity and Innovation as a Strategy: Building the Giants of Tomorrow',
    excerpt:
      'The country trains roughly a tenth of the world’s top AI talent, yet captures only a sliver of global venture…',
    author: 'Jane Doe',
    hue: 'slate',
    body: PLACEHOLDER_BODY,
  },
  {
    slug: 'two-firms-join-forces',
    category: 'Company News',
    date: 'May 7, 2026',
    title: 'Two firms join forces to accelerate the venture ecosystem',
    excerpt:
      'We are excited to share that we are working with a partner to launch a new discovery program, a…',
    author: 'The Team',
    hue: 'navy',
    body: PLACEHOLDER_BODY,
  },
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug)
}