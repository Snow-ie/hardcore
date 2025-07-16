"use client";

import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";
import FAQAccordion from "./components/FAQAccordion";

export default function ContactPage() {
  return (
    <main className="container mx-auto my-24 space-y-32 px-4">
      <section aria-labelledby="contact-heading" className="space-y-16">
        <header className="mx-auto max-w-2xl text-center space-y-3">
          <h1
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-dark"
          >
            Connect with Our Team
          </h1>
          <p className="text-gray-600">
            We’re ready to answer questions, discuss projects, or just say hi.
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary"
          />
        </header>

        <div className="grid gap-12 md:grid-cols-2 items-start">
          <ContactForm />
          <ContactDetails />
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="space-y-12">
        <header className="mx-auto max-w-3xl text-center space-y-3">
          <h2
            id="faq-heading"
            className="text-2xl md:text-3xl font-bold text-dark"
          >
            Your Common Queries <span className="text-accent">Answered</span>
          </h2>
          <p className="text-gray-600">
            Below are our most‑asked questions. Click to reveal the answers.
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent"
          />
        </header>

        {/* Keep FAQ full‑width on small; constrain on large if desired */}
        <div className="mx-auto max-w-3xl">
          <FAQAccordion />
        </div>
      </section>
    </main>
  );
}
