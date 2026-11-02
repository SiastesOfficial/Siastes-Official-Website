"use client";

import Image from "next/image";
import React from "react";

export default function Slider() {
  const logo = [
    {
      img: "/atom-computing.webp",
      alt: "atom-computing",
    },
    {
      img: "/appdirect.webp",
      alt: "appdirect",
    },
    {
      img: "/Cohere-500x264-RGB.webp",
      alt: "Cohere",
    },
    {
      img: "/wealth.webp",
      alt: "wealth",
    },
    {
      img: "/neo4j.webp",
      alt: "neo4j",
    },
    {
      img: "/poolside.webp",
      alt: "poolside",
    },
    {
      img: "/photonic.webp",
      alt: "photonic",
    },
    {
      img: "/alayacare.webp",
      alt: "alayacare",
    },
  ];

  return (
    <div className="w-full relative overflow-hidden max-md:my-12">
      <div className="w-full h-full absolute z-20 pointer-events-none top-0  items-center justify-between hidden md:flex">
        <div className="w-20 h-full bg-linear-to-r from-white to-black/1 backdrop-blur-xs "></div>
        <div className="w-20 h-full bg-linear-to-l from-white to-black/1 backdrop-blur-xs "></div>
      </div>
      <div className="w-full h-full py-4 md:py-8 flex items-center gap-16 justify-center border-y border-black/10">
        {logo.map((item, index) => (
          <Image key={index} src={item.img} alt={item.alt} width={90} height={30} className="imgLogo" />
        ))}
      </div>
    </div>
  );
}
