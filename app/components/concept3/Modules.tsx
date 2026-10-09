"use client";

import { useState } from "react";
import { services } from "../../data/business";

export default function Modules() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Head */}
        <div className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
              <span className="text-red">[01]</span>
              <span className="h-px w-10 bg-steel" />
              <span>Our services</span>
            </div>
            <h2 className="font-technical text-5xl font-medium leading-[0.92] tracking-tight text-off md:text-[5.5vw]">
              Six services.
              <br />
              <span className="text-red">One</span> owner.
            </h2>
          </div>
          <p className="md:col-span-6 max-w-md font-technical text-base text-silver md:text-right md:text-lg">
            Click any service to open the details and see exactly what's included —
            nothing hidden behind a sales call.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-steel/40">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={s.id}
                className={`group border-b border-steel/40 transition-colors ${
                  isOpen ? "bg-carbon" : "bg-ink"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="relative flex w-full items-center gap-6 px-4 py-6 text-left md:px-8 md:py-7"
                >
                  <span className="font-mono text-xs text-silver">
                    [{s.id}]
                  </span>
                  <span className="w-24 font-mono text-[10px] uppercase tracking-[0.3em] text-red md:w-32">
                    Service {s.id}
                  </span>
                  <h3
                    className={`flex-1 font-technical text-2xl uppercase tracking-tight transition-transform md:text-4xl ${
                      isOpen ? "text-off translate-x-2" : "text-off/80"
                    }`}
                  >
                    {s.name}
                  </h3>
                  <span
                    className={`hidden min-w-72 font-mono text-xs uppercase tracking-[0.2em] text-silver md:block transition-opacity ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {s.tagline}
                  </span>
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center border border-steel font-mono text-sm transition-colors ${
                      isOpen ? "border-red bg-red text-white" : "text-off"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expanded body */}
                <div
                  className={`grid overflow-hidden transition-all duration-500 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="grid gap-10 border-t border-steel/40 bg-carbon px-4 py-10 md:grid-cols-12 md:gap-6 md:px-8">
                      <div className="md:col-span-5">
                        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                          What we do
                        </div>
                        <p className="mt-3 font-technical text-base leading-relaxed text-off md:text-lg">
                          {s.description}
                        </p>
                      </div>

                      <div className="md:col-span-4">
                        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                          What's included
                        </div>
                        <ul className="mt-3 space-y-2">
                          {s.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-3 border-b border-steel/40 py-2 font-technical text-sm uppercase tracking-wider text-off"
                            >
                              <span className="h-1 w-1 bg-red" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-3">
                        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                          Get started
                        </div>
                        <a
                          href="#contact"
                          className="group mt-3 flex w-full items-center justify-between gap-3 border border-red bg-red/10 px-5 py-4 font-technical text-xs uppercase tracking-[0.2em] text-off transition-colors hover:bg-red hover:text-white"
                        >
                          <span>Get a quote</span>
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </a>
                        <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                          In-shop or mobile
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
