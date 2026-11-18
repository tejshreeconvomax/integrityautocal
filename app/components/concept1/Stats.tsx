import { stats } from "../../data/business";

export default function Stats() {
  return (
    <section id="stats" className="relative isolate overflow-hidden bg-[#050505] py-12 md:py-12 lg:py-14">
      {/* Studio-red atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_58%_125%_at_50%_50%,rgba(120,8,5,0.24),transparent_68%),linear-gradient(90deg,#050505_0%,#110504_50%,#050505_100%)]" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <article
              key={stat.v}
              className={`group relative flex min-h-[176px] flex-col items-center justify-center px-3 py-6 text-center transition-transform duration-500 hover:-translate-y-1 sm:min-h-[210px] sm:px-5 lg:min-h-[230px] lg:px-8 ${
                index === 1 ? "border-l border-red/25" : ""
              } ${
                index === 2 ? "border-t border-red/25 md:border-l md:border-t-0" : ""
              } ${
                index === 3 ? "border-l border-t border-red/25 md:border-t-0" : ""
              }`}
            >
              {index > 0 && (
                <span className="pointer-events-none absolute inset-y-7 left-0 hidden w-px bg-gradient-to-b from-transparent via-red to-transparent opacity-70 shadow-[0_0_12px_rgba(225,6,0,0.9)] md:block" />
              )}

              <div className="relative mb-5 flex h-[58px] w-[58px] items-center justify-center transition-transform duration-500 group-hover:scale-110 sm:h-[64px] sm:w-[64px]">
                <span className="absolute inset-[7px] rotate-45 rounded-[13px] border border-red/80 bg-red/[0.04] shadow-[0_0_18px_rgba(225,6,0,0.22)] transition-all duration-500 group-hover:border-red group-hover:bg-red/10 group-hover:shadow-[0_0_30px_rgba(225,6,0,0.55)]" />
                <span className="relative text-red transition-colors duration-500 group-hover:text-white">
                  <StatIcon type={index} />
                </span>
              </div>

              <div className="font-display text-7xl leading-[0.75] tracking-tight text-white drop-shadow-[0_4px_18px_rgba(255,255,255,0.08)] sm:text-[84px] lg:text-[5.6vw]">
                {stat.k}
              </div>
              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-off sm:text-[11px]">
                {stat.v}
              </p>
              <span className="mt-3 h-[3px] w-11 bg-red shadow-[0_0_12px_rgba(225,6,0,0.85)] transition-all duration-500 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatIcon({ type }: { type: number }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6 sm:h-7 sm:w-7",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    "aria-hidden": true,
  };

  if (type === 0) {
    return (
      <svg {...props}>
        <path d="m12 3 2.1 5.7 5.9.2-4.6 3.7 1.6 5.8-5-3.3-5 3.3 1.6-5.8L4 8.9l5.9-.2L12 3Z" />
      </svg>
    );
  }

  if (type === 1) {
    return (
      <svg {...props}>
        <circle cx="12" cy="9" r="2.75" />
        <path d="M19 9c0 5.2-7 11-7 11S5 14.2 5 9a7 7 0 1 1 14 0Z" />
      </svg>
    );
  }

  if (type === 2) {
    return (
      <svg {...props}>
        <path d="m12 3 8 4.3-8 4.3-8-4.3L12 3Z" />
        <path d="m4 12 8 4.3 8-4.3M4 16.7l8 4.3 8-4.3" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M4 15.5h16M6.5 15.5l1-5h9l1 5M8 10.5l1.2-2.5h5.6l1.2 2.5" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
      <path d="M4 5.5h5M4 8h3" />
    </svg>
  );
}
