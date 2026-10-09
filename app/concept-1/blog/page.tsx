import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/concept1/Nav";
import Footer from "../../components/concept1/Footer";
import { business } from "../../data/business";
import { posts } from "../../data/posts";

export const metadata: Metadata = {
  title: "Journal — Integrity Auto Salon · Redondo Beach, CA",
  description:
    "Notes from the shop floor — ceramic coating, paint correction, aftercare and the craft behind the work.",
};

const categories = [
  "All",
  "Ceramic Coating",
  "Paint Correction",
  "Comparison",
  "Aftercare",
  "Protection",
];

export default function BlogPage() {
  const featured = posts.find((p) => p.live) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <main className="relative bg-ink text-off grain">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-red/15 blur-[160px]" />

        <div className="mx-auto max-w-[1600px] px-6 pb-14 pt-14 md:px-12 md:pb-20 md:pt-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-silver"
          >
            <Link href={"/concept-1" as never} className="hover:text-off">
              Home
            </Link>
            <span className="text-red">/</span>
            <span className="text-off">Journal</span>
          </nav>

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-10 bg-red" />
                <span>Journal · Notes from the shop floor</span>
              </div>
              <h1 className="font-display text-[14vw] leading-[0.86] tracking-tight text-off md:text-[9vw]">
                FIELD
                <br />
                NOTES<span className="text-red">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-silver md:text-lg">
                Short writing from inside the shop — ceramic systems, correction logic,
                aftercare, and the thinking behind the way we work.
              </p>
            </div>

            <aside className="md:col-span-4">
              <div className="border border-steel/60 bg-carbon/80 p-5 backdrop-blur">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  <span>Index</span>
                  <span>
                    {posts.length} entries · {new Date().getFullYear()}
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {categories.map((c, i) => (
                    <li key={c}>
                      <button
                        type="button"
                        className={`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                          i === 0
                            ? "border-red bg-red text-white"
                            : "border-steel text-off hover:border-off"
                        }`}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Featured + grid */}
      <section className="relative bg-ink py-14 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          {/* Featured */}
          <article className="group relative isolate mb-12 overflow-hidden border border-steel/50">
            <Link
              href={
                (featured.live
                  ? `/concept-1/blog/${featured.slug}`
                  : "/concept-1/blog") as never
              }
              className="grid grid-cols-1 md:grid-cols-12"
              aria-label={featured.title}
            >
              <div className="relative md:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={featured.cover}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink/80 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-red/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-red/20" />
                  <span className="absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-red" />
                  <span className="absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-red" />
                  <span className="absolute left-10 top-10 flex items-center gap-2 bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-off backdrop-blur">
                    <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                    Featured
                  </span>
                </div>
              </div>

              <div className="relative flex flex-col justify-between gap-10 bg-carbon p-7 md:col-span-5 md:p-10">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                <div>
                  <div className="mb-4 flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-silver">
                    <span className="text-red">●</span>
                    <span>{featured.category}</span>
                    <span className="h-px w-6 bg-steel" />
                    <span>{featured.date}</span>
                    <span className="h-px w-6 bg-steel" />
                    <span>{featured.read}</span>
                  </div>
                  <h2 className="font-display text-3xl leading-tight tracking-wide text-off md:text-5xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-silver md:text-lg">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-off transition-colors duration-500 group-hover:text-red">
                  <span className="inline-flex items-center gap-3">
                    <span className="h-px w-10 bg-red transition-all duration-500 group-hover:w-20" />
                    Read the entry
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-off/50 text-off transition-all duration-500 group-hover:border-red group-hover:bg-red group-hover:text-white group-hover:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </article>

          {/* Grid */}
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <li key={p.slug}>
                <Link
                  href={
                    (p.live
                      ? `/concept-1/blog/${p.slug}`
                      : "/concept-1/blog") as never
                  }
                  className={`group relative isolate flex h-full flex-col overflow-hidden border border-steel/50 bg-carbon transition-all duration-500 ease-out hover:-translate-y-2 hover:border-red hover:[box-shadow:0_30px_80px_-20px_rgba(225,6,0,0.35)] ${
                    !p.live ? "opacity-80" : ""
                  }`}
                  aria-label={p.title}
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-red/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-red/30" />
                    <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-red/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />
                    <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />
                    <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-off/70 transition-all duration-500 group-hover:border-red group-hover:h-5 group-hover:w-5" />
                    <span className="absolute left-9 top-9 bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-off backdrop-blur">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    {!p.live && (
                      <span className="absolute right-3 top-3 ml-2 border border-off/60 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-off backdrop-blur">
                        Coming soon
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                    <div>
                      <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-silver">
                        <span className="text-red">●</span>
                        <span>{p.category}</span>
                        <span className="h-px w-4 bg-steel" />
                        <span>{p.read}</span>
                      </div>
                      <h3 className="font-display text-2xl leading-tight tracking-wide text-off md:text-[26px]">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm text-silver transition-colors duration-500 group-hover:text-off/90">
                        {p.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-steel/40 pt-4 text-[11px] uppercase tracking-[0.3em] text-silver">
                      <span>{p.date}</span>
                      <span className="inline-flex items-center gap-2 text-off transition-colors duration-500 group-hover:text-red">
                        {p.live ? "Read" : "Soon"}
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative border-y border-steel/50 bg-carbon py-14 md:py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/10 blur-[160px]" />
        <div className="mx-auto grid max-w-[1600px] items-center gap-8 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-8">
            <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-10 bg-red" />
              <span>Shop subscription</span>
            </div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-off md:text-6xl">
              NEW ENTRIES, STRAIGHT
              <br />
              TO YOUR INBOX<span className="text-red">.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-silver md:text-base">
              A short email when something new goes up. No sales funnels, no filler.
            </p>
          </div>
          <form className="flex gap-2 md:col-span-4">
            <input
              type="email"
              required
              placeholder="you@domain.com"
              className="caret-red w-full border border-steel bg-ink px-4 py-4 text-base text-off outline-none transition-colors placeholder:text-silver/60 focus:border-red"
            />
            <button
              type="submit"
              className="btn-sweep inline-flex items-center gap-2 bg-red px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Note */}
      <section className="relative bg-ink py-16">
        <div className="mx-auto max-w-[1600px] px-6 text-center md:px-12">
          <p className="mx-auto max-w-xl text-sm uppercase tracking-[0.3em] text-silver">
            + More entries migrating from the archive. For something that can't wait,{" "}
            <a href={business.phoneHref} className="text-off hover:text-red">
              call the shop
            </a>{" "}
            or{" "}
            <Link href={"/concept-1#contact" as never} className="text-off hover:text-red">
              send a note
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
