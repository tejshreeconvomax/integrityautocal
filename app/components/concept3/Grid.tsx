import Image from "next/image";
import { serviceAreas, testimonials } from "../../data/business";

export default function GridSection() {
  return (
    <section id="areas" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
              <span className="text-red">[03]</span>
              <span className="h-px w-10 bg-steel" />
              <span>Where we work</span>
            </div>
            <h2 className="font-technical text-5xl font-medium leading-[0.92] tracking-tight text-off md:text-[5.5vw]">
              Our South Bay <span className="text-red">area</span>.
            </h2>
          </div>
          <p className="md:col-span-5 max-w-md font-technical text-base text-silver md:text-lg">
            Our shop is in Redondo Beach. We also drive to seven nearby cities. 55
            happy customers have left reviews.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Map tile */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden border border-steel bg-carbon">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
                alt="South Bay"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
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
              {/* Pins */}
              {serviceAreas.map((a, i) => {
                const positions = [
                  { x: 42, y: 55 },
                  { x: 38, y: 45 },
                  { x: 44, y: 35 },
                  { x: 60, y: 65 },
                  { x: 55, y: 72 },
                  { x: 65, y: 60 },
                  { x: 70, y: 48 },
                ];
                const pos = positions[i] ?? { x: 50, y: 50 };
                const isHQ = a === "Redondo Beach";
                return (
                  <div
                    key={a}
                    className="absolute"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  >
                    <div className="relative">
                      <span
                        className={`absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 ${
                          isHQ ? "bg-red pulse-dot" : "bg-off/80"
                        }`}
                      />
                      {isHQ && (
                        <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 border border-red/60" />
                      )}
                      <span className="absolute left-5 top-1 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-off">
                        {a}
                        {isHQ && <span className="pl-2 text-red">· Our shop</span>}
                      </span>
                    </div>
                  </div>
                );
              })}
              {/* Overlay corner labels */}
              <div className="pointer-events-none absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                South Bay map
              </div>
              <div className="pointer-events-none absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                7 cities · 1 shop
              </div>
              <div className="pointer-events-none absolute left-3 bottom-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                Scale 1:50k
              </div>
              <div className="pointer-events-none absolute right-3 bottom-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                Updated 2026
              </div>
            </div>
          </div>

          {/* Testimonial feed */}
          <aside className="col-span-12 lg:col-span-5">
            <div className="h-full border border-steel bg-carbon">
              <div className="flex items-center justify-between border-b border-steel/60 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                <span>What owners say</span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                  55 reviews
                </span>
              </div>
              <div className="divide-y divide-steel/40">
                {testimonials.map((t, i) => (
                  <article key={t.name} className="p-5 md:p-6">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                      <span>Review {String(i + 1).padStart(2, "0")}</span>
                      <span>{t.date}</span>
                    </div>
                    <p className="mt-3 font-technical text-sm leading-relaxed text-off md:text-base">
                      "{t.body}"
                    </p>
                    <div className="mt-3 flex items-center gap-3">
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
          </aside>
        </div>
      </div>
    </section>
  );
}
