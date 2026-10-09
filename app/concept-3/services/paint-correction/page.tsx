import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../../components/concept3/Nav";
import Footer from "../../../components/concept3/Footer";
import { business, services, serviceAreas } from "../../../data/business";

export const metadata: Metadata = {
  title: "Paint Correction in Redondo Beach, CA — Integrity Auto Salon",
  description:
    "Professional paint correction in Redondo Beach. Swirls removed, oxidation cut, gloss restored — paint depth measured before and after.",
};

const tiers = [
  {
    code: "01",
    name: "Single-stage polish",
    time: "4 — 8 hours",
    pct: "60 — 80%",
    best: "Light swirls on a well-kept car",
    inc: [
      "Full decontamination",
      "One-step polish",
      "Panel-by-panel pass",
      "Finishing wipe",
    ],
  },
  {
    code: "02",
    name: "Two-stage correction",
    time: "1 — 2 days",
    pct: "85 — 95%",
    best: "Daily drivers with swirls, haze, water spots",
    inc: [
      "Full decontamination",
      "Compound + polish",
      "Depth readings per panel",
      "Pre-coating prep ready",
    ],
    highlight: true,
  },
  {
    code: "03",
    name: "Multi-stage show",
    time: "2 — 4 days",
    pct: "95 — 99%",
    best: "Collector cars, ceramic prep, serious defects",
    inc: [
      "Full decontamination",
      "Compound · polish · refine",
      "Depth-metered every pass",
      "Jewel-finish on dark paint",
    ],
  },
] as const;

const defects = [
  {
    n: "01",
    name: "Swirl marks",
    body: "Circular micro-scratches from automated washes and dirty cloths.",
  },
  {
    n: "02",
    name: "Oxidation",
    body: "The clear coat chalks and the paint looks dull even after a wash.",
  },
  {
    n: "03",
    name: "Water spots",
    body: "Hard-water minerals and ocean spray etched into the clear.",
  },
  {
    n: "04",
    name: "Clear scratches",
    body: "Fingernail-shallow marks that live inside the clear coat.",
  },
  {
    n: "05",
    name: "Hazing",
    body: "A general cloudiness that keeps the paint from reflecting cleanly.",
  },
  {
    n: "06",
    name: "Bird / bug etching",
    body: "Acidic damage that leaves a shallow pit if not cleared early.",
  },
];

const stats = [
  { k: "95%", v: "Defects removed (2-stage)" },
  { k: "0.05µ", v: "Paint depth precision" },
  { k: "2 — 4", v: "Days for a full correction" },
  { k: "100%", v: "Owner-operated" },
];

