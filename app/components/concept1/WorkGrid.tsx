import Image from "next/image";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80",
    tag: "Ceramic · Coupe",
    label: "9H GLOSS · 5YR",
    meta: "01",
  },
  {
    src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
    tag: "Correction · Sedan",
    label: "2-STAGE POLISH",
    meta: "02",
  },
  {
    src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80",
    tag: "Tint · SUV",
    label: "35% ALL AROUND",
    meta: "03",
  },
  {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80",
    tag: "Detail · Classic",
    label: "FULL RESET",
    meta: "04",
  },
  {
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80",
    tag: "Ceramic · Grand Tourer",
    label: "7YR SYSTEM",
    meta: "05",
  },
  {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1600&q=80",
    tag: "Ceramic · Sedan",
    label: "WATER-OFF",
    meta: "06",
  },
  {
    src: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=1600&q=80",
    tag: "Correction · Coupe",
    label: "SWIRLS REMOVED",
    meta: "07",
  },
  {
    src: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&w=1600&q=80",
    tag: "Interior · Cabin",
    label: "DEEP EXTRACTION",
    meta: "08",
  },
  {
    src: "https://images.unsplash.com/photo-1547245324-d777c6f05e80?auto=format&fit=crop&w=1600&q=80",
    tag: "Exterior · SUV",
    label: "FULL DECON",
    meta: "09",
  },
  {
    src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80",
    tag: "Hand-off · Studio",
    label: "DELIVERED",
    meta: "10",
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-10 bg-red" />
              <span>Recent work · 10 selected frames</span>
            </div>
            <h2 className="font-display text-6xl leading-[0.9] tracking-tight text-off md:text-[7vw]">
              THE EVIDENCE.
            </h2>
          </div>
          <div className="md:col-span-6 md:text-right">
            <p className="max-w-md text-base text-silver md:ml-auto">
              A rotating portfolio of vehicles that rolled through the shop. Every frame
              shot in-house — nothing stock.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 md:justify-end">
              <span className="border border-steel/60 bg-carbon px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-off">
                Ceramic
              </span>
              <span className="border border-steel/60 bg-carbon px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-off">
                Correction
              </span>
              <span className="border border-steel/60 bg-carbon px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-off">
                Interior
              </span>
              <span className="border border-steel/60 bg-carbon px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-off">
                Tint
              </span>
              <span className="border border-steel/60 bg-carbon px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-off">
                Marine
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-3 md:gap-4">
          {shots.map((shot, i) => {
            // 10 cards in 4 rows: [2,2,2] [3,3] [2,2,2] [3,3]
            const spans = [
              "col-span-6 md:col-span-2",
              "col-span-6 md:col-span-2",
              "col-span-6 md:col-span-2",
              "col-span-6 md:col-span-3",
              "col-span-6 md:col-span-3",
              "col-span-6 md:col-span-2",
              "col-span-6 md:col-span-2",
              "col-span-6 md:col-span-2",
              "col-span-6 md:col-span-3",
              "col-span-6 md:col-span-3",
            ];

            return (
              <a
                key={shot.src}
                href="#contact"
                className={`${spans[i]} group relative isolate block overflow-hidden`}
              >
                <div className="relative aspect-[4/3] md:aspect-[16/9]">
                  <Image
                    src={shot.src}
                    alt={shot.tag}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-red/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-red/40" />

                  {/* Red light sweep on hover */}
                  <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-red/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />

                  {/* Corner marks */}
                  <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />
                  <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />
                  <span className="absolute left-3 bottom-3 h-3 w-3 border-l border-b border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />
                  <span className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />

                  {/* Frame number top-left */}
                  <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-off">
                    FRAME {shot.meta}
                  </span>

                  {/* Content bottom */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-5">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-off">
                      <div className="text-silver transition-colors group-hover:text-off">
                        {shot.tag}
                      </div>
                      <div className="mt-1 font-display text-base tracking-wider md:text-lg">
                        {shot.label}
                      </div>
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center border border-off/70 bg-ink/60 text-off opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 translate-x-3">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-silver">
          <span>+ New frames added weekly. Follow @integrityautocal.</span>
          <a href="#contact" className="group inline-flex items-center gap-3 text-off">
            <span className="h-px w-10 bg-red transition-all duration-500 group-hover:w-20" />
            See the full portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
