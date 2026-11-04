"use client";

import { useGSAP } from "@gsap/react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "#" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  // Build the timeline once. It's paused; `open` drives play / reverse.
  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set(panel.current, { yPercent: -100, autoAlpha: 0 });

      timeline.current = gsap
        .timeline({ paused: true })
        .to(panel.current, {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power4.inOut",
        })
        .from(
          "[data-menu-item]",
          {
            y: 48,
            autoAlpha: 0,
            duration: 0.55,
            stagger: 0.07,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .timeScale(reduceMotion ? 100 : 1);
    },
    { scope: root }
  );

  useEffect(() => {
    const tl = timeline.current;
    if (!tl) return;
    if (open) tl.play();
    else tl.reverse();
  }, [open]);

  // Lock page scroll while open, close on Escape, and close if the viewport grows past mobile.
  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const desktop = window.matchMedia("(min-width: 768px)");

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", close);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", close);
    };
  }, [open]);

  return (
    <div ref={root} className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="relative z-50 cursor-pointer text-[#12283a]"
      >
        {open ? <XIcon size={32} /> : <ListIcon size={32} />}
      </button>

      <div
        id="mobile-menu"
        ref={panel}
        className="invisible fixed inset-0 z-40 flex flex-col justify-between bg-white px-6 pb-10 pt-[104px]"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-2">
            {LINKS.map(({ label, href }) => (
              <li key={label} data-menu-item className="border-b border-[#e3e6e8]">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-5 text-[16px] font-bold leading-none tracking-tight text-[#12283a] transition-colors hover:text-violet-700"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          data-menu-item
          href="#"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6b78]"
        >
          FR
        </a>
      </div>
    </div>
  );
}