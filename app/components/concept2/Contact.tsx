"use client";

import { useState } from "react";
import { business, services } from "../../data/business";

export default function Contact() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-[1480px] gap-16 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            Correspondence
          </div>
          <h2 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-off md:text-7xl">
            A letter is <span className="italic">always welcome</span>.
          </h2>
          <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-silver">
            Tell us about the vehicle. We'll reply with scope, timing, and an honest
            estimate — the kind that doesn't change later.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                Telephone
              </dt>
              <dd className="mt-1 font-serif text-3xl italic text-off hover:text-red">
                <a href={business.phoneHref}>{business.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                Studio hours
              </dt>
              <dd className="mt-1 font-serif text-lg text-off">
                Monday through Sunday · 9 AM — 6 PM
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                Social
              </dt>
              <dd className="mt-1 flex gap-5 font-serif text-base italic text-off">
                <a href="#" className="hover:text-red">Instagram</a>
                <a href="#" className="hover:text-red">Facebook</a>
                <a href="#" className="hover:text-red">Yelp</a>
              </dd>
            </div>
          </dl>
        </div>

        <form className="md:col-span-7 md:border-l md:border-steel/40 md:pl-10">
          <div className="mb-10 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-silver">
            <span>Enquiry form</span>
            <span className="font-mono">N° 01</span>
          </div>

          <div className="space-y-10">
            <div className="grid gap-10 md:grid-cols-2">
              <EField label="First name" />
              <EField label="Surname" />
              <EField label="Email" type="email" />
              <EField label="Telephone" type="tel" />
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                Services of interest
              </label>
              <div className="mt-4 flex flex-wrap gap-2">
                {services.map((s) => {
                  const on = picked.includes(s.short);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggle(s.short)}
                      className={`rounded-full border px-4 py-2 font-serif text-sm italic transition-colors ${
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

            <div className="grid gap-10 md:grid-cols-3">
              <EField label="Year" />
              <EField label="Make" />
              <EField label="Model" />
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                Your message
              </label>
              <textarea
                rows={4}
                className="caret-red mt-3 w-full resize-none border-b border-steel bg-transparent py-3 font-serif text-xl italic text-off outline-none transition-colors focus:border-red"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-4 border-b border-off pb-2 text-sm uppercase tracking-[0.3em] text-off transition-colors hover:text-red"
            >
              <span>Send enquiry</span>
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function EField({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
        {label}
      </span>
      <input
        type={type}
        className="caret-red mt-3 w-full border-b border-steel bg-transparent py-2 font-serif text-xl italic text-off outline-none transition-colors focus:border-red"
      />
    </label>
  );
}
