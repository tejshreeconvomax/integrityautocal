export default function Marquee({ items }: { items: readonly string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-steel/40 bg-ink py-6">
      <div className="marquee-track flex min-w-max gap-16">
        {doubled.map((it, i) => (
          <span
            key={`${it}-${i}`}
            className="flex items-center gap-16 font-display text-3xl uppercase tracking-wider text-off md:text-5xl"
          >
            {it}
            <span className="inline-block h-2 w-2 shrink-0 rotate-45 bg-red" />
          </span>
        ))}
      </div>
    </div>
  );
}
