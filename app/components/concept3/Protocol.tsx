import Image from "next/image";
import { process } from "../../data/business";

export default function Protocol() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
              <span className="text-red">[02]</span>
              <span className="h-px w-10 bg-steel" />
              <span>How we work</span>
            </div>
            <h2 className="font-technical text-5xl font-medium leading-[0.92] tracking-tight text-off md:text-[5.5vw]">
              Done the <span className="text-red">same way</span> every time.
            </h2>
          </div>
          <p className="md:col-span-5 max-w-md font-technical text-base text-silver md:text-lg">
            The four steps every car goes through. No shortcuts, nothing skipped —
            even when the day runs long.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          {/* Timeline */}
          <ol className="relative md:col-span-7">
            <span className="absolute left-6 top-2 bottom-2 w-px bg-steel md:left-8" />
            {process.map((p, i) => (
              <li
                key={p.step}
                className="group relative pl-20 pb-10 last:pb-0 md:pl-28"
              >
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center border border-steel bg-ink font-technical text-sm text-off transition-colors group-hover:border-red group-hover:text-red md:h-16 md:w-16 md:text-base">
                  {p.step}
                </span>
                <div className="rounded-none border border-steel/40 bg-carbon p-5 transition-colors group-hover:border-red/60 md:p-6">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                    <span>Step {p.step}</span>
                    <span className="text-red">●</span>
                  </div>
                  <h3 className="mt-2 font-technical text-2xl uppercase tracking-tight text-off md:text-3xl">
                    {p.label}
                  </h3>
                  <p className="mt-2 font-technical text-sm leading-relaxed text-silver md:text-base">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="md:col-span-5">
            <div className="sticky top-28 border border-steel bg-carbon">
              <div className="flex items-center justify-between border-b border-steel/60 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                <span>In the shop</span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                  Now
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/50" />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #525252 1px, transparent 1px), linear-gradient(to bottom, #525252 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="scan-line absolute inset-x-0 h-28 bg-gradient-to-b from-transparent via-red/50 to-transparent" />
                </div>
                {/* Reticle */}
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 border border-red/60">
                  <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-red" />
                  <span className="absolute bottom-0 left-1/2 h-2 w-px -translate-x-1/2 bg-red" />
                  <span className="absolute left-0 top-1/2 h-px w-2 -translate-y-1/2 bg-red" />
                  <span className="absolute right-0 top-1/2 h-px w-2 -translate-y-1/2 bg-red" />
                </div>
              </div>

              <div className="divide-y divide-steel/40">
                <StatRow label="Paint checked" value="Yes, every panel" />
                <StatRow label="Scratches mapped" value="Written down" />
                <StatRow label="Products" value="Measured by use" />
                <StatRow label="Cure time" value="12 — 24 hours" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em]">
      <span className="text-silver">{label}</span>
      <span className="text-off">{value}</span>
    </div>
  );
}
