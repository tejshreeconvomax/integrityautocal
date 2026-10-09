import { business, services, serviceAreas } from "../../data/business";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* Massive serif */}
      <div className="relative overflow-hidden border-t border-steel/40 py-14">
        <div className="pointer-events-none select-none text-center font-serif text-[22vw] italic leading-[0.8] tracking-tighter text-off/10 md:text-[18vw]">
          Integrity.
        </div>
      </div>

      <div className="mx-auto grid max-w-[1480px] gap-12 px-6 py-14 text-sm text-silver md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <div className="font-serif text-2xl italic text-off">
            Integrity Auto Salon
          </div>
          <p className="mt-4 max-w-xs">
            Ceramic coating, paint correction, detailing, tint and marine care —
            Redondo Beach, California.
          </p>
          <a
            href={business.phoneHref}
            className="mt-6 inline-block font-serif text-2xl italic text-off hover:text-red"
          >
            {business.phone}
          </a>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            Services
          </h3>
          <ul className="space-y-2 font-serif text-base text-off">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#services" className="italic hover:text-red">
                  — {s.short}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            Areas
          </h3>
          <ul className="space-y-2 font-serif text-base text-off">
            {serviceAreas.map((a) => (
              <li key={a}>— {a}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            Follow
          </h3>
          <ul className="space-y-2 font-serif text-base italic text-off">
            <li><a href="#" className="hover:text-red">Instagram</a></li>
            <li><a href="#" className="hover:text-red">Facebook</a></li>
            <li><a href="#" className="hover:text-red">Yelp</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel/40 py-5 text-center text-[11px] uppercase tracking-[0.3em] text-silver">
        © 2026 · Integrity Auto Salon · Redondo Beach, CA
      </div>
    </footer>
  );
}
