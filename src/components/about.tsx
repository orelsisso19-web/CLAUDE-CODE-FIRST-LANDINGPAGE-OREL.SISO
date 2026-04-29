import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const points = [
  "Modern stack (Next.js, Tailwind, Vercel) — no WordPress bloat",
  "Direct line to me — no account managers, no project layers",
  "Mobile-first by default — your customers will thank you",
  "Built to rank — fast, SEO-ready, accessible",
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Why work with me
            </h2>
            <p className="text-balance text-muted-foreground sm:text-lg">
              I&apos;m an independent developer focused on small businesses
              that need a real digital presence — fast. I cut the agency
              overhead and ship sites that actually load, convert, and rank.
            </p>
            <p className="text-muted-foreground">
              You get someone who answers your messages, writes the code, and
              owns the result.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
