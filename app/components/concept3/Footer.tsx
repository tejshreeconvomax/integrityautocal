import Link from "next/link";
import { business, services, serviceAreas } from "../../data/business";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-steel/50 bg-carbon">
      {/* Giant technical mark */}
      <div className="border-b border-steel/40 py-10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 font-mono text-xs uppercase tracking-[0.3em] text-silver md:px-10">
          <span>Integrity Auto Salon</span>
          <span className="h-px flex-1 bg-steel/60" />
          <span>Open today</span>
          <span className="h-px flex-1 bg-steel/60" />
          <span className="text-red">● 2026</span>
        </div>
        <div className="pointer-events-none mt-6 select-none text-center font-technical text-[20vw] font-medium leading-[0.8] tracking-tighter text-off/[0.07] md:text-[16vw]">
          Integrity
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-12 text-sm md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            Our shop
          </div>
          <div className="mt-2 font-technical text-xl text-off">
            Integrity Auto Salon
          </div>
          <div className="mt-4 space-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
            <div>{business.city}, {business.state} {business.zip}</div>
            <div>Mon — Sun · 9 AM — 6 PM</div>
            <div>
              <a href={business.phoneHref} className="text-off hover:text-red">
                {business.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            Services
          </div>
          <ul className="mt-2 space-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
            {services.map((s) => (
              <li key={s.id} className="flex items-center gap-3">
                <span className="text-red">0{Number(s.id)}</span>
                <Link href={s.name === "Paint Correction" ? ("/concept-3/services/paint-correction" as never) : ("/concept-3#services" as never)} className="text-off hover:text-red">
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            Areas we serve
          </div>
          <ul className="mt-2 space-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
            {serviceAreas.map((a, i) => (
              <li key={a} className="flex items-center gap-3">
                <span className="text-red">·</span>
                {i === 0 ? (
                  <Link href={"/concept-3/areas/redondo-beach" as never} className="text-off hover:text-red">{a}</Link>
                ) : (
                  <span className="text-off">{a}</span>
                )}
                {i === 0 && <span className="text-red">Our shop</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            Follow us
          </div>
          <ul className="mt-2 space-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
            <li><a href="#" className="text-off hover:text-red">Instagram ↗</a></li>
            <li><a href="#" className="text-off hover:text-red">Facebook ↗</a></li>
            <li><a href="#" className="text-off hover:text-red">Yelp ↗</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel/40 px-6 py-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-silver md:px-10">
        © 2026 Integrity Auto Salon · All rights reserved · {business.city}, CA
      </div>
    </footer>
  );
}
