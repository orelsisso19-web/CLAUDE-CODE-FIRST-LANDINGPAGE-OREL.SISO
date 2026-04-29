"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/motion/reveal";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";

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
    <section id="contact" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell me about your project
            </h2>
            <p className="mt-3 text-muted-foreground">
              I usually reply within 24 hours. Quick chat? Use the WhatsApp
              button.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid gap-5 rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <Input
                  {...register("name")}
                  placeholder="Your name"
                  autoComplete="name"
                  className="h-11"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="h-11"
                />
              </Field>
            </div>

            <Field label="Business name" error={errors.business?.message}>
              <Input
                {...register("business")}
                placeholder="Your company"
                autoComplete="organization"
                className="h-11"
              />
            </Field>

            <Field label="Message" error={errors.message?.message}>
              <Textarea
                {...register("message")}
                placeholder="What are you looking to build?"
                rows={5}
                className="min-h-32"
              />
            </Field>

            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              {...register("website")}
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="w-full sm:w-auto sm:justify-self-end"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-1 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send message <Send className="ml-1" />
                </>
              )}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium">{label}</span>
      {children}
      {error ? (
        <span className="text-xs text-destructive">{error}</span>
      ) : null}
    </label>
  );
}
