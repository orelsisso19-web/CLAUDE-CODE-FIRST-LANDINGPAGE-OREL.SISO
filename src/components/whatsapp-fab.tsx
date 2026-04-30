"use client";

import { motion } from "framer-motion";

export function WhatsAppFab() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const message = encodeURIComponent(
    "Hi Orel, I saw your studio and would like to discuss a project.",
  );
  const href = number
    ? `https://wa.me/${number}?text=${message}`
    : "#contact";

  return (
    <motion.a
      href={href}
      target={number ? "_blank" : undefined}
      rel={number ? "noopener noreferrer" : undefined}
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      whileHover={{ y: -2 }}
      className="group/wa fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 border border-foreground bg-background pl-3 pr-4 py-2.5 shadow-[3px_3px_0_0_var(--ink)] transition-shadow hover:shadow-[5px_5px_0_0_var(--vermillion)]"
    >
      <span className="relative inline-flex size-2.5">
        <span className="absolute inset-0 rounded-full bg-primary pulse-dot" />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground transition-colors group-hover/wa:text-primary">
        Chat · WhatsApp
      </span>
    </motion.a>
  );
}
