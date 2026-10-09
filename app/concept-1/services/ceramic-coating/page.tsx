import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../../components/concept1/Nav";
import Footer from "../../../components/concept1/Footer";
import CeramicProtocol from "../../../components/concept1/CeramicProtocol";
import { business, services, serviceAreas } from "../../../data/business";

export const metadata: Metadata = {
  title:
    "Ceramic Coating in Redondo Beach, CA — Integrity Auto Salon",
  description:
    "Professional ceramic coating installation in Redondo Beach. Multi-year hydrophobic systems. Correction-first, measured, documented. Owner-operated by Mike.",
};

type Tier = {
  code: string;
  name: string;
  duration: string;
  best: string;
  gloss: string;
  layers: string;
  inc: readonly string[];
  highlight?: boolean;
};

const tiers: readonly Tier[] = [
  {
    code: "SPEC-03",
    name: "Interval",
    duration: "3-year system",
    best: "Lease vehicles · daily drivers",
    gloss: "9H",
    layers: "1 Base · 1 Top",
    inc: [
      "Decontamination wash",
      "Clay + iron removal",
      "Single-stage polish",
      "3-year ceramic base",
    ],
  },
  {
    code: "SPEC-05",
    name: "Session",
    duration: "5-year system",
    best: "Enthusiast daily · weekend builds",
    gloss: "9H+",
    layers: "1 Base · 2 Top",
    inc: [
      "Full decon + chemical strip",
      "2-stage machine correction",
      "5-year ceramic base + topper",
      "Wheels + trim coated",
    ],
    highlight: true,
  },
  {
    code: "SPEC-07",
    name: "Reserve",
    duration: "7-year system",
    best: "Collector cars · PPF stacks",
    gloss: "10H",
    layers: "2 Base · 2 Top",
    inc: [
      "Full decon + depth mapping",
      "Multi-stage correction",
      "7-year flagship ceramic",
      "Glass, wheels, trim, plastics",
      "Annual check-in included",
    ],
  },
];

const specs = [
  { k: "9H+", v: "Pencil hardness" },
  { k: "110°", v: "Water contact angle" },
  { k: "7 YR", v: "Longest system" },
  { k: "<2 µm", v: "Film thickness" },
];

const faqs = [
  {
    q: "What's the difference between a wax, a sealant and a ceramic?",
    a: "Wax lasts weeks, sealant lasts months, ceramic lasts years. A ceramic is a semi-permanent silica-based layer that chemically bonds to the clear coat — it's a protection system, not a dressing.",
  },
  {
    q: "Do you correct the paint before coating?",
    a: "Always. Coating locks in whatever is underneath it. Every system we quote assumes paint correction appropriate to the vehicle. We won't bury swirls under a 5-year coating.",
  },
  {
    q: "How long does the install take?",
    a: "Most sedans and coupes are 2 – 4 days depending on correction scope and cure cycle. Flagship 7-year systems with full correction can run 5 days.",
  },
  {
    q: "What's the aftercare?",
    a: "No automatic washes. Two-bucket washes every 2 – 4 weeks, pH-neutral soap, and an annual decontamination. We send a care sheet with every hand-off.",
  },
  {
    q: "Do you offer mobile ceramic installs?",
    a: "Correction and ceramic require a controlled environment. We handle those in-shop in Redondo Beach. Maintenance and lighter protection can be done mobile across the South Bay.",
  },
] as const;

