import Image from "next/image";
import { CEO, TONES } from "./team";

export default function Team() {
  const initials = CEO.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="min-h-screen w-full font-sans text-[#12283a] antialiased md:my-12">
      <section className="w-full bg-violet-600">
        <div className="mx-auto max-w-7xl px-6 py-20 text-white sm:py-28">
          <p className="mb-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-violet-200">
            Leadership
          </p>
          <h1 className="mb-6 text-[clamp(36px,7vw,70px)] font-bold  tracking-tight">
            <span className="border-b-[3px] border-violet-200">
              Meet the CEO
            </span>{" "}
            behind Siastes
          </h1>
          <p className="max-w-2xl text-xl text-violet-100">
            The person partnering with founders through their journey.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-14">
        <article className="grid overflow-hidden rounded-2xl border border-black/15 bg-white shadow-[0_12px_32px_rgba(18,40,58,0.10)] md:grid-cols-[0.9fr_1.1fr]">
          <div
            role="img"
            aria-label={`Portrait placeholder for ${CEO.name}`}
            className={`flex min-h-80 items-center justify-center bg-linear-to-br md:min-h-[600px] relative overflow-hidden`}
          >
            <Image
              src={CEO.img}
              fill
              className="object-cover object-center"
              alt={CEO.name}
            />
          </div>

          <div className="flex flex-col justify-center gap-6 px-8 py-10 sm:px-12 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-violet-700">
              {CEO.role} · {CEO.city}
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {CEO.name}
            </h2>
            <div className="space-y-5 text-[17px] leading-8 text-[#5b6b78]">
              {CEO.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
