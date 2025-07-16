"use client";

import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import { ContactIntroSection } from "./components/ContactIntroSection";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactIntroSection />
      <ContactForm />
    </>
  );
}
