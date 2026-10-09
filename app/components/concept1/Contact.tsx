"use client";

import { useState } from "react";
import { business, services, serviceAreas } from "../../data/business";

export default function Contact() {
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-red/40 blur-[160px]" />
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:gap-10 md:px-12">
        {/* Left — pitch */}
        <div className="md:col-span-5">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
            <span className="h-px w-10 bg-red" />
            <span>Open file · 2026</span>
          </div>
          <h2 className="font-display text-6xl leading-[0.9] tracking-tight text-off md:text-[6vw]">
            LET'S GET
            <br />
            <span className="text-red">STARTED.</span>
          </h2>
          <p className="mt-6 max-w-md text-base text-silver md:text-lg">
            Tell us about the vehicle and the result you want. Mike will come back with
            scope, timing and an honest quote — not an email funnel.
          </p>

          <dl className="mt-10 space-y-5 border-l border-red pl-6">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.3em] text-silver">Call</dt>
              <dd className="font-display text-3xl text-off">
                <a href={business.phoneHref}>{business.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.3em] text-silver">Hours</dt>
              <dd className="mt-1 text-sm text-off/90">{business.hours}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.3em] text-silver">
                Service areas
              </dt>
              <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-off/90">
                {serviceAreas.map((a, i) => (
                  <span key={a}>
                    {a}
                    {i < serviceAreas.length - 1 && (
                      <span className="pl-2 text-red">·</span>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        {/* Form */}
        <form className="relative border border-steel/50 bg-carbon p-6 md:col-span-7 md:p-10">
          <div className="mb-8 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-silver">
            <span>Request a quote</span>
            <span className="font-mono text-xs">01 / 03</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="First name" />
            <Field label="Last name" />
            <Field label="Email" type="email" />
            <Field label="Phone" type="tel" />
          </div>

          <div className="mt-8">
            <div className="mb-4 text-[11px] uppercase tracking-[0.3em] text-silver">
              Services · Pick all that apply
            </div>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => {
                const on = picked.includes(s.short);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggle(s.short)}
                    className={`border px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                      on
                        ? "border-red bg-red text-white"
                        : "border-steel text-off hover:border-off"
                    }`}
                  >
                    {s.short}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Field label="Year" />
            <Field label="Make" />
            <Field label="Model" />
          </div>

          <div className="mt-8">
            <label className="block text-[11px] uppercase tracking-[0.3em] text-silver">
              Tell us about the vehicle
            </label>
            <textarea
              rows={4}
              className="caret-red mt-3 w-full resize-none border border-steel bg-transparent px-4 py-3 text-base text-off outline-none transition-colors focus:border-red"
            />
          </div>

          <button
            type="submit"
            className="btn-sweep group mt-10 flex w-full items-center justify-between border border-off bg-off px-6 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition-colors duration-500 hover:text-white md:w-auto md:min-w-96"
          >
            <span>Submit request</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.3em] text-silver">
        {label}
      </span>
      <input
        type={type}
        className="caret-red mt-3 w-full border-b border-steel bg-transparent py-2 text-base text-off outline-none transition-colors focus:border-red"
      />
    </label>
  );
}
