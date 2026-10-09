import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../../components/concept1/Nav";
import Footer from "../../../components/concept1/Footer";
import { business } from "../../../data/business";
import { getPost, livePosts, posts } from "../../../data/posts";

export function generateStaticParams() {
  return livePosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/concept-1/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Journal — Integrity Auto Salon" };
  return {
    title: `${post.title} — Integrity Auto Salon`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.cover],
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/concept-1/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !post.live) notFound();

  // Pick two "related" posts (other live posts)
  const related = livePosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  // Fill with any remaining teaser posts to make three cards
  const extras = posts
    .filter((p) => p.slug !== post.slug && !related.includes(p))
    .slice(0, 3 - related.length);
  const nextUp = [...related, ...extras];

  return (
    <main className="relative bg-ink text-off grain">
      <Nav />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-28 md:pt-32">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={post.cover}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-[480px] w-[480px] rounded-full bg-red/20 blur-[160px]" />

        <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-14 md:px-12 md:pb-28 md:pt-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-silver"
          >
            <Link href={"/concept-1" as never} className="hover:text-off">
              Home
            </Link>
            <span className="text-red">/</span>
            <Link href={"/concept-1/blog" as never} className="hover:text-off">
              Journal
            </Link>
            <span className="text-red">/</span>
            <span className="truncate text-off">{post.category}</span>
          </nav>

          {/* Category + meta */}
          <div className="mb-6 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-silver">
            <span className="inline-flex items-center gap-2 border border-red bg-red/10 px-3 py-1 text-red">
              <span className="h-1.5 w-1.5 bg-red pulse-dot" />
              {post.category}
            </span>
            <span>{post.date}</span>
            <span className="h-px w-6 bg-steel" />
            <span>{post.read}</span>
            <span className="h-px w-6 bg-steel" />
            <span>By {post.author}</span>
          </div>

          <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-off md:text-[5.5vw]">
            {post.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-silver md:text-xl">
            {post.excerpt}
          </p>

          {/* Highlights */}
          {post.highlights && post.highlights.length > 0 && (
            <ul className="mt-10 grid gap-3 border-l border-red pl-6 md:grid-cols-3 md:gap-5">
              {post.highlights.map((h, i) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-1 font-mono text-xs text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-off md:text-base">{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Cover tile */}
      <section className="relative bg-ink pb-14 md:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="relative aspect-[16/9] overflow-hidden border border-steel/50">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              sizes="(min-width: 768px) 70vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-red" />
            <span className="absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-red" />
            <span className="absolute left-4 bottom-4 h-4 w-4 border-l-2 border-b-2 border-red" />
            <span className="absolute right-4 bottom-4 h-4 w-4 border-r-2 border-b-2 border-red" />
            <div className="absolute left-5 bottom-5 flex items-center gap-2 bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-off backdrop-blur">
              <span className="h-1.5 w-1.5 bg-red pulse-dot" />
              Fig. 01 — {post.category}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative bg-ink pb-24 md:pb-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 md:grid-cols-12 md:gap-16 md:px-12">
          {/* Sticky meta on desktop */}
          <aside className="md:col-span-3">
            <div className="sticky top-28 space-y-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  Written by
                </div>
                <div className="mt-2 font-display text-xl tracking-wider text-off">
                  {post.author}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-silver">
                  Integrity Auto Salon
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  Share
                </div>
                <ul className="mt-2 flex gap-3">
                  {["X", "FB", "IG", "LN"].map((s) => (
                    <li key={s}>
                      <a
                        href="#"
                        className="inline-flex h-9 w-9 items-center justify-center border border-steel text-xs font-semibold text-off transition-colors hover:border-red hover:bg-red hover:text-white"
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  Need the service?
                </div>
                <Link
                  href={"/concept-1#contact" as never}
                  className="btn-sweep group mt-3 flex w-full items-center justify-between gap-3 bg-red px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white"
                >
                  Request a quote
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href={business.phoneHref}
                  className="mt-3 flex w-full items-center justify-between border border-off/40 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-off hover:border-red hover:text-red"
                >
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-red" />
                    Call
                  </span>
                  {business.phone}
                </a>
              </div>
            </div>
          </aside>

          {/* Article */}
          <article className="md:col-span-9">
            <div className="space-y-8 text-off">
              {post.blocks.map((b, i) => {
                if (b.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="scroll-mt-28 pt-4 font-display text-3xl leading-tight tracking-wide text-off md:text-4xl"
                    >
                      <span className="mr-3 text-red">/</span>
                      {b.text}
                    </h2>
                  );
                }
                if (b.type === "p") {
                  return (
                    <p
                      key={i}
                      className="max-w-2xl text-base leading-[1.75] text-off/90 md:text-lg"
                    >
                      {b.text}
                    </p>
                  );
                }
                if (b.type === "ul") {
                  return (
                    <ul
                      key={i}
                      className="max-w-2xl space-y-3 border-l border-red pl-5"
                    >
                      {b.items.map((it) => (
                        <li
                          key={it}
                          className="relative text-base leading-[1.65] text-off/90 md:text-lg"
                        >
                          <span className="absolute -left-[1.37rem] top-3 h-1 w-3 bg-red" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (b.type === "ol") {
                  return (
                    <ol
                      key={i}
                      className="max-w-2xl space-y-3 border-l border-red pl-5"
                    >
                      {b.items.map((it, idx) => (
                        <li
                          key={it}
                          className="flex gap-4 text-base leading-[1.65] text-off/90 md:text-lg"
                        >
                          <span className="font-mono text-sm text-red">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ol>
                  );
                }
                // pull quote
                return (
                  <blockquote
                    key={i}
                    className="relative my-4 max-w-3xl border-y border-red/60 bg-carbon px-6 py-8 md:px-10 md:py-10"
                  >
                    <span className="absolute -top-5 left-6 bg-ink px-2 font-display text-5xl leading-none text-red md:text-6xl">
                      “
                    </span>
                    <p className="font-display text-2xl leading-tight tracking-wide text-off md:text-3xl">
                      {b.text}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-silver">
                      <span className="h-px w-10 bg-red" />
                      {post.author} · Integrity Auto Salon
                    </div>
                  </blockquote>
                );
              })}
            </div>

            {/* Inline CTA at bottom of article */}
            <div className="mt-14 border-y border-steel/50 bg-carbon p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <div className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                    <span className="h-px w-10 bg-red" />
                    <span>Up next</span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight tracking-wide text-off md:text-3xl">
                    Want an honest assessment on your car?
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-silver md:text-base">
                    Drop in on an appointment or send a quick note. We'll come back
                    with scope, timing and a quote you can trust.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
                  <Link
                    href={"/concept-1#contact" as never}
                    className="btn-sweep group inline-flex items-center gap-3 bg-red px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white"
                  >
                    Request a quote
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Author block */}
            <div className="mt-10 border border-steel/50 bg-ink/40 p-6 md:p-8">
              <div className="flex items-start gap-5">
                <span className="relative inline-flex h-14 w-14 items-center justify-center bg-red font-display text-xl text-white md:h-16 md:w-16">
                  {post.author
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                    Written by
                  </div>
                  <div className="font-display text-xl tracking-wider text-off">
                    {post.author}
                  </div>
                  <p className="mt-2 max-w-xl text-sm text-silver md:text-base">
                    Owner-operator at Integrity Auto Salon, Redondo Beach. Writes
                    occasionally when the shop is quiet.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related posts */}
      <section className="relative bg-carbon py-20 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-10 bg-red" />
                <span>Keep reading</span>
              </div>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-off md:text-6xl">
                MORE FROM THE JOURNAL<span className="text-red">.</span>
              </h2>
            </div>
            <Link
              href={"/concept-1/blog" as never}
              className="hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-off hover:text-red md:inline-flex"
            >
              <span className="h-px w-10 bg-red" />
              All entries
            </Link>
          </div>

          <ul className="grid gap-5 md:grid-cols-3">
            {nextUp.map((p) => (
              <li key={p.slug}>
                <Link
                  href={
                    (p.live ? `/concept-1/blog/${p.slug}` : "/concept-1/blog") as never
                  }
                  className="group relative isolate flex h-full flex-col overflow-hidden border border-steel/50 bg-ink transition-all duration-500 ease-out hover:-translate-y-2 hover:border-red hover:[box-shadow:0_30px_80px_-20px_rgba(225,6,0,0.35)]"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-red/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-red/25" />
                    <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-red/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />
                    {!p.live && (
                      <span className="absolute right-3 top-3 border border-off/60 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-off backdrop-blur">
                        Coming soon
                      </span>
                    )}
                    <span className="absolute left-4 top-4 bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-off backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                    <h3 className="font-display text-xl leading-tight tracking-wide text-off md:text-2xl">
                      {p.title}
                    </h3>
                    <div className="flex items-center justify-between border-t border-steel/40 pt-4 text-[11px] uppercase tracking-[0.3em] text-silver">
                      <span>{p.date}</span>
                      <span className="inline-flex items-center gap-2 text-off transition-colors duration-500 group-hover:text-red">
                        Read
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
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

      <Footer />
    </main>
  );
}
