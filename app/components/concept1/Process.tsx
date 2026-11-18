"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { process } from "../../data/business";
import styles from "./Process.module.css";

export default function Process() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    const nextIndex = (index + process.length) % process.length;
    const card = sliderRef.current?.children.item(nextIndex) as HTMLElement | null;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveIndex(nextIndex);
  }, []);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mobile.matches || reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % process.length;
        const card = sliderRef.current?.children.item(next) as HTMLElement | null;
        card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        return next;
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-[#070707] py-20 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_90%_at_50%_55%,rgba(112,7,4,0.26),transparent_72%),linear-gradient(115deg,#070707_0%,#170605_52%,#070707_100%)]" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.38em] text-silver">
              <span className="h-px w-10 bg-red" />
              Our process · 04 steps
            </div>
            <h2 className="font-display text-6xl leading-[0.82] tracking-tight md:text-[7vw] lg:text-[6.4vw]">
              <span className="text-off">OUR SERVICE</span>
              <br />
              <span className="text-red">PROCESS</span><span className="text-off">.</span>
            </h2>
          </div>
          <p className="max-w-xl border-l-2 border-red pl-5 text-base leading-relaxed text-off/90 sm:text-lg lg:col-span-5 lg:col-start-8 lg:mb-2">
            Every service follows a clear process. Here is how we inspect, prepare, and
            finish your vehicle.
          </p>
        </div>

        <div ref={sliderRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4 lg:gap-5">
          {process.map((phase, index) => (
            <article
              key={phase.step}
              className={`${styles.card} relative flex min-h-[330px] w-[calc(100vw-3rem)] shrink-0 snap-start flex-col overflow-hidden rounded-[22px] border border-white/20 bg-[#0b0a0a] p-7 md:min-h-[350px] md:w-auto md:p-8`}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-red/70 bg-gradient-to-br from-red to-red-deep text-white shadow-[0_8px_20px_-12px_rgba(225,6,0,0.65)]">
                  <ProcessIcon type={index} />
                </div>
                <span className={`${styles.stepBadge} font-display text-6xl leading-none tracking-tight`}>
                  {phase.step}
                </span>
              </div>

              <div className="mt-auto pt-12">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  Phase / {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-wide text-white md:text-[2.15rem]">
                  {phase.label}
                </h3>
                <span className="mt-4 block h-0.5 w-14 bg-red shadow-[0_0_10px_rgba(225,6,0,0.65)]" />
                <p className="mt-5 text-sm leading-relaxed text-silver">
                  {phase.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between md:hidden">
          <div className="flex items-center gap-2" aria-label="Process slider pagination">
            {process.map((phase, index) => (
              <button
                key={phase.step}
                type="button"
                aria-label={`Show step ${phase.step}: ${phase.label}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => goTo(index)}
                className={`h-1.5 transition-all duration-300 ${activeIndex === index ? "w-8 bg-red" : "w-3 bg-white/30"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous process step" className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-off transition-colors hover:border-red hover:text-red">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m15 5-7 7 7 7" /></svg>
            </button>
            <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next process step" className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-off transition-colors hover:border-red hover:text-red">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m9 5 7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessIcon({ type }: { type: number }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-8 w-8",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    "aria-hidden": true,
  };

  if (type === 0) {
    return (
      <svg {...props}>
        <path d="M4.5 5.25h15v10.1H10l-5.5 3.4V5.25Z" strokeLinejoin="round" />
        <path d="M8.3 9.25h7.4M8.3 12h4.7" strokeLinecap="round" />
        <circle cx="17.2" cy="17.2" r="2.3" />
        <path d="m18.85 18.85 1.65 1.65" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 1) {
    return (
      <svg {...props}>
        <rect x="5.5" y="4.5" width="12" height="15.5" rx="1.8" />
        <path d="M9 5V3.5h5V5M8.4 9.2l1.25 1.25 2.2-2.35M8.4 13.4l1.25 1.25 2.2-2.35M13.5 9.3h1.5M13.5 13.55h1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="m19.8 19.8 1.7 1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 2) {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="12" cy="12" r="1.35" />
        <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" strokeLinecap="round" />
        <path d="m17.2 14.8 1.2 1.2 2.8-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M3.5 14.5h17v4.25h-2.15a2.35 2.35 0 0 1-4.7 0H10.35a2.35 2.35 0 0 1-4.7 0H3.5V14.5Z" strokeLinejoin="round" />
      <path d="m5.8 14.5 1.65-4.15h9.1l1.65 4.15M8.6 10.35l1.35-2.25h4.1l1.35 2.25" strokeLinejoin="round" />
      <circle cx="8" cy="18.75" r=".7" fill="currentColor" stroke="none" />
      <circle cx="16" cy="18.75" r=".7" fill="currentColor" stroke="none" />
      <path d="M17.2 5.2h3.1M18.75 3.65v3.1M17.75 7.85l1.45 1.45M19.2 7.85l-1.45 1.45" strokeLinecap="round" />
    </svg>
  );
}
