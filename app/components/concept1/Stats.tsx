import { stats } from "../../data/business";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-carbon py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/15 blur-[160px]" />

      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-y-14 px-6 md:grid-cols-4 md:gap-0 md:px-12">
        {stats.map((s, i) => (
          <div
            key={s.v}
            className={`relative flex flex-col items-start md:px-10 ${
              i !== 0 ? "md:border-l md:border-steel/40" : ""
            }`}
          >
            <div className="font-display text-7xl leading-none tracking-tight text-off md:text-[7vw]">
              {s.k}
            </div>
            <div className="mt-3 h-px w-10 bg-red" />
            <div className="mt-3 text-xs uppercase tracking-[0.3em] text-silver md:text-sm">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
