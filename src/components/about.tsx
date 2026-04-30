import { Reveal } from "@/components/motion/reveal";

const principles = [
  {
    n: "i",
    title: "Modern stack, no bloat",
    body: "Next.js, Tailwind, edge hosting. None of the WordPress patchwork that breaks every quarter.",
  },
  {
    n: "ii",
    title: "Direct line to me",
    body: "No account managers, no project layers. You message, I reply. Decisions land the same day.",
  },
  {
    n: "iii",
    title: "Mobile-first by default",
    body: "Designed thumb-up, tested on real devices. Your customers will be on a phone — I plan for that.",
  },
  {
    n: "iv",
    title: "Built to rank",
    body: "Fast, semantic, accessible. Search engines reward what humans already prefer.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left rail */}
          <Reveal className="lg:col-span-2">
            <div className="sticky top-32 space-y-4">
              <p className="eyebrow">Chapter 03</p>
              <p className="font-serif text-5xl leading-none">03</p>
              <div className="hairline w-12" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                Notes from
                <br />
                the studio.
              </p>
            </div>
          </Reveal>

          {/* Editorial body */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal>
              <h2 className="font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-balance">
                A studio of <em className="italic text-primary">one</em>.
                <br />
                Nothing more.
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="space-y-6 text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
                <p className="first-letter:font-serif first-letter:text-6xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.85] first-letter:text-foreground">
                  I&apos;m an independent developer working with small businesses
                  that need a real digital presence — fast. I cut the agency
                  overhead and ship sites that actually load, convert, and rank.
                </p>
                <p>
                  You get someone who answers your messages, writes the code,
                  and owns the result. No middlemen, no decks, no quarterly
                  retainers for work that should have shipped last month.
                </p>
                <p className="font-serif text-2xl italic leading-snug text-foreground">
                  &ldquo;Make it real, make it fast, make it last.&rdquo;
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>Independent · Est. 2024</span>
                <span aria-hidden>✦</span>
                <span>Tel Aviv ⇆ Worldwide</span>
                <span aria-hidden>✦</span>
                <span>Currently · Q2 2026</span>
              </div>
            </Reveal>
          </div>

          {/* Principles list */}
          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <div className="border-t border-rule">
                {principles.map((p, i) => (
                  <article
                    key={p.n}
                    className="group/p flex gap-5 border-b border-rule py-5 transition-colors hover:text-foreground"
                    style={{ transitionDelay: `${i * 20}ms` }}
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground tabular pt-1 w-6 shrink-0">
                      {p.n}.
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-xl leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-ink-muted group-hover/p:text-ink-soft">
                        {p.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
