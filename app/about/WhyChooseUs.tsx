// components/WhyChooseHBS.tsx
// Responsive "Why Choose Us" section styled after your reference.
// Expects CSS vars like --surface, --accent, --foreground in your globals (adjust classes as needed).

"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { Cog, BarChart2, Users, Headset, ShieldCheck } from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  icon: ReactNode;
  side: "left" | "right";
};

const leftFeatures: Feature[] = [
  {
    title: "Proven Track Record",
    desc: "Secure, large‑scale ID & government‑grade deployments that deliver.",
    icon: <BarChart2 className="h-6 w-6" />,
    side: "left",
  },
  {
    title: "24/7 Support",
    desc: "Dedicated global support—ready whenever you need us.",
    icon: <Headset className="h-6 w-6" />,
    side: "left",
  },
];

const rightFeatures: Feature[] = [
  {
    title: "Expert Team",
    desc: "Highly skilled specialists in biometrics, IT, & data security.",
    icon: <Users className="h-6 w-6" />,
    side: "right",
  },
  {
    title: "Reliable & Secure",
    desc: "Hardened solutions trusted in high‑stakes environments.",
    icon: <ShieldCheck className="h-6 w-6" />,
    side: "right",
  },
];

function FeatureCard({ title, desc, icon, side }: Feature) {
  return (
    <div
      className={clsx(
        "relative rounded-xl border border-foreground/10 bg-[var(--surface)]/40 p-6 text-center shadow-sm backdrop-blur",
        "md:text-left"
      )}
    >
      {/* connector line (desktop only) */}
      <span
        aria-hidden
        className={clsx(
          "pointer-events-none absolute top-1/2 hidden h-px w-10 -translate-y-1/2 bg-foreground/20 md:block",
          side === "left" ? "-right-10" : "-left-10"
        )}
      />
      <div
        className={clsx(
          "mb-3 flex items-center justify-center",
          side === "left" ? "md:justify-start" : "md:justify-start" // both start so icon aligns inward
        )}
      >
        {icon}
      </div>
      <h3 className="mb-1 font-semibold">{title}</h3>
      <p className="text-sm text-foreground/80">{desc}</p>
    </div>
  );
}

export default function WhyChooseHBS() {
  return (
    <section id="why-choose" className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Eyebrow */}
        <div className="mb-4 text-center text-xs font-medium tracking-wide text-[var(--accent)]">
          • Why Choose Us •
        </div>

        <h2 className="mx-auto mb-16 max-w-xl text-center text-3xl font-bold md:text-4xl">
          Where Experience Meets Compassion
        </h2>

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-24">
          {/* left column */}
          <div className="grid gap-12">
            {leftFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          {/* center gear bubble (hidden on mobile) */}
          <div className="relative mx-auto hidden md:block">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-[var(--accent)]/40 bg-[var(--accent)]/10">
              <Cog className="h-12 w-12 text-[var(--accent)]" />
            </div>
          </div>

          {/* right column */}
          <div className="grid gap-12">
            {rightFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>

        {/* Copy Block */}
        <div className="mx-auto mt-24 max-w-3xl space-y-8 text-center md:text-left">
          <h3 className="text-2xl font-bold uppercase tracking-tight">
            Why Choose Hardcore Biometric Systems?
          </h3>
          <p>
            At <strong>Hardcore Biometric Systems</strong>, we believe that
            strong business relationships are the cornerstone of long‑term
            success. We prioritize building and maintaining lasting partnerships
            with our clients and collaborators. We treat our clients' businesses
            as our own—committed to their growth and continuously strengthening
            our global network so we can deliver the highest level of expertise
            and support.
          </p>
          <p>
            <strong>Our mission</strong> is to deliver cutting‑edge solutions
            that drive business growth and transformation.
          </p>
          <p>
            <strong>Our vision</strong> is to become the world’s leading IT
            solutions provider, redefining how technology powers progress across
            industries and geographies.
          </p>
          <div>
            <strong className="mb-2 block font-semibold">
              Our core values:
            </strong>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm md:justify-start">
              <li>Innovation</li>
              <li>Results</li>
              <li>Quality</li>
              <li>Integrity</li>
              <li>Transparency</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
