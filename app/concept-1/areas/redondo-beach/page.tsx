import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../../components/concept1/Nav";
import Footer from "../../../components/concept1/Footer";
import {
  business,
  services,
  serviceAreas,
  testimonials,
} from "../../../data/business";

const area = {
  name: "Redondo Beach",
  shortName: "Redondo",
  state: "California",
  stateShort: "CA",
  zip: "90277",
  lat: "33.8406° N",
  lng: "118.3883° W",
  blurb:
    "The home shop. Mike's in-shop base of operations for ceramic coating, paint correction, and the kind of detail work that stops people in parking lots along PCH.",
};

export const metadata: Metadata = {
  title: `Ceramic Coating & Detailing in ${area.name}, ${area.stateShort} — Integrity Auto Salon`,
  description: `Integrity Auto Salon's home shop in ${area.name}, ${area.state}. In-shop ceramic coating, paint correction, detailing, tint and marine care. Owner-operated by Mike.`,
};

const localBeats = [
  {
    k: "01",
    t: "Headquarters",
    d: "Our in-shop base. Everything that needs a controlled bay — correction, ceramic install, tint — happens here on 90277.",
  },
  {
    k: "02",
    t: "Mobile-ready",
    d: "Maintenance washes, decontamination, and lighter protection services can be dispatched to driveways across Redondo.",
  },
  {
    k: "03",
    t: "Local climate",
    d: "Salt air, PCH grime, sun exposure. We spec coatings and interiors for the way cars actually live in the South Bay.",
  },
  {
    k: "04",
    t: "Owner-operated",
    d: "Not a chain, not a franchise. Mike touches every car and every quote personally. The buck stops at the hand-off.",
  },
];

const localReviews = testimonials.slice(0, 3);

