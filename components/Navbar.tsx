"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/data";
import { ease } from "@/lib/animations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — the active section is the last one whose top has passed
  // 40% of the viewport. Scroll-driven: deterministic in every tab state.
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const compute = () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = `#${id}`;
        }
      }
      if (window.scrollY < 200) current = "";
      setActive(current);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto mt-3 flex w-[calc(100%-1.5rem)] max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border border-edge bg-base/80 shadow-card backdrop-blur-md"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="font-mono text-sm text-ink" aria-label={`${site.name} — home`}>
          <span className="text-mint">&lt;</span>
          {site.name.split(" ")[0].toLowerCase()}
          <span className="text-mint"> /&gt;</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  isActive ? "text-mint" : "text-muted hover:text-ink"
                }`}
              >
                {/* soft hover pill */}
                <span className="absolute inset-0 rounded-full bg-panel opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative">{item.label}</span>
                {/* sliding active indicator */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ duration: 0.45, ease }}
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-mint to-cyan"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary !px-5 !py-2.5">
            Hire me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-edge bg-panel/60 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-ink transition-all duration-300 ${
                open ? "bottom-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
            className="mx-3 mt-2 rounded-2xl border border-edge bg-base/95 p-4 shadow-lift backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-3 py-3 text-base transition-colors duration-300 hover:bg-panel ${
                      active === item.href ? "text-mint" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Hire me
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
