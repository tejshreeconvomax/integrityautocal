import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../../components/concept3/Nav";
import Footer from "../../../components/concept3/Footer";
import { getPost, livePosts, type PostBlock } from "../../../data/posts";
import { business } from "../../../data/business";

export function generateStaticParams() {
  return livePosts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Integrity Auto Salon`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !post.live) notFound();

  const related = livePosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="relative bg-ink text-off">
      <Nav />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #525252 1px, transparent 1px), linear-gradient(to bottom, #525252 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full bg-red/15 blur-[160px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 pb-0 pt-14 md:px-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver"
          >
            <Link href={"/concept-3" as never} className="hover:text-off">
              Home
            </Link>
            <span className="text-red">/</span>
            <Link href={"/concept-3/blog" as never} className="hover:text-off">
              Blog
            </Link>
            <span className="text-red">/</span>
            <span className="text-off line-clamp-1">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            <span className="border border-red px-2 py-0.5 text-red">
              {post.category}
            </span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.read}</span>
          </div>

          <h1 className="mt-6 max-w-4xl font-technical text-4xl font-medium leading-[1.05] tracking-tight text-off md:text-[4.5vw]">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl font-technical text-base leading-relaxed text-silver md:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-10 bg-red" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-silver">
              By {post.author}
            </span>
          </div>
        </div>

        {/* Cover */}
        <div className="relative mt-10 mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="relative aspect-[21/9] overflow-hidden border border-steel/60">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/30" />
            {/* Scan */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="scan-line absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-red/30 to-transparent" />
            </div>
            {/* Corners */}
            <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-red" />
            <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-red" />
            <span className="absolute left-3 bottom-3 h-3 w-3 border-l border-b border-red" />
            <span className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-red" />
          </div>
        </div>
      </section>

      {/* Body + Sidebar */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 md:grid-cols-12 md:px-10">
          {/* Article */}
          <article className="md:col-span-8">
            {/* Highlights panel */}
            {post.highlights && post.highlights.length > 0 && (
              <div className="mb-10 border border-steel bg-carbon">
                <div className="flex items-center justify-between border-b border-steel/60 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  <span>Key takeaways</span>
                  <span className="text-red">●</span>
                </div>
                <ul className="divide-y divide-steel/40">
                  {post.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 px-5 py-3 font-technical text-sm text-off md:text-base"
                    >
                      <span className="mt-1 h-1 w-3 shrink-0 bg-red" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Blocks */}
            <div className="space-y-6">
              {post.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            {/* Author card */}
            <div className="mt-14 border border-steel bg-carbon">
              <div className="flex items-center justify-between border-b border-steel/60 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                <span>About the author</span>
                <span className="text-red">●</span>
              </div>
              <div className="p-5 md:p-6">
                <div className="font-technical text-xl text-off">
                  {post.author}
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
                  Owner — Integrity Auto Salon · Redondo Beach, CA
                </div>
                <p className="mt-3 font-technical text-sm leading-relaxed text-silver md:text-base">
                  Mike is the owner and sole operator of Integrity Auto Salon.
                  Every car that goes through the shop is his work, from
                  consultation to hand-off.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4">
            <div className="sticky top-28 space-y-4">
              {/* CTA panel */}
              <div className="border border-steel bg-carbon">
                <div className="flex items-center justify-between border-b border-steel/60 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-red pulse-dot" />
                    Ready?
                  </span>
                  <span>CTA</span>
                </div>
                <div className="p-5 md:p-6">
                  <div className="font-technical text-2xl tracking-tight text-off">
                    Get an honest quote.
                  </div>
                  <p className="mt-2 font-technical text-sm text-silver">
                    No pressure, no upsell. Just a clear price for exactly what
                    your car needs.
                  </p>
                  <Link
                    href={"/concept-3#contact" as never}
                    className="group mt-5 flex w-full items-center justify-between border border-red bg-red px-5 py-4 font-technical text-xs uppercase tracking-[0.3em] text-white transition-colors hover:bg-red-deep"
                  >
                    <span>Get a quote</span>
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href={business.phoneHref}
                    className="mt-3 flex w-full items-center justify-center gap-3 border border-steel px-5 py-4 font-technical text-xs uppercase tracking-[0.3em] text-off transition-colors hover:border-red"
                  >
                    Call {business.phone}
                  </a>
                </div>
              </div>

              {/* Share panel */}
              <div className="border border-steel bg-carbon">
                <div className="flex items-center justify-between border-b border-steel/60 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  <span>Share</span>
                  <span className="text-red">●</span>
                </div>
                <div className="grid grid-cols-3 gap-px bg-steel/40">
                  {["Facebook", "Twitter", "Email"].map((s) => (
                    <button
                      key={s}
                      className="bg-ink py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-silver transition-colors hover:bg-carbon hover:text-off"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Post info */}
              <div className="border border-steel bg-carbon">
                <div className="flex items-center justify-between border-b border-steel/60 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                  <span>Post info</span>
                  <span className="text-red">●</span>
                </div>
                <div className="divide-y divide-steel/40">
                  <InfoRow k="Category" v={post.category} />
                  <InfoRow k="Published" v={post.date} />
                  <InfoRow k="Read time" v={post.read} />
                  <InfoRow k="Author" v={post.author} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="relative border-t border-steel/40 bg-carbon py-16 md:py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-8 flex items-center justify-between gap-6">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
                <span className="text-red">●</span>
                <span>Keep reading</span>
              </div>
              <Link
                href={"/concept-3/blog" as never}
                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-off hover:text-red"
              >
                <span className="h-px w-10 bg-red" />
                All posts
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/concept-3/blog/${r.slug}` as never}
                  className="group relative isolate grid overflow-hidden border border-steel/50 bg-ink transition-all duration-500 hover:border-red md:grid-cols-5"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="relative aspect-[16/9] overflow-hidden md:col-span-2 md:aspect-auto">
                    <Image
                      src={r.cover}
                      alt={r.title}
                      fill
                      sizes="(min-width: 768px) 20vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/40" />
                  </div>
                  <div className="flex flex-col justify-center p-5 md:col-span-3 md:p-6">
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                      <span className="text-red">{r.category}</span>
                      <span>·</span>
                      <span>{r.read}</span>
                    </div>
                    <h3 className="mt-2 font-technical text-xl leading-[1.1] tracking-tight text-off transition-colors group-hover:text-red md:text-2xl">
                      {r.title}
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-3 font-technical text-xs uppercase tracking-[0.3em] text-red">
                      Read post
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 flex items-center gap-4 font-technical text-2xl tracking-tight text-off md:text-3xl">
          <span className="h-px w-6 bg-red" />
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="font-technical text-base leading-relaxed text-silver md:text-lg">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 font-technical text-base leading-relaxed text-silver md:text-lg"
            >
              <span className="mt-2.5 h-1 w-3 shrink-0 bg-red" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 font-technical text-base leading-relaxed text-silver md:text-lg"
            >
              <span className="mt-0.5 shrink-0 font-mono text-sm text-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "pull":
      return (
        <blockquote className="relative border-l-2 border-red bg-carbon px-6 py-5 md:px-8 md:py-6">
          <span className="absolute right-4 top-3 font-mono text-[10px] uppercase tracking-[0.3em] text-red">
            ●
          </span>
          <p className="font-technical text-xl leading-snug text-off md:text-2xl">
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      );
  }
}

function InfoRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em]">
      <span className="text-silver">{k}</span>
      <span className="text-off">{v}</span>
    </div>
  );
}