export default function RedondoBeachAreaPage() {
  return (
    <main className="relative bg-ink text-off grain">
      <Nav />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-28 md:pt-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/75 via-ink/80 to-ink" />
        <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[480px] w-[480px] rounded-full bg-red/20 blur-[160px]" />

        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

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
            <Link href={"/concept-1#areas" as never} className="hover:text-off">
              Service areas
            </Link>
            <span className="text-red">/</span>
            <span className="text-off">{area.name}</span>
          </nav>

          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-10 bg-red" />
                <span>Service area · HQ · {area.zip}</span>
              </div>
              <h1 className="font-display text-[16vw] leading-[0.82] tracking-tight text-off md:text-[11vw]">
                {area.name.split(" ")[0].toUpperCase()}
                <br />
                <span className="relative inline-block">
                  {area.name.split(" ")[1]?.toUpperCase() ?? ""}
                  <span className="absolute -right-6 -top-4 font-mono text-base text-red md:text-xl">
                    ®
                  </span>
                </span>
                <span className="text-red">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg text-off/85 md:text-xl">
                {area.blurb}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#book"
                  className="btn-sweep group flex items-center gap-3 bg-red px-7 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                >
                  Book {area.shortName}
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

            {/* Location card */}
            <aside className="md:col-span-4">
              <div className="border border-steel/60 bg-carbon/80 p-6 backdrop-blur md:p-7">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-silver">
                  <span>Location data</span>
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                    Open now
                  </span>
                </div>
                <dl className="mt-5 divide-y divide-steel/40">
                  <Row k="City" v={area.name} />
                  <Row k="State" v={`${area.state} · ${area.stateShort}`} />
                  <Row k="Zip" v={area.zip} />
                  <Row k="Latitude" v={area.lat} />
                  <Row k="Longitude" v={area.lng} />
                  <Row k="Hours" v="09:00 — 18:00" />
                  <Row k="Mode" v="In-shop + Mobile" />
                </dl>
                <div className="mt-5 border-t border-steel/50 pt-4 text-[11px] uppercase tracking-[0.3em] text-silver">
                  Zone · South Bay / LA County
                </div>
              </div>
            </aside>
          </div>

          {/* Data strip */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-steel/40 pt-6 text-[11px] uppercase tracking-[0.3em] text-silver md:mt-20 md:grid-cols-4">
            <div>
              <div className="text-silver/70">Status</div>
              <div className="mt-1 text-off">Headquarters</div>
            </div>
            <div>
              <div className="text-silver/70">Services</div>
              <div className="mt-1 text-off">All 06 modules</div>
            </div>
            <div>
              <div className="text-silver/70">Mobile radius</div>
              <div className="mt-1 text-off">South Bay · 7 cities</div>
            </div>
            <div>
              <div className="text-silver/70">Reviews</div>
              <div className="mt-1 text-off">55 · 5.0 avg</div>
            </div>
          </div>
        </div>
      </section>

      {/* Beats */}
      <section className="relative bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-14 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-10 bg-red" />
                <span>What {area.shortName} gets</span>
              </div>
              <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[5.5vw]">
                SAME SHOP.
                <br />
                SAME HANDS.
                <span className="text-red">.</span>
              </h2>
            </div>
            <p className="md:col-span-6 md:col-start-7 max-w-md text-base text-silver md:text-lg">
              The whole studio is three minutes off PCH. Walk-in on an appointment,
              hand off the keys, pick up something that looks better than when you drove
              it off the lot.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {localBeats.map((b) => (
              <article
                key={b.k}
                className="group relative isolate flex flex-col justify-between gap-10 border border-steel/50 bg-carbon p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-red hover:bg-ink hover:[box-shadow:0_30px_80px_-20px_rgba(225,6,0,0.35)]"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />

                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl leading-none text-off transition-colors duration-500 group-hover:text-red md:text-6xl">
                    {b.k}
                  </span>
                  <span className="h-2 w-2 bg-red opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wide text-off md:text-3xl">
                    <span className="relative inline-block">
                      {b.t}
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                    </span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver transition-colors duration-500 group-hover:text-off/90">
                    {b.d}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="relative bg-carbon py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-10 bg-red" />
                <span>06 modules · all available in {area.shortName}</span>
              </div>
              <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[5.5vw]">
                EVERYTHING WE DO.
                <br />
                WHERE WE LIVE<span className="text-red">.</span>
              </h2>
            </div>
            <p className="md:col-span-6 max-w-md text-base text-silver md:ml-auto md:text-right md:text-lg">
              Nothing is off-menu because of the location — this is the shop everything
              else is dispatched from.
            </p>
          </div>

          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={
                    s.name === "Ceramic Coatings"
                      ? ("/concept-1/services/ceramic-coating" as never)
                      : ("/concept-1#services" as never)
                  }
                  className="group relative isolate flex h-full flex-col justify-between gap-10 overflow-hidden border border-steel/50 bg-ink p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-red hover:[box-shadow:0_30px_80px_-20px_rgba(225,6,0,0.35)] md:p-7"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />

                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-silver">/ {s.id}</span>
                    <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl tracking-wide text-off md:text-4xl">
                      {s.short}
                    </h3>
                    <p className="mt-3 text-sm text-silver">{s.tagline}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-silver transition-colors duration-500 group-hover:text-red">
                    <span>Open scope</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center border border-steel transition-all duration-500 group-hover:border-red group-hover:bg-red group-hover:text-white group-hover:rotate-45">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="square" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews from the area */}
      <section className="relative bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-14 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-10 bg-red" />
                <span>Local record · 55 reviews</span>
              </div>
              <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[5.5vw]">
                WHAT {area.shortName.toUpperCase()}
                <br />
                OWNERS SAY<span className="text-red">.</span>
              </h2>
            </div>
            <div className="flex items-end md:col-span-6 md:justify-end">
              <div className="flex items-center gap-6">
                <div>
                  <div className="font-display text-5xl text-off md:text-6xl">
                    5.0
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.3em] text-silver">
                    Google · 55 reviews
                  </div>
                </div>
                <div className="h-16 w-px bg-steel" />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="h-6 w-6 fill-red">
                      <path d="M12 2l2.9 7h7.1l-5.8 4.2 2.2 7.3L12 16l-6.4 4.5 2.2-7.3L2 9h7.1z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {localReviews.map((t, i) => (
              <blockquote
                key={t.name}
                className="group relative isolate flex h-full flex-col justify-between overflow-hidden border border-steel/50 bg-carbon p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-red hover:[box-shadow:0_30px_80px_-20px_rgba(225,6,0,0.35)]"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-red transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />

                <div>
                  <div className="mb-4 font-display text-4xl leading-none text-red">
                    /{String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm leading-relaxed text-off/90 md:text-base">
                    “{t.body}”
                  </p>
                </div>
                <footer className="relative mt-8 border-t border-steel/50 pt-4 text-xs uppercase tracking-[0.25em] text-silver transition-colors duration-500 group-hover:border-red/60">
                  <div className="font-display text-base tracking-wider text-off">
                    {t.name}
                  </div>
                  <div className="mt-1">{t.date} · {area.name}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section id="areas" className="relative bg-carbon py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-10 bg-red" />
                <span>Mobile radius · South Bay</span>
              </div>
              <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[5.5vw]">
                WE ALSO COVER<span className="text-red">.</span>
              </h2>
            </div>
            <p className="md:col-span-5 max-w-md text-base text-silver md:ml-auto md:text-right md:text-lg">
              {area.name} is HQ. Mobile services roll out to the six nearby cities below —
              same standards, same hands.
            </p>
          </div>

          <ul className="divide-y divide-steel/40 border-y border-steel/40">
            {serviceAreas.map((a, i) => {
              const current = a === area.name;
              return (
                <li key={a} className="group">
                  <div className="flex items-center justify-between gap-6 py-6 md:py-7">
                    <div className="flex items-center gap-6">
                      <span className="w-10 font-mono text-xs text-silver">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-3xl tracking-wide md:text-5xl ${
                          current ? "text-red" : "text-off"
                        }`}
                      >
                        {a}
                        {current && (
                          <span className="ml-4 align-middle text-xs uppercase tracking-[0.3em] text-off">
                            · You are here
                          </span>
                        )}
                      </span>
                    </div>
                    <span className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-silver">
                      <span className="hidden md:inline">{area.stateShort}</span>
                      <span className="inline-flex h-10 w-10 items-center justify-center border border-steel text-off transition-all duration-500 group-hover:border-red group-hover:bg-red group-hover:text-white">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="square" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Visit the shop */}
      <section className="relative bg-ink py-24 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:grid-cols-12 md:gap-10 md:px-12">
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-10 bg-red" />
              <span>Visit the shop</span>
            </div>
            <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[5vw]">
              DROP IN<span className="text-red">.</span>
              <br />
              OR WE'LL ROLL<br />
              OUT.
            </h2>
            <p className="mt-6 max-w-md text-base text-silver md:text-lg">
              In-shop assessments and installs happen in a controlled bay in {area.name}.
              Maintenance washes, decon and lighter work can be dispatched to your
              driveway anywhere in the mobile radius.
            </p>

            <dl className="mt-10 space-y-5 border-l border-red pl-6">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.3em] text-silver">
                  Studio phone
                </dt>
                <dd className="font-display text-3xl text-off">
                  <a href={business.phoneHref}>{business.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.3em] text-silver">
                  Hours
                </dt>
                <dd className="mt-1 text-sm text-off/90">{business.hours}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.3em] text-silver">
                  Address zone
                </dt>
                <dd className="mt-1 text-sm text-off/90">
                  {area.name}, {area.state} {area.zip}
                </dd>
              </div>
            </dl>
          </div>

          {/* Map tile */}
          <div id="book" className="md:col-span-7">
            <div className="relative overflow-hidden border border-steel/60 bg-carbon">
              <div className="flex items-center justify-between border-b border-steel/60 bg-ink/50 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                  Map · {area.name} HQ
                </span>
                <span>{area.lat} · {area.lng}</span>
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80"
                  alt={`${area.name} overview`}
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
                {/* HQ Pin */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute h-14 w-14 border border-red/50" />
                    <span className="absolute h-24 w-24 border border-red/30" />
                    <span className="absolute h-40 w-40 border border-red/10" />
                    <span className="relative h-3 w-3 bg-red pulse-dot" />
                    <span className="absolute top-6 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-off">
                      HQ · {area.name}
                    </span>
                  </div>
                </div>
                {/* Reticle corners */}
                <span className="absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-red" />
                <span className="absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-red" />
                <span className="absolute left-4 bottom-4 h-4 w-4 border-l-2 border-b-2 border-red" />
                <span className="absolute right-4 bottom-4 h-4 w-4 border-r-2 border-b-2 border-red" />
              </div>

              <div className="grid grid-cols-2 divide-x divide-steel/40 border-t border-steel/60">
                <div className="p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                    In-shop
                  </div>
                  <div className="mt-2 font-display text-xl text-off">
                    Correction · Ceramic · Tint
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                    Mobile
                  </div>
                  <div className="mt-2 font-display text-xl text-off">
                    Detail · Maintenance · Decon
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={"/concept-1#contact" as never}
                className="btn-sweep group flex items-center gap-3 bg-red px-7 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-white"
              >
                Request a quote
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href={business.phoneHref}
                className="group flex items-center gap-3 border border-off/50 px-7 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-off transition-colors hover:border-red hover:text-red"
              >
                <span className="h-2 w-2 bg-red" />
                Call the shop
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between py-3">
      <dt className="text-xs uppercase tracking-[0.25em] text-silver">{k}</dt>
      <dd className="font-mono text-sm text-off">{v}</dd>
    </div>
  );
}
