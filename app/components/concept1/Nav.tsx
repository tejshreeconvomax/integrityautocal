"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/concept-1" },
  { label: "Services", href: "/services/ceramic-coating" },
  { label: "Service Areas", href: "/areas/redondo-beach" },
  { label: "Gallery", href: "/concept-1#work" },
  { label: "Blog", href: "/concept-1/blog" },
  { label: "Contact Us", href: "/concept-1#contact" },
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#080808]/95 backdrop-blur-xl transition-shadow duration-500 ${
          scrolled ? "shadow-[0_8px_28px_rgba(0,0,0,.24)]" : ""
        }`}
      >
        <nav className="flex items-center justify-between gap-6 px-6 py-3 md:px-10">
          <Link
            href={"/concept-1" as never}
            className="flex shrink-0 items-center text-off"
            aria-label="Integrity Auto Salon — Home"
          >
            <Image
              src="/logo.webp"
              alt="Integrity Auto Salon"
              width={240}
              height={60}
              priority
              className="h-8 w-auto md:h-10"
            />
          </Link>

          <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href as never}
                  className="group relative whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-off/80 transition-colors hover:text-off xl:text-xs xl:tracking-[0.25em]"
                >
                  {l.label}
                  <span className={`absolute -bottom-2 left-0 h-0.5 w-full origin-left bg-red transition-transform duration-300 group-hover:scale-x-100 ${l.label === "Home" ? "scale-x-100" : "scale-x-0"}`} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="tel:+13236888846"
              className="hidden items-center gap-2 border-r border-white/25 pr-5 text-sm font-semibold text-off transition-colors hover:text-red xl:flex"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-red" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1L8 9.3a16 16 0 0 0 6.7 6.7l1.2-1.2a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6a2 2 0 0 1 1.7 2Z" /></svg>
              323-688-8846
            </a>
            <Link
              href={"/concept-1#contact" as never}
              className="group hidden items-center gap-2 whitespace-nowrap rounded-md bg-red px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff1818] hover:shadow-[0_8px_22px_rgba(224,6,6,.24)] lg:inline-flex xl:px-5 xl:py-3"
            >
              Get a quote
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="relative flex h-10 w-10 items-center justify-center text-off lg:hidden"
            >
              <span
                className={`absolute h-px w-6 bg-off transition-transform duration-300 ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-off transition-transform duration-300 ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink text-off transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <ul className="space-y-2">
            {links.map((l, i) => (
              <li key={l.href}>
                <Link
                  href={l.href as never}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline justify-between border-b border-steel/40 py-5"
                >
                  <span className="font-display text-4xl tracking-wider transition-colors group-hover:text-red">
                    {l.label}
                  </span>
                  <span className="font-mono text-xs text-silver">
                    0{i + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <a
              href="tel:+13236888846"
              className="block w-full bg-red py-5 text-center font-display text-xl tracking-wider text-white"
            >
              Call 323-688-8846
            </a>
            <div className="text-center text-xs uppercase tracking-[0.3em] text-silver">
              Redondo Beach · CA
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
