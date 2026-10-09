"use client";

import { useState } from "react";
import { business, services } from "../../data/business";

export default function Contact() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
              <span className="text-red">[04]</span>
              <span className="h-px w-10 bg-steel" />
              <span>Get in touch</span>
            </div>
            <h2 className="font-technical text-5xl font-medium leading-[0.92] tracking-tight text-off md:text-[5.5vw]">
              Request <span className="text-red">a quote</span>.
            </h2>
          </div>
          <p className="md:col-span-5 max-w-md font-technical text-base text-silver md:text-lg">
            Tell us about your car. We'll reply with what we'd do, how long it takes,
            and an honest price.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          {/* Form card */}
          <form className="md:col-span-8 border border-steel bg-carbon">
            <div className="flex items-center justify-between border-b border-steel/60 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
              <span>Request form</span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                Secure
              </span>
            </div>

            <div className="space-y-8 p-5 md:p-8">
              <FieldGrid cols={2}>
                <TField label="First name" idx="01" />
                <TField label="Last name" idx="02" />
                <TField label="Email" type="email" idx="03" />
                <TField label="Phone" type="tel" idx="04" />
              </FieldGrid>

              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  <span>Services</span>
                  <span>Pick one or more</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3">
                  {services.map((s) => {
                    const on = picked.includes(s.short);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggle(s.short)}
                        className={`flex items-center gap-3 border px-3 py-3 font-technical text-xs uppercase tracking-[0.2em] transition-colors ${
                          on
                            ? "border-red bg-red text-white"
                            : "border-steel bg-ink text-off hover:border-off"
                        }`}
                      >
                        <span className="font-mono text-[10px] opacity-70">
                          [{s.id}]
                        </span>
                        <span>{s.short}</span>
                        <span className="ml-auto font-mono text-xs">
                          {on ? "●" : "○"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <FieldGrid cols={3}>
                <TField label="Year" idx="06" />
                <TField label="Make" idx="07" />
                <TField label="Model" idx="08" />
              </FieldGrid>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  Anything else to know
                </div>
                <textarea
                  rows={3}
                  placeholder="Condition of the car, what you're hoping for, when you'd like it done..."
                  className="caret-red mt-3 w-full resize-none border border-steel bg-ink px-4 py-3 font-technical text-base text-off outline-none transition-colors placeholder:text-silver/50 focus:border-red"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-between border border-red bg-red px-6 py-5 font-technical text-xs uppercase tracking-[0.3em] text-white transition-colors hover:bg-red-deep"
              >
                <span className="flex items-center gap-3">
                  Send request
                </span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>

          {/* Side panel */}
          <aside className="md:col-span-4 space-y-4">
            <SidePanel title="Phone">
              <a
                href={business.phoneHref}
                className="block font-technical text-3xl text-off transition-colors hover:text-red"
              >
                {business.phone}
              </a>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                In-shop and mobile
              </div>
            </SidePanel>

            <SidePanel title="Hours">
              <div className="font-technical text-base text-off">
                Mon — Sun<br />9 AM — 6 PM PST
              </div>
            </SidePanel>

            <SidePanel title="Location">
              <div className="font-technical text-base text-off">
                {business.city}<br />California {business.zip}
              </div>
              <div className="mt-3 h-20 border border-steel bg-ink">
                <div
                  className="h-full w-full opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #525252 1px, transparent 1px), linear-gradient(to bottom, #525252 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
              </div>
            </SidePanel>

            <SidePanel title="At a glance">
              <ul className="space-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
                <li className="flex items-center justify-between"><span>Reply time</span><span className="text-off">Within 24h</span></li>
                <li className="flex items-center justify-between"><span>Reviews</span><span className="text-off">55 · 5.0</span></li>
                <li className="flex items-center justify-between"><span>Open</span><span className="text-red">Every day</span></li>
              </ul>
            </SidePanel>
          </aside>
        </div>
      </div>
    </section>
  );
}

function TField({ label, type = "text", idx: _idx }: { label: string; type?: string; idx: string }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
        <span>{label}</span>
      </div>
      <input
        type={type}
        className="caret-red mt-2 w-full border border-steel bg-ink px-4 py-3 font-technical text-base text-off outline-none transition-colors focus:border-red"
      />
    </label>
  );
}

function FieldGrid({ cols, children }: { cols: 2 | 3; children: React.ReactNode }) {
  return (
    <div className={`grid gap-5 ${cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
      {children}
    </div>
  );
}

function SidePanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-steel bg-carbon">
      <div className="flex items-center justify-between border-b border-steel/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
        <span>{title}</span>
        <span className="text-red">●</span>
      </div>
      <div className="p-4 md:p-5">{children}</div>
    </div>
  );
}
