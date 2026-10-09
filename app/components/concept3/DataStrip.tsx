import { stats } from "../../data/business";

export default function DataStrip() {
  return (
    <section className="relative border-y border-steel/40 bg-carbon">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 divide-steel/40 border-l border-r border-steel/40 md:grid-cols-4 md:divide-x">
        {stats.map((s, i) => (
          <div key={s.v} className="relative px-6 py-6 md:px-8 md:py-8">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
              <span>Stat · 0{i + 1}</span>
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
  );
}
