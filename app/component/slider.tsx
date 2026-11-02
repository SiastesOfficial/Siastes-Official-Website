"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LOGOS = [
  { img: "/atom-computing.webp", alt: "atom-computing" },
  { img: "/appdirect.webp", alt: "appdirect" },
  { img: "/Cohere-500x264-RGB.webp", alt: "Cohere" },
  { img: "/wealth.webp", alt: "wealth" },
  { img: "/neo4j.webp", alt: "neo4j" },
  { img: "/poolside.webp", alt: "poolside" },
  { img: "/photonic.webp", alt: "photonic" },
  { img: "/alayacare.webp", alt: "alayacare" },
];

// Repeated so one group always out-spans wide screens.
const GROUP = [...LOGOS, ...LOGOS];

export default function Slider() {
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const loop = gsap.to(track.current, {
          xPercent: -50,
          duration: 40,
          ease: "none",
          repeat: -1,
        });

        const el = track.current!;
        const pause = () => gsap.to(loop, { timeScale: 0, duration: 0.4 });
        const play = () => gsap.to(loop, { timeScale: 1, duration: 0.4 });
        el.addEventListener("mouseenter", pause);
        el.addEventListener("mouseleave", play);

        return () => {
          el.removeEventListener("mouseenter", pause);
          el.removeEventListener("mouseleave", play);
        };
      });
    },
    { scope: track }
  );

  return (
    <div className="relative w-full overflow-hidden border-y border-black/10 py-4 max-md:my-12 md:py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-40 bg-linear-to-r from-white to-transparent md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-40 bg-linear-to-l from-white to-transparent md:block" />

      <div ref={track} className="flex w-max will-change-transform">
        {[0, 1].map((group) => (
          <div
            key={group}
            aria-hidden={group === 1}
            className="flex shrink-0 items-center"
          >
            {GROUP.map((item, i) => (
              <div key={i} className="shrink-0 pr-16">
                <Image
                  src={item.img}
                  alt={group === 0 ? item.alt : ""}
                  width={90}
                  height={30}
                  className="h-auto w-[90px] imgLogo"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}