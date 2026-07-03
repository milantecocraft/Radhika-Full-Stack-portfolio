"use client";

import { motion } from "framer-motion";
import { experience, engagements } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="container-px">
        <SectionHeading
          eyebrow="experience"
          title="A decade in the making."
          intro="From converting legacy apps at Tecocraft to leading full product builds for global clients."
        />

        <motion.ol
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14 space-y-10 border-l border-edge pl-8 sm:pl-10"
        >
          {experience.map((job) => (
            <motion.li key={job.period} variants={fadeUp} className="relative">
              <span className="absolute -left-[2.35rem] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[2.85rem]">
                <span className="absolute h-4 w-4 rounded-full bg-mint/20" />
                <span className="h-2 w-2 rounded-full bg-mint" />
              </span>
              <p className="font-mono text-xs uppercase tracking-wider2 text-mint">
                {job.period}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-muted">{job.company}</p>
              <ul className="mt-4 max-w-2xl space-y-2">
                {job.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/70" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>

        {/* Notable engagements */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-6">
            notable engagements
          </motion.p>
          <div className="grid gap-4 md:grid-cols-3">
            {engagements.map((e) => (
              <motion.div
                key={e.name}
                variants={fadeUp}
                className="card group p-6 transition-all duration-500 hover:-translate-y-1 hover:border-mint/30"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-xl font-semibold text-ink">{e.name}</h4>
                  <span className="rounded-full border border-edge px-2.5 py-1 font-mono text-[0.65rem] text-cyan">
                    {e.tag}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted">{e.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{e.blurb}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
