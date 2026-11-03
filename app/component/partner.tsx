import Image from "next/image";
import React from "react";

export default function Partner() {
  return (
    <div className="w-full py-12 md:py-24 max-md:px-6">
      <h2 className="text-4xl md:text-5xl">
        What it’s like to partner with Siastes
      </h2>
      <div className="py-12 flex flex-col md:flex-row items-center gap-10">
        <Card
          topic="All-In Conviction"
          sub="When we're in, we're all in."
          mess="From our early days to becoming a profitable super app, Siastes was right there. They didn't just write a check—they backed us through the hard pivots. Having investors who don't flinch when things get tough changes how you build."
          name="HUSSEIN FAZAL"
          position="Co-Founder & CEO"
          img="/hussein-02.webp"
          logo="/super.webp"
        />
        <Card
          topic="Strategic Global Reach"
          sub="Connecting you to the rooms that matter."
          mess="Siastes acts as our eyes and ears in global markets, especially the GCC. They drive on-the-ground visibility, coordinate real-time conversations, and make sure our story lands. They aren't just capital; they're a true force multiplier."
          name="AIDAN GOMEZ"
          position="Co-Founder & CEO"
          img="/aidan-02.webp"
          logo="/co.webp"
        />
        <Card
          topic="Built by Builders"
          sub="We know what it takes to scale."
          mess="They understand the operational reality of growing a company because they’ve been in the trenches. From navigating early hurdles to scaling our product, Siastes provided hands-on, practical guidance. They don't just advise—they roll up their sleeves."
          name="MICHAEL KATCHEN"
          position="Co-Founder & CEO"
          img="/michael-02.webp"
          logo="/wealth.webp"
        />
      </div>
    </div>
  );
}

const Card = ({
  topic,
  sub,
  mess,
  name,
  position,
  logo,
  img,
}: {
  topic: string;
  sub: string;
  mess: string;
  name: string;
  position: string;
  logo: string;
  img: string;
}) => {
  return (
    <div className="w-full lg:w-100 h-fit ">
      <div className="w-20 h-0.5 bg-black"></div>
      <p className="pt-6 pb-2 text-3xl text-pretty">{topic}</p>
      <p className="font-light text-[18px] mb-10">{sub}</p>
      <div className="my-4  border border-black/20 h-120 md:h-150 rounded-3xl flex flex-col overflow-hidden relative">
        <div className="w-full h-[70%] relative">
          <Image
            src={img}
            sizes="100vh"
            fill
            loading="eager"
            alt="vortex"
            className="object-cover"
          />
        </div>
        <div className="w-full bottom-0 bg-white absolute h-[60%] border-t border-black/20 flex-col flex gap-4 shrink-0 z-10 p-5 ">
          <p className="w-full text-xs md:text-[16px] md:h-[3500px]  font-light text-ellipsis">
            “{mess}”
          </p>
          <div className="w-full h-full  border-t border-black/20 flex flex-col md:flex-row md:items-center md:justify-between p-2 pt-6">
            <div className="">
              <p className="text-sm md:text-[14px]">{name}</p>
              <p className="text-xs md:text-sm font-light ">{position}</p>
            </div>
            <Image
              width={130}
              src={logo}
              height={70}
              alt=""
              className="md:flex hidden"
            />
            <Image
              width={90}
              src={logo}
              height={20}
              alt=""
              className="md:hidden flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
