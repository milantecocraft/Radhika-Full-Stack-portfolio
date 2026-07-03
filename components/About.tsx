"use client";

import { motion } from "framer-motion";
import { about, site } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-50" />
      <div className="container-px grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="about" title={about.heading} />
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 flex flex-col gap-5"
          >
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-4 lg:col-span-5 lg:mt-16"
        >
          {/* Education */}
          <motion.div variants={fadeUp} className="card p-6">
            <p className="eyebrow mb-3">education</p>
            <h3 className="font-display text-xl font-semibold text-ink">
              {about.education.degree}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {about.education.school} · {about.education.year}
            </p>
            <p className="mt-2 inline-block rounded-full border border-mint/25 bg-mint/5 px-3 py-1 font-mono text-xs text-mint">
              {about.education.gpa}
            </p>
          </motion.div>

          {/* Soft skills */}
          <motion.div variants={fadeUp} className="card p-6">
            <p className="eyebrow mb-3">beyond the code</p>
            <ul className="space-y-2.5">
              {about.softSkills.map((s) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/70" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div variants={fadeUp} className="card flex items-center justify-between p-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider2 text-muted">Based in</p>
              <p className="mt-1 text-sm font-medium text-ink">{site.location}</p>
            </div>
            <span className="relative flex h-3 w-3">
              <span className="absolute h-3 w-3 rounded-full bg-mint/30 animate-ping" />
              <span className="h-3 w-3 rounded-full bg-mint" />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
