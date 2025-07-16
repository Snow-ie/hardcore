"use client";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
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
  };

  const validate = (): Partial<FormValues> => {
    const errs: Partial<FormValues> = {};
    if (!values.name.trim()) errs.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
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
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const fieldError = (field: keyof FormValues) => errors[field];

  // shared input styles with border
  const baseInput =
    "w-full rounded-md border border-gray-300 bg-white p-3 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus:border-accent";

  const errorInput =
    "border-red-500 ring-red-500/50 focus-visible:ring-red-500/70 focus:border-red-500";

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 rounded-xl bg-plain p-8 shadow-card"
    >
      <h2 className="text-lg font-semibold text-dark">Get in Touch with Us</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1 block text-sm font-medium text-dark"
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

        <div>
          <label
            htmlFor="contact-email"
            className="mb-1 block text-sm font-medium text-dark"
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

      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1 block text-sm font-medium text-dark"
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

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1 block text-sm font-medium text-dark"
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

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-white shadow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
      </div>

      {/* Status feedback */}
      <div
        role="status"
        aria-live="polite"
        className="min-h-[1.25rem] text-center text-sm"
      >
        {status === "success" && (
          <span className="text-green-600 font-medium">
            Message sent! We’ll get back to you soon.
          </span>
        )}
        {status === "error" && Object.keys(errors).length === 0 && (
          <span className="text-red-600 font-medium">
            Something went wrong. Please try again.
          </span>
        )}
      </div>
    </motion.form>
  );
}
