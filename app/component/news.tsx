import { CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// 1. Create an array of your news data
const newsArticles = [
  {
    id: 1,
    title:
      "Siastes Q3: significant portfolio rounds, 6 new investments, and key ecosystem events",
    imageSrc: "/inovia-q3-2026-newsletter-800x450.webp",
    link: "/news/q3-update",
  },
  {
    id: 2,
    title:
      "The State of SaaS in 2026: Siastes releases new report on enterprise software trends",
    imageSrc: "/saas-report-2026.jpg",
    link: "/news/saas-report",
  },
  {
    id: 3,
    title: "Welcome to the portfolio: Why we led the Series A in QuantumFlow",
    imageSrc: "/quantumflow-investment.jpg", 
    link: "/news/quantumflow",
  },
];

export default function News() {
  return (
    <div className="w-full py-16 flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 xl:px-16 ">
        <div className="w-full flex items-center justify-between">
          <p className="text-3xl md:text-5xl font-bold">Latest News</p>
          <div className="flex items-center gap-2 hover:text-black/70 transition-colors">
            <Link href="/news">
              <p className="text-sm text-nowrap">View all articles</p>
            </Link>
            <CaretRightIcon />
          </div>
        </div>

        {/* 2. Map through the data to render the cards */}
        <div className="py-12 flex flex-col md:flex-row gap-12">
          {newsArticles.map((article) => (
            <NewsCard
              key={article.id}
              title={article.title}
              imageSrc={article.imageSrc}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. Update the component to accept and use the props
const NewsCard = ({
  title,
  imageSrc,
  link,
}: {
  title: string;
  imageSrc: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="w-full md:w-100 h-100 md:h-130 border border-black/20 overflow-hidden rounded-xl flex flex-col cursor-pointer group hover:shadow-md transition-all"
    >
      <div className="w-full relative overflow-hidden h-[60%]">
        <Image
          src={imageSrc}
          sizes="(max-width: 768px) 100vw, 33vw"
          fill
          loading="lazy"
          alt={title}
          className="object-cover w-auto group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="border-t p-5 flex flex-col justify-between flex-grow">
        <p className="py-3 text-xl line-clamp-3">{title}</p>
        <div className="py-2 flex items-center gap-1">
          <p className="text-black/60 group-hover:text-black transition-colors">
            Read more
          </p>
          <CaretRightIcon className="text-black/60 group-hover:text-black transition-colors" />
        </div>
      </div>
    </Link>
  );
};
