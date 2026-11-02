import { CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function News() {
  return (
    <div className="w-full py-16 flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 xl:px-16 ">
        <div className="w-full flex items-center justify-between">
          <p className="text-3xl md:text-5xl font-bold">Latest News</p>
          <div className="flex items-center gap-2">
            <Link href="/">
              <p className="text-sm text-nowrap">View all article</p>
            </Link>
            <CaretRightIcon />
          </div>
        </div>
        <div className="py-12 flex flex-col md:flex-row gap-12">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

const NewsCard = () => {
  return (
    <div className="w-full md:w-100 h-100 md:h-130 border border-black/20 overflow-hidden rounded-xl flex flex-col ">
      <div className="w-full relative overflow-hidden h-[60%]">
        <Image
          src="/inovia-q3-2026-newsletter-800x450.webp"
          sizes="100vh"
          fill
          loading="eager"
          alt="vortex"
          className="object-cover w-auto"
        />
      </div>
      <div className="border-t p-5">
        <p className="py-3 text-xl">
          Inovia Q3: significant portfolio rounds, 6 new investments, and key
          ecosystem events
        </p>
        <div className="py-2 flex items-center gap-1 cursor-pointer">
          <p className="text-black/60 ">Read more</p>
          <CaretRightIcon />
        </div>
      </div>
    </div>
  );
};
