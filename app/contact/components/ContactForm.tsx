"use client";

import * as React from "react";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";

/* ─ Types ───────────────────────────────────────────── */
export type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export type ContactFormProps = {
  title?: string;
  subtitle?: string;
  /** Optional class to extend outer wrapper. */
  className?: string;
  /** Called on successful submit (after fake/real send). */
  onSubmitSuccess?: (values: FormValues) => void;
  /** Replace with your real async sender. Receives form values, must throw on failure. */
  onSend?: (values: FormValues) => Promise<void>;
};

/* ─ Component ───────────────────────────────────────── */
export default function ContactForm({
  title = "Message Us",
  subtitle = "Tell us what you need help with and we’ll respond.",
  className = "",
  onSubmitSuccess,
  onSend,
}: ContactFormProps) {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => {
      if (!prev[name as keyof FormValues]) return prev;
      const next = { ...prev };
      delete next[name as keyof FormValues];
      return next;
    });
    if (status === "error") setStatus("idle");
  };

  /* Basic client validation */
  const validate = (): Partial<FormValues> => {
    const errs: Partial<FormValues> = {};
    if (!values.name.trim()) errs.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      errs.email = "Enter a valid email.";
    if (!values.subject.trim()) errs.subject = "Subject is required.";
    if (values.message.trim().length < 10)
      errs.message = "Message should be at least 10 characters.";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      if (onSend) {
        await onSend(values);
      } else {
        /* Fake network delay; replace with real request */
        await new Promise((r) => setTimeout(r, 800));
      }

      setStatus("success");
      onSubmitSuccess?.(values);
      setValues({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const fieldError = (field: keyof FormValues) => errors[field];

  /* Tailwind utility strings (central so we change once) */
  const baseInput =
    "w-full rounded-md border border-border bg-background p-3 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus:border-accent dark:bg-surface";
  const errorInput =
    "border-red-500 ring-red-500/50 focus-visible:ring-red-500/70 focus:border-red-500";

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "submitting"}
      className={`mx-auto w-full max-w-xl space-y-6 rounded-xl bg-white p-6 shadow-lg dark:bg-surface sm:p-8 ${className}`}
    >
      {/* Heading */}
      <header className="space-y-2 text-center sm:text-left">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </header>

      {/* Name + Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1 block text-sm font-medium text-foreground"
          >
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
            autoComplete="name"
            aria-invalid={!!fieldError("name")}
            aria-describedby={
              fieldError("name") ? "contact-name-err" : undefined
            }
            className={`${baseInput} ${fieldError("name") ? errorInput : ""}`}
          />
          {fieldError("name") && (
            <p
              id="contact-name-err"
              className="mt-1 text-xs font-medium text-red-600"
            >
              {fieldError("name")}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1 block text-sm font-medium text-foreground"
          >
            Your email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            autoComplete="email"
            aria-invalid={!!fieldError("email")}
            aria-describedby={
              fieldError("email") ? "contact-email-err" : undefined
            }
            className={`${baseInput} ${fieldError("email") ? errorInput : ""}`}
          />
          {fieldError("email") && (
            <p
              id="contact-email-err"
              className="mt-1 text-xs font-medium text-red-600"
            >
              {fieldError("email")}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          placeholder="Project inquiry"
          required
          autoComplete="off"
          aria-invalid={!!fieldError("subject")}
          aria-describedby={
            fieldError("subject") ? "contact-subject-err" : undefined
          }
          className={`${baseInput} ${fieldError("subject") ? errorInput : ""}`}
        />
        {fieldError("subject") && (
          <p
            id="contact-subject-err"
            className="mt-1 text-xs font-medium text-red-600"
          >
            {fieldError("subject")}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us what you need help with..."
          required
          rows={6}
          aria-invalid={!!fieldError("message")}
          aria-describedby={
            fieldError("message") ? "contact-message-err" : undefined
          }
          className={`${baseInput} resize-y ${
            fieldError("message") ? errorInput : ""
          }`}
        />
        {fieldError("message") && (
          <p
            id="contact-message-err"
            className="mt-1 text-xs font-medium text-red-600"
          >
            {fieldError("message")}
          </p>
        )}
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
      </div>

      {/* Status feedback (reserved height prevents layout shift) */}
      <div
        role="status"
        aria-live="polite"
        className="min-h-[1.25rem] text-center text-sm"
      >
        {status === "success" && (
          <span className="font-medium text-green-600">
            Message sent! We’ll get back to you soon.
          </span>
        )}
        {status === "error" && Object.keys(errors).length === 0 && (
          <span className="font-medium text-red-600">
            Something went wrong. Please try again.
          </span>
        )}
      </div>
    </motion.form>
  );
}
