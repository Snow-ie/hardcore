"use client";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How can I benefit from your startup?",
    a: "We offer turnkey biometric and identity-management solutions…",
  },
  {
    q: "How can I get in touch with customer support?",
    a: "Email support@hardcorebiometric.com or call us within business hours.",
  },
  {
    q: "How do you ensure data security and privacy?",
    a: "We comply with ISO 27001 and AES-256 encryption throughout…",
  },
  {
    q: "How do I get started with your offerings?",
    a: "Book a discovery call via the form or phone; we’ll tailor a proposal.",
  },
];

export default function FAQAccordion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {faqs.map(({ q, a }) => (
        <Disclosure key={q}>
          {({ open }) => (
            <div className="border rounded-lg">
              <Disclosure.Button className="flex w-full items-center justify-between px-4 py-3 font-medium">
                {q}
                <span className="text-[var(--accent)]">{open ? "−" : "+"}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400">
                {a}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </motion.div>
  );
}
