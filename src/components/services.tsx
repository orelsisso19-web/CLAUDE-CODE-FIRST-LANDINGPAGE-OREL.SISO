import { Reveal } from "@/components/motion/reveal";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    n: "01",
    title: "Lead-Gen Pages",
    summary:
      "High-converting landing pages designed around a single goal — capturing the lead. Forms, CTAs and copy that pull in one direction.",
    keyword: "Convert.",
    metric: "+38% avg. lift",
    tags: ["Strategy", "Copy", "Forms", "Tracking"],
  },
  {
    n: "02",
    title: "Mobile-First Sites",
    summary:
      "Built for the thumb. Every page is composed and tested mobile-first — fast, readable, effortless to tap, indistinguishable from native.",
    keyword: "Tactile.",
    metric: "100% responsive",
    tags: ["Responsive", "Tap-friendly", "Accessible"],
  },
  {
    n: "03",
    title: "Performance",
    summary:
      "Modern stack — Next.js, edge hosting, image optimisation. Pages load in under 1.5s, score 90+ on Lighthouse, and rank where customers look.",
    keyword: "Quick.",
    metric: "Sub-1.5s loads",
    tags: ["Next.js", "Edge", "SEO", "Lighthouse 90+"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-paper-deep/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section header */}
        <Reveal>
          <div className="mb-16 grid gap-8 sm:mb-24 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <p className="eyebrow">Chapter 02</p>
              <p className="mt-3 font-serif text-5xl leading-none">02</p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-balance">
                Three things, <em className="italic text-primary">done well.</em>
              </h2>
            </div>
            <div className="lg:col-span-3 lg:pt-3">
              <p className="text-pretty text-[15px] leading-relaxed text-ink-soft">
                Focus is the value. The offering stays narrow on purpose —
                these are the things that actually move the numbers for small
                and medium businesses.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Editorial numbered list */}
        <div className="border-t border-rule">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
