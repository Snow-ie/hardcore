"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  Variants,
  useReducedMotion,
} from "framer-motion";
import clsx from "clsx";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const desktopNavVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const desktopNavItem: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const drawerVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", damping: 25, stiffness: 240 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring", damping: 25, stiffness: 240 },
  },
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
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

  useEffect(() => {
    const { style } = document.body;
    const prev = style.overflow;
    style.overflow = open ? "hidden" : prev || "";
    return () => void (style.overflow = prev);
  }, [open]);

  const focusRing =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70";

  const desktopLinkClasses = (active: boolean) =>
    clsx(
      "relative px-0.5 py-0.5 transition-colors duration-200",
      focusRing,
      active
        ? "text-primary after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:bg-primary"
        : "text-gray-800 hover:text-primary after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-200"
    );

  const mobileLinkClasses = (active: boolean) =>
    clsx(
      "w-3/4 py-4 text-center transition-colors duration-200",
      focusRing,
      active ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
    );

  const headerPad = scrolled
    ? "py-2 lg:py-3 shadow-sm ring-1 ring-gray-200"
    : "py-3 lg:py-5";

  return (
    <>
      <motion.span
        className={clsx(
          "fixed left-0 right-0 top-0 z-50 origin-top bg-primary",
          scrolled ? "h-1" : "h-0"
        )}
        initial={false}
        animate={{ scaleY: scrolled ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />

      <motion.header
        style={
          { "--header-h": scrolled ? "3.25rem" : "5rem" } as React.CSSProperties
        }
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 flex items-center bg-white/95 backdrop-blur-md text-gray-800 transition-colors duration-300",
          headerPad
        )}
        initial={shouldReduceMotion ? false : { y: -80 }}
        animate={shouldReduceMotion ? {} : { y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="container mx-auto flex flex-1 items-center justify-between">
          <Logo />

          <motion.ul
            className="hidden items-center gap-6 text-sm font-medium lg:flex"
            variants={desktopNavVariants}
            initial="hidden"
            animate="visible"
          >
            {links.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <motion.li key={href} variants={desktopNavItem}>
                  <Link
                    href={href}
                    className={desktopLinkClasses(active)}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.button
            ref={menuBtnRef}
            onClick={() => setOpen(true)}
            aria-label="Open mobile menu"
            className="lg:hidden"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-white text-gray-800"
            role="dialog"
            aria-modal="true"
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
              whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
            >
              <X size={28} />
            </motion.button>

            <nav
              className="mt-2 flex flex-1 flex-col items-center justify-center gap-6 text-lg font-medium"
              role="menu"
            >
              {links.map(({ href, label }) => {
                const active = isActive(pathname, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={mobileLinkClasses(active)}
                    aria-current={active ? "page" : undefined}
                    role="menuitem"
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
