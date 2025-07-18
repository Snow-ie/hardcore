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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.45, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function FeatureSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative isolate py-24 animate-fade-in"
    >
      <div className="container mx-auto grid items-center gap-16 md:grid-cols-2">
        <div>
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-3xl font-bold text-dark md:text-4xl"
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

        <motion.div
          variants={imageVariants}
          className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl md:mt-0"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/feature.jpg"
              alt="Identification & authentication illustration"
              fill
              sizes="(min-width:1024px) 600px, (min-width:640px) 80vw, 100vw"
              className="object-contain object-center"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
