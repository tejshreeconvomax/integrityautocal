import Image from "next/image";
import Link from "next/link";
import { business, services, serviceAreas } from "../../data/business";

const navLinks = [
  { label: "Home", href: "/concept-1" },
  { label: "Services", href: "/concept-1#services" },
  { label: "Service Areas", href: "/concept-1#areas" },
  { label: "Gallery", href: "/concept-1#work" },
  { label: "Blog", href: "/concept-1/blog" },
  { label: "Contact Us", href: "/concept-1#contact" },
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-steel/50 bg-ink">
      {/* Huge wordmark */}
      <div className="relative overflow-hidden border-b border-steel/50 py-10 md:py-16">
        <div className="pointer-events-none select-none text-center font-display text-[22vw] leading-[0.8] tracking-tighter text-off/5 md:text-[18vw]">
          INTEGRITY
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-16 md:grid-cols-12 md:px-12">
        <div className="md:col-span-4">
          <Link
            href={"/concept-1" as never}
            className="inline-flex items-center text-off"
            aria-label="Integrity Auto Salon — Home"
          >
            <Image
              src="/logo.webp"
              alt="Integrity Auto Salon"
              width={240}
              height={60}
              className="h-10 w-auto md:h-12"
            />
          </Link>
          <p className="mt-6 max-w-xs text-sm text-silver">
            Ceramic coating, paint correction, detailing, tint and marine care in Redondo
            Beach — serving the greater South Bay since Mike opened the doors.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-off/90">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href as never} className="hover:text-red">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-5 text-[11px] uppercase tracking-[0.3em] text-silver">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-off/90">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={
                    (s.name === "Ceramic Coatings"
                      ? "/concept-1/services/ceramic-coating"
                      : "/concept-1#services") as never
                  }
                  className="hover:text-red"
                >
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-5 text-[11px] uppercase tracking-[0.3em] text-silver">
            Service areas
          </h3>
          <ul className="space-y-2 text-sm text-off/90">
            {serviceAreas.map((a) => (
              <li key={a}>
                <Link
                  href={
                    (a === "Redondo Beach"
                      ? "/concept-1/areas/redondo-beach"
                      : "/concept-1#areas") as never
                  }
                  className="hover:text-red"
                >
                  {a}, CA
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-5 text-[11px] uppercase tracking-[0.3em] text-silver">
            Studio
          </h3>
          <ul className="space-y-3 text-sm text-off/90">
            <li>
              <a href={business.phoneHref} className="hover:text-red">
                {business.phone}
              </a>
            </li>
            <li>{business.hours}</li>
            <li className="flex gap-4 pt-2 text-xs uppercase tracking-[0.3em] text-silver">
              <a href="#" className="hover:text-red">Instagram</a>
              <a href="#" className="hover:text-red">Facebook</a>
              <a href="#" className="hover:text-red">Yelp</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel/50 py-5 text-center text-[11px] uppercase tracking-[0.3em] text-silver">
        © 2026 Integrity Auto Salon · All rights reserved · Redondo Beach, CA
      </div>
    </footer>
  );
}