const related = [
  {
    key: "Paint Correction",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    key: "Exterior Detailing",
    img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    key: "Window Tint",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export default function CeramicCoatingPage() {
  return (
    <main className="relative bg-ink text-off grain">
      <Nav />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-28 md:pt-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />
        <div className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-red/20 blur-[160px]" />

        <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-silver"
          >
            <Link href={"/concept-1" as never} className="hover:text-off">
              Home
            </Link>
            <span className="text-red">/</span>
            <Link href={"/concept-1#services" as never} className="hover:text-off">
              Services
            </Link>
            <span className="text-red">/</span>
            <span className="text-off">Ceramic Coating</span>
          </nav>

          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-10 bg-red" />
                <span>Service · 01 / 06 · Flagship</span>
              </div>
              <h1 className="font-display text-[16vw] leading-[0.82] tracking-tight text-off md:text-[11vw]">
                CERAMIC
                <br />
                COATING<span className="text-red">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg text-off/85 md:text-xl">
                A hydrophobic, UV-stable, chemically bonded shield installed over corrected
                paint. Measured in years, not months. Specified like hardware, not sold like
                detailing.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="btn-sweep group flex items-center gap-3 bg-red px-7 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                >
                  Request a quote
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
                  className="group flex items-center gap-3 border border-off/50 px-7 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-off transition-colors hover:border-red hover:text-red"
                >
                  <span className="h-2 w-2 bg-red" />
                  Call {business.phone}
                </a>
              </div>
            </div>

            {/* Spec sidebar */}
            <aside className="md:col-span-4">
              <div className="border border-steel/60 bg-carbon/80 p-6 backdrop-blur md:p-7">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-silver">
                  <span>Specification</span>
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                    V1.0
                  </span>
                </div>
                <dl className="mt-5 divide-y divide-steel/40">
                  {specs.map((s) => (
                    <div
                      key={s.v}
                      className="flex items-baseline justify-between py-3"
                    >
                      <dt className="text-xs uppercase tracking-[0.25em] text-silver">
                        {s.v}
                      </dt>
                      <dd className="font-display text-2xl text-off md:text-3xl">
                        {s.k}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 border-t border-steel/50 pt-4 text-[11px] uppercase tracking-[0.3em] text-silver">
                  Installed in-shop · Redondo Beach, CA
                </div>
              </div>
            </aside>
          </div>

          {/* Hero data bar */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-steel/40 pt-6 text-[11px] uppercase tracking-[0.3em] text-silver md:mt-20 md:grid-cols-4">
            <div>
              <div className="text-silver/70">Install time</div>
              <div className="mt-1 text-off">2 – 5 days</div>
            </div>
            <div>
              <div className="text-silver/70">Includes</div>
              <div className="mt-1 text-off">Correction + coating</div>
            </div>
            <div>
              <div className="text-silver/70">Warranty</div>
              <div className="mt-1 text-off">3 / 5 / 7 Year</div>
            </div>
            <div>
              <div className="text-silver/70">Vehicles</div>
              <div className="mt-1 text-off">Daily · exotic · marine</div>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:grid-cols-12 md:gap-10 md:px-12">
          <div className="relative md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-steel/50">
              <Image
                src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&w=1600&q=80"
                alt="Ceramic application in a controlled studio"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <span className="absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-red" />
              <span className="absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-red" />
              <span className="absolute left-4 bottom-4 h-4 w-4 border-l-2 border-b-2 border-red" />
              <span className="absolute right-4 bottom-4 h-4 w-4 border-r-2 border-b-2 border-red" />
              <div className="absolute left-5 top-5 flex items-center gap-2 bg-ink/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-off backdrop-blur">
                <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                Cure cycle · 12h
              </div>
              <div className="absolute inset-x-5 bottom-5 font-mono text-[10px] uppercase tracking-[0.3em] text-off">
                Fig. 01 — Layer-two application
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-10 bg-red" />
              <span>What it is</span>
            </div>
            <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[5.5vw]">
              A SACRIFICIAL LAYER
              <br />
              THAT ACTS LIKE ARMOR
              <span className="text-red">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-silver md:text-lg">
              Ceramic coating is a liquid polymer that cross-links to a glass-like film
              covalently bonded to your clear coat. Once cured, it rejects water, resists
              chemicals, repels contaminants, and takes the hit from UV so the paint
              underneath doesn't have to.
            </p>

            <ul className="mt-10 grid gap-6 border-l border-red pl-6 md:grid-cols-2">
              {[
                {
                  t: "Hydrophobic",
                  d: "Water contact angle up to 110°. Rain beads, dries clean, and leaves less for you to work on next weekend.",
                },
                {
                  t: "Chemically resistant",
                  d: "Buffers against bird etching, bug acid, tree sap, brake dust and most contaminants a daily driver sees.",
                },
                {
                  t: "UV stable",
                  d: "Reduces oxidation and clear-coat fade. The paint keeps its depth years longer than it would otherwise.",
                },
                {
                  t: "Hardness, not toughness",
                  d: "9H+ hardness pushes everyday rock chips, swirl risk and wash-induced marring back by orders of magnitude.",
                },
              ].map((row) => (
                <li key={row.t}>
                  <div className="font-display text-xl tracking-wide text-off md:text-2xl">
                    {row.t}
                  </div>
                  <p className="mt-1 text-sm text-silver md:text-base">{row.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="relative overflow-hidden bg-carbon py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/10 blur-[160px]" />
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-10 bg-red" />
                <span>Systems · 03 Tiers</span>
              </div>
              <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[5.5vw]">
                PICK THE DURATION<span className="text-red">.</span>
              </h2>
            </div>
            <p className="md:col-span-6 max-w-md text-base text-silver md:ml-auto md:text-right md:text-lg">
              Three professional systems — matched to how you use the car and how long
              you plan to keep it. We spec, you choose.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <article
                key={t.code}
                className={`group relative isolate flex flex-col justify-between gap-10 overflow-hidden border p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:[box-shadow:0_30px_80px_-20px_rgba(225,6,0,0.4)] md:p-9 ${
                  t.highlight
                    ? "border-red bg-ink"
                    : "border-steel/50 bg-ink hover:border-red"
                }`}
              >
                {t.highlight && (
                  <span className="absolute right-0 top-0 bg-red px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
                    Most spec'd
                  </span>
                )}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />

                <div className="relative">
                  <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                    <span>{t.code}</span>
                    <span className="text-red">●</span>
                  </div>
                  <h3 className="mt-3 font-display text-5xl leading-[0.9] tracking-tight text-off md:text-6xl">
                    {t.name}
                  </h3>
                  <div className="mt-1 text-sm uppercase tracking-[0.3em] text-silver">
                    {t.duration}
                  </div>
                  <div className="mt-5 text-sm text-off/80">{t.best}</div>

                  <dl className="mt-6 grid grid-cols-2 gap-3 border-y border-steel/40 py-4 text-xs uppercase tracking-[0.25em] text-silver">
                    <div>
                      <dt>Gloss</dt>
                      <dd className="mt-1 text-off">{t.gloss}</dd>
                    </div>
                    <div>
                      <dt>Build</dt>
                      <dd className="mt-1 text-off">{t.layers}</dd>
                    </div>
                  </dl>

                  <ul className="mt-6 space-y-2 text-sm text-off/90">
                    {t.inc.map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1 w-3 bg-red" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`group/btn relative mt-6 flex items-center justify-between gap-3 border px-5 py-4 text-xs font-semibold uppercase tracking-[0.3em] transition-colors ${
                    t.highlight
                      ? "border-red bg-red text-white hover:bg-red-deep"
                      : "border-off text-off hover:border-red hover:text-red"
                  }`}
                >
                  <span>Request this spec</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            ))}
          </div>

          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-silver">
            * Final quote confirmed after in-person assessment. Correction scope varies by
            vehicle condition.
          </p>
        </div>
      </section>

      {/* Protocol */}
      <CeramicProtocol />

      {/* Gallery */}
      <section className="relative bg-carbon py-24 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-10 bg-red" />
                <span>Shop frames</span>
              </div>
              <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[5vw]">
                COATED, DOCUMENTED.
              </h2>
            </div>
            <Link
              href={"/concept-1#work" as never}
              className="hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-off hover:text-red md:inline-flex"
            >
              <span className="h-px w-10 bg-red" />
              Full portfolio
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80",
                tag: "Coupe · 5YR",
              },
              {
                src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80",
                tag: "Grand tourer · 7YR",
              },
              {
                src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1600&q=80",
                tag: "Sedan · 5YR",
              },
              {
                src: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1600&q=80",
                tag: "Saloon · 3YR",
              },
              {
                src: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=1600&q=80",
                tag: "Coupe · Correction",
              },
              {
                src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80",
                tag: "Hand-off · Studio",
              },
            ].map((shot, i) => (
              <a
                key={shot.src}
                href="#contact"
                className="group relative isolate col-span-1 block overflow-hidden"
              >
                <div className="relative aspect-[4/3] md:aspect-[16/10]">
                  <Image
                    src={shot.src}
                    alt="Ceramic coated vehicle"
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-red/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-red/40" />

                  {/* Red light sweep */}
                  <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-red/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />

                  {/* Corner marks */}
                  <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />
                  <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />
                  <span className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />
                  <span className="absolute left-3 bottom-3 h-3 w-3 border-l border-b border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />

                  <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-off">
                    Frame {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                    <span className="font-display text-sm tracking-wider text-off md:text-base">
                      {shot.tag}
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center border border-off/70 bg-ink/60 text-off opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 translate-x-3">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-ink py-24 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:grid-cols-12 md:gap-10 md:px-12">
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-10 bg-red" />
              <span>Common questions</span>
            </div>
            <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[5vw]">
              THE QUESTIONS
              <br />
              WE ANSWER MOST<span className="text-red">.</span>
            </h2>
            <p className="mt-6 max-w-md text-base text-silver md:text-lg">
              Nothing you'd actually ask about ceramic coating is a trade secret. Here's
              the honest version.
            </p>
          </div>

          <div className="md:col-span-7">
            <ul className="divide-y divide-steel/40 border-y border-steel/40">
              {faqs.map((f, i) => (
                <li key={f.q} className="group py-6 md:py-7">
                  <details className="group/row">
                    <summary className="flex cursor-pointer items-start justify-between gap-8 text-left">
                      <div className="flex items-start gap-4">
                        <span className="font-mono text-xs text-red">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-2xl tracking-wide text-off md:text-3xl">
                          {f.q}
                        </h3>
                      </div>
                      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-steel text-off transition-all duration-500 group-open/row:border-red group-open/row:bg-red group-open/row:rotate-45">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="ml-10 mt-4 max-w-2xl text-base leading-relaxed text-silver md:text-lg">
                      {f.a}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="relative bg-carbon py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-10 bg-red" />
                <span>Pair with</span>
              </div>
              <h2 className="font-display text-4xl leading-[0.9] tracking-tight text-off md:text-5xl">
                COMPLEMENTARY MODULES.
              </h2>
            </div>
            <Link
              href={"/concept-1#services" as never}
              className="hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-off hover:text-red md:inline-flex"
            >
              <span className="h-px w-10 bg-red" />
              All services
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {related.map(({ key, img }) => {
              const s = services.find((x) => x.name === key)!;
              return (
                <Link
                  key={s.id}
                  href={"/concept-1#services" as never}
                  className="group relative isolate block overflow-hidden border border-steel/50 bg-ink transition-all duration-500 ease-out hover:-translate-y-2 hover:border-red hover:[box-shadow:0_30px_80px_-20px_rgba(225,6,0,0.4)]"
                >
                  {/* Red top line */}
                  <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={img}
                      alt={s.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-red/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-red/30" />

                    {/* Red light sweep */}
                    <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-red/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />

                    {/* Corner marks */}
                    <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />
                    <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />

                    <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-off">
                      Module / {s.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex items-start justify-between gap-4 p-6 md:p-7">
                    <div>
                      <h3 className="font-display text-3xl leading-tight tracking-wide text-off md:text-4xl">
                        <span className="relative inline-block">
                          {s.short}
                          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                        </span>
                      </h3>
                      <p className="mt-2 max-w-sm text-sm text-silver transition-colors duration-500 group-hover:text-off/90">
                        {s.tagline}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {s.highlights.slice(0, 3).map((h) => (
                          <span
                            key={h}
                            className="border border-steel/60 bg-carbon px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-silver"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-steel text-off transition-all duration-500 group-hover:border-red group-hover:bg-red group-hover:text-white group-hover:rotate-45">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="square" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section
        id="contact"
        className="relative isolate overflow-hidden border-y border-steel/60 bg-ink"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-ink/85" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-red/20 via-transparent to-transparent" />

        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-20 md:grid-cols-12 md:items-center md:px-12 md:py-28">
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-10 bg-red" />
              <span>Open file · {new Date().getFullYear()}</span>
            </div>
            <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[6vw]">
              READY TO SPEC
              <br />
              A COATING<span className="text-red">?</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-silver md:text-lg">
              Tell us about the vehicle, how you use it, and how long you plan to keep it.
              We'll come back with the right tier, timing, and an honest quote.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:col-span-4 md:items-end">
            <Link
              href={"/concept-1#contact" as never}
              className="btn-sweep group flex w-full items-center justify-between gap-4 bg-red px-7 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-white md:w-auto"
            >
              Request a quote
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={business.phoneHref}
              className="group flex w-full items-center justify-between gap-4 border border-off/50 px-7 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-off transition-colors hover:border-red hover:text-red md:w-auto"
            >
              Call {business.phone}
              <span className="h-2 w-2 bg-red" />
            </a>
            <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-silver">
              Serving {serviceAreas.slice(0, 4).join(" · ")} + {serviceAreas.length - 4} more
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
