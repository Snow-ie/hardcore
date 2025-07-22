"use client";
import { motion } from "framer-motion";
import { otherProjects, type OtherProject } from "../../data/projectData";

export default function OtherCompletedProjectsSection() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full bg-surface pb-24">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-primary">
        Other Completed Projects
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2"
      >
        {otherProjects.map((p: OtherProject) => (
          <motion.div
            key={p.id}
            variants={item}
            className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/80 to-primary/90 p-6 shadow-lg ring-1 ring-black/5 transition-all duration-300 ease-out hover:shadow-2xl"
          >
            <h3 className="text-lg font-semibold text-black">{p.title}</h3>
            <p className="mt-1 text-sm text-black">{p.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
