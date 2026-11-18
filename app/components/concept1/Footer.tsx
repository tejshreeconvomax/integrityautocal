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

const socialLinks = [
  { label: "Instagram", icon: "instagram" },
  { label: "Facebook", icon: "facebook" },
  { label: "Yelp", icon: "yelp" },
] as const;

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{children}</h2>
      <span className="mt-2.5 block h-1 w-9 rounded-full bg-red shadow-[0_0_12px_rgba(225,6,0,.6)]" />
    </div>
  );
}

function ContactIcon({ type }: { type: "pin" | "phone" | "clock" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (type === "pin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle {...common} cx="12" cy="10" r="2.5" /></svg>;
  if (type === "phone") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1L8 9.3a16 16 0 0 0 6.7 6.7l1.2-1.2a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6a2 2 0 0 1 1.7 2Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle {...common} cx="12" cy="12" r="8.5" /><path {...common} d="M12 7v5l3 2" /></svg>;
}

function SocialIcon({ type }: { type: (typeof socialLinks)[number]["icon"] }) {
  if (type === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3.7" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.4" cy="6.8" r="1" fill="currentColor" /></svg>;
  if (type === "facebook") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.3 21v-8h2.8l.42-3.25H14.3V7.68c0-.94.26-1.58 1.62-1.58h1.73V3.2a23 23 0 0 0-2.52-.13c-2.5 0-4.22 1.53-4.22 4.34v2.34H8.08V13h2.83v8h3.39Z" fill="currentColor" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.8 4.2c4.3-.3 6.3 1.9 6.5 4.9v5.9c.2 3.4 2 4.6 4.4 4.8 1.3.1 2.7-.3 3.6-1.1v-3.3c-.8.8-2.2 1.2-3.3.7-1.1-.5-1.7-1.5-1.7-2.9V9.5c-.1-3.1-1.4-5.6-4.2-6.5-1.6-.5-3.4-.4-5.3.3v.9Z" fill="currentColor" /></svg>;
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#080808] text-off">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_56%_110%_at_0%_45%,rgba(128,7,5,.36),transparent_62%),radial-gradient(ellipse_42%_105%_at_100%_52%,rgba(108,5,4,.28),transparent_66%),linear-gradient(105deg,#080808_0%,#110605_55%,#080808_100%)]" />

      <div className="mx-auto grid max-w-[1600px] gap-8 px-6 py-12 sm:grid-cols-2 md:px-12 lg:grid-cols-12 lg:gap-0 lg:py-14">
        <section className="lg:col-span-4 lg:pr-12">
          <Link href={"/concept-1" as never} className="inline-flex items-center" aria-label="Integrity Auto Salon — Home">
            <Image src="/logo.webp" alt="Integrity Auto Salon" width={240} height={60} className="h-11 w-auto md:h-12" />
          </Link>
          <div className="mt-5">
            <FooterHeading>Company information</FooterHeading>
            <p className="max-w-md text-sm leading-6 text-silver">Ceramic coating, paint correction, detailing, tint and marine care in Redondo Beach — serving the greater South Bay since Mike opened the doors.</p>
          </div>

          <div className="mt-5 grid gap-3 text-sm text-off/90 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="flex items-center gap-3"><span className="h-6 w-6 shrink-0 text-red [&_svg]:h-full [&_svg]:w-full"><ContactIcon type="pin" /></span><span>{business.city}, {business.state}</span></div>
            <a href={business.phoneHref} className="flex items-center gap-3 transition-colors hover:text-red"><span className="h-6 w-6 shrink-0 text-red [&_svg]:h-full [&_svg]:w-full"><ContactIcon type="phone" /></span><span>{business.phone}</span></a>
            <div className="flex items-center gap-3 sm:col-span-2 xl:col-span-1"><span className="h-6 w-6 shrink-0 text-red [&_svg]:h-full [&_svg]:w-full"><ContactIcon type="clock" /></span><span>{business.hours}</span></div>
          </div>

          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => <a key={social.label} href="#" aria-label={social.label} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/25 text-off transition-all duration-300 hover:-translate-y-1 hover:border-red hover:bg-red hover:text-white"><span className="h-4.5 w-4.5 [&_svg]:h-full [&_svg]:w-full"><SocialIcon type={social.icon} /></span></a>)}
          </div>
        </section>

        <section className="lg:col-span-2 lg:border-l lg:border-white/10 lg:px-10">
          <FooterHeading>Services</FooterHeading>
          <ul className="space-y-3 text-sm text-off/90">
            {services.map((service) => <li key={service.id}><Link href={(service.name === "Ceramic Coatings" ? "/concept-1/services/ceramic-coating" : "/concept-1#services") as never} className="transition-colors duration-300 hover:text-red">{service.short}</Link></li>)}
          </ul>
        </section>

        <section className="lg:col-span-3 lg:border-l lg:border-white/10 lg:px-10">
          <FooterHeading>Service areas</FooterHeading>
          <ul className="space-y-2.5 text-sm text-off/90">
            {serviceAreas.map((area) => <li key={area}><Link href={(area === "Redondo Beach" ? "/concept-1/areas/redondo-beach" : "/concept-1#areas") as never} className="transition-colors duration-300 hover:text-red">{area}, CA</Link></li>)}
          </ul>
        </section>

        <section className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-10">
          <FooterHeading>Quick links</FooterHeading>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-off/90 lg:grid-cols-1">
            {navLinks.map((link) => <li key={link.href}><Link href={link.href as never} className="transition-colors duration-300 hover:text-red">{link.label}</Link></li>)}
          </ul>
          <Link href={"/concept-1#contact" as never} className="group mt-6 inline-flex items-center gap-3 rounded-md bg-red px-6 py-3.5 text-xs font-bold uppercase tracking-[.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1818] hover:shadow-[0_12px_30px_rgba(225,6,0,.3)]">
            Get a quote
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </Link>
        </section>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 py-4 text-center text-[10px] uppercase tracking-[.22em] text-silver md:px-12">
          <span>© 2026 Integrity Auto Salon · All rights reserved · Redondo Beach, CA</span>
        </div>
      </div>
    </footer>
  );
}
