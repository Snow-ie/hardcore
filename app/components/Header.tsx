"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

import clsx from "clsx";
import {
  motion,
  AnimatePresence,
  easeOut,
  Variants,
  TargetAndTransition,
} from "framer-motion";
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
        className={clsx(
          "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between bg-surface/70 px-4 backdrop-blur-md shadow-sm md:h-16 md:px-8",
          scrolled && "ring-1 ring-white/10"
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="container mx-auto flex h-14 md:h-16 items-center justify-between px-4 md:px-8">
          <Logo />

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map(({ href, label }, i) => (
              <motion.a
                key={href}
                href={href}
                className="rounded-full bg-white/5 px-4 py-1.5 text-gray-300 hover:bg-accent hover:text-surface transition"
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
            className="md:hidden"
            aria-label="Open mobile menu"
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
            className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-gray-900 text-[var(--foreground)] dark:text-[var(--text-dark)]"
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
                  className="w-3/4 rounded-full bg-gray-100 py-4 text-center text-gray-700 hover:bg-accent hover:text-white transition dark:bg-white/10 dark:text-gray-200 dark:hover:bg-accent"
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
