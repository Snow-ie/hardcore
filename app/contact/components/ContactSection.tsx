"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import ContactForm, { type ContactFormProps } from "./ContactForm";
import ContactLocation, { type ContactLocationProps } from "./ContactLocation";

export type ContactSectionProps = {
  formProps?: ContactFormProps;
  locationProps?: ContactLocationProps;
  className?: string;
};

export default function ContactSection({
  formProps,
  locationProps,
  className = "",
}: ContactSectionProps) {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={clsx("relative py-28 sm:py-32", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%] bg-gradient-to-b from-primary/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <ContactLocation
            {...locationProps}
            mapEmbedSrc="https://www.google.com/maps?q=Plot+1816+Mahathir+Street+Asokoro+Abuja&output=embed"
            className="order-2 lg:order-1"
          />
          <ContactForm {...formProps} className="order-1 lg:order-2" />
        </div>
      </div>
    </motion.section>
  );
}
