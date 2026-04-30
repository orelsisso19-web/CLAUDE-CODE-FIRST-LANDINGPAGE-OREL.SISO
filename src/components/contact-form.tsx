"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/motion/reveal";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      business: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactInput) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      toast.success("Message sent — I'll be in touch within 24 hours.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again or use WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-paper-deep/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left rail */}
          <Reveal className="lg:col-span-2">
            <div className="sticky top-32 space-y-4">
              <p className="eyebrow">Chapter 04</p>
              <p className="font-serif text-5xl leading-none">04</p>
              <div className="hairline w-12" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                Begin a
                <br />
                correspondence.
              </p>
            </div>
          </Reveal>

          {/* Headline + form */}
          <div className="lg:col-span-10 space-y-12">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-12">
                <h2 className="lg:col-span-8 font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-balance">
                  Tell me about <em className="italic text-primary">your project.</em>
                </h2>
                <div className="lg:col-span-4 space-y-3 lg:pt-3">
                  <p className="text-pretty text-[15px] leading-relaxed text-ink-soft">
                    A few lines is enough to start. I usually reply within 24
                    hours — or use the WhatsApp button if it&apos;s urgent.
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    sissoaiagency@gmail.com
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="grid gap-10"
              >
                <div className="grid gap-10 sm:grid-cols-2">
                  <UnderlineField
                    label="Name"
                    n="01"
                    error={errors.name?.message}
                  >
                    <input
                      {...register("name")}
                      placeholder="Your name"
                      autoComplete="name"
                      className="hairline-input"
                    />
                  </UnderlineField>
                  <UnderlineField
                    label="Email"
                    n="02"
                    error={errors.email?.message}
                  >
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="hairline-input"
                    />
                  </UnderlineField>
                </div>

                <UnderlineField
                  label="Business"
                  n="03"
                  error={errors.business?.message}
                >
                  <input
                    {...register("business")}
                    placeholder="Your company"
                    autoComplete="organization"
                    className="hairline-input"
                  />
                </UnderlineField>

                <UnderlineField
                  label="Message"
                  n="04"
                  error={errors.message?.message}
                >
                  <textarea
                    {...register("message")}
                    placeholder="What are you looking to build?"
                    rows={4}
                    className="hairline-input resize-none"
                  />
                </UnderlineField>

                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  {...register("website")}
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />

                <div className="flex flex-col-reverse items-stretch justify-between gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Replies within 24 hrs
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                      "group/send inline-flex items-center justify-between gap-6 border border-foreground bg-foreground px-6 py-4 text-paper transition-colors disabled:opacity-60",
                      "hover:bg-primary hover:border-primary",
                    )}
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
                      {submitting ? "Sending" : "Send dispatch"}
                    </span>
                    {submitting ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <span
                        aria-hidden
                        className="text-lg transition-transform group-hover/send:translate-x-1"
                      >
                        →
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Local styles for the underline inputs */}
      <style>{`
        .hairline-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--rule);
          padding: 0.5rem 0 0.65rem 0;
          font-family: var(--font-sans);
          font-size: 1.125rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.3s ease;
        }
        .hairline-input::placeholder {
          color: var(--ink-muted);
          opacity: 0.55;
        }
        .hairline-input:focus {
          border-bottom-color: var(--vermillion);
        }
      `}</style>
    </section>
  );
}

function UnderlineField({
  label,
  n,
  error,
  children,
}: {
  label: string;
  n: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="group/field block">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          № {n} — {label}
        </span>
        {error ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
            {error}
          </span>
        ) : null}
      </div>
      <div className="mt-1">{children}</div>
    </label>
  );
}
