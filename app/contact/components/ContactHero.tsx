"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="relative isolate flex min-h-[40vh] items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/contact-hero.png')" }}
    >
      <span className="absolute inset-0 bg-[var(--primary)]/60 mix-blend-multiply" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-xl px-4 text-center"
      >
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Contact
        </h1>
      </motion.div>
    </section>
  );
}
