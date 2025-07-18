"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

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

const baseInput =
  "peer block w-full rounded-md border border-gray-300  /* ← changed */ \
   bg-background/90 px-4 py-2 text-sm shadow-sm placeholder:text-muted-foreground \
   focus:outline-none focus:ring-2 focus:ring-accent/50 dark:bg-surface/70";

const labelCls =
  "pointer-events-none absolute left-4 top-2 origin-[0] -translate-y-1 scale-90 transform text-xs font-medium text-muted-foreground transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 peer-focus:scale-90 peer-focus:text-accent";

export default function ContactForm({
  title = "Message Us",
  subtitle = "Tell us what you need help with and we’ll respond quickly.",
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
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const validate = (): Partial<FormValues> => {
    const e: Partial<FormValues> = {};
    if (!values.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Email invalid";
    if (!values.subject.trim()) e.subject = "Subject required";
    if (values.message.trim().length < 10) e.message = "Min 10 chars";
    return e;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return setStatus("error");

    setStatus("submitting");
    try {
      if (onSend) await onSend(values);
      else await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      onSubmitSuccess?.(values);
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onSubmit={handleSubmit}
      noValidate
      className={`flex w-full flex-col gap-8 rounded-2xl bg-background p-6 shadow-xl
            ring-1 ring-gray-200 sm:p-8 ${className}`}
    >
      <header className="space-y-1 text-center sm:text-left">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </header>

      {/* fields */}
      <div className="grid gap-6 sm:grid-cols-2">
        {[
          { name: "name", type: "text", placeholder: " ", label: "Name" },
          { name: "email", type: "email", placeholder: " ", label: "Email" },
          {
            name: "subject",
            type: "text",
            placeholder: " ",
            label: "Subject",
            col: "sm:col-span-2",
          },
          {
            name: "message",
            type: "textarea",
            placeholder: " ",
            label: "Message",
            rows: 5,
            col: "sm:col-span-2",
          },
        ].map((f) => {
          const err = errors[f.name as keyof FormValues];
          const shared = {
            id: `f-${f.name}`,
            name: f.name,
            placeholder: f.placeholder,
            value: values[f.name as keyof FormValues],
            onChange: handleChange,
            className: clsx(
              baseInput,
              err && "border-red-500 focus:ring-red-500"
            ),
            "aria-invalid": !!err,
          };
          return (
            <motion.div
              key={f.name}
              className={clsx("relative", f.col)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
              {f.type === "textarea" ? (
                <textarea {...shared} rows={f.rows as number} />
              ) : (
                <input {...shared} type={f.type} />
              )}
              <label htmlFor={`f-${f.name}`} className={labelCls}>
                {f.label}
              </label>
              {err && (
                <p className="mt-1 text-xs font-medium text-red-600">{err}</p>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* submit */}
      <button
        disabled={status === "submitting"}
        className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {/* toast */}
      <div
        className="min-h-[1.25rem] text-center text-sm"
        role="status"
        aria-live="polite"
      >
        {status === "success" && (
          <span className="font-medium text-green-600">Sent successfully!</span>
        )}
        {status === "error" && Object.keys(errors).length === 0 && (
          <span className="font-medium text-red-600">
            Error — please retry.
          </span>
        )}
      </div>
    </motion.form>
  );
}
