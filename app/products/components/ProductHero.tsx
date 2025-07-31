"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

export interface ProductHeroProps {
  title: string;
  subtitle?: string;
  bgSrc?: string;
  align?: "left" | "center";
  minHeightClass?: string;

  ctaLabel?: string;
  ctaHref?: string;
}

export function ProductHero({
  title,
  subtitle,
  bgSrc = "/images/nigeria-passport.jpg",
  align = "center",
  minHeightClass = "min-h-[60vh] md:min-h-[70vh]",
  ctaLabel,
  ctaHref = "/contact",
}: ProductHeroProps) {
  const contentAlign =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section
      className={clsx(
        "relative isolate flex w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat",
        minHeightClass
      )}
      style={{ backgroundImage: `url(${bgSrc})` }}
      aria-label={title}
    >
      {/* Dark tint */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[rgba(4,27,20,0.80)] mix-blend-multiply"
      />
      {/* Top fade */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(4,27,20,0.90)] via-[rgba(6,48,31,0.40)] to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          "relative z-10 mx-auto max-w-xl px-4 py-20",
          contentAlign
        )}
      >
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base text-white/80 md:text-lg">{subtitle}</p>
        )}

        {ctaLabel && (
          <Link
            href={ctaHref}
            className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-black hover:bg-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            {ctaLabel}
          </Link>
        )}
      </motion.div>
    </section>
  );
}
