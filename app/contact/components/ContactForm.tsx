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
  className?: string;
  onSubmitSuccess?: (values: FormValues) => void;
  onSend?: (values: FormValues) => Promise<void>;
};

/* Field config for mapping */
type FieldType = "text" | "email" | "textarea";
interface FieldDef {
  name: keyof FormValues;
  label: string;
  type: FieldType;
  placeholder?: string;
  autoComplete?: string;
  rows?: number; // textarea only
  colSpan?: string; // e.g. "sm:col-span-2"
}

const fieldDefs: FieldDef[] = [
  {
    name: "name",
    label: "Your name",
    type: "text",
    placeholder: "Jane Doe",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Your email",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Project inquiry",
    autoComplete: "off",
    colSpan: "sm:col-span-2",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell us what you need help with...",
    rows: 6,
    colSpan: "sm:col-span-2",
  },
];

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
      <header className="space-y-2 text-center sm:text-left">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </header>

      {/* MAPPED FIELDS */}
      <div className="grid gap-6 sm:grid-cols-2">
        {fieldDefs.map((f) => {
          const err = fieldError(f.name);
          const id = `contact-${f.name}`;
          const errId = `${id}-err`;
          const inputCls = `${baseInput} ${err ? errorInput : ""}`;
          const colSpan = f.colSpan ?? "";

          return (
            <div key={f.name as string} className={colSpan}>
              <label
                htmlFor={id}
                className="mb-1 block text-sm font-medium text-foreground"
              >
                {f.label}
              </label>

              {f.type === "textarea" ? (
                <textarea
                  id={id}
                  name={f.name}
                  value={values[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  required
                  rows={f.rows ?? 4}
                  aria-invalid={!!err}
                  aria-describedby={err ? errId : undefined}
                  className={`${inputCls} resize-y`}
                />
              ) : (
                <input
                  id={id}
                  name={f.name}
                  type={f.type}
                  value={values[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  required
                  autoComplete={f.autoComplete}
                  aria-invalid={!!err}
                  aria-describedby={err ? errId : undefined}
                  className={inputCls}
                />
              )}

              {err && (
                <p id={errId} className="mt-1 text-xs font-medium text-red-600">
                  {err}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
      </div>

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
