import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/concept3/Nav";
import Footer from "../../components/concept3/Footer";
import { posts, livePosts } from "../../data/posts";

export const metadata: Metadata = {
  title: "Blog — Integrity Auto Salon",
  description:
    "Tips, guides, and honest answers about ceramic coating, paint correction, and car care from Redondo Beach.",
};

const categories = [...new Set(posts.map((p) => p.category))];

export default function BlogPage() {
  const featured = livePosts[0]!;
  const rest = livePosts.slice(1);
  const teasers = posts.filter((p) => !p.live);

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
        <div className="pointer-events-none absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-red/15 blur-[160px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 pb-16 pt-14 md:px-10 md:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver"
          >
            <Link href={"/concept-3" as never} className="hover:text-off">
              Home
            </Link>
            <span className="text-red">/</span>
            <span className="text-off">Blog</span>
          </nav>

          <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
            <span className="text-red">[01]</span>
            <span className="h-px w-10 bg-steel/60" />
            <span>From the shop</span>
          </div>

          <h1 className="font-technical text-[13vw] font-medium leading-[0.88] tracking-tighter text-off md:text-[8vw]">
            Honest <span className="text-red">answers</span>.
          </h1>
          <p className="mt-6 max-w-xl font-technical text-base leading-relaxed text-silver md:text-lg">
            Tips, guides, and straight talk about ceramic coating, paint
            correction, and keeping your car looking right — from the shop floor
            in Redondo Beach.
          </p>

          {/* Category chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="border border-steel/60 bg-carbon px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-silver"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="relative bg-carbon py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
            <span className="text-red">[02]</span>
            <span className="h-px w-10 bg-steel" />
            <span>Featured</span>
          </div>

          <Link
            href={`/concept-3/blog/${featured.slug}` as never}
            className="group grid gap-6 overflow-hidden border border-steel/50 bg-ink transition-all duration-500 hover:border-red md:grid-cols-12"
          >
            <div className="relative aspect-[16/9] overflow-hidden md:col-span-7 md:aspect-auto">
              <Image
                src={featured.cover}
                alt={featured.title}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/40" />
              {/* Scan */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="scan-line absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-red/30 to-transparent" />
              </div>
              {/* Corner marks */}
              <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-red" />
              <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-red" />
              <span className="absolute left-3 bottom-3 h-3 w-3 border-l border-b border-red" />
              <span className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-red" />
            </div>
            <div className="flex flex-col justify-center p-6 md:col-span-5 md:p-8">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
                <span className="text-red">Featured</span>
                <span>·</span>
                <span>{featured.read}</span>
              </div>
              <h2 className="mt-4 font-technical text-3xl leading-[1.05] tracking-tight text-off transition-colors group-hover:text-red md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 font-technical text-sm leading-relaxed text-silver md:text-base">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-10 bg-red" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-silver">
                  {featured.date}
                </span>
              </div>
              <div className="mt-6 inline-flex items-center gap-3 self-start font-technical text-xs uppercase tracking-[0.3em] text-red">
                <span>Read post</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="relative bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
            <span className="text-red">[03]</span>
            <span className="h-px w-10 bg-steel" />
            <span>More posts</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
            {teasers.map((p) => (
              <PostCard key={p.slug} post={p} teaser />
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe strip */}
      <section className="relative border-y border-steel/40 bg-carbon py-12">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
          <div>
            <div className="mb-2 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver">
              <span className="text-red">●</span>
              <span>Stay current</span>
            </div>
            <h3 className="font-technical text-2xl tracking-tight text-off md:text-3xl">
              New post notifications.
            </h3>
          </div>
          <form className="flex w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="you@email.com"
              className="caret-red flex-1 border border-steel bg-ink px-4 py-3 font-technical text-base text-off outline-none transition-colors placeholder:text-silver/50 focus:border-red"
            />
            <button
              type="submit"
              className="border border-red bg-red px-6 py-3 font-technical text-xs uppercase tracking-[0.3em] text-white transition-colors hover:bg-red-deep"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PostCard({
  post,
  teaser = false,
}: {
  post: (typeof posts)[number];
  teaser?: boolean;
}) {
  const inner = (
    <div className="group relative isolate flex h-full flex-col overflow-hidden border border-steel/50 bg-carbon transition-all duration-500 hover:border-red hover:-translate-y-1">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/40" />
        {teaser && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink/60">
            <span className="border border-steel px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
              Coming soon
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 border border-steel/60 bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-silver">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 p-5 md:p-6">
        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.read}</span>
          </div>
          <h3 className="mt-3 font-technical text-xl leading-[1.1] tracking-tight text-off transition-colors group-hover:text-red md:text-2xl">
            {post.title}
          </h3>
          <p className="mt-2 font-technical text-sm text-silver line-clamp-3">
            {post.excerpt}
          </p>
        </div>
        {!teaser && (
          <span className="inline-flex items-center gap-3 font-technical text-xs uppercase tracking-[0.3em] text-red">
            Read post
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );

  if (teaser) return <div>{inner}</div>;

  return (
    <Link href={`/concept-3/blog/${post.slug}` as never}>{inner}</Link>
  );
}
