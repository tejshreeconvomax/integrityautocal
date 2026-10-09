"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { business, services, serviceAreas } from "../../data/business";

const links = [
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <nav className="flex items-center justify-between px-6 py-6 md:px-10">
          <Link
            href={"/concept-2" as never}
            className="font-serif text-xl italic tracking-tight text-off"
          >
            Integrity.
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-off"
          >
            <span className="hidden sm:inline">Index</span>
            <span className="relative flex h-5 w-6 flex-col justify-between">
              <span className="h-px w-full bg-off transition-transform duration-500 group-hover:translate-x-1" />
              <span className="h-px w-2/3 bg-off transition-transform duration-500 group-hover:translate-x-0" />
              <span className="h-px w-full bg-off transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </button>
        </nav>
      </header>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] bg-ink text-off transition-opacity duration-700 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Close */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-6 md:px-10">
          <span className="font-serif text-xl italic tracking-tight">Integrity.</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em]"
          >
            Close
            <span className="relative block h-4 w-4">
              <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-off" />
              <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-off" />
            </span>
          </button>
        </div>

        <div className="grid h-full grid-cols-1 md:grid-cols-12">
          {/* Big nav */}
          <div className="col-span-12 flex flex-col justify-center px-6 pb-20 pt-32 md:col-span-7 md:px-14 md:pb-24">
            <div className="text-[11px] uppercase tracking-[0.4em] text-silver">
              Index · 2026
            </div>
            <ul className="mt-10 space-y-4">
              {links.map((l, i) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-6 border-b border-steel/40 py-5"
                  >
                    <span className="font-mono text-xs text-silver">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-5xl italic tracking-tight transition-colors group-hover:text-red md:text-7xl">
                      {l.label}
                    </span>
                    <span className="ml-auto text-xs uppercase tracking-[0.3em] text-silver opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Side info */}
          <div className="col-span-12 flex flex-col justify-between border-t border-steel/40 px-6 py-12 md:col-span-5 md:border-l md:border-t-0 md:px-10 md:py-32">
            <div>
              <div className="mb-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                Studio
              </div>
              <p className="font-serif text-xl leading-snug text-off">
                {business.city}, California.<br />
                Open daily, 9 — 6.
              </p>
              <a
                href={business.phoneHref}
                className="mt-6 inline-block font-serif text-3xl italic text-off hover:text-red"
              >
                {business.phone}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-steel/40 pt-6 text-xs text-silver">
              <div>
                <div className="mb-2 uppercase tracking-[0.3em]">Services</div>
                <ul className="space-y-1 text-off">
                  {services.slice(0, 6).map((s) => (
                    <li key={s.id}>{s.short}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-2 uppercase tracking-[0.3em]">Areas</div>
                <ul className="space-y-1 text-off">
                  {serviceAreas.slice(0, 6).map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
