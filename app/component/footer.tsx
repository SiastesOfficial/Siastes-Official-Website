import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col  items-center">
      <div className="w-full max-w-7xl px-6 xl:px-16">
        <div className="border-b border-black/30 flex flex-col md:flex-row items-start pb-12 gap-16 ">
          <div className="flex flex-col gap-6">
            <Link href="/" className="">
              <Image
                src="/siastes.png"
                width={120}
                height={60}
                alt="siastes"
                className="w-auto h-auto max-md:ml-[-4px]"
              />
            </Link>
            <ul className="flex flex-col gap-1 text-xs font-light text-black/60">
              <div>
                <li>LINKEDIN</li>
              </div>
              <li>YOUTUBE</li>
              <li>X</li>
            </ul>
          </div>
          <div className="flex items-center gap-10 hi">
            <div className="w-[1px] h-22 bg-black/30 hidden lg:inline-block"></div>
            <div>
              {" "}
              <p>QUICK LINKS</p>
              <ul className="mt-3">
                <li>About Siastes </li>
                <li> Discovery by  Siastesand Northleaf</li>
                <li> Venture Scientist Fund</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="w-[1px] h-22 bg-black/30 hidden md:inline-block"></div>
            <div className="flex items-center gap-4 flex-wrap">
              {" "}
              <p className="font-light text-3xl">Stay in touch</p>
              <div className="flex items-center">
                <input className="w-full lg:w-80 h-12 border hover:outline-none p-4" />
                <div className="px-6 h-12 bg-violet-800 flex items-center justify-center text-white">
                  <p className="text-lg">Subscribe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 items-center justify-between py-4 mb-20 text-black/60">
          <p className="text-[14px]">© 2026 Inovia. All rights reserved.</p>
          <div className="flex items-center gap-2 tex-sm text-[14px]">
            <p>Privacy Policy </p>
            <p>Terms of Use</p>
            <p>Manage cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
