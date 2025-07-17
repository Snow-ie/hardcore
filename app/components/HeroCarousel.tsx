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
  // {
  //   id: 2,
  //   title: "Birth, Marriage & Certificates",
  //   subtitle: "Civil Acts",
  //   image: "/images/mariage-certificate.jpg",
  // },
  {
    id: 2,
    title: "Identity Management",
    subtitle: "Authentication",
    image: "/images/identity-management1.jpg",
  },
  {
    id: 3,
    title: "Biometrics in Law Enforcement",
    subtitle: "Police",
    image: "/images/biometric-law-enforce-greenish.jpg",
  },
  {
    id: 4,
    title: "Enterprise IT Infrastructure",
    subtitle: "Data & Network",
    image: "/images/it-infrastructures.jpg",
  },
];

const variants = {
  enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
};

export default function HeroCarousel() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (d: number) => {
    setIndex(([prev]) => [(prev + d + slides.length) % slides.length, d]);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    trackMouse: true,
  });

  useEffect(() => {
    const t = setInterval(() => paginate(1), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="relative w-full h-[80vh] md:h-screen overflow-hidden"
      {...swipeHandlers}
    >
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={slides[index].id}
          custom={dir}
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
            priority
            sizes="(min-width: 1024px) 100vw, 100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/80" />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 pb-32 md:p-12 md:pb-16 space-y-3 text-white drop-shadow-md">
            <p className="text-xs md:text-sm tracking-widest uppercase text-white">
              {slides[index].subtitle}
            </p>
            <h1 className="text-2xl md:text-5xl font-bold max-w-xl leading-tight">
              {slides[index].title}
            </h1>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => paginate(-1)}
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => paginate(1)}
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            aria-label={`Go to slide ${i + 1}`}
            className={clsx(
              "h-2 rounded-full transition-all",
              i === index ? "bg-primary w-6" : "bg-white/40 w-2"
            )}
          />
        ))}
      </div>
    </div>
  );
}
