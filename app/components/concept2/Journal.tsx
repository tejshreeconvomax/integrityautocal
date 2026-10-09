"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { business, testimonials } from "../../data/business";

const AUTO_MS = 7000;

export default function Journal() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;
  const current = testimonials[active];
  const tickRef = useRef<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => setActive((a) => (a + dir + count) % count),
    [count]
  );

  // Auto-advance (pauses on hover/focus)
  useEffect(() => {
    if (paused) return;
    tickRef.current = window.setTimeout(() => {
      setActive((a) => (a + 1) % count);
    }, AUTO_MS);
    return () => {
      if (tickRef.current) window.clearTimeout(tickRef.current);
    };
  }, [active, paused, count]);

  return (
    <section id="journal" className="relative overflow-hidden bg-ink py-24 md:py-32">
      {/* Faint oversized glyph in the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 select-none font-serif text-[40vw] italic leading-none text-off/[0.035] md:-top-28 md:text-[28vw]"
      >
        ”
      </div>

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10">
        {/* Header */}
        <div className="mb-14 grid gap-6 border-b border-steel/40 pb-10 md:mb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
              Chapter V
            </div>
            <h2 className="mt-3 font-serif text-5xl leading-[1.0] tracking-tight text-off md:text-7xl">
              Letters to <span className="italic">the shop</span>.
            </h2>
          </div>

          {/* Rating stat */}
          <div className="md:col-span-5 md:justify-self-end md:text-right">
            <div className="flex items-center gap-5 md:justify-end">
              <div>
                <div className="font-serif text-6xl leading-none text-off md:text-7xl">
                  5.0
                </div>
              </div>
              <div className="h-14 w-px bg-steel/60" />
              <div className="text-left">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-red">
                      <path d="M12 2l2.9 7h7.1l-5.8 4.2 2.2 7.3L12 16l-6.4 4.5 2.2-7.3L2 9h7.1z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 max-w-[11rem] font-serif text-sm italic text-silver">
                  Based on {business.reviewsCount} verified reviews — a quiet consensus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stage */}
        <div
          className="grid gap-12 md:grid-cols-12 md:gap-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Featured quote */}
          <figure className="relative md:col-span-8">
            {/* Oversized opening quote */}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-2 -top-10 font-serif text-[9rem] italic leading-none text-red/90 md:-left-6 md:-top-16 md:text-[12rem]"
            >
              “
            </span>

            <div className="relative min-h-[16rem] md:min-h-[20rem]">
              <blockquote
                key={active}
                className="quote-in font-serif text-[1.7rem] font-light leading-[1.3] tracking-tight text-off md:text-[2.6rem] md:leading-[1.25]"
              >
                {current.body}
              </blockquote>

              <figcaption
                key={`cap-${active}`}
                className="quote-in mt-10 flex flex-wrap items-center gap-x-6 gap-y-2"
              >
                <span className="h-px w-16 bg-red" />
                <span className="font-serif text-2xl italic text-off md:text-3xl">
                  {current.name}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
                  {current.date} · {business.city}
                </span>
              </figcaption>
            </div>
          </figure>

          {/* Index / navigation */}
          <div className="md:col-span-4">
            <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
              <span>The index</span>
              <span>
                N° {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
            </div>

            <ul className="border-t border-steel/40">
              {testimonials.map((t, i) => {
                const on = i === active;
                return (
                  <li key={t.name} className="border-b border-steel/40">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="group relative flex w-full items-center gap-5 py-5 text-left"
                      aria-current={on}
                    >
                      {/* Red hairline for active */}
                      <span
                        className={`pointer-events-none absolute inset-y-0 left-0 w-px origin-top bg-red transition-transform duration-700 ease-out ${
                          on ? "scale-y-100" : "scale-y-0"
                        }`}
                      />
                      <span
                        className={`font-mono text-xs transition-colors duration-500 ${
                          on ? "text-red" : "text-silver"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex-1 pl-3 font-serif text-xl transition-all duration-500 md:text-2xl ${
                          on
                            ? "italic text-off translate-x-1"
                            : "text-off/55 group-hover:italic group-hover:text-off/90 group-hover:translate-x-0.5"
                        }`}
                      >
                        {t.name}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.25em] transition-opacity duration-500 ${
                          on ? "text-silver opacity-100" : "opacity-0 group-hover:opacity-60"
                        }`}
                      >
                        {t.date.split(" ").slice(-1)}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Prev / next + progress */}
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous letter"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-steel text-off transition-colors duration-500 hover:border-red hover:text-red"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.25">
                  <path d="M19 12H5M11 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next letter"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-steel text-off transition-colors duration-500 hover:border-red hover:text-red"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.25">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>

              {/* Progress rail */}
              <div className="relative ml-2 h-px flex-1 bg-steel/50">
                <span
                  className="absolute left-0 top-0 h-px bg-red transition-all duration-500 ease-out"
                  style={{ width: `${((active + 1) / count) * 100}%` }}
                />
              </div>
            </div>

            <a
              href="#contact"
              className="ink-link mt-10 inline-block pb-1 font-serif text-base italic text-off hover:text-red"
            >
              Add your own letter →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
