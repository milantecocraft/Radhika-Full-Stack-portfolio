"use client";

import { motion } from "framer-motion";
import { ease, staggerContainer, viewportOnce } from "@/lib/animations";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  /** show the big ghost `<tag />` behind the heading (off in tight containers) */
  ghost?: boolean;
  className?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const titleReveal = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease } },
};

const ruleDraw = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease, delay: 0.25 } },
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  ghost = true,
  className = "",
}: Props) {
  const tag = eyebrow?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`relative flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      {/* Ghost dev-tag watermark, e.g. <selected-work /> */}
      {ghost && tag && (
        <motion.span
          aria-hidden
          variants={{
            hidden: { opacity: 0, x: 24 },
            show: { opacity: 1, x: 0, transition: { duration: 1, ease, delay: 0.1 } },
          }}
          className={`pointer-events-none absolute -top-9 select-none whitespace-nowrap font-mono text-5xl font-semibold text-ink/[0.045] sm:text-6xl lg:text-7xl ${
            align === "center" ? "left-1/2 -translate-x-1/2" : "right-0"
          } hidden md:block`}
        >
          &lt;{tag} /&gt;
        </motion.span>
      )}

      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          {eyebrow}
          {/* terminal caret */}
          <span aria-hidden className="ml-0.5 inline-block h-3 w-1.5 bg-mint/80 animate-blink" />
        </motion.span>
      )}

      <motion.h2
        variants={titleReveal}
        className="relative max-w-3xl font-display text-3xl font-semibold leading-[1.08] tracking-tightish text-ink sm:text-4xl md:text-5xl text-balance"
      >
        {title}
      </motion.h2>

      {/* Gradient rule draws in under the title */}
      <motion.span
        aria-hidden
        variants={ruleDraw}
        className={`h-px w-24 bg-gradient-to-r from-mint to-cyan ${
          align === "center" ? "origin-center" : "origin-left"
        }`}
      />

      {intro && (
        <motion.p
          variants={fadeUp}
          className={`max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
