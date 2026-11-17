import Link from "next/link";
import { serviceAreas } from "../../data/business";
import styles from "./Areas.module.css";

const slugMap: Record<string, string> = {
  "Redondo Beach": "/concept-1/areas/redondo-beach",
};

export default function Areas() {
  return (
    <section id="areas" className="relative isolate overflow-hidden bg-[#080808] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_95%_at_86%_72%,rgba(124,8,5,0.26),transparent_62%),radial-gradient(ellipse_52%_65%_at_14%_10%,rgba(105,7,4,0.16),transparent_68%),linear-gradient(120deg,#080808_0%,#120605_52%,#080808_100%)]" />
      <div className={styles.radarMap} aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-14 grid gap-9 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-12 bg-red" />
              <span>Service areas · 07 cities</span>
            </div>
            <h2 className="font-display text-6xl leading-[0.78] tracking-tight md:text-[7vw] lg:text-[6.2vw]">
              <span className="text-off">SERVICE</span>
              <br />
              <span className="text-red">AREAS</span><span className="text-off">.</span>
            </h2>
          </div>
          <p className="max-w-xl border-l-2 border-red pl-5 text-base leading-relaxed text-off/90 sm:text-lg lg:col-span-5 lg:col-start-8 lg:mb-2">
            In-shop in Redondo Beach. Mobile across the surrounding six cities. Same
            standards, same hands.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {serviceAreas.map((area, index) => {
            const href = slugMap[area];
            const isHQ = area === "Redondo Beach";
            const card = (
              <>
                <span className={styles.hoverSurface} />
                <span className={styles.pin} aria-hidden="true">
                  <LocationIcon />
                </span>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.name}>{area}</span>
                {isHQ && <span className={styles.hq}>HQ</span>}
                <span className={styles.meta}>CA · 06 modules</span>
                <span className={styles.arrow} aria-hidden="true">
                  <ArrowIcon />
                </span>
              </>
            );

            return (
              <li key={area}>
                {href ? (
                  <Link href={href as never} className={styles.card}>
                    {card}
                  </Link>
                ) : (
                  <a href="#contact" className={styles.card}>
                    {card}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col gap-6 border-l-2 border-red pl-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.25em] text-off/90">
            Outside the radius? Call the shop — we&apos;ll figure it out.
          </p>
          <a href="#contact" className={styles.cta}>
            Request a quote
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 10c0 5.25-8 11-8 11S4 15.25 4 10a8 8 0 1 1 16 0Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
