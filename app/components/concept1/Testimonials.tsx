"use client";

import { useRef } from "react";
import { testimonials } from "../../data/business";

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const moveSlider = (direction: number) => {
    sliderRef.current?.scrollBy({
      left: direction * sliderRef.current.clientWidth * 0.92,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-10 bg-red" />
              <span>Verified customer reviews · 55 total</span>
            </div>
            <h2 className="font-display text-6xl leading-[0.9] tracking-tight text-off md:text-[7vw]">
              CUSTOMER REVIEWS<span className="text-red">.</span>
            </h2>
          </div>
          <div className="flex items-end md:col-span-6 md:justify-end">
            <div className="flex items-center gap-6">
              <div>
                <div className="font-display text-5xl text-off md:text-6xl">5.0</div>
                <div className="mt-1 text-xs uppercase tracking-[0.3em] text-silver">
                  Google avg · 55 reviews
                </div>
              </div>
              <div className="h-16 w-px bg-steel" />
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-8 w-8 fill-red">
                    <path d="M12 2l2.9 7h7.1l-5.8 4.2 2.2 7.3L12 16l-6.4 4.5 2.2-7.3L2 9h7.1z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={sliderRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className="group relative isolate flex min-h-[370px] w-[calc(100vw-3rem)] shrink-0 snap-start flex-col justify-between overflow-hidden border border-white/10 bg-[#0f0f0f] p-7 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-red/80 hover:shadow-[0_24px_58px_-26px_rgba(225,6,0,0.6)] md:h-full md:w-auto md:p-8"
            >
              <span className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_88%_5%,rgba(225,6,0,0.2),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-[0.12] bg-red transition-transform duration-300 group-hover:scale-x-100" />
              <span className="pointer-events-none absolute right-7 top-7 z-0 font-display text-8xl leading-none text-white/[0.035] transition-colors duration-300 group-hover:text-red/[0.08] md:right-8 md:top-8">
                ”
              </span>

              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between gap-5 border-b border-white/10 pb-5 transition-colors duration-300 group-hover:border-red/40">
                  <span className="font-display text-5xl leading-none text-red">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="text-right">
                    <div className="flex gap-1 text-red">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg key={s} viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                          <path d="M12 2l2.9 7h7.1l-5.8 4.2 2.2 7.3L12 16l-6.4 4.5 2.2-7.3L2 9h7.1z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="max-w-[33ch] text-[17px] leading-8 text-off/90 transition-colors duration-300 group-hover:text-off">
                  “{t.body}”
                </p>
              </div>

              <footer className="relative z-10 mt-10 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.22em] text-silver transition-colors duration-300 group-hover:border-red/40">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <div className="font-display text-xl tracking-wider text-off">{t.name}</div>
                    <div className="mt-1.5 whitespace-nowrap text-xs tracking-[0.14em] text-silver">{t.date}</div>
                  </div>
                  <span className="mb-0.5 inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[10px] tracking-[0.14em] text-off/80">
                    Verified
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-red" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M12 3.5 19 6v5.2c0 4.3-2.95 7.45-7 9.3-4.05-1.85-7-5-7-9.3V6l7-2.5Z" strokeLinejoin="round" />
                      <path d="m8.7 12 2.1 2.1 4.5-4.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between md:hidden">
          <span className="text-[10px] uppercase tracking-[0.28em] text-silver">Swipe for more reviews</span>
          <div className="flex gap-2">
            <button type="button" onClick={() => moveSlider(-1)} aria-label="Previous customer review" className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-off transition-colors hover:border-red hover:text-red">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m15 5-7 7 7 7" /></svg>
            </button>
            <button type="button" onClick={() => moveSlider(1)} aria-label="Next customer review" className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-off transition-colors hover:border-red hover:text-red">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m9 5 7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
