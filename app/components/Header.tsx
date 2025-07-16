"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  easeOut,
  Variants,
  TargetAndTransition,
} from "framer-motion";
import clsx from "clsx";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: easeOut },
  }),
};

const drawerVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", damping: 25, stiffness: 120 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring", damping: 25, stiffness: 120 },
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkBase =
    "rounded-full px-4 py-1.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70";

  return (
    <>
      <motion.span
        className={clsx(
          "fixed inset-x-0 top-0 z-[60] origin-top bg-accent",
          scrolled ? "h-1" : "h-0"
        )}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.header
        className="fixed inset-x-0 top-0 z-50 flex items-center bg-white/95 backdrop-blur-md shadow-sm ring-1 ring-gray-200 text-gray-800 transition-colors duration-300 px-4 md:px-8 py-3 md:py-5"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="container mx-auto flex flex-1 items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map(({ href, label }, i) => (
              <motion.a
                key={href}
                href={href}
                className={clsx(
                  linkBase,
                  "bg-black/5 text-gray-800 hover:bg-accent hover:text-white"
                )}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.a>
            ))}
          </nav>

          <motion.button
            ref={menuBtnRef}
            onClick={() => setOpen(true)}
            aria-label="Open mobile menu"
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-white text-gray-800"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
          >
            <motion.button
              onClick={() => {
                setOpen(false);
                menuBtnRef.current?.focus();
              }}
              className="self-end p-4"
              aria-label="Close menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={28} />
            </motion.button>

            <nav className="mt-6 flex flex-1 flex-col items-center justify-center gap-6 text-lg font-medium">
              {links.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="w-3/4 rounded-full bg-gray-100 py-4 text-center text-gray-700 hover:bg-accent hover:text-white transition"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
