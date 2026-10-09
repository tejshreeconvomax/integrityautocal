import Link from "next/link";
import { business } from "./data/business";

const concepts = [
  {
    num: "01",
    slug: "concept-1",
    name: "Performance",
    kicker: "Motorsport · Cinematic",
    headline: "Built for\nthe obsessed.",
    description:
      "Aggressive condensed typography, cinematic hero, interactive service list, oversized numbers. Red treated like a brake-light.",
    accent: "from-red/30 via-red-dark/10 to-transparent",
    font: "font-display tracking-tight",
  },
  {
    num: "02",
    slug: "concept-2",
    name: "Editorial",
    kicker: "Luxury · Quiet confidence",
    headline: "The art of\nautomotive\nperfection.",
    description:
      "Serif-led editorial design with asymmetric grids, generous whitespace, and vertical labels. A luxury automotive magazine, made digital.",
    accent: "from-off/10 via-silver/5 to-transparent",
    font: "font-serif italic tracking-tight",
  },
  {
    num: "03",
    slug: "concept-3",
    name: "Technical",
    kicker: "Futuristic · Instrumented",
    headline: "Vehicle\nprotection\nsystem.",
    description:
      "A dashboard aesthetic. Coordinates, data strips, technical labels, scan sweeps. Craft rendered as instrumentation.",
    accent: "from-red/20 via-graphite to-transparent",
    font: "font-technical tracking-tighter",
  },
] as const;

export default function SelectorPage() {
  return (
    <main className="relative min-h-screen bg-ink text-off grain">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-0 h-[70vh] w-[80vw] -translate-x-1/2 rounded-full bg-gradient-to-b from-red/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-steel/60 to-transparent" />
      </div>

      {/* Header strip */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 text-[11px] uppercase tracking-[0.3em] text-silver md:px-12">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 bg-red pulse-dot" />
          <span>Integrity Auto Salon</span>
        </div>
        <div className="hidden md:block">Concept Review · {business.city}, {business.state}</div>
        <div className="font-mono text-[11px]">v1.0 / 2026</div>
      </header>

      {/* Hero intro */}
      <section className="relative z-10 px-6 pt-8 pb-16 md:px-12 md:pt-20 md:pb-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="text-red">●</span>&nbsp;&nbsp;Three directions · One brand
            </p>
            <h1 className="font-display text-[13vw] leading-[0.85] tracking-tight text-off md:text-[9vw]">
              CHOOSE THE
              <br />
              <span className="text-red">DIRECTION</span>.
            </h1>
          </div>
          <div className="flex items-end md:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-silver md:text-lg">
              Three completely independent concepts for a Redondo Beach ceramic coating,
              paint correction and detailing studio. Each tells the same story — the
              Integrity Auto Salon story — through a different voice.
            </p>
          </div>
        </div>
      </section>

      {/* Concept cards */}
      <section className="relative z-10 border-t border-steel/40">
        <ul className="divide-y divide-steel/40">
          {concepts.map((c, i) => (
            <li key={c.slug} className="group relative">
              <Link
                href={`/${c.slug}` as never}
                className="relative block"
              >
                {/* Hover sweep */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${c.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                />
                <div className="relative grid grid-cols-12 items-stretch gap-4 px-6 py-10 md:gap-8 md:px-12 md:py-14">
                  {/* Index + kicker */}
                  <div className="col-span-12 flex items-start justify-between md:col-span-3 md:block">
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-silver">
                      Concept / {c.num}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.3em] text-silver md:mt-6">
                      {c.kicker}
                    </div>
                    {/* Red progress bar on hover */}
                    <div className="mt-6 hidden h-px w-full origin-left scale-x-0 bg-red transition-transform duration-700 group-hover:scale-x-100 md:block" />
                  </div>

                  {/* Headline */}
                  <div className="col-span-12 md:col-span-6">
                    <h2
                      className={`${c.font} text-off text-[11vw] leading-[0.9] md:text-[6.5vw]`}
                    >
                      {c.headline.split("\n").map((line, idx) => (
                        <span key={idx} className="block">
                          {line}
                        </span>
                      ))}
                    </h2>
                    <p className="mt-6 max-w-md text-sm leading-relaxed text-silver md:text-base">
                      {c.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="col-span-12 flex items-end justify-end md:col-span-3">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-off transition-colors duration-300 group-hover:text-red">
                      <span>View concept</span>
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="square" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer meta */}
      <footer className="relative z-10 border-t border-steel/40 px-6 py-8 text-[11px] uppercase tracking-[0.3em] text-silver md:flex md:items-center md:justify-between md:px-12">
        <div>
          {business.phone} · {business.city}, {business.state}
        </div>
        <div className="mt-3 flex gap-6 md:mt-0">
          <span>Ceramic Coating</span>
          <span>Paint Correction</span>
          <span>Detailing</span>
          <span>Tint</span>
          <span>Marine</span>
        </div>
      </footer>
    </main>
  );
}
