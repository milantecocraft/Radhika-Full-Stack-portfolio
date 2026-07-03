"use client";

import { motion } from "framer-motion";
import { skillGroups, domains } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="skills"
          title="The full stack, end to end."
          intro="Frontend architecture to backend APIs, databases to DevOps — one developer, the whole pipeline."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className={`card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-mint/30 ${
                gi === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
                <span className="font-mono text-xs text-mint/70">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-edge bg-base px-3 py-1.5 font-mono text-xs text-muted transition-colors duration-300 hover:border-cyan/40 hover:text-cyan"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Domains card */}
          <motion.div
            variants={fadeUp}
            className="card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-mint/30"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-ink">Domain Experience</h3>
              <span className="font-mono text-xs text-mint/70">
                {String(domains.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {domains.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-mint/20 bg-mint/5 px-3 py-1.5 font-mono text-xs text-mint/90"
                >
                  {d}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
