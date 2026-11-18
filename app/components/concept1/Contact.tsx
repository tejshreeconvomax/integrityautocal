"use client";

import { useState } from "react";
import { business, services, serviceAreas } from "../../data/business";

type IconName = "user" | "mail" | "phone" | "calendar" | "car" | "layers" | "pen";

const inputBase = "h-14 w-full rounded-xl border border-white/35 bg-black/20 pl-12 pr-4 text-base text-white outline-none transition-all duration-300 placeholder:text-white/40 hover:border-white/55 focus:border-red focus:bg-red/[0.04] focus:ring-2 focus:ring-red/15";

export default function Contact() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (service: string) => setPicked((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service]);

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_70%_at_92%_48%,rgba(116,8,5,.30),transparent_68%),radial-gradient(ellipse_45%_60%_at_12%_90%,rgba(102,6,4,.22),transparent_72%)]" />

      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:px-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver"><span className="h-px w-10 bg-red" /><span>Contact us</span></div>
          <h2 className="font-display text-6xl leading-[0.9] tracking-tight text-off md:text-[6vw]">REQUEST A<br /><span className="text-red">QUOTE.</span></h2>
          <p className="mt-6 max-w-md text-base text-silver md:text-lg">Tell us about the vehicle and the result you want. Mike will come back with scope, timing and an honest quote — not an email funnel.</p>
          <dl className="mt-10 space-y-5 border-l border-red pl-6">
            <div><dt className="text-[11px] uppercase tracking-[0.3em] text-silver">Call</dt><dd className="font-display text-3xl text-off"><a href={business.phoneHref}>{business.phone}</a></dd></div>
            <div><dt className="text-[11px] uppercase tracking-[0.3em] text-silver">Hours</dt><dd className="mt-1 text-sm text-off/90">{business.hours}</dd></div>
            <div><dt className="text-[11px] uppercase tracking-[0.3em] text-silver">Service areas</dt><dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-off/90">{serviceAreas.map((area, index) => <span key={area}>{area}{index < serviceAreas.length - 1 && <span className="pl-2 text-red">·</span>}</span>)}</dd></div>
          </dl>
        </div>

        <form className="relative overflow-hidden rounded-2xl border border-white/25 bg-[linear-gradient(135deg,rgba(70,8,6,.72)_0%,rgba(18,18,18,.98)_38%,rgba(10,10,10,.98)_100%)] p-5 shadow-[0_28px_70px_rgba(0,0,0,.35)] sm:p-7 md:p-9 lg:col-span-7 lg:p-11">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_52%_72%_at_0%_100%,rgba(183,12,7,.16),transparent_70%)]" />
          <div className="relative">
            <div className="mb-8 flex items-center justify-between gap-4 sm:mb-10">
              <h3 className="flex items-center gap-3 text-xl font-bold uppercase tracking-[0.16em] text-white sm:text-2xl"><span className="h-1 w-10 shrink-0 bg-red" />
              <span>Contact us</span>
              </h3>
              {/* <span className="shrink-0 font-mono text-sm font-bold tracking-[0.22em] text-white"><span className="text-red">01</span> / 03</span> */}
              </div>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              <Field label="First name" placeholder="Enter first name" icon="user" name="firstName" autoComplete="given-name" />
              <Field label="Last name" placeholder="Enter last name" icon="user" name="lastName" autoComplete="family-name" />
              <Field label="Email" placeholder="Enter email address" icon="mail" type="email" name="email" autoComplete="email" />
              <Field label="Phone" placeholder="Enter phone number" icon="phone" type="tel" name="phone" autoComplete="tel" />
            </div>

            <fieldset className="mt-8 sm:mt-9">
              <legend className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">Services – pick all that apply <span className="text-red">*</span></legend>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => {
                  const selected = picked.includes(service.short);
                  return <button key={service.id} type="button" onClick={() => toggle(service.short)} aria-pressed={selected} className={`flex min-h-14 items-center gap-3 rounded-xl border px-4 text-left text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 ${selected ? "border-red bg-red/20 text-white shadow-[0_0_22px_rgba(225,6,0,.17)]" : "border-white/30 bg-black/20 text-off hover:border-red/75 hover:bg-red/[0.07]"}`}>
                    <span className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border transition-colors ${selected ? "border-red bg-red" : "border-white/65"}`}>{selected && <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m3.2 8.2 3 3 6.6-6.5" /></svg>}</span>{service.short}
                  </button>;
                })}
              </div>
            </fieldset>

            <div className="mt-8 grid gap-5 sm:grid-cols-3 sm:gap-4">
              <Field label="Year" placeholder="Select year" icon="calendar" name="year" required={false} />
              <Field label="Make" placeholder="Select make" icon="car" name="make" required={false} />
              <Field label="Model" placeholder="Select model" icon="layers" name="model" required={false} />
            </div>

            <div className="mt-8"><label className="block text-sm font-bold uppercase tracking-[0.16em] text-white" htmlFor="vehicle-details">Tell us about the vehicle</label><div className="relative mt-3"><span className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-white/75"><FormIcon name="pen" /></span><textarea id="vehicle-details" name="details" rows={4} placeholder="Enter details about your vehicle…" className="min-h-36 w-full resize-y rounded-xl border border-white/35 bg-black/20 px-12 py-4 text-base text-white outline-none transition-all duration-300 placeholder:text-white/40 hover:border-white/55 focus:border-red focus:bg-red/[0.04] focus:ring-2 focus:ring-red/15" /></div></div>

            <button type="submit" className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-xl border border-red bg-[linear-gradient(135deg,#ff211b_0%,#e10600_54%,#990603_100%)] px-7 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_14px_32px_rgba(225,6,0,.26)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_38px_rgba(225,6,0,.38)] sm:mt-10 sm:w-auto sm:min-w-80">Submit request<svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 5l7 7-7 7" /></svg></button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder, icon, type = "text", name, autoComplete, required = true }: { label: string; placeholder: string; icon: IconName; type?: string; name: string; autoComplete?: string; required?: boolean }) {
  const id = `quote-${name}`;
  return <label className="block" htmlFor={id}><span className="mb-3 block text-sm font-bold uppercase tracking-[0.16em] text-white">{label}{required && <span className="text-red"> *</span>}</span><span className="relative block"><span className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/75"><FormIcon name={icon} /></span><input id={id} name={name} type={type} autoComplete={autoComplete} required={required} placeholder={placeholder} className={inputBase} /></span></label>;
}

function FormIcon({ name }: { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "user") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle {...common} cx="12" cy="8" r="3.6" /><path {...common} d="M4.5 21c.6-4.1 3.2-6.2 7.5-6.2s6.9 2.1 7.5 6.2" /></svg>;
  if (name === "mail") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...common} x="3" y="5" width="18" height="14" rx="2" /><path {...common} d="m4 7 8 6 8-6" /></svg>;
  if (name === "phone") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M21 16.7v2.5a1.8 1.8 0 0 1-2 1.8A17.8 17.8 0 0 1 3 5a1.8 1.8 0 0 1 1.8-2H7.3a1.8 1.8 0 0 1 1.7 1.2l.8 2.4a1.8 1.8 0 0 1-.4 1.9L8.1 9.8a14 14 0 0 0 6.1 6.1l1.3-1.3a1.8 1.8 0 0 1 1.9-.4l2.4.8a1.8 1.8 0 0 1 1.2 1.7Z" /></svg>;
  if (name === "calendar") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...common} x="3" y="5" width="18" height="16" rx="2" /><path {...common} d="M8 3v4M16 3v4M3 10h18" /></svg>;
  if (name === "car") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m5 16 1.6-5h10.8l1.6 5" /><path {...common} d="M4 16h16v4H4zM7 20v1M17 20v1" /><path {...common} d="m8 11 1.2-3h5.6l1.2 3" /><circle cx="7.5" cy="17.8" r=".8" fill="currentColor" /><circle cx="16.5" cy="17.8" r=".8" fill="currentColor" /></svg>;
  if (name === "layers") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m12 4 9 5-9 5-9-5 9-5Z" /><path {...common} d="m3 13 9 5 9-5M3 17l9 5 9-5" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m4 20 4.4-1 10-10a2.3 2.3 0 0 0-3.3-3.3l-10 10L4 20Z" /><path {...common} d="m13.8 7.2 3 3" /></svg>;
}
