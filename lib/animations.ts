import type { Variants } from "framer-motion";

/** Shared easing for all motion. */
export const ease = [0.22, 1, 0.36, 1] as const;

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease } },
};

/** Per-word blur-rise reveal for the hero headline. */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "0.7em", filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};

export const viewportOnce = { once: true, amount: 0.25, margin: "0px 0px -10% 0px" };
