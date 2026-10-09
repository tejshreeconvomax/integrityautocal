"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { business, services } from "../../data/business";

const moduleImages = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
];

export default function Hero() {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [moduleIdx, setModuleIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setCursor({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setModuleIdx((i) => (i + 1) % services.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-ink pt-24"
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #525252 1px, transparent 1px), linear-gradient(to bottom, #525252 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Red crosshair follows mouse */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(225,6,0,0.14), transparent 25%)`,
        }}
      />

      {/* Coordinates */}
      <div className="pointer-events-none absolute left-6 top-28 font-mono text-[10px] uppercase tracking-[0.2em] text-silver">
        <div>Lat 33.84° N</div>
        <div>Lng 118.38° W</div>
        <div className="mt-2 text-red">South Bay · CA</div>
      </div>
      <div className="pointer-events-none absolute right-6 top-28 font-mono text-[10px] uppercase tracking-[0.2em] text-silver">
        <div className="text-right">Redondo Beach</div>
        <div className="text-right">Open today</div>
        <div className="mt-2 text-right text-red">● Taking appointments</div>
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1600px] grid-cols-12 gap-x-6 gap-y-10 px-6 pb-10 pt-14 md:px-10">
        {/* Section label */}
        <div className="col-span-12 flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-silver">
          <span className="font-mono text-red">[00]</span>
          <span className="h-px flex-1 bg-steel/60 max-w-32" />
          <span className="font-technical">What we do</span>
          <span className="font-mono text-silver">·</span>
          <span className="font-mono tabular-nums">
            {String(moduleIdx + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
          </span>
          <span className="hidden h-px flex-1 bg-steel/60 md:block" />
          <span className="hidden font-mono md:inline">
            {services[moduleIdx].short}
          </span>
        </div>

        {/* Headline */}
        <div className="col-span-12 lg:col-span-8">
          <h1 className="font-technical text-[14vw] font-medium leading-[0.88] tracking-tighter text-off md:text-[9vw]">
            Real care<br />
            for your car's<br />
            <span className="relative inline-block">
              <span className="text-red">↳</span> paint.
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-technical text-base leading-relaxed text-silver md:text-lg">
            A Redondo Beach ceramic coating and paint correction shop. Careful prep,
            honest work, and real results — whether it's your daily driver or your
            weekend car.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-red bg-red px-6 py-4 font-technical text-xs uppercase tracking-[0.3em] text-white transition-colors hover:bg-red-deep"
            >
              <span>Get a quote</span>
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={business.phoneHref}
              className="group inline-flex items-center gap-3 border border-steel bg-carbon px-6 py-4 font-technical text-xs uppercase tracking-[0.3em] text-off transition-colors hover:border-red"
            >
              <span>Call {business.phone}</span>
            </a>
          </div>
        </div>

        {/* Right dashboard */}
        <aside className="col-span-12 lg:col-span-4">
          <div className="relative border border-steel bg-carbon">
            <div className="flex items-center justify-between border-b border-steel/60 bg-ink/50 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                Now showing
              </span>
              <span>Live</span>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-ink">
              {moduleImages.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className={`object-cover transition-opacity duration-700 ease-out ${
                    moduleIdx === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-ink/50 mix-blend-multiply" />
              {/* Flash on change */}
              <div
                key={`flash-${moduleIdx}`}
                className="pointer-events-none absolute inset-0 bg-red/25"
                style={{ animation: "flashFade 700ms ease-out forwards" }}
              />
              {/* Scan line */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="scan-line absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-red/40 to-transparent" />
              </div>
              {/* Corner tags */}
              <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-red" />
              <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-red" />
              <span className="absolute left-3 bottom-3 h-3 w-3 border-l border-b border-red" />
              <span className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-red" />

              <div className="absolute inset-x-0 bottom-0 p-4 font-mono text-[10px] uppercase tracking-[0.2em] text-off">
                <div className="flex items-center justify-between">
                  <span>Service {String(moduleIdx + 1).padStart(2, "0")}</span>
                  <span className="text-red">●</span>
                </div>
                <div className="mt-1 font-technical text-xl text-off">
                  {services[moduleIdx].name}
                </div>
              </div>
            </div>

            <div className="divide-y divide-steel/40">
              <DataRow label="Status" value="Open today" valueClass="text-red" />
              <DataRow label="Based in" value="Redondo Beach" />
              <DataRow label="Hours" value="9 AM — 6 PM" />
              <DataRow label="Reviews" value="55 · Excellent" />
            </div>
          </div>

          <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            * Every job done by Mike, the owner.
          </div>
        </aside>
      </div>
    </section>
  );
}

function DataRow({
  label,
  value,
  valueClass = "text-off",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em]">
      <span className="text-silver">{label}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}
