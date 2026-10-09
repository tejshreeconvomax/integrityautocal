import { process } from "../../data/business";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-carbon py-24 md:py-32">
      {/* Soft red ambient */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-red/10 blur-[160px]" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-14 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-10 bg-red" />
              <span>Process · 04 Phases</span>
            </div>
            <h2 className="font-display text-6xl leading-[0.9] tracking-tight text-off md:text-[6.5vw]">
              SLOW DOWN
              <br />
              TO GO FAST.
            </h2>
          </div>
          <p className="max-w-md text-base text-silver md:col-span-6 md:col-start-7 md:text-lg">
            The outcome you see is the result of the steps you don't. Here's how a job
            moves through the shop — and why there's no step we're willing to skip.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {process.map((p, i) => (
            <div
              key={p.step}
              className="group relative isolate flex flex-col justify-between gap-10 border border-steel/50 bg-ink p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-red hover:bg-carbon hover:[box-shadow:0_30px_80px_-20px_rgba(225,6,0,0.35)] md:p-10"
            >
              {/* Red top accent that slides in */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 ease-out group-hover:scale-x-100" />
              {/* Red diagonal corner */}
              <span className="pointer-events-none absolute right-0 top-0 h-0 w-0 border-l-[0_solid_transparent] border-b-[0_solid_transparent] border-t-[28px] border-r-[28px] border-t-red border-r-red opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Diagonal shimmer */}
              <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />

              <div className="relative flex items-start justify-between">
                <span className="font-display text-6xl leading-none text-off transition-all duration-500 group-hover:text-red md:text-7xl">
                  {p.step}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center border border-steel/60 text-off opacity-0 transition-all duration-500 group-hover:border-red group-hover:bg-red group-hover:opacity-100 group-hover:rotate-45">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="square" />
                  </svg>
                </span>
              </div>

              <div className="relative">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver transition-colors duration-500 group-hover:text-red">
                  Phase / {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-2xl tracking-wide text-off md:text-3xl">
                  <span className="relative inline-block">
                    {p.label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver transition-colors duration-500 group-hover:text-off/90">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
