"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#top", label: "Index", n: "00" },
  { href: "#services", label: "Studio", n: "01" },
  { href: "#about", label: "Notes", n: "02" },
  { href: "#contact", label: "Contact", n: "03" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-rule"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10">
        <a
          href="#top"
          className="group/brand flex items-baseline gap-2 leading-none"
        >
          <span className="font-serif text-2xl tracking-tight">
            Orel <em className="not-italic font-serif italic text-primary">Sisso</em>
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground translate-y-[-2px]">
            / Studio
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group/link flex items-baseline gap-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="font-mono text-[10px] tabular text-muted-foreground/80 group-hover/link:text-primary">
                {l.n}
              </span>
              <span className="swipe-link">{l.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="relative inline-flex size-2">
              <span className="absolute inset-0 rounded-full bg-primary pulse-dot" />
            </span>
            Available · Q2 26
          </span>
          <a
            href="#contact"
            className="group/cta inline-flex items-center gap-2 border-b border-foreground pb-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary hover:border-primary"
          >
            Begin
            <span aria-hidden className="transition-transform group-hover/cta:translate-x-1">→</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
