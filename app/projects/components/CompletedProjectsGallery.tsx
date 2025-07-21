"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useSwipeable } from "react-swipeable";

export type ProjectCard = {
  id: string;
  title: string;
  description: string;
  img: string;
};

export type OtherProject = {
  id: string;
  title: string;
  description: string;
};

const imageProjects: ProjectCard[] = [
  {
    id: "cyber-crime-1",
    title: "Cyber Crime Lab",
    description: "State‑of‑the‑art digital forensics facility for NPF.",
    img: "/projects/cyber-crime-1.jpg",
  },
  {
    id: "cyber-crime-2",
    title: "Cyber Crime Lab",
    description: "State‑of‑the‑art digital forensics facility for NPF.",
    img: "/projects/cyber-crime-2.jpg",
  },
  {
    id: "cyber-crime-3",
    title: "Cyber Crime Lab",
    description: "State‑of‑the‑art digital forensics facility for NPF.",
    img: "/projects/cyber-crime-3.jpg",
  },
  // Fusion Center ×3
  {
    id: "fusion-center-1",
    title: "Fusion Center",
    description: "Integrated command & control hub for rapid response.",
    img: "/projects/fusion-center-1.jpg",
  },
  {
    id: "fusion-center-2",
    title: "Fusion Center",
    description: "Integrated command & control hub for rapid response.",
    img: "/projects/fusion-center-2.jpg",
  },
  {
    id: "fusion-center-3",
    title: "Fusion Center",
    description: "Integrated command & control hub for rapid response.",
    img: "/projects/fusion-center-3.jpg",
  },
  // Police Trainings ×3
  {
    id: "police-trainings-1",
    title: "Police Trainings",
    description: "Nation‑wide biometric & cybersecurity training modules.",
    img: "/projects/police-trainings-1.jpg",
  },
  {
    id: "police-trainings-2",
    title: "Police Trainings",
    description: "Nation‑wide biometric & cybersecurity training modules.",
    img: "/projects/police-trainings-2.jpg",
  },
  {
    id: "police-trainings-3",
    title: "Police Trainings",
    description: "Nation‑wide biometric & cybersecurity training modules.",
    img: "/projects/police-trainings-3.jpg",
  },
];

const otherProjects: OtherProject[] = [
  {
    id: "biometric-kits",
    title: "Supply of Biometric Kits – Lagos Airport",
    description: "Live‑capture kits deployed to streamline passenger ID.",
  },
  {
    id: "training-ammo",
    title: "Purchase of Training Ammunition – NPF",
    description: "Delivered non‑lethal rounds for tactical exercises.",
  },
  {
    id: "ballistic-helmets",
    title: "Supply of Ballistic Helmets & Vests – NPF",
    description: "Advanced Level IIIA protective gear for officers.",
  },
  {
    id: "security-systems",
    title: "Security Systems Installation – Ebonyi State",
    description: "CCTV & access‑control grid for government facilities.",
  },
];

export default function CompletedProjectsGallery() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  /* --- swipe-to-scroll helpers ------------------------------------- */
  const scrollBy = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    // scroll roughly one card + gap (tweak if you change w-80 mx-2 etc.)
    const cardWidth = 320 + 16 * 2; // 80 * 4 = 320px + 2rem (mx-4) on lg
    el.scrollBy({
      left: dir === "left" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => scrollBy("left"),
    onSwipedRight: () => scrollBy("right"),
    trackMouse: true,
    delta: 20, // minimum px movement before it triggers
  });

  return (
    <section className="w-full bg-surface py-20">
      <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-accent md:text-5xl">
        Completed Projects
      </h2>

      {/* ribbon now listens for swipe gestures */}
      <div
        {...handlers}
        ref={trackRef}
        className="scrollbar-none flex overflow-x-auto px-6 [scroll-snap-type:x_mandatory] lg:px-10"
      >
        {imageProjects.map((p) => (
          <SnapCard key={p.id} project={p} trackRef={trackRef} />
        ))}
      </div>
    </section>
  );
}

function SnapCard({
  project,
  trackRef,
}: {
  project: ProjectCard;
  trackRef: React.RefObject<HTMLDivElement | null>;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const dist: MotionValue<number> = useMotionValue(0);
  const scale = useTransform(dist, [0, 300], [1.1, 0.93]);

  useEffect(() => {
    const update = () => {
      if (!cardRef.current || !trackRef.current) return;
      const c = cardRef.current.getBoundingClientRect();
      const t = trackRef.current.getBoundingClientRect();
      dist.set(Math.abs(t.left + t.width / 2 - (c.left + c.width / 2)));
    };
    update();
    const el = trackRef.current;
    el?.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [trackRef, dist]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale }}
      className="relative mx-2 h-72 w-80 flex-shrink-0 snap-center overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/10 transition-transform duration-300 ease-out hover:ring-black/20 dark:bg-gray-900 dark:ring-white/10 lg:mx-4 lg:h-[19rem] lg:w-[22rem]"
    >
      <Image
        src={project.img}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
        className="object-cover object-center transition-opacity duration-300 ease-out group-hover:opacity-90"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 bg-black/60 backdrop-blur-sm p-4 text-white">
        <h3 className="text-base font-semibold leading-tight">
          {project.title}
        </h3>
        <p className="mt-0.5 text-xs opacity-90">{project.description}</p>
      </div>
    </motion.div>
  );
}

export function OtherCompletedProjectsSection() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full bg-surface pb-20">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-accent md:text-4xl">
        Other Completed Projects
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2"
      >
        {otherProjects.map((p) => (
          <motion.div
            key={p.id}
            variants={item}
            className="overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-accent/80 to-accent/90 p-6 shadow-lg ring-1 ring-black/5 transition-all duration-300 ease-out hover:shadow-2xl"
          >
            <h3 className="text-lg font-semibold text-black leading-tight">
              {p.title}
            </h3>
            <p className="mt-1 text-sm text-black">{p.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
