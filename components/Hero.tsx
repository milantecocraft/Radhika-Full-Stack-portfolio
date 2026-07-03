"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { site, heroStats } from "@/lib/data";
import { ease, fadeUp, scaleIn, staggerContainer, wordReveal } from "@/lib/animations";
import Terminal from "./Terminal";
import CountUp from "./ui/CountUp";
import { ArrowIcon } from "./ui/Icons";

const headline = ["Building products", "that scale, ship,", "and perform."];

export default function Hero() {
  const reduce = useReducedMotion();

  // Subtle cursor parallax on the terminal.
  const mx = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sxNeg = useTransform(sx, (v) => -v);
  const onMouseMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 22);
  };

  return (
    <section
      id="top"
      onMouseMove={onMouseMove}
      className="relative min-h-[100svh] overflow-hidden pb-16 pt-28 sm:pt-32 lg:flex lg:items-center"
    >
      {/* backdrop: glow + blueprint grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />

      <div className="container-px grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <motion.div
          variants={staggerContainer(0.13, 0.1)}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3">
            {site.availability && (
              <span className="inline-flex items-center gap-2 rounded-full border border-edge bg-panel/70 px-3 py-1.5 font-mono text-xs text-ink backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                </span>
                {site.availabilityNote}
              </span>
            )}
            <span className="eyebrow">{site.role}</span>
          </motion.div>

          <motion.h1
            variants={staggerContainer(0.06)}
            className="font-display text-[2.6rem] font-semibold leading-[1.06] tracking-tightish text-ink sm:text-6xl lg:text-[3.6rem] xl:text-[4.1rem]"
          >
            {headline.map((line, li) => (
              <span key={li} className="block">
                {line.split(" ").map((word, wi) => (
                  <motion.span
                    key={wi}
                    variants={wordReveal}
                    className={`mr-[0.24em] inline-block ${li === 2 ? "text-accent" : ""}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-balance"
          >
            I&apos;m {site.name.split(" ")[0]} — a {site.role.toLowerCase()} with 7+ years
            shipping React, Next.js, and Node applications for clients across travel,
            AI SaaS, real estate, and fashion.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary group">
              View my work
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-edge pt-7"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 font-mono text-xs uppercase tracking-wider2 text-muted">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-3xl font-semibold text-ink">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Terminal */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          style={{ x: sxNeg }}
          className="relative lg:col-span-5"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-mint/10 blur-3xl"
          />
          <div className="animate-float-soft motion-reduce:animate-none">
            <Terminal />
          </div>
          {/* floating badges */}
          <span className="absolute -left-4 -top-4 rounded-full border border-edge bg-panel px-3 py-1.5 font-mono text-xs text-cyan shadow-card animate-float-soft motion-reduce:animate-none">
            react + next.js
          </span>
          <span
            className="absolute -bottom-4 right-6 rounded-full border border-edge bg-panel px-3 py-1.5 font-mono text-xs text-mint shadow-card animate-float-soft motion-reduce:animate-none"
            style={{ animationDelay: "1.6s" }}
          >
            node.js · graphql
          </span>
        </motion.div>

        {/* Scroll cue — in normal flow (spans the grid) so it never overlaps content */}
        <motion.a
          href="#work"
          aria-label="Scroll to work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8, ease }}
          className="mx-auto mt-4 hidden w-fit flex-col items-center gap-2 text-muted lg:col-span-12 xl:flex"
        >
          <span className="font-mono text-[0.65rem] uppercase tracking-wider2">scroll</span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-edge p-1">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-mint"
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
