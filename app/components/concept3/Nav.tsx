"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/concept-3" },
  { label: "Services", href: "/concept-3#services" },
  { label: "How we work", href: "/concept-3#process" },
  { label: "Service areas", href: "/concept-3#areas" },
  { label: "Blog", href: "/concept-3/blog" },
  { label: "Contact", href: "/concept-3#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-steel/40 bg-ink/80 backdrop-blur-xl">
        <nav className="flex items-center justify-between px-4 py-3 md:px-6">
          <Link
            href={"/concept-3" as never}
            className="flex items-center gap-3 font-technical text-off"
          >
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
              <rect x="1" y="1" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
              <rect x="7" y="7" width="18" height="18" fill="var(--red)" />
              <path d="M12 16h8M16 12v8" stroke="#000" strokeWidth="1.5" />
            </svg>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-[0.3em] text-silver">
                Integrity
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider">
                Auto Salon
              </div>
            </div>
          </Link>

          <ul className="hidden items-center gap-6 font-technical text-xs uppercase tracking-[0.2em] text-off lg:flex">
            {links.map((l, i) => (
              <li key={l.href} className="group relative">
                <Link href={l.href as never} className="flex items-center gap-2 py-2">
                  <span className="font-mono text-[10px] text-silver">
                    [{String(i).padStart(2, "0")}]
                  </span>
                  <span className="transition-colors group-hover:text-red">
                    {l.label}
                  </span>
                </Link>
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden font-mono text-xs text-silver md:flex md:items-center md:gap-3">
              <span className="h-1.5 w-1.5 bg-red pulse-dot" />
              <span>Open</span>
              <span>·</span>
              <span className="w-16 tabular-nums">{time}</span>
            </div>
            <Link
              href={"/concept-3#contact" as never}
              className="group hidden items-center gap-2 border border-red bg-red/10 px-4 py-2 font-technical text-xs uppercase tracking-[0.2em] text-off transition-colors hover:bg-red hover:text-white md:inline-flex"
            >
              <span className="h-1.5 w-1.5 bg-red" />
              Get a quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="relative flex h-10 w-10 items-center justify-center text-off lg:hidden"
            >
              <span className="font-mono text-xs">{open ? "[X]" : "[ ≡ ]"}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink/95 pt-20 text-off backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="px-6 pb-10">
          {links.map((l, i) => (
            <li key={l.href}>
              <Link
                href={l.href as never}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-steel/40 py-5"
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-xs text-silver">
                    [{String(i).padStart(2, "0")}]
                  </span>
                  <span className="font-technical text-3xl uppercase tracking-tight transition-colors group-hover:text-red">
                    {l.label}
                  </span>
                </span>
                <span className="font-mono text-xs text-silver">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-6 border border-steel bg-carbon p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            Call the shop
          </div>
          <a
            href="tel:+13236888846"
            className="mt-2 block font-technical text-3xl text-off"
          >
            323 · 688 · 8846
          </a>
        </div>
      </div>
    </>
  );
}
