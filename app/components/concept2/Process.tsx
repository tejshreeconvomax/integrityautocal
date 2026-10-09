import { process } from "../../data/business";

export default function ProcessEditorial() {
  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="mb-16 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
              Chapter IV
            </div>
            <div className="mt-2 font-serif text-xl italic text-off">
              The process
            </div>
          </div>
          <h2 className="md:col-span-9 font-serif text-5xl leading-[1.05] tracking-tight text-off md:text-6xl">
            Four phases.
            <span className="italic text-off/80"> Unhurried, documented, repeatable.</span>
          </h2>
        </div>

        <ol className="divide-y divide-steel/40 border-y border-steel/40">
          {process.map((p) => (
            <li
              key={p.step}
              className="group relative grid grid-cols-12 items-start gap-6 overflow-hidden py-10 transition-colors duration-700 md:gap-10 md:py-14"
            >
              {/* Red hairline grows down the left on hover */}
              <span className="pointer-events-none absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-red transition-transform duration-700 ease-out group-hover:scale-y-100" />

              <div className="col-span-3 flex items-center gap-3 pl-3 md:col-span-2">
                <span className="font-mono text-xs text-silver transition-colors duration-500 group-hover:text-red">
                  {p.step}
                </span>
                <span className="hidden h-px w-0 bg-red transition-all duration-700 ease-out group-hover:w-8 md:block" />
              </div>
              <div className="col-span-9 md:col-span-5">
                <h3 className="font-serif text-3xl italic tracking-tight text-off/85 transition-all duration-700 ease-out group-hover:translate-x-1 group-hover:text-off md:text-5xl">
                  {p.label}
                </h3>
              </div>
              <p className="col-span-12 pl-16 text-base leading-relaxed text-silver transition-colors duration-700 group-hover:text-off/90 md:col-span-5 md:pl-0 md:text-lg">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
