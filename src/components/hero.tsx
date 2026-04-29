"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center"
        aria-hidden
      >
        <div className="h-[480px] w-[720px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Modern web solutions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
        >
          Websites that <span className="text-primary">turn visitors</span>{" "}
          into customers.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          I build fast, mobile-first lead-gen pages for small and medium
          businesses. No bloated agencies, no slow turnarounds — just clean
          code and direct communication.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="lg" nativeButton={false} render={<a href="#contact" />}>
            Start your project
            <ArrowRight className="ml-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<a href="#services" />}
          >
            <MessageCircle className="mr-1" />
            See what I do
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
