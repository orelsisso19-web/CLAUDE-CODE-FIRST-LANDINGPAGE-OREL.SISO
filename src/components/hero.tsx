"use client";

import { motion } from "framer-motion";

const ticker = [
  "Lead-Gen Pages",
  "Mobile-First",
  "Fast Loads",
  "Conversion Copy",
  "Direct Communication",
  "SEO-Ready",
  "Modern Design",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Decorative grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
      >
        <div className="absolute inset-y-0 left-[12%] w-px bg-rule" />
        <div className="absolute inset-y-0 right-[12%] w-px bg-rule" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-rule/60" />
      </div>

      {/* Top metadata bar */}
      <div className="mx-auto mb-14 sm:mb-20 flex max-w-7xl items-center justify-between px-6 sm:px-10 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Vol. 01 — Modern Websites
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden sm:inline"
        >
          Modern Web Solutions · {new Date().getFullYear()}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          № 0427
        </motion.span>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-16">
        {/* Left rail — section label */}
        <motion.aside
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="hidden lg:block lg:col-span-2"
        >
          <div className="sticky top-32 space-y-4">
            <p className="eyebrow">Chapter 01</p>
            <p className="font-serif text-5xl leading-none">01</p>
            <div className="hairline w-12" />
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
              Modern websites
              <br />
              for small business.
            </p>
          </div>
        </motion.aside>

        {/* Headline */}
        <div className="lg:col-span-7">
          <h1 className="font-serif text-[clamp(2.75rem,8.5vw,7.5rem)] leading-[0.95] tracking-[-0.02em] text-balance">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              Websites
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              that <em className="italic text-primary">turn quiet</em>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              visitors into
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.46, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              <span className="relative inline-block">
                customers.
                <span
                  aria-hidden
                  className="absolute -right-3 top-2 size-2 rounded-full bg-primary"
                />
              </span>
            </motion.span>
          </h1>
        </div>

        {/* Right rail — intro + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="lg:col-span-3 flex flex-col justify-end gap-8 lg:pt-24"
        >
          <div className="space-y-4">
            <div className="hairline" />
            <p className="text-pretty text-[15px] leading-relaxed text-ink-soft">
              I&apos;m <em className="font-serif text-base italic">Orel</em>. I
              help small and medium businesses launch fast, mobile-first
              websites that turn visits into customers. No agency overhead. No
              middlemen.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Modern stack · Built for speed
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              className="group/cta inline-flex items-center justify-between border border-foreground bg-foreground px-5 py-4 text-paper transition-colors hover:bg-primary hover:border-primary"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                Start a project
              </span>
              <span aria-hidden className="text-lg transition-transform group-hover/cta:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#services"
              className="group/alt inline-flex items-center justify-between border border-rule px-5 py-4 transition-colors hover:border-foreground"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                See services
              </span>
              <span aria-hidden className="text-lg transition-transform group-hover/alt:translate-x-1">
                ↓
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hairline + ticker marquee */}
      <div className="mt-20 sm:mt-28">
        <div className="hairline" />
        <div className="overflow-hidden border-b border-rule py-5">
          <div className="marquee flex w-max items-center gap-12 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {[...ticker, ...ticker, ...ticker].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-12">
                <span>{t}</span>
                <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
