import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../../components/concept3/Nav";
import Footer from "../../../components/concept3/Footer";
import {
  business,
  services,
  serviceAreas,
  testimonials,
} from "../../../data/business";

export const metadata: Metadata = {
  title: "Auto Detailing in Redondo Beach, CA — Integrity Auto Salon",
  description:
    "Professional auto detailing, ceramic coating, and paint correction in Redondo Beach, CA. Owner-operated, 55 five-star reviews.",
};

const beats = [
  {
    n: "01",
    name: "Riviera Village",
    body: "Catalina Avenue, boutique-lined streets, and the coffee-run cars that live here.",
  },
  {
    n: "02",
    name: "North Redondo",
    body: "Artesia corridor, family cars, daily commuters — practical paint protection.",
  },
  {
    n: "03",
    name: "South Redondo",
    body: "King Harbor, waterfront salt, and the coastal exposure that follows you home.",
  },
  {
    n: "04",
    name: "The Esplanade",
    body: "Ocean-facing homes, ocean-facing paint. These cars see more salt than most.",
  },
];

const localStats = [
  { k: "55", v: "Reviews" },
  { k: "5.0", v: "Average rating" },
  { k: "7", v: "Cities served" },
  { k: "90277", v: "Our zip" },
];

export default function RedondoBeachPage() {
  return (
    <main className="relative bg-ink text-off">
      <Nav />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #525252 1px, transparent 1px), linear-gradient(to bottom, #525252 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[480px] w-[480px] rounded-full bg-red/15 blur-[160px]" />

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
            <Link href={"/concept-3#areas" as never} className="hover:text-off">
              Service Areas
            </Link>
            <span className="text-red">/</span>
            <span className="text-off">Redondo Beach</span>
          </nav>

          <div className="col-span-12 flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-silver">
            <span className="font-mono text-red">[01]</span>
            <span className="h-px w-10 bg-steel/60" />
            <span className="font-technical">Area 01 / {serviceAreas.length}</span>
            <span className="font-mono text-silver">·</span>
            <span className="font-mono">Home shop</span>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-technical text-[13vw] font-medium leading-[0.88] tracking-tighter text-off md:text-[8vw]">
              Redondo
              <br />
              <span className="text-red">↳</span> Beach.
            </h1>
            <p className="mt-8 max-w-xl font-technical text-base leading-relaxed text-silver md:text-lg">
              Our shop is here. We know the salt air, the marine layer, and the
              parking-lot sun that take their toll on South Bay cars every single day.
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
                Call {business.phone}
              </a>
            </div>
          </div>

          {/* Right panel */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="relative border border-steel bg-carbon">
              <div className="flex items-center justify-between border-b border-steel/60 bg-ink/50 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                  Location data
                </span>
                <span>RB · 90277</span>
              </div>
              <div className="divide-y divide-steel/40">
                <SpecRow k="City" v="Redondo Beach" red />
                <SpecRow k="State" v="California" />
                <SpecRow k="Zip" v="90277" />
                <SpecRow k="Open" v="Mon — Sun, 9–6" />
                <SpecRow k="Service" v="In-shop + mobile" />
                <SpecRow k="Reviews" v="55 · 5.0 avg" />
              </div>
              <div className="border-t border-steel/60 bg-ink/40 p-4 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                * We also drive to you within 15 miles.
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative border-y border-steel/40 bg-carbon">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 border-l border-r border-steel/40 md:grid-cols-4 md:divide-x md:divide-steel/40">
          {localStats.map((s, i) => (
            <div key={s.v} className="px-6 py-6 md:px-8 md:py-8">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                <span>Point · 0{i + 1}</span>
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

      {/* Map + beats */}
      <section className="relative overflow-hidden bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
                <span className="text-red">[02]</span>
                <span className="h-px w-10 bg-steel" />
                <span>Where we are</span>
              </div>
              <h2 className="font-technical text-5xl font-medium leading-[0.92] tracking-tight text-off md:text-[5vw]">
                Our <span className="text-red">home</span> turf.
              </h2>
            </div>
            <p className="md:col-span-5 max-w-md font-technical text-base text-silver md:text-lg">
              Every part of Redondo is a short drive from the shop. We know the
              neighborhoods, we know the roads, we know what the salt does.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            {/* Map tile */}
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden border border-steel bg-carbon">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
                  alt="South Bay area"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-ink/70" />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #525252 1px, transparent 1px), linear-gradient(to bottom, #525252 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                />
                {/* HQ pin */}
                <div className="absolute" style={{ left: "42%", top: "55%" }}>
                  <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 bg-red pulse-dot" />
                  <span className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 border border-red/60" />
                  <span className="absolute left-8 top-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-off">
                    Redondo Beach <span className="text-red">· Our shop</span>
                  </span>
                </div>
                {/* Overlay labels */}
                <div className="pointer-events-none absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  South Bay map
                </div>
                <div className="pointer-events-none absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  Home base
                </div>
                <div className="pointer-events-none absolute left-3 bottom-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  Scale 1:20k
                </div>
                <div className="pointer-events-none absolute right-3 bottom-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  Redondo Beach, CA
                </div>
                {/* Scan line */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="scan-line absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-red/30 to-transparent" />
                </div>
              </div>
            </div>

            {/* Beat cards */}
            <div className="md:col-span-5">
              <ul className="grid gap-3">
                {beats.map((b) => (
                  <li
                    key={b.n}
                    className="group relative isolate overflow-hidden border border-steel/50 bg-carbon p-5 transition-all duration-500 hover:border-red hover:-translate-y-1"
                  >
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                      <span>Beat {b.n}</span>
                      <span className="text-red">●</span>
                    </div>
                    <h3 className="mt-2 font-technical text-xl tracking-tight text-off md:text-2xl">
                      {b.name}
                    </h3>
                    <p className="mt-1 font-technical text-sm text-silver">
                      {b.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* All services */}
      <section className="relative bg-carbon py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
                <span className="text-red">[03]</span>
                <span className="h-px w-10 bg-steel" />
                <span>What we offer here</span>
              </div>
              <h2 className="font-technical text-5xl font-medium leading-[0.92] tracking-tight text-off md:text-[5vw]">
                Six services<span className="text-red">.</span>
              </h2>
            </div>
            <p className="md:col-span-5 max-w-md font-technical text-base text-silver md:text-lg">
              Everything we do — available in Redondo Beach at the shop or at
              your location.
            </p>
          </div>

          <ul className="grid gap-px border border-steel/40 bg-steel/40 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={"/concept-3#services" as never}
                  className="group relative isolate flex h-full flex-col justify-between gap-8 overflow-hidden bg-ink p-6 transition-colors duration-500 hover:bg-carbon md:p-7"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                  <div>
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                      <span>Service {s.id}</span>
                      <span className="text-red">●</span>
                    </div>
                    <h3 className="mt-3 font-technical text-2xl tracking-tight text-off md:text-3xl">
                      {s.short}
                    </h3>
                    <p className="mt-2 font-technical text-sm text-silver">
                      {s.tagline}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.highlights.map((h) => (
                      <span
                        key={h}
                        className="border border-steel/60 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-silver"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
                <span className="text-red">[04]</span>
                <span className="h-px w-10 bg-steel" />
                <span>What owners say</span>
              </div>
              <h2 className="font-technical text-5xl font-medium leading-[0.92] tracking-tight text-off md:text-[5vw]">
                From our <span className="text-red">customers</span>.
              </h2>
            </div>
            <p className="md:col-span-5 max-w-md font-technical text-base text-silver md:text-lg">
              55 reviews. 5.0 average. These are from real Redondo Beach car
              owners.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                className="group relative isolate overflow-hidden border border-steel/50 bg-carbon p-6 transition-all duration-500 hover:border-red hover:-translate-y-1 md:p-7"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  <span>Review {String(i + 1).padStart(2, "0")}</span>
                  <span>{t.date}</span>
                </div>
                <p className="mt-4 font-technical text-base leading-relaxed text-off md:text-lg">
                  &ldquo;{t.body}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-red" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-silver">
                    — {t.name}
                  </span>
                  <span className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} className="h-2 w-2 bg-red" />
                    ))}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Area list */}
      <section className="relative border-y border-steel/40 bg-carbon py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
                <span className="text-red">[05]</span>
                <span className="h-px w-10 bg-steel" />
                <span>More areas</span>
              </div>
              <h2 className="font-technical text-4xl font-medium leading-[0.92] tracking-tight text-off md:text-5xl">
                We also serve<span className="text-red">.</span>
              </h2>
            </div>
          </div>

          <ul className="grid gap-px border border-steel/40 bg-steel/40 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((a) => {
              const isHere = a === "Redondo Beach";
              return (
                <li key={a}>
                  <Link
                    href={isHere ? ("/concept-3/areas/redondo-beach" as never) : ("/concept-3#contact" as never)}
                    className="group relative isolate flex items-center justify-between overflow-hidden bg-ink px-6 py-5 transition-colors duration-500 hover:bg-carbon"
                  >
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                    <div className="flex items-center gap-4">
                      <span className="text-red font-mono text-[10px]">·</span>
                      <span className="font-technical text-lg text-off md:text-xl">
                        {a}
                      </span>
                      {isHere && (
                        <span className="border border-red px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.3em] text-red">
                          You are here
                        </span>
                      )}
                    </div>
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-steel transition-colors group-hover:text-red" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-ink py-20 md:py-24">
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
              <span>Redondo Beach, CA</span>
            </div>
            <h2 className="font-technical text-5xl font-medium leading-[0.92] tracking-tight text-off md:text-[5.5vw]">
              Your car lives <span className="text-red">here</span>.
              <br />
              So do we.
            </h2>
            <p className="mt-4 max-w-xl font-technical text-base text-silver md:text-lg">
              Bring it in for a look, or we&apos;ll come to you. Same owner, same
              standards, same zip code.
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
