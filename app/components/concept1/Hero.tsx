import Image from "next/image";
import { business } from "../../data/business";

type DetailIcon = "pin" | "clock" | "settings" | "star";

function DetailIcon({ type }: { type: DetailIcon }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "pin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle {...common} cx="12" cy="10" r="2.5" /></svg>;
  if (type === "clock") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle {...common} cx="12" cy="12" r="8.5" /><path {...common} d="M12 7v5l3 2" /></svg>;
  if (type === "settings") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle {...common} cx="12" cy="12" r="3" /><path {...common} d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.3 2.3-.07-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56v.1h-3.25v-.1a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.87.34l-.07.06-2.3-2.3.06-.06A1.7 1.7 0 0 0 6.4 15a1.7 1.7 0 0 0-1.56-1.04h-.1v-3.25h.1A1.7 1.7 0 0 0 6.4 9.67a1.7 1.7 0 0 0-.34-1.87L6 7.73l2.3-2.3.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.04-1.56v-.1h3.25v.1a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.87-.34l.07-.06 2.3 2.3-.06.07a1.7 1.7 0 0 0-.34 1.87 1.7 1.7 0 0 0 1.56 1.04h.1v3.25h-.1A1.7 1.7 0 0 0 19.4 15Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>;
}

const details: { icon: DetailIcon; label: string; value: string }[] = [
  { icon: "pin", label: "Location", value: `${business.city}, ${business.state}` },
  { icon: "clock", label: "Hours", value: "09:00 — 18:00 · Daily" },
  { icon: "settings", label: "Services", value: "06 Specialized" },
  { icon: "star", label: "Reviews", value: "55+ Excellent" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#070707] text-off">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_32%,rgba(132,4,4,.46),transparent_35%),linear-gradient(105deg,#070707_0%,#0e0808_51%,#2c0405_100%)]" />
      <Image src="/cinematic-red-supercar-hero-clean.png" alt="Red sports car in a studio" fill priority sizes="100vw" className="pointer-events-none -z-10 object-cover object-[68%_center]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#070707_0%,rgba(7,7,7,.96)_27%,rgba(7,7,7,.48)_51%,rgba(7,7,7,.12)_76%,rgba(7,7,7,.4)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,7,7,.38)_0%,rgba(7,7,7,.58)_58%,rgba(7,7,7,.18)_100%)] md:hidden" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-[#070707] via-[#070707]/72 to-transparent" />

      <div className="mx-auto flex min-h-[790px] max-w-[1600px] flex-col px-6 pb-7 md:min-h-[820px] md:px-12 md:pb-8 lg:min-h-[850px]">
        <div className="flex flex-1 items-center pt-20 md:pt-24">
          <div className="max-w-[760px] pt-12 lg:pt-20">
            <div className="mb-6 flex items-start gap-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-off/80 md:items-center md:text-[11px]">
              <span className="mt-[0.7em] h-px w-7 shrink-0 bg-red md:mt-0 md:w-11" />
              <div className="flex flex-col gap-2.5 leading-none md:flex-row md:items-center md:gap-3">
                <span>Ceramic coating</span>
                <span className="hidden text-red md:inline">•</span>
                <span>Paint correction</span>
                <span className="hidden text-red md:inline">•</span>
                <span>Detail</span>
              </div>
            </div>
            <h1 className="font-display text-[17vw] leading-[.79] tracking-[-.035em] text-white sm:text-[15vw] md:text-[9.2vw] lg:text-[8.2rem] xl:text-[9.5rem]">PROFESSIONAL<br /><span className="text-red">AUTO CARE.</span></h1>
            <p className="mt-8 max-w-[470px] text-base leading-relaxed text-off/88 md:mt-9 md:text-xl md:leading-[1.55]">Redondo Beach&apos;s reference studio for ceramic coating, paint correction and the kind of detail work that stops people in parking lots. Owner-operated by Mike.</p>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10 mb-10 md:gap-5">
              <a href="#contact" className="group inline-flex items-center gap-3 rounded-md bg-red px-6 py-4 text-xs font-bold uppercase tracking-[.16em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff1818] hover:shadow-[0_12px_34px_rgba(224,6,6,.3)] md:px-8">Request a quote<svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg></a>
              <a href={business.phoneHref} className="group inline-flex items-center gap-3 rounded-md border border-white/60 bg-black/20 px-5 py-4 text-xs font-bold uppercase tracking-[.12em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-red hover:bg-red/10 md:px-6"><svg viewBox="0 0 24 24" className="h-4 w-4 text-red" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1L8 9.3a16 16 0 0 0 6.7 6.7l1.2-1.2a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6a2 2 0 0 1 1.7 2Z" /></svg>Call {business.phone}</a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 border-t border-white/20 pt-5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/20 lg:pt-7">
          {details.map((detail) => <div key={detail.label} className="flex min-h-[74px] items-center gap-4 py-4 sm:px-5 lg:justify-center lg:px-7 lg:py-2"><span className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-red [&_svg]:h-9 [&_svg]:w-9"><DetailIcon type={detail.icon} /></span><div className="min-w-0"><div className="text-[10px] font-semibold uppercase tracking-[.2em] text-off/75">{detail.label}</div><div className="mt-1 whitespace-nowrap text-sm font-bold uppercase tracking-[.08em] text-white lg:text-[13px]">{detail.value}</div></div></div>)}
        </div>
      </div>
    </section>
  );
}
