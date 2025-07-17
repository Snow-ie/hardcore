"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="relative isolate flex min-h-[40vh] md:min-h-[60vh] items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/contact-hero.png')" }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[rgba(4,27,20,0.80)] mix-blend-multiply"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[rgba(4,27,20,0.90)] via-[rgba(6,48,31,0.40)] to-transparent"
      />
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
