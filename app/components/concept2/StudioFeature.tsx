import Image from "next/image";

type Shot = {
  src: string;
  alt: string;
  fig: string;
  caption: string;
  italic: string;
};

const shots: readonly Shot[] = [
  {
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1800&q=80",
    alt: "A dark coupe at rest under studio lights",
    fig: "Fig. 03",
    caption: "Hand-off",
    italic: "Coupe, coated",
  },
  {
    src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
    alt: "A polished body panel reflecting the light",
    fig: "Fig. 04",
    caption: "Reflection",
    italic: "Correction · 2-stage",
  },
  {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1400&q=80",
    alt: "A coated sedan reflecting the evening light",
    fig: "Fig. 05",
    caption: "Reflection",
    italic: "Ceramic, cured",
  },
  {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    alt: "A detailer's hand working across a panel",
    fig: "Fig. 06",
    caption: "The hand",
    italic: "Studio, late",
  },
  {
    src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80",
    alt: "A finished sports car leaving the bay",
    fig: "Fig. 07",
    caption: "Departure",
    italic: "Grand tourer",
  },
];

export default function StudioFeature() {
  return (
    <section id="studio" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        {/* Pull quote */}
        <div className="mb-20 grid gap-6 md:grid-cols-12 md:mb-24">
          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
              Chapter III
            </div>
            <div className="mt-2 font-serif text-xl italic text-silver">
              — The studio
            </div>
          </div>
          <blockquote className="md:col-span-10 font-serif text-3xl leading-tight text-off md:text-6xl">
            <span className="text-red">“</span>Finish the finish before you cover it.
            Protect what deserves protection. Then do the next one the
            <span className="italic"> exact same way</span>.<span className="text-red">”</span>
          </blockquote>
          <div className="md:col-span-10 md:col-start-3 mt-4 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-silver">
            <span className="h-px w-10 bg-red" />
            Mike · Founder & Lead Installer
          </div>
        </div>

        {/* Section head */}
        <div className="mb-10 flex items-end justify-between gap-6 border-t border-steel/40 pt-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-silver">
              Portfolio · Selected plates
            </div>
            <h3 className="mt-2 font-serif text-3xl italic text-off md:text-4xl">
              Fig. 03 — 07
            </h3>
          </div>
          <a
            href="#contact"
            className="ink-link hidden pb-1 font-serif text-base italic text-off md:inline-block"
          >
            Request the full portfolio →
          </a>
        </div>

        {/* Editorial grid — two tiered rows */}
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {/* Row 1 — portrait feature + stacked split */}
          <Plate shot={shots[0]} className="col-span-12 aspect-[4/5] md:col-span-7 md:aspect-[9/11]" />

          <div className="col-span-12 grid grid-cols-1 gap-5 md:col-span-5 md:gap-6">
            <Plate shot={shots[1]} className="aspect-[4/3] md:aspect-[5/4]" />
            <Plate shot={shots[2]} className="aspect-[4/3] md:aspect-[5/4]" />
          </div>

          {/* Row 2 — portrait + landscape */}
          <Plate shot={shots[3]} className="col-span-12 aspect-[4/5] md:col-span-4 md:aspect-[4/5]" />
          <Plate shot={shots[4]} className="col-span-12 aspect-[16/10] md:col-span-8 md:aspect-[16/9]" />
        </div>

        <p className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-steel/40 pt-6 text-xs uppercase tracking-[0.3em] text-silver">
          <span>— Shot in-house. Filed from the Redondo studio.</span>
          <span className="font-serif text-sm italic normal-case text-off">
            Hover any plate to read its caption.
          </span>
        </p>
      </div>
    </section>
  );
}

function Plate({
  shot,
  className,
}: {
  shot: Shot;
  className: string;
}) {
  return (
    <figure
      className={`edit-frame group relative isolate overflow-hidden border border-steel/40 bg-ink ${className}`}
    >
      {/* Image */}
      <Image
        src={shot.src}
        alt={shot.alt}
        fill
        sizes="(min-width: 768px) 55vw, 100vw"
        className="object-cover"
      />

      {/* Soft darken + warm tint on hover */}
      <div className="pointer-events-none absolute inset-0 bg-ink/35 transition-opacity duration-700 group-hover:bg-ink/15" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

      {/* Thin inset frame on hover */}
      <span className="pointer-events-none absolute inset-3 border border-off/0 transition-all duration-700 ease-out group-hover:inset-4 group-hover:border-off/40" />

      {/* Top fig label */}
      <figcaption className="pointer-events-none absolute inset-x-5 top-5 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.35em] text-off">
        <span className="flex items-center gap-2">
          <span className="h-1 w-1 bg-red dot-breath" />
          {shot.fig}
        </span>
        <span className="font-serif text-sm italic normal-case tracking-normal">
          — {shot.caption}
        </span>
      </figcaption>

      {/* Bottom italic caption, fades in */}
      <div className="edit-caption pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 border-t border-off/40 pt-3">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-silver">
            Treatment
          </div>
          <div className="mt-1 font-serif text-base italic text-off">
            {shot.italic}
          </div>
        </div>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-off/70 text-off">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </figure>
  );
}
