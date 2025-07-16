"use client";

import * as React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactCard, ContactCardItem } from "./ContactCard";

export type ContactIntroSectionProps = {
  eyebrow?: string;
  heading?: string;
  items?: ContactCardItem[];
  className?: string;
  headingId?: string;
};

const DEFAULT_ITEMS: ContactCardItem[] = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["Plot 1816, Mahathir St,", "Asokoro – Abuja"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+234 803 306 2096", "Daily Support"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@hardcorebiometric.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Daily 08 AM – 05 PM"],
  },
];

export function ContactIntroSection({
  eyebrow = "CONTACT US",
  heading = "Get In Touch",
  items = DEFAULT_ITEMS,
  className = "",
  headingId = "contact-intro-heading",
}: ContactIntroSectionProps) {
  return (
    <section
      id="contact"
      aria-labelledby={headingId}
      className={`py-24 bg-background ${className}`}
    >
      <div className="mb-16 text-center">
        <p className="text-sm font-semibold tracking-widest text-primary">
          {eyebrow}
        </p>
        <h2
          id={headingId}
          className="mt-2 text-4xl font-extrabold text-foreground"
        >
          {heading}
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <ContactCard key={item.title + i} {...item} />
        ))}
      </div>
    </section>
  );
}
