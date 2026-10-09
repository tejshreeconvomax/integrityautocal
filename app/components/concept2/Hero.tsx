"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { business } from "../../data/business";

const covers = [
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2000&q=80",
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(${x * -16}px, ${y * -10}px, 0) scale(1.04)`;
        }
        if (titleRef.current) {
          titleRef.current.style.transform = `translate3d(${x * 4}px, ${y * 2}px, 0)`;
        }
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      {/* Vertical edge marque — left */}
      <div className="pointer-events-none absolute left-5 top-28 bottom-16 z-20 hidden flex-col items-start justify-between md:flex">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-silver [writing-mode:vertical-rl] rotate-180">
          <span className="h-1 w-1 bg-red dot-breath" />
          <span>Volume I · N° 01 · 2026</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-silver [writing-mode:vertical-rl] rotate-180">
          Fig. 001 — Hero
        </div>
      </div>

      {/* Vertical edge marque — right */}
      <div className="pointer-events-none absolute right-5 top-28 bottom-16 z-20 hidden flex-col items-end justify-between md:flex">
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-silver [writing-mode:vertical-rl]">
          Redondo Beach · California
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-silver [writing-mode:vertical-rl]">
          <span>Scroll to turn the page</span>
          <span className="h-10 w-px bg-gradient-to-b from-red to-transparent" />
        </div>
      </div>

      <div className="relative grid min-h-screen grid-cols-12 gap-6 px-6 pb-16 pt-28 md:gap-8 md:px-16 md:pb-10 md:pt-32">
        {/* Left — editorial copy */}
        <div className="relative z-10 col-span-12 flex flex-col justify-center md:col-span-6">
          <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-silver">
            <span className="h-px w-10 bg-red" />
            <span>Chapter one · The dossier</span>
          </div>

          <div ref={titleRef} className="transition-transform duration-500 ease-out">
            <h1 className="font-serif text-[14vw] leading-[0.88] tracking-tight text-off md:text-[7.2vw]">
              <span className="block">The art</span>
              <span className="block italic text-off/95">of automotive</span>
              <span className="block">
                perfection<span className="text-red">.</span>
              </span>
            </h1>
          </div>

          <p className="mt-8 max-w-md font-serif text-lg leading-relaxed text-silver md:text-xl">
            An owner-operated studio in Redondo Beach devoted to one thing — treating
            cars like the long-term investments their owners already know they are.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="#contact"
              className="ink-link group inline-flex items-center gap-3 pb-1 text-sm uppercase tracking-[0.3em] text-off transition-colors hover:text-red"
            >
              Request a consultation
              <span className="inline-block transition-transform duration-700 ease-out group-hover:translate-x-1.5">
                →
              </span>
            </a>
            <a
              href={business.phoneHref}
              className="ink-link font-serif text-xl italic text-off hover:text-red"
            >
              {business.phone}
            </a>
          </div>
        </div>

        {/* Right — magazine image */}
        <aside className="col-span-12 md:col-span-6">
          <figure className="edit-frame relative h-[65vh] w-full md:h-[82vh]">
            {/* Panel border */}
            <div className="absolute inset-0 border border-steel/50" />
            <div className="absolute inset-0 overflow-hidden">
              <div
                ref={bgRef}
                className="absolute inset-0 transition-transform duration-[1200ms] ease-out"
              >
                <Image
                  src={covers[0]}
                  alt="Dark luxury car in a quiet studio"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                {/* Secondary layer for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.75)_90%)]" />
                <div className="absolute inset-0 bg-ink/15 mix-blend-multiply" />
              </div>
            </div>

            {/* Thin frame overlays */}
            <span className="pointer-events-none absolute left-5 top-5 h-6 w-6 border-l border-t border-off/70" />
            <span className="pointer-events-none absolute right-5 top-5 h-6 w-6 border-r border-t border-off/70" />
            <span className="pointer-events-none absolute left-5 bottom-5 h-6 w-6 border-l border-b border-off/70" />
            <span className="pointer-events-none absolute right-5 bottom-5 h-6 w-6 border-r border-b border-off/70" />

            {/* Top tag */}
            <div className="absolute left-7 top-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-off">
              <span className="h-1 w-1 bg-red dot-breath" />
              <span>Fig. 001 — Studio</span>
            </div>

            {/* Bottom caption that fades in */}
            <figcaption className="pointer-events-none absolute inset-x-7 bottom-7">
              <div className="flex items-end justify-between gap-6 border-t border-off/40 pt-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-silver">
                    Subject
                  </div>
                  <div className="mt-1 font-serif text-lg italic text-off">
                    Coupe, late evening
                  </div>
                </div>
                <div className="edit-caption text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-silver">
                    Treatment
                  </div>
                  <div className="mt-1 font-serif text-lg italic text-off">
                    Multi-stage correction
                  </div>
                </div>
              </div>
            </figcaption>

            {/* Serial */}
            <div className="pointer-events-none absolute right-7 top-7 font-mono text-[10px] uppercase tracking-[0.35em] text-off">
              IAS / 2026
            </div>
          </figure>
        </aside>
      </div>

      {/* Bottom metadata bar */}
      <div className="relative z-10 mx-6 border-t border-steel/40 py-5 md:mx-16">
        <dl className="grid grid-cols-2 gap-6 text-sm text-silver md:grid-cols-5">
          <HeroMeta k="Issue" v="N° 01 · 2026" />
          <HeroMeta k="Dossier" v="Ceramic & Correction" />
          <HeroMeta k="Location" v={`${business.city}, ${business.region}`} />
          <HeroMeta k="Author" v="— The shop floor" />
          <HeroMeta k="Hours" v="Mon – Sun · 9 – 6" />
        </dl>
      </div>

      {/* Monumental ambient wordmark */}
      <div className="pointer-events-none relative mt-10 overflow-hidden md:mt-14">
        <div className="whitespace-nowrap font-serif text-[22vw] italic leading-[0.8] tracking-tighter text-off/[0.07] md:text-[18vw]">
          integrity.
        </div>
      </div>
    </section>
  );
}

function HeroMeta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.35em] text-silver">
        {k}
      </dt>
      <dd className="mt-1 font-serif text-base text-off md:text-lg">{v}</dd>
    </div>
  );
}
