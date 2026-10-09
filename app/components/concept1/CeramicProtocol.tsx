"use client";

import Image from "next/image";
import { useState } from "react";

const phases = [
  {
    n: "01",
    t: "Intake & assessment",
    d: "Paint depth gauging, defect mapping, interior triage. Everything is written down before we touch a thing.",
    duration: "45 — 90 min",
    img: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&w=1600&q=80",
    marks: ["Depth gauge", "Defect map", "Written scope"],
  },
  {
    n: "02",
    t: "Decontamination",
    d: "Foam, two-bucket, iron removal, clay — the full chemical and mechanical strip. Nothing left on the surface.",
    duration: "2 — 4 hours",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
    marks: ["Foam cannon", "pH neutral soap", "Clay bar"],
  },
  {
    n: "03",
    t: "Paint correction",
    d: "Measured machine polishing to the stage specified in your tier. We correct to a target, we don't chase forever.",
    duration: "1 — 3 days",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
    marks: ["Depth-metered", "Multi-stage pads", "Panel-by-panel"],
  },
  {
    n: "04",
    t: "Ceramic install",
    d: "Panel-by-panel application in a controlled bay. Layer counts and system matched to the chosen tier.",
    duration: "4 — 8 hours",
    img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1600&q=80",
    marks: ["Controlled bay", "Layered build", "Wheels + trim"],
  },
  {
    n: "05",
    t: "Cure & hand-off",
    d: "12–24h controlled cure. Walk-around, care sheet, maintenance schedule. We stay in your contacts.",
    duration: "12 — 24 hours",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80",
    marks: ["Controlled cure", "Walk-around", "Care sheet"],
  },
];

export default function CeramicProtocol() {
  const [idx, setIdx] = useState(0);
  const active = phases[idx];
  const pct = ((idx + 1) / phases.length) * 100;

  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Head */}
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end md:mb-16">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-10 bg-red" />
              <span>Protocol · 05 Phases · Documented</span>
            </div>
            <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[5.5vw]">
              HOW IT GETS
              <br />
              DONE<span className="text-red">.</span>
            </h2>
          </div>
          <p className="md:col-span-5 max-w-md text-base text-silver md:ml-auto md:text-right md:text-lg">
            Nothing happens off-protocol. Hover any phase on the left to see the detail —
            every ceramic install runs this exact sequence.
          </p>
        </div>

        {/* Horizontal stepper bar */}
        <div className="mb-10 hidden md:block">
          <div className="relative h-px bg-steel/40">
            <span
              className="absolute left-0 top-0 h-px bg-red transition-all duration-500 ease-out"
              style={{ width: `${pct}%` }}
            />
            <ul className="relative -mt-2 flex justify-between">
              {phases.map((p, i) => {
                const done = i <= idx;
                return (
                  <li key={p.n}>
                    <button
                      type="button"
                      onMouseEnter={() => setIdx(i)}
                      onFocus={() => setIdx(i)}
                      onClick={() => setIdx(i)}
                      className="group flex flex-col items-center"
                      aria-label={`Phase ${p.n} — ${p.t}`}
                    >
                      <span
                        className={`inline-flex h-5 w-5 items-center justify-center border transition-all duration-300 ${
                          done
                            ? "border-red bg-red"
                            : "border-steel bg-ink group-hover:border-off"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 bg-white transition-opacity duration-300 ${
                            done ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </span>
                      <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                        / {p.n}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Split: phase list + feature panel */}
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {/* Phase list */}
          <ul className="md:col-span-5">
            {phases.map((p, i) => {
              const on = idx === i;
              return (
                <li key={p.n}>
                  <button
                    type="button"
                    onMouseEnter={() => setIdx(i)}
                    onFocus={() => setIdx(i)}
                    onClick={() => setIdx(i)}
                    className={`group relative block w-full border-b border-steel/40 text-left transition-colors duration-500 first:border-t ${
                      on ? "bg-carbon" : "bg-ink hover:bg-carbon/50"
                    }`}
                  >
                    {/* Red left bar when active */}
                    <span
                      className={`pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top bg-red transition-transform duration-500 ${
                        on ? "scale-y-100" : "scale-y-0"
                      }`}
                    />

                    <div className="flex items-start gap-6 px-4 py-6 md:px-6 md:py-7">
                      <span
                        className={`font-display text-5xl leading-none transition-colors duration-500 md:text-6xl ${
                          on ? "text-red" : "text-off/70 group-hover:text-off"
                        }`}
                      >
                        {p.n}
                      </span>
                      <div className="flex-1">
                        <h3
                          className={`font-display text-2xl leading-tight tracking-wide transition-colors duration-500 md:text-3xl ${
                            on ? "text-off" : "text-off/80"
                          }`}
                        >
                          {p.t}
                        </h3>
                        <div className="mt-1 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-silver">
                          <span className="h-px w-6 bg-red" />
                          <span>{p.duration}</span>
                        </div>
                      </div>
                      <span
                        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-500 ${
                          on
                            ? "border-red bg-red text-white"
                            : "border-steel text-off opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="square" />
                        </svg>
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Feature panel */}
          <div className="md:col-span-7">
            <div className="relative border border-steel/60 bg-carbon">
              {/* Monitor-style header */}
              <div className="flex items-center justify-between border-b border-steel/60 bg-ink/50 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                  Phase readout · {active.n}
                </span>
                <span>
                  {idx + 1} / {phases.length}
                </span>
              </div>

              {/* Image with crossfade */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {phases.map((p, i) => (
                  <Image
                    key={p.n}
                    src={p.img}
                    alt={p.t}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className={`object-cover transition-all duration-700 ease-out ${
                      idx === i
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

                {/* Reticle corners */}
                <span className="absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-red" />
                <span className="absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-red" />
                <span className="absolute left-4 bottom-4 h-4 w-4 border-l-2 border-b-2 border-red" />
                <span className="absolute right-4 bottom-4 h-4 w-4 border-r-2 border-b-2 border-red" />

                {/* Giant number */}
                <div className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.3em] text-off">
                  <div className="text-silver">Phase</div>
                  <div className="mt-1 font-display text-6xl leading-none text-off md:text-7xl">
                    {active.n}
                  </div>
                </div>

                {/* Title + duration */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <h3 className="font-display text-3xl leading-tight tracking-wide text-off md:text-5xl">
                    {active.t}
                  </h3>
                </div>
              </div>

              {/* Detail rows */}
              <div className="grid grid-cols-1 divide-y divide-steel/40 md:grid-cols-5 md:divide-x md:divide-y-0">
                <div className="col-span-1 p-5 md:col-span-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                    / description
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-off md:text-base">
                    {active.d}
                  </p>
                </div>
                <div className="col-span-1 p-5 md:col-span-2">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                    / includes
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs uppercase tracking-[0.15em] text-off">
                    {active.marks.map((m) => (
                      <li key={m} className="flex items-center gap-3">
                        <span className="h-1 w-3 bg-red" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
