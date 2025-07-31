"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Service } from "../../data/services";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex flex-col rounded-2xl bg-surface/60 p-6 shadow-lg backdrop-blur-sm transition"
    >
      <Image
        src={service.image}
        alt={service.title}
        width={600}
        height={350}
        className="mb-4 h-40 w-full rounded-xl object-cover"
      />

      <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">
        {service.excerpt}
      </p>

      <Link
        href={`/services/${service.slug}`}
        className="mt-4 inline-flex items-center self-start rounded-full border border-primary px-4 py-1 text-sm font-medium text-black transition-colors hover:bg-primary hover:text-surface"
      >
        Read more →
      </Link>
    </motion.div>
  );
}
