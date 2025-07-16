"use client";

import Link from "next/link";
import Image from "next/image";
import { Fingerprint, BadgeCheck, Users } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const features = [
  {
    icon: Fingerprint,
    title: "Biometric Solutions",
    description:
      "Passport, ID cards, Driver's license, Residence ID permits, Police cards",
  },
  {
    icon: BadgeCheck,
    title: "Visas, Stamps & Civil Acts",
    description:
      "Machine-readable solutions for excise stamps, QR, birth, marriage & divorce certificates …",
  },
  {
    icon: Users,
    title: "Population Identification",
    description:
      "Agencies collect and analyse demographic, economic & social data at all geographic levels.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function FeatureSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative isolate overflow-hidden bg-[#d8d7ec]"
    >
      <Image
        src="/images/feature.jpg"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover object-top md:object-right opacity-30 md:opacity-100 pointer-events-none select-none"
      />

      <div className="absolute inset-0 bg-white/60 md:bg-transparent" />

      <div className="relative z-10 mx-auto container px-6 py-20 lg:px-12">
        <div className="md:grid md:grid-cols-2 md:gap-16">
          <div>
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-bold text-dark"
            >
              Identification and Authentication
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-3 max-w-md text-gray-700"
            >
              Our management consulting services focus on our clients’ most
              critical issues and opportunities.
            </motion.p>

            <ul className="mt-12 space-y-10">
              {features.map(({ icon: Icon, title, description }, i) => (
                <motion.li
                  key={title}
                  variants={fadeUp}
                  custom={i + 2}
                  className="flex items-start gap-5"
                >
                  <span className="shrink-0 rounded-full bg-white p-3 shadow">
                    <Icon className="h-8 w-8 text-accent" />
                  </span>
                  <div>
                    <h3 className="font-semibold uppercase tracking-wide text-dark">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">
                      {description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={fadeUp}
              custom={features.length + 2}
              className="mt-12"
            >
              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>
    </motion.section>
  );
}
