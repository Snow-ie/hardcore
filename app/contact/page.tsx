"use client";

import ContactHero from "./components/ContactHero";
import { ContactIntroSection } from "./components/ContactIntroSection";
import ContactSection from "./components/ContactSection";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactIntroSection />
      <ContactSection />
    </>
  );
}
