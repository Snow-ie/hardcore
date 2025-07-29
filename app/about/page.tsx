"use client";

import Image from "next/image";
import {
  Award,
  Handshake,
  Layers,
  Users as UsersIcon,
  ShieldCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="relative overflow-hidden py-24 animate-fade-in">
    {/* faint radial gradient backdrop */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
    <div className="relative container mx-auto max-w-6xl px-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function AboutPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <main className="py-24 container mx-auto">
      <Section id="about-us" title="About Us">
        {[0, 1].map((idx) => (
          <motion.p
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={idx}
            className=" text-lg leading-relaxed"
          >
            {idx === 0
              ? `Hardcore Biometric Systems is a globally recognized IT
                solutions provider, established in 2007. Over the past 18 years,
                we have delivered projects across Nigeria and internationally
                earning a strong reputation for excellence and innovation. By 2019,
                revenue surpassed $40 million with 200+ professionals operating
                worldwide.`
              : `We specialize in helping organizations craft IT strategies aligned
                with core business objectives. Leveraging deep industry know-how in
                security and systems management, we deliver sustainable value to
                government agencies, institutions, and private enterprises.`}
          </motion.p>
        ))}
      </Section>

      {/* 2 ── WHY CHOOSE US */}
      <Section id="why-choose" title="Why Choose Hardcore Biometric Systems?">
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              icon: Handshake,
              text: "Strong, long-term partnerships your success is our success.",
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
              key={item.text}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-xl border border-foreground/10 bg-white/60 p-6 backdrop-blur-md"
            >
              <item.icon className="h-8 w-8 shrink-0 text-primary" />
              <p className="leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

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
          who convert ideas into impact quickly and cost effectively. We deliver
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
              className="flex flex-col items-center gap-4 rounded-xl border border-foreground/10 bg-white/60 p-8 text-center backdrop-blur-md"
            >
              <card.icon className="h-10 w-10 text-primary" />
              <h3 className="font-semibold">{card.label}</h3>
            </motion.div>
          ))}
        </div>
      </Section>

     {/* 4 ── OUR TEAM */}
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
      <h3 className="text-xl font-semibold text-primary">Management</h3>
      <ul className="list-inside list-disc space-y-2 text-lg">
        <li>CEO – provides strategic direction and drives innovation.</li>
        <li>CTO – leads our technical vision, ensuring top-tier quality.</li>
        <li>Personal Assistants – keep day-to-day operations seamless.</li>
        <li>Procurement Manager – sources resources efficiently.</li>
        <li>Project Manager – ensures timely delivery and success.</li>
      </ul>
    </motion.div>

    {/* Team roles only - no names or images */}
    <motion.div
      custom={1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      {[
        "Chief Executive Officer",
        "Chief Technology Officer",
        "Project Manager",
        "Quality Assurance Lead",
      ].map((role, index) => (
        <div
          key={index}
          className="rounded-xl bg-white/60 p-4 backdrop-blur-md shadow-sm"
        >
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      ))}
    </motion.div>
  </div>
</Section>


      {/* 5 ── CLIENTS */}
      <Section id="clients" title="Clients">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-lg text-center leading-relaxed"
        >
          Hardcore Biometric Systems partners with prestigious organizations
          across multiple sectors.
        </motion.p>

        {/* placeholder logo strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-80">
          {[
            "/images/state-security-service.png",
            "/images/nigeria-immigration-service.png",
            "/images/us-department-of-state.png",
            "/images/nigeria-police-force.png",
            "/images/ghana-coat-of-arms.png",
            "/images/nigerian-army.png",
          ].map((src) => (
            <Image
              key={src}
              src={src}
              alt="Client logo"
              width={120}
              height={60}
              className="object-contain"
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
