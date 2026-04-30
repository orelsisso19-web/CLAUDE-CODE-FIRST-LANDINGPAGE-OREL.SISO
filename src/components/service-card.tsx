type Props = {
  n: string;
  title: string;
  summary: string;
  keyword: string;
  metric: string;
  tags: string[];
};

export function ServiceCard({ n, title, summary, keyword, metric, tags }: Props) {
  return (
    <article className="group/row relative grid gap-6 border-b border-rule py-10 transition-colors hover:bg-card/60 sm:py-14 lg:grid-cols-12 lg:gap-10">
      {/* Index */}
      <div className="lg:col-span-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground tabular">
          № {n}
        </span>
      </div>

      {/* Title + keyword */}
      <div className="lg:col-span-4">
        <h3 className="font-serif text-3xl leading-tight tracking-[-0.01em] sm:text-4xl">
          {title}
        </h3>
        <p className="mt-2 font-serif text-2xl italic text-primary sm:text-3xl">
          {keyword}
        </p>
      </div>

      {/* Body */}
      <div className="lg:col-span-4">
        <p className="text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
          {summary}
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {tags.map((t, i) => (
            <li key={t} className="inline-flex items-center gap-3">
              <span>{t}</span>
              {i < tags.length - 1 && <span aria-hidden>·</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Metric */}
      <div className="lg:col-span-2 lg:text-right">
        <span className="inline-flex items-baseline gap-2">
          <span aria-hidden className="size-1.5 rounded-full bg-primary" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">
            {metric}
          </span>
        </span>
      </div>

      {/* Hover arrow */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-10 hidden translate-x-2 font-serif text-3xl text-primary opacity-0 transition-all duration-500 group-hover/row:translate-x-0 group-hover/row:opacity-100 lg:block"
      >
        →
      </span>
    </article>
  );
}
