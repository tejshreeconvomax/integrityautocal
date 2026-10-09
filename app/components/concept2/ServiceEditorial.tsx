"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "../../data/business";

const images = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
];

export default function ServiceEditorial() {
  const [idx, setIdx] = useState(0);
  const current = services[idx];

  return (
    <section id="services" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        {/* Head */}
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
              Chapter II
            </div>
            <div className="mt-2 font-serif text-xl italic text-off">
              The services
            </div>
          </div>
          <h2 className="md:col-span-9 font-serif text-5xl leading-[1.05] tracking-tight text-off md:text-7xl">
            Six specialities, selected and sharpened over
            <span className="italic text-off/80"> many quiet hours in the shop</span>.
          </h2>
        </div>

        {/* Editorial split */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          {/* Image side with transition */}
          <div className="relative md:col-span-7">
            <div className="edit-frame relative aspect-[4/5] overflow-hidden border border-steel/40 md:aspect-[11/13]">
              {services.map((s, i) => (
                <Image
                  key={s.id}
                  src={images[i]}
                  alt={s.name}
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className={`object-cover transition-all duration-[1400ms] ease-out ${
                    idx === i
                      ? "scale-100 opacity-100"
                      : "scale-[1.06] opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/50 via-transparent to-ink/20" />

              {/* Thin inset frame */}
              <span className="pointer-events-none absolute inset-4 border border-off/15" />

              {/* Corner marks */}
              <span className="pointer-events-none absolute left-6 top-6 h-5 w-5 border-l border-t border-off/60" />
              <span className="pointer-events-none absolute right-6 top-6 h-5 w-5 border-r border-t border-off/60" />
              <span className="pointer-events-none absolute left-6 bottom-6 h-5 w-5 border-l border-b border-off/60" />
              <span className="pointer-events-none absolute right-6 bottom-6 h-5 w-5 border-r border-b border-off/60" />

              <div className="absolute left-10 top-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-off">
                <span className="h-1 w-1 bg-red dot-breath" />
                Fig. 0{idx + 2}
              </div>
              <div className="absolute right-10 top-10 font-serif text-sm italic text-off">
                — N° {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="absolute inset-x-10 bottom-10 border-t border-off/30 pt-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-silver">
                      Subject
                    </div>
                    <div className="mt-1 font-serif text-xl italic text-off md:text-2xl">
                      {current.short}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-silver">
                      Plate
                    </div>
                    <div className="mt-1 font-serif text-base italic text-off">
                      {String(idx + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-silver">
              <span className="font-serif text-sm italic normal-case tracking-normal text-off/80">
                Hover a title to turn the plate.
              </span>
              <span className="font-mono">
                0{idx + 1} / 0{services.length}
              </span>
            </div>
          </div>

          {/* List side */}
          <ul className="md:col-span-5 md:self-center">
            {services.map((s, i) => {
              const on = idx === i;
              return (
                <li
                  key={s.id}
                  onMouseEnter={() => setIdx(i)}
                  onFocus={() => setIdx(i)}
                  className="group relative border-b border-steel/40 first:border-t"
                >
                  {/* Red hairline on the left when active */}
                  <span
                    className={`pointer-events-none absolute inset-y-0 left-0 w-px origin-top bg-red transition-transform duration-700 ease-out ${
                      on ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  <a
                    href="#contact"
                    className="flex items-baseline justify-between gap-6 py-6 pl-5 pr-2 transition-all duration-700 ease-out"
                  >
                    <span className="font-mono text-xs text-silver">{s.id}</span>
                    <span
                      className={`flex-1 font-serif text-3xl leading-tight tracking-tight transition-all duration-700 ease-out md:text-4xl ${
                        on
                          ? "italic text-off translate-x-2"
                          : "text-off/60 group-hover:italic group-hover:text-off group-hover:translate-x-1"
                      }`}
                    >
                      {s.name}
                    </span>
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
                        on
                          ? "border-red bg-red text-white"
                          : "border-steel text-silver group-hover:border-off group-hover:text-off"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.25">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                  {on && (
                    <p className="mb-5 ml-5 mt-0 max-w-xs pl-7 pr-10 font-serif text-base italic text-silver md:text-lg">
                      {s.tagline}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
