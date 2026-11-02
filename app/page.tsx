"use client";

import Image from "next/image";
import Partner from "./component/partner";
import News from "./component/news";
import Slider from "./component/slider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  useGSAP(() => {
    gsap.fromTo(
      ".heading",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7},
    );
     gsap.fromTo(
      ".subheading",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 , delay:0.2},
    )
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-neue py-12 ">
      <main className="flex flex-1  w-full max-w-7xl flex-col items-center   md:px-24 xl:px-16 sm:items-start  ">
        <div className="w-full flex flex-col md:flex-row  items-center md:h-150 xl:h-162.5 overflow-hidden relative px-6 md:px-auto">
          <div className="w-full ">
            <h1 className="text-6xl xl:text-8xl font-black heading translate-y-[400px]  bg-gradient-to-r opacity-0 from-violet-600 to-black/70 bg-clip-text text-transparent">
              Backing founders, building tomorrow.
            </h1>
            <p className="mt-8 font-light text-lg lg:text-xl subheading opacity-0">
              Inovia partners with founders at every stage to build generational
              companies.
            </p>
          </div>
          <div className="w-[50%] xl:w-[70%] h-150 xl:h-230 relative overflow-hidden shrink-0 hidden lg:inline-block">
            <Image
              src="/vortex.webp"
              sizes="100vh"
              fill
              loading="eager"
              alt="vortex"
              className="w-auto"
            />
          </div>
        </div>
        <div className="w-full  relative overflow-hidden">
          <Slider />
        </div>
        <Partner />
      </main>
      <div className="w-full overflow-hidden relative left-0 bg-violet-600 py-24 flex  items-center justify-center ">
        <div className=" max-w-7xl mx-auto w-full px-8 xl:px-16 ">
          <p className="text-6xl font-bold text-white md:inline-block hidden">
            Supporting ambitions from <br />{" "}
            <span className=" underline  decoration-2 decoration-cyan-400 pr-3">
              Discovery
            </span>
            to
            <span className="p-3  underline  decoration-2 decoration-cyan-400">
              Venture
            </span>
            to{" "}
            <span className="px-2  underline  decoration-2 decoration-cyan-400">
              Growth
            </span>
          </p>
          <p className="text-4xl font-bold text-white md:hidden ">
            Supporting ambitions from Discovery to Venture to Growth
          </p>
        </div>
      </div>
      <News />
    </div>
  );
}
