"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { services } from "../../data/business";

const images = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
];

export default function ServiceList() {
  const [idx, setIdx] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);
  const active = services[idx];

  const handleMove = (e: React.MouseEvent) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x, y });
  };
  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="services" className="relative overflow-hidden bg-ink py-24 md:py-32">
      {/* Section head */}
      <div className="mx-auto mb-14 flex max-w-[1600px] flex-col gap-6 px-6 md:mb-20 md:flex-row md:items-end md:justify-between md:px-12">
        <div>
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
            <span className="h-px w-10 bg-red" />
            <span>Services · 06 Modules</span>
          </div>
          <h2 className="font-display text-6xl leading-[0.9] tracking-tight text-off md:text-[8vw]">
            THE SHORT LIST<span className="text-red">.</span>
          </h2>
        </div>
        <div className="flex items-end gap-10">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
              Now featuring
            </div>
            <div className="mt-2 font-display text-2xl tracking-wider text-off md:text-3xl">
              <span className="text-red">/</span> {String(idx + 1).padStart(2, "0")} —{" "}
              {active.short}
            </div>
          </div>
          <div className="hidden max-w-xs text-right text-sm text-silver md:block">
            Six specialities, honed over hours in the shop. Click any module to see the
            scope.
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-8 px-6 md:grid-cols-12 md:gap-10 md:px-12">
        {/* Showcase panel */}
        <div
          ref={stageRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="group relative md:col-span-7"
        >
          <div
            className="relative aspect-[4/3] overflow-hidden border border-steel/50 bg-ink transition-transform duration-500 ease-out md:aspect-[16/11]"
            style={{
              transform: `perspective(1200px) rotateX(${tilt.y * -3}deg) rotateY(${tilt.x * 4}deg)`,
            }}
          >
            {/* Image stack with crossfade */}
            {images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={services[i].name}
                fill
                priority={i === 0}
                sizes="(min-width: 768px) 55vw, 100vw"
                className={`object-cover transition-all duration-[1200ms] ease-out ${
                  idx === i
                    ? "scale-100 opacity-100 grayscale-0"
                    : "scale-110 opacity-0 grayscale"
                }`}
                style={{
                  transform:
                    idx === i
                      ? `translate3d(${tilt.x * -16}px, ${tilt.y * -10}px, 0) scale(1.03)`
                      : undefined,
                }}
              />
            ))}

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/90 via-ink/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-red/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-red/25" />

            {/* Corner marks */}
            <span className="absolute left-5 top-5 h-4 w-4 border-l-2 border-t-2 border-red" />
            <span className="absolute right-5 top-5 h-4 w-4 border-r-2 border-t-2 border-red" />
            <span className="absolute left-5 bottom-5 h-4 w-4 border-l-2 border-b-2 border-red" />
            <span className="absolute right-5 bottom-5 h-4 w-4 border-r-2 border-b-2 border-red" />

            {/* Giant number */}
            <div className="absolute left-6 top-6 font-mono text-xs uppercase tracking-[0.3em] text-off">
              <div className="text-silver">MODULE</div>
              <div className="mt-1 font-display text-6xl leading-none tracking-tight text-off md:text-7xl">
                {active.id}
              </div>
            </div>

            {/* Title overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <h3 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-7xl">
                {active.name}
              </h3>
              <p className="mt-3 max-w-xl text-sm italic text-off/85 md:text-base">
                {active.tagline}
              </p>
            </div>

            {/* Live indicator */}
            <div className="absolute right-5 top-5 flex items-center gap-2 bg-ink/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-off backdrop-blur">
              <span className="h-1.5 w-1.5 bg-red pulse-dot" />
              <span className="font-mono">
                {String(idx + 1).padStart(2, "0")} / 06
              </span>
            </div>
          </div>

          {/* Description + highlights below */}
          <div className="mt-6 grid gap-6 border-t border-steel/50 pt-6 md:grid-cols-12">
            <p className="text-base leading-relaxed text-silver md:col-span-7">
              {active.description}
            </p>
            <ul className="flex flex-wrap gap-2 md:col-span-5 md:justify-end">
              {active.highlights.map((h) => (
                <li
                  key={h}
                  className="border border-steel/60 bg-carbon px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-off"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pod grid */}
        <div className="md:col-span-5">
          <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            <span>Select a module</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-red pulse-dot" />
              Live preview
            </span>
          </div>

          <ul className="grid grid-cols-2 gap-3">
            {services.map((s, i) => {
              const on = idx === i;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setIdx(i)}
                    onFocus={() => setIdx(i)}
                    onClick={() => setIdx(i)}
                    className={`group/pod relative block w-full overflow-hidden border text-left transition-colors duration-500 ${
                      on ? "border-red" : "border-steel/50 hover:border-off"
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={images[i]}
                        alt={s.name}
                        fill
                        sizes="(min-width: 768px) 20vw, 50vw"
                        className={`object-cover transition-all duration-700 ease-out ${
                          on
                            ? "scale-110 grayscale-0"
                            : "scale-100 grayscale group-hover/pod:scale-110 group-hover/pod:grayscale-0"
                        }`}
                      />
                      <div
                        className={`absolute inset-0 transition-colors duration-500 ${
                          on
                            ? "bg-red/40"
                            : "bg-ink/60 group-hover/pod:bg-ink/30"
                        }`}
                      />
                      {/* Red laser line at the active bottom */}
                      <span
                        className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-red transition-transform duration-500 ${
                          on ? "scale-x-100" : "scale-x-0 group-hover/pod:scale-x-100"
                        }`}
                      />
                      <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.3em] text-off">
                        /{s.id}
                      </div>
                      <div className="absolute inset-x-3 bottom-3">
                        <div className="font-display text-base leading-tight tracking-wider text-off md:text-lg">
                          {s.short}
                        </div>
                      </div>
                      {/* Hover arrow */}
                      <span
                        className={`absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center border transition-all duration-500 ${
                          on
                            ? "border-white bg-white text-red rotate-45"
                            : "border-off/70 text-off opacity-0 group-hover/pod:opacity-100"
                        }`}
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="square" />
                        </svg>
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="btn-sweep group mt-5 flex items-center justify-between gap-4 border border-off bg-off px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition-colors duration-500 hover:text-white"
          >
            <span>Build a scope for {active.short.toLowerCase()}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
