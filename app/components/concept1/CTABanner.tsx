import { business } from "../../data/business";

export default function CTABanner() {
  return (
    <section className="relative isolate overflow-hidden border-y border-steel/60 bg-ink">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-ink/85" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-red/20 via-transparent to-transparent" />

      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-20 md:grid-cols-12 md:items-center md:gap-6 md:px-12 md:py-28">
        <div className="md:col-span-8">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
            <span className="h-px w-10 bg-red" />
            <span>Book the shop</span>
          </div>
          <h2 className="font-display text-6xl leading-[0.9] tracking-tight text-off md:text-[7vw]">
            YOUR CAR,
            <br />
            PROTECTED<span className="text-red">.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:col-span-4 md:items-end">
          <a
            href="#contact"
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
          </a>
          <a
            href={business.phoneHref}
            className="group flex w-full items-center justify-between gap-4 border border-off/50 px-7 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-off transition-colors hover:border-red hover:text-red md:w-auto"
          >
            Call {business.phone}
            <span className="h-2 w-2 bg-red" />
          </a>
        </div>
      </div>
    </section>
  );
}
