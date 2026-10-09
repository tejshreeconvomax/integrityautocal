import Image from "next/image";

const pillars = [
  {
    kicker: "/ 01",
    title: "Owner-operated.",
    body: "Mike runs the shop. The quote, the correction, the hand-off — it's the same person. Accountability is baked in.",
  },
  {
    kicker: "/ 02",
    title: "Premium systems only.",
    body: "Professional ceramic systems, measured correction, decontamination protocols. We don't carry what we wouldn't put on our own cars.",
  },
  {
    kicker: "/ 03",
    title: "In-shop or mobile.",
    body: "Controlled environment in Redondo Beach, or a mobile set-up at your location across the South Bay. Same standards either way.",
  },
];

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:grid-cols-12 md:gap-10 md:px-12">
        {/* Image column */}
        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&w=1600&q=80"
              alt="Technician applying ceramic coating on a dark vehicle"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden items-center gap-3 bg-red px-6 py-4 md:flex">
            <span className="font-display text-3xl text-white">7</span>
            <span className="text-[11px] uppercase leading-tight tracking-[0.25em] text-white">
              Years<br />of coating<br />systems
            </span>
          </div>
          <div className="absolute left-5 top-5 flex items-center gap-2 bg-ink/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-off backdrop-blur">
            <span className="h-1.5 w-1.5 bg-red pulse-dot" />
            Live from the shop
          </div>
        </div>

        {/* Copy column */}
        <div className="md:col-span-7">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
            <span className="h-px w-10 bg-red" />
            <span>Manifesto · Why Integrity</span>
          </div>
          <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-off md:text-[5.5vw]">
            CARS ARE NOT
            <br />
            CONSUMABLES
            <span className="text-red">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-silver md:text-lg">
            We treat every vehicle like a long-term investment. Correction before coating.
            Protection calibrated to the environment it lives in. No shortcuts, no filler
            services, no selling you anything the car doesn't need.
          </p>

          <ul className="mt-10 space-y-6 border-l border-steel/60">
            {pillars.map((p) => (
              <li key={p.title} className="group grid grid-cols-12 items-start gap-6 pl-6">
                <span className="col-span-2 font-mono text-sm text-red md:col-span-1">
                  {p.kicker}
                </span>
                <div className="col-span-10 md:col-span-11">
                  <h3 className="font-display text-2xl tracking-wide text-off md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-silver md:text-base">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
