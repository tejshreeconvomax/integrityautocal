import Link from "next/link";
import { serviceAreas } from "../../data/business";

// Which areas have dedicated detail pages
const slugMap: Record<string, string> = {
  "Redondo Beach": "/concept-1/areas/redondo-beach",
};

export default function Areas() {
  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-ink py-24 md:py-32"
    >
      {/* Soft red ambient */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-red/10 blur-[160px]" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-10 bg-red" />
              <span>Service areas · 07 Cities</span>
            </div>
            <h2 className="font-display text-6xl leading-[0.9] tracking-tight text-off md:text-[7vw]">
              THE SOUTH BAY
              <br />
              WE COVER<span className="text-red">.</span>
            </h2>
          </div>
          <p className="md:col-span-5 max-w-md text-base text-silver md:ml-auto md:text-right md:text-lg">
            In-shop in Redondo Beach. Mobile across the surrounding six cities. Same
            standards, same hands.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-px bg-steel/40 md:grid-cols-2">
          {serviceAreas.map((a, i) => {
            const href = slugMap[a];
            const isHQ = a === "Redondo Beach";
            const content = (
              <div className="relative isolate flex items-center justify-between gap-4 overflow-hidden bg-ink px-6 py-6 transition-colors duration-500 group-hover:bg-carbon md:px-8 md:py-7">
                {/* Red left bar */}
                <span className="pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-red transition-transform duration-500 group-hover:scale-y-100" />
                {/* Shimmer */}
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />

                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-silver">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-3xl tracking-wide text-off transition-colors group-hover:text-red md:text-4xl">
                    {a}
                  </span>
                  {isHQ && (
                    <span className="hidden items-center gap-1.5 border border-red bg-red/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.25em] text-red md:inline-flex">
                      HQ
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden text-xs uppercase tracking-[0.25em] text-silver md:inline">
                    CA · 06 modules
                  </span>
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center border transition-all duration-500 ${
                      href
                        ? "border-steel text-off group-hover:border-red group-hover:bg-red group-hover:text-white"
                        : "border-steel/40 text-silver"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="square" />
                    </svg>
                  </span>
                </div>
              </div>
            );

            return (
              <li key={a} className="group">
                {href ? (
                  <Link href={href as never} className="block">
                    {content}
                  </Link>
                ) : (
                  <a href="#contact" className="block">
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <p className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-silver">
          <span>+ Outside the radius? Call the shop — we'll figure it out.</span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-off"
          >
            <span className="h-px w-10 bg-red transition-all duration-500 group-hover:w-20" />
            Request a quote
          </a>
        </p>
      </div>
    </section>
  );
}
