"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import type { SecurityFeature } from "../../data/securityFeatures";
import { SECURITY_FEATURES } from "../../data/securityFeatures";

type SecurityFeaturesProps = {
  heading?: string;
  intro?: string;
  features?: SecurityFeature[];
  className?: string;

  colorClass?: string;
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function SecurityFeatures({
  heading = "Security Features",
  intro,
  features = SECURITY_FEATURES,
  className,
  colorClass = "text-primary",
}: SecurityFeaturesProps) {
  return (
    <section className={clsx("py-20", className)}>
      <div className="container mx-auto ">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {heading}
          </h2>
          {intro ? (
            <p className="mt-4 text-base text-foreground/80">{intro}</p>
          ) : null}
        </motion.header>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-x-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.li
              key={f.title}
              variants={itemVariants}
              className="text-center"
            >
              {f.imgSrc ? (
                <div className="mx-auto mb-6 h-20 w-20">
                  <Image
                    src={f.imgSrc}
                    alt={f.imgAlt ?? ""}
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : f.icon ? (
                <f.icon
                  aria-hidden="true"
                  className={clsx("mx-auto mb-6 h-20 w-20", colorClass)}
                />
              ) : null}

              <h3 className={clsx("text-xl font-semibold", colorClass)}>
                {f.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {f.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
