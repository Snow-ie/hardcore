"use client";

import ContactForm, { type ContactFormProps } from "./ContactForm";
import ContactLocation, { type ContactLocationProps } from "./ContactLocation";

type ContactSectionProps = {
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
    <section id="contact" className={`py-24 animate-fade-in ${className}`}>
      <div className="container mx-auto ">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <ContactForm {...formProps} className="lg:order-1" />
          <ContactLocation {...locationProps} className="lg:order-2" />
        </div>
      </div>
    </section>
  );
}
