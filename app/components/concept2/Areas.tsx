import { serviceAreas } from "../../data/business";

export default function Areas() {
  return (
    <section id="areas" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-[1480px] gap-10 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            Chapter VI
          </div>
          <h2 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-off md:text-6xl">
            The <span className="italic">South Bay</span>, by name.
          </h2>
          <p className="mt-6 max-w-sm font-serif text-base italic text-silver md:text-lg">
            In-shop in Redondo Beach — mobile across the surrounding cities. Same
            standards, delivered to you.
          </p>
        </div>
        <ul className="md:col-span-8 grid grid-cols-1 divide-y divide-steel/40 border-y border-steel/40 md:grid-cols-2 md:divide-x md:divide-y-0">
          {serviceAreas.map((a, i) => {
            const isHQ = a === "Redondo Beach";
            return (
              <li key={a} className="group relative">
                <a
                  href="#contact"
                  className="relative flex items-center justify-between gap-4 overflow-hidden py-6 md:px-8"
                >
                  {/* Red hairline grows from left */}
                  <span className="pointer-events-none absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-red transition-transform duration-700 ease-out group-hover:scale-y-100 md:left-0" />

                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-silver transition-colors duration-500 group-hover:text-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-3xl text-off/80 transition-all duration-700 ease-out group-hover:italic group-hover:text-off group-hover:translate-x-1 md:text-4xl">
                      {a}
                    </span>
                  </span>

                  <span className="flex items-center gap-4">
                    {isHQ && (
                      <span className="font-serif text-sm italic text-red opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        — the home shop
                      </span>
                    )}
                    <span className="font-mono text-xs text-silver">CA</span>
                    <span className="inline-block translate-x-0 text-off opacity-0 transition-all duration-700 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
