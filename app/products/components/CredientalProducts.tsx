"use client";

import Image from "next/image";
import clsx from "clsx";
import {
  CREDENTIAL_PRODUCTS,
  type CredentialProduct,
} from "../../data/credentialProducts";
import { motion, Variants } from "framer-motion";

type Props = {
  products?: CredentialProduct[];
  className?: string;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 220,
      duration: 0.5,
    },
  },
};

const hoverImage = { scale: 1.03 };

export function CredentialProducts({
  products = CREDENTIAL_PRODUCTS,
  className,
}: Props) {
  return (
    <section className={clsx("bg-[var(--bg-light,#f2ffe9)] py-20", className)}>
      <div className="container mx-auto">
        <motion.ul
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {products.map((p) => (
            <motion.li
              key={p.title}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              whileFocus={{ y: -4, scale: 1.02 }}
              className="group flex cursor-pointer flex-col rounded-xl border border-slate-200 bg-white text-left shadow-sm outline-none transition-all duration-300 ease-in-out hover:!scale-100 hover:-translate-y-2 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <motion.div
                className="relative mt-6 aspect-[5/3] w-full overflow-hidden rounded-md bg-foreground/10"
                whileHover={hoverImage}
                whileFocus={hoverImage}
              >
                {typeof p.img === "string" ? (
                  <Image
                    src={p.img}
                    alt={p.imgAlt ?? ""}
                    fill
                    sizes="(min-width:1024px) 320px, (min-width:640px) 45vw, 90vw"
                    className="object-contain transition-transform duration-300"
                  />
                ) : (
                  <Image
                    src={p.img}
                    alt={p.imgAlt ?? ""}
                    fill
                    sizes="(min-width:1024px) 320px, (min-width:640px) 45vw, 90vw"
                    className="object-contain transition-transform duration-300"
                  />
                )}
              </motion.div>
              <div className="flex flex-grow flex-col p-6">
                {" "}
                <h3 className="text-2xl font-semibold md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-6 text-base text-foreground/80">{p.summary}</p>
                {p.bullets?.length ? (
                  <ul className="mt-3 ml-5 list-disc text-sm leading-relaxed text-foreground/80">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
