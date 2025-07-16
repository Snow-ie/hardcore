// app/about/page.tsx
// About Hardcore Biometric Systems (responsive, ESLint-safe)

"use client";

import { Fragment } from "react";
import {
  Award,
  Handshake,
  Layers,
  Users as UsersIcon,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion"; // optional; yank if you’re not using Framer

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="py-20">
    <div className="container mx-auto max-w-6xl px-4">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function AboutPage() {
  // quick motion variants (optional)
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* 1 ── ABOUT US  ────────────────────────────────────── */}
      <Section id="about-us" title="About Us">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mx-auto max-w-3xl text-lg leading-relaxed"
        >
          Hardcore&nbsp;Biometric&nbsp;Systems is a globally recognized IT
          solutions provider, established in&nbsp;2007. Over the
          past&nbsp;18&nbsp;years, we have delivered projects across Nigeria and
          internationally—earning a strong reputation for excellence and
          innovation. By&nbsp;2019, we reported a revenue
          of&nbsp;$40&nbsp;million and grew to a team of&nbsp;200+ professionals
          operating in multiple countries.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed"
        >
          We specialize in helping organizations craft IT strategies aligned
          with core business objectives. Leveraging deep industry know-how in
          security and systems management, we deliver sustainable value to
          government agencies, institutions, and private enterprises.
        </motion.p>
      </Section>

      {/* 2 ── WHY CHOOSE US  ─────────────────────────────── */}
      <Section id="why-choose" title="Why Choose Hardcore Biometric Systems?">
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              icon: Handshake,
              text: "Strong, long-term partnerships—your success is our success.",
            },
            {
              icon: Award,
              text: "Mission: deliver cutting-edge solutions that drive growth.",
            },
            {
              icon: ShieldCheck,
              text: "Vision: redefine how technology powers progress worldwide.",
            },
            {
              icon: UsersIcon,
              text: "Values: innovation, results, quality, integrity, transparency, teamwork.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-lg border border-foreground/10 bg-surface/40 p-6"
            >
              <item.icon className="h-8 w-8 shrink-0 text-[var(--accent)]" />
              <p className="leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3 ── OUR OFFERINGS ──────────────────────────────── */}
      <Section id="offerings" title="Our Offerings">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mx-auto max-w-3xl text-lg leading-relaxed"
        >
          In today&apos;s fast-moving marketplace, organizations crave partners
          who convert ideas into impact—quickly and cost-effectively. We deliver
          managed solutions, custom software, and business applications designed
          to accelerate growth.
        </motion.p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { icon: Layers, label: "Managed Solutions" },
            { icon: Handshake, label: "Strategic Partnerships" },
            { icon: Award, label: "Custom Applications" },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col items-center gap-4 rounded-lg border border-foreground/10 bg-surface/40 p-8 text-center"
            >
              <card.icon className="h-10 w-10 text-[var(--accent)]" />
              <h3 className="font-semibold">{card.label}</h3>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4 ── OUR TEAM  ──────────────────────────────────── */}
      <Section id="team" title="Our Team">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Management summary */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Management</h3>
            <ul className="list-inside list-disc space-y-2 text-lg">
              <li>
                CEO&nbsp;– provides strategic direction and drives innovation.
              </li>
              <li>
                CTO&nbsp;– leads our technical vision, ensuring top-tier
                quality.
              </li>
              <li>
                Personal Assistants&nbsp;– keep day-to-day operations seamless.
              </li>
              <li>Procurement Manager&nbsp;– sources resources efficiently.</li>
              <li>
                Project Manager&nbsp;– ensures timely delivery and success.
              </li>
            </ul>
          </motion.div>

          {/* Departments */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Key Departments</h3>
            <ul className="list-inside list-disc space-y-2 text-lg">
              <li>
                Development&nbsp;– frontend &amp; backend engineers crafting
                robust solutions.
              </li>
              <li>
                IT Infrastructure&nbsp;– architects maintaining
                high-availability systems.
              </li>
              <li>
                Quality Assurance&nbsp;– guarantees every release meets
                expectations.
              </li>
              <li>
                Administrative / Legal&nbsp;– HR, finance, compliance support.
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* 5 ── CLIENTS  ───────────────────────────────────── */}
      <Section id="clients" title="Clients">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mx-auto max-w-3xl text-lg leading-relaxed"
        >
          Hardcore&nbsp;Biometric&nbsp;Systems partners with prestigious
          organizations across multiple sectors. (Insert logo strip or carousel
          here.)
        </motion.p>
      </Section>
    </main>
  );
}