export default function PaintCorrectionPage() {
  return (
    <main className="relative bg-ink text-off">
      <Nav />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-24">
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #525252 1px, transparent 1px), linear-gradient(to bottom, #525252 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full bg-red/15 blur-[160px]" />

        <div className="relative mx-auto grid max-w-[1600px] grid-cols-12 gap-6 px-6 pb-16 pt-14 md:px-10 md:pb-24">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="col-span-12 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver"
          >
            <Link href={"/concept-3" as never} className="hover:text-off">
              Home
            </Link>
            <span className="text-red">/</span>
            <Link href={"/concept-3#services" as never} className="hover:text-off">
              Services
            </Link>
            <span className="text-red">/</span>
            <span className="text-off">Paint Correction</span>
          </nav>

          {/* Section meta line */}
          <div className="col-span-12 flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-silver">
            <span className="font-mono text-red">[01]</span>
            <span className="h-px w-10 bg-steel/60" />
            <span className="font-technical">Service 02 / 06</span>
            <span className="font-mono text-silver">·</span>
            <span className="font-mono">Paint restoration</span>
          </div>

          {/* Headline */}
          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-technical text-[13vw] font-medium leading-[0.88] tracking-tighter text-off md:text-[8vw]">
              Bring the
              <br />
              <span className="relative inline-block">
                <span className="text-red">↳</span> paint back.
              </span>
            </h1>
            <p className="mt-8 max-w-xl font-technical text-base leading-relaxed text-silver md:text-lg">
              Swirl marks, dullness, water spots — removed, not covered up. We measure
              the paint before and after so you know exactly what we did.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={"/concept-3#contact" as never}
                className="group inline-flex items-center gap-3 border border-red bg-red px-6 py-4 font-technical text-xs uppercase tracking-[0.3em] text-white transition-colors hover:bg-red-deep"
              >
                <span>Get a quote</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-3 border border-steel bg-carbon px-6 py-4 font-technical text-xs uppercase tracking-[0.3em] text-off transition-colors hover:border-red"
              >
                <span>Call {business.phone}</span>
              </a>
            </div>
          </div>

          {/* Right spec panel */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="relative border border-steel bg-carbon">
              <div className="flex items-center justify-between border-b border-steel/60 bg-ink/50 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                  At a glance
                </span>
                <span>Service 02</span>
              </div>
              <div className="divide-y divide-steel/40">
                <SpecRow k="Removes up to" v="95% of defects" red />
                <SpecRow k="Turnaround" v="4h — 4 days" />
                <SpecRow k="Starting cost" v="Call for quote" />
                <SpecRow k="Done by" v="Mike (owner)" />
                <SpecRow k="Follow-on" v="Ceramic coating" />
              </div>
              <div className="border-t border-steel/60 bg-ink/40 p-4 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                * every quote confirmed in person after a paint inspection.
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative border-y border-steel/40 bg-carbon">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 border-l border-r border-steel/40 md:grid-cols-4 md:divide-x md:divide-steel/40">
          {stats.map((s, i) => (
            <div key={s.v} className="relative px-6 py-6 md:px-8 md:py-8">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                <span>Stat · 0{i + 1}</span>
                <span className="text-red">●</span>
              </div>
              <div className="mt-2 font-technical text-5xl font-medium tracking-tight text-off md:text-6xl">
                {s.k}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The problem */}
      <section className="relative overflow-hidden bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
                <span className="text-red">[02]</span>
                <span className="h-px w-10 bg-steel" />
                <span>What we fix</span>
              </div>
              <h2 className="font-technical text-5xl font-medium leading-[0.92] tracking-tight text-off md:text-[5vw]">
                Six kinds of damage.
                <br />
                <span className="text-red">All</span> correctable.
              </h2>
            </div>
            <p className="md:col-span-5 max-w-md font-technical text-base text-silver md:text-lg">
              Your paint is probably doing one or more of these right now. We can
              almost always walk them back.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-px border border-steel/40 bg-steel/40 md:grid-cols-2 lg:grid-cols-3">
            {defects.map((d) => (
              <li
                key={d.n}
                className="group relative isolate overflow-hidden bg-ink p-6 transition-colors duration-500 hover:bg-carbon md:p-7"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  <span>Defect {d.n}</span>
                  <span className="text-red">●</span>
                </div>
                <h3 className="mt-3 font-technical text-2xl tracking-tight text-off md:text-3xl">
                  {d.name}
                </h3>
                <p className="mt-2 font-technical text-sm leading-relaxed text-silver md:text-base">
                  {d.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tiers */}
      <section className="relative bg-carbon py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/10 blur-[160px]" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
                <span className="text-red">[03]</span>
                <span className="h-px w-10 bg-steel" />
                <span>How much correction</span>
              </div>
              <h2 className="font-technical text-5xl font-medium leading-[0.92] tracking-tight text-off md:text-[5vw]">
                Three <span className="text-red">levels</span>.
              </h2>
            </div>
            <p className="md:col-span-5 max-w-md font-technical text-base text-silver md:text-lg">
              We pick a level with you, based on what your paint actually needs — not
              on a sales script.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <article
                key={t.code}
                className={`group relative isolate flex flex-col justify-between gap-10 overflow-hidden border p-7 transition-all duration-500 hover:-translate-y-2 hover:[box-shadow:0_30px_80px_-20px_rgba(225,6,0,0.3)] md:p-8 ${
                  "highlight" in t && t.highlight
                    ? "border-red bg-ink"
                    : "border-steel/50 bg-ink hover:border-red"
                }`}
              >
                {"highlight" in t && t.highlight && (
                  <span className="absolute right-0 top-0 bg-red px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white">
                    Most spec'd
                  </span>
                )}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />

                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                    <span>Level {t.code}</span>
                    <span className="text-red">●</span>
                  </div>
                  <h3 className="mt-3 font-technical text-3xl leading-[1.0] tracking-tight text-off md:text-4xl">
                    {t.name}
                  </h3>
                  <div className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-silver">
                    {t.best}
                  </div>

                  <dl className="mt-6 grid grid-cols-2 gap-3 border-y border-steel/40 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-silver">
                    <div>
                      <dt>Removes</dt>
                      <dd className="mt-1 text-off">{t.pct}</dd>
                    </div>
                    <div>
                      <dt>Time</dt>
                      <dd className="mt-1 text-off">{t.time}</dd>
                    </div>
                  </dl>

                  <ul className="mt-5 space-y-2 font-technical text-sm text-off/90">
                    {t.inc.map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1 w-3 bg-red" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={"/concept-3#contact" as never}
                  className={`group/btn flex items-center justify-between gap-3 border px-5 py-4 font-technical text-xs uppercase tracking-[0.3em] transition-colors ${
                    "highlight" in t && t.highlight
                      ? "border-red bg-red text-white hover:bg-red-deep"
                      : "border-off text-off hover:border-red hover:text-red"
                  }`}
                >
                  <span>Get a quote</span>
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why correct before coating */}
      <section className="relative bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-6 md:grid-cols-12 md:gap-10 md:px-10">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-steel/60">
              <Image
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80"
                alt="A dark car being polished"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/30" />
              {/* Scan */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="scan-line absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-red/40 to-transparent" />
              </div>
              {/* Corner marks */}
              <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-red" />
              <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-red" />
              <span className="absolute left-3 bottom-3 h-3 w-3 border-l border-b border-red" />
              <span className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-red" />
              <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-off">
                In the shop · live
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
              <span className="text-red">[04]</span>
              <span className="h-px w-10 bg-steel" />
              <span>Correct first, coat second</span>
            </div>
            <h2 className="font-technical text-4xl font-medium leading-[0.95] tracking-tight text-off md:text-[4vw]">
              A coating is only as good as the paint beneath it.
            </h2>
            <p className="mt-6 max-w-xl font-technical text-base leading-relaxed text-silver md:text-lg">
              Ceramic coating locks whatever's under it in place for years. If swirls
              and haze are still there, you're sealing them in. We correct first, then
              coat — not the other way around.
            </p>

            <div className="mt-10 border border-steel/60 bg-carbon">
              <div className="flex items-center justify-between border-b border-steel/60 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                <span>Package it with</span>
                <span className="text-red">●</span>
              </div>
              <div className="divide-y divide-steel/40">
                <PairRow name="Ceramic Coating" body="Lock in the fresh correction for 3 — 7 years." href="#contact" />
                <PairRow name="Exterior Detailing" body="Keep the finish between corrections." href="#contact" />
                <PairRow name="Window Tint" body="Finish the exterior at the same time." href="#contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="relative bg-carbon py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
                <span className="text-red">[05]</span>
                <span className="h-px w-10 bg-steel" />
                <span>Related services</span>
              </div>
              <h2 className="font-technical text-4xl font-medium leading-[0.9] tracking-tight text-off md:text-5xl">
                Keep going<span className="text-red">.</span>
              </h2>
            </div>
            <Link
              href={"/concept-3#services" as never}
              className="hidden items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-off hover:text-red md:inline-flex"
            >
              <span className="h-px w-10 bg-red" />
              All services
            </Link>
          </div>

          <ul className="grid gap-4 md:grid-cols-3">
            {services
              .filter((s) => s.name !== "Paint Correction")
              .slice(0, 3)
              .map((s) => (
                <li key={s.id}>
                  <Link
                    href={"/concept-3#services" as never}
                    className="group relative isolate flex h-full items-start justify-between gap-4 overflow-hidden border border-steel/50 bg-ink p-6 transition-all duration-500 hover:-translate-y-2 hover:border-red md:p-7"
                  >
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                    <div>
                      <div className="font-mono text-xs text-silver">Service {s.id}</div>
                      <h3 className="mt-2 font-technical text-2xl tracking-tight text-off md:text-3xl">
                        {s.short}
                      </h3>
                      <p className="mt-2 max-w-sm font-technical text-sm text-silver">
                        {s.tagline}
                      </p>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-steel text-off transition-colors group-hover:border-red group-hover:bg-red group-hover:text-white">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* CTA panel */}
      <section className="relative border-y border-steel/60 bg-ink py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #525252 1px, transparent 1px), linear-gradient(to bottom, #525252 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto grid max-w-[1600px] gap-10 px-6 md:grid-cols-12 md:items-center md:px-10">
          <div className="md:col-span-8">
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
              <span className="text-red">●</span>
              <span>Ready when you are</span>
            </div>
            <h2 className="font-technical text-5xl font-medium leading-[0.92] tracking-tight text-off md:text-[5.5vw]">
              Book a <span className="text-red">paint check</span>.
            </h2>
            <p className="mt-4 max-w-xl font-technical text-base text-silver md:text-lg">
              Bring it in for an in-person look. We'll measure the paint, show you what
              level of correction fits, and give you an honest price.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Link
              href={"/concept-3#contact" as never}
              className="group inline-flex items-center gap-3 border border-red bg-red px-7 py-5 font-technical text-xs uppercase tracking-[0.3em] text-white transition-colors hover:bg-red-deep"
            >
              Get a quote
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative mx-auto mt-10 max-w-[1600px] border-t border-steel/40 px-6 pt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver md:px-10">
          Serving {serviceAreas.slice(0, 5).join(" · ")} + {serviceAreas.length - 5} more
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SpecRow({
  k,
  v,
  red = false,
}: {
  k: string;
  v: string;
  red?: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em]">
      <span className="text-silver">{k}</span>
      <span className={red ? "text-red" : "text-off"}>{v}</span>
    </div>
  );
}

function PairRow({ name, body, href }: { name: string; body: string; href: string }) {
  return (
    <Link
      href={href as never}
      className="group flex items-start justify-between gap-4 px-5 py-4 transition-colors hover:bg-ink"
    >
      <div>
        <div className="font-technical text-base text-off md:text-lg">{name}</div>
        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
          {body}
        </div>
      </div>
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-steel text-off transition-colors group-hover:border-red group-hover:bg-red group-hover:text-white">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
