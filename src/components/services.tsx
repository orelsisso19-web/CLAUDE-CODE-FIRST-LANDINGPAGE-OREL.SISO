import { Rocket, Smartphone, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    icon: Rocket,
    title: "Lead-Gen Pages",
    description:
      "High-converting landing pages built around a single goal: turning visitors into leads. Forms, CTAs, and copy that work together.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Most of your customers are on a phone. Every page is designed and tested mobile-first — fast, readable, and effortless to tap.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Built on modern stacks (Next.js, edge hosting). Pages load in under 1.5s, score 90+ on Lighthouse, and rank better in search.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What I build
            </h2>
            <p className="mt-3 text-balance text-muted-foreground">
              Three things, done well — built for SMBs that need a real digital
              presence without the agency price tag.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
