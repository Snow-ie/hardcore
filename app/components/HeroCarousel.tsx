"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Biometric Passport & ID Cards",
    subtitle: "Identification",
    image: "/images/biometric-hologram.jpg",
  },
  {
    id: 2,
    title: "Birth, Marriage & Certificates",
    subtitle: "Civil Acts",
    image: "/images/mariage-certificate.jpg",
  },
  {
    id: 3,
    title: "Identity Management",
    subtitle: "Authentication",
    image: "/images/identity-management1.jpg",
  },
  {
    id: 4,
    title: "Biometrics in Law Enforcement",
    subtitle: "Police",
    image: "/images/biometric-law-enforce-greenish.jpg",
  },
  {
    id: 5,
    title: "Enterprise IT Infrastructure",
    subtitle: "Data & Network",
    image: "/images/it-infrastructures.jpg",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function HeroCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prev]) => {
      const next = (prev + dir + slides.length) % slides.length;
      return [next, dir];
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    trackMouse: true,
  });

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full h-[80vh] overflow-hidden"
      {...swipeHandlers}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slides[index].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--bg-dark)]/60 flex flex-col items-start justify-end p-10 text-[var(--text-light)] space-y-4">
            <p className="text-sm tracking-widest uppercase text-[var(--accent)]">
              {slides[index].subtitle}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold">
              {slides[index].title}
            </h1>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrow Controls */}
      <button
        onClick={() => paginate(-1)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)]/20 text-[var(--text-light)] hover:bg-[var(--accent)]/40 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => paginate(1)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)]/20 text-[var(--text-light)] hover:bg-[var(--accent)]/40 transition"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={clsx(
              "h-2 rounded-full transition-all",
              i === index
                ? "bg-[var(--accent)] w-4"
                : "bg-[var(--text-light)]/40 w-2"
            )}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
