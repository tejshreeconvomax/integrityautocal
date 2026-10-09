import { testimonials } from "../../data/business";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-10 bg-red" />
              <span>Owners talking · 55 verified</span>
            </div>
            <h2 className="font-display text-6xl leading-[0.9] tracking-tight text-off md:text-[7vw]">
              THE RECORD<span className="text-red">.</span>
            </h2>
          </div>
          <div className="flex items-end md:col-span-6 md:justify-end">
            <div className="flex items-center gap-6">
              <div>
                <div className="font-display text-5xl text-off md:text-6xl">5.0</div>
                <div className="mt-1 text-xs uppercase tracking-[0.3em] text-silver">
                  Google avg · 55 reviews
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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className="group relative isolate flex h-full flex-col justify-between overflow-hidden border border-steel/50 bg-carbon p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-red hover:[box-shadow:0_30px_80px_-20px_rgba(225,6,0,0.4)] md:p-8"
            >
              {/* Red stripe slides across top */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-red transition-transform duration-500 ease-out group-hover:scale-x-100" />
              {/* Red diagonal corner */}
              <span className="pointer-events-none absolute right-0 top-0 h-0 w-0 border-t-[32px] border-r-[32px] border-t-red border-r-red opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {/* Shimmer */}
              <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />

              <div className="relative">
                <div className="mb-4 flex items-start justify-between">
                  <span className="font-display text-5xl leading-none text-red transition-all duration-500 group-hover:scale-110 origin-left">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex gap-0.5 opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} viewBox="0 0 24 24" className="h-3 w-3 fill-red">
                        <path d="M12 2l2.9 7h7.1l-5.8 4.2 2.2 7.3L12 16l-6.4 4.5 2.2-7.3L2 9h7.1z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-off/90 transition-colors duration-500 group-hover:text-off md:text-base">
                  “{t.body}”
                </p>
              </div>

              <footer className="relative mt-8 border-t border-steel/50 pt-4 text-xs uppercase tracking-[0.25em] text-silver transition-colors duration-500 group-hover:border-red/60">
                <div className="font-display text-base tracking-wider text-off">
                  <span className="relative inline-block">
                    {t.name}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span>{t.date}</span>
                  <span className="inline-flex items-center gap-1 text-off opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Verified
                    <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
