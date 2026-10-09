"use client";

import { useEffect, useRef } from "react";
import { business } from "../../data/business";

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
          bgRef.current.style.transform = `translate3d(${x * -14}px, ${y * -10}px, 0) scale(1.08)`;
        }
        if (titleRef.current) {
          titleRef.current.style.transform = `translate3d(${x * 6}px, ${y * 4}px, 0)`;
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
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden">
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 transition-transform duration-[1200ms] ease-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 55%",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-transparent to-ink/40" />

      {/* Red flare */}
      <div className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[600px] w-[600px] rounded-full bg-red/20 blur-[180px]" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Side rails */}
      <div className="pointer-events-none absolute left-6 top-0 hidden h-full flex-col items-start justify-between py-28 text-[10px] uppercase tracking-[0.4em] text-silver lg:flex">
        <span className="rotate-180 [writing-mode:vertical-rl]">
          Integrity · Est. Redondo Beach
        </span>
        <span className="rotate-180 [writing-mode:vertical-rl]">N 33.84° · W 118.38°</span>
      </div>
      <div className="pointer-events-none absolute right-6 top-0 hidden h-full flex-col items-end justify-between py-28 text-[10px] uppercase tracking-[0.4em] text-silver lg:flex">
        <span className="[writing-mode:vertical-rl]">
          Reel 01 / Hero Sequence
        </span>
        <span className="[writing-mode:vertical-rl]">Scroll to engage ↓</span>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-6 pb-16 pt-40 md:px-12 md:pb-24">
        {/* Kicker */}
        <div className="mb-8 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.4em] text-silver">
          <span className="h-px w-10 bg-red" />
          <span>Ceramic coating · Paint correction · Detail</span>
        </div>

        {/* Headline */}
        <div ref={titleRef} className="transition-transform duration-300 ease-out">
          <h1 className="font-display text-[18vw] leading-[0.82] tracking-tight text-off md:text-[11.5vw]">
            BUILT FOR
            <br />
            <span className="relative inline-block">
              THE OBSESSED
              <span className="absolute -right-6 -top-4 font-mono text-base text-red md:text-xl">
                ®
              </span>
            </span>
            <span className="text-red">.</span>
          </h1>
        </div>

        {/* Sub + CTAs */}
        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-12 md:gap-6">
          <p className="max-w-md text-lg leading-relaxed text-off/85 md:col-span-5 md:text-xl">
            Redondo Beach's reference studio for ceramic coating, paint correction and the
            kind of detail work that stops people in parking lots. Owner-operated by Mike.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:col-span-7 md:justify-end">
            <a
              href="#contact"
              className="btn-sweep group flex items-center gap-3 bg-red px-7 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-white"
              style={{ ["--tw-ring-color" as never]: "transparent" }}
            >
              <span>Request a quote</span>
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={business.phoneHref}
              className="group flex items-center gap-3 border border-off/50 px-7 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-off transition-colors hover:border-red hover:text-red"
            >
              <span className="h-2 w-2 bg-red" />
              Call {business.phone}
            </a>
          </div>
        </div>

        {/* Bottom data bar */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-steel/40 pt-6 text-[11px] uppercase tracking-[0.3em] text-silver md:mt-20 md:grid-cols-4">
          <div>
            <div className="text-silver/70">Location</div>
            <div className="mt-1 text-off">{business.city}, {business.state}</div>
          </div>
          <div>
            <div className="text-silver/70">Hours</div>
            <div className="mt-1 text-off">09:00 — 18:00 · Daily</div>
          </div>
          <div>
            <div className="text-silver/70">Services</div>
            <div className="mt-1 text-off">06 Specialized</div>
          </div>
          <div>
            <div className="text-silver/70">Reviews</div>
            <div className="mt-1 text-off">55 · Excellent</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center text-[10px] uppercase tracking-[0.4em] text-silver">
        <div className="flex items-center gap-3">
          <span>Scroll</span>
          <span className="relative block h-10 w-px overflow-hidden bg-steel">
            <span className="absolute inset-x-0 top-0 h-4 bg-red scan-line" />
          </span>
        </div>
      </div>
    </section>
  );
}
