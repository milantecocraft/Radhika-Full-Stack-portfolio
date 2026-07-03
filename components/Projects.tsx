"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";
import { ExternalIcon } from "./ui/Icons";

export default function Projects() {
  return (
    <section id="work" className="relative overflow-hidden py-24 sm:py-32">
      {/* Ambient backdrop — soft dual glow + hairline separators */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 border-y border-edge bg-panel/30" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-mint/[0.07] blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan/[0.07] blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      <div className="container-px">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="selected work"
            title={
              <>
                Real products. <span className="text-accent">Live in production.</span>
              </>
            }
            intro="Six client projects I've engineered — every one of them live on the web right now."
          />
          <p className="shrink-0 font-mono text-xs text-muted md:text-right">
            <span className="text-mint">{projects.length}</span> projects · all live
          </p>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {projects.map((p, i) => (
            <motion.div key={p.slug} variants={fadeUp} className="group h-full">
              {/* Gradient ring — quiet by default, lights up on hover */}
              <div className="h-full rounded-[1.35rem] bg-gradient-to-br from-edge via-edge to-edge p-px transition-all duration-500 group-hover:from-mint/50 group-hover:via-edge group-hover:to-cyan/40 group-hover:shadow-glowmint">
                <article className="flex h-full flex-col overflow-hidden rounded-[calc(1.35rem-1px)] bg-panel transition-transform duration-500 group-hover:-translate-y-1">
                  {/* Cover */}
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.name} live site`}
                    className="relative block aspect-[16/10] overflow-hidden border-b border-edge focus:outline-none focus-visible:ring-2 focus-visible:ring-mint/60"
                  >
                    <Image
                      src={p.cover}
                      alt={`${p.name} — live site`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base/65 via-transparent to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-25" />
                    {/* index */}
                    <span className="absolute left-4 top-4 rounded-full bg-base/85 px-2.5 py-1 font-mono text-[0.65rem] text-muted backdrop-blur">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* live badge */}
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-mint/25 bg-base/85 px-3 py-1 font-mono text-[0.65rem] text-mint backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
                      live
                    </span>
                    {/* domain chip */}
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-base/85 px-3.5 py-1.5 font-mono text-xs text-mint backdrop-blur transition-all duration-500 group-hover:bg-mint group-hover:text-base">
                      {p.liveUrl.replace(/^https?:\/\/(www\.)?|\/$/g, "")}
                      <ExternalIcon className="h-3.5 w-3.5" />
                    </span>
                  </a>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider2 text-cyan/90">
                      {p.category}
                    </span>
                    <h3 className="mt-2.5 font-display text-2xl font-semibold text-ink">
                      {p.name}
                    </h3>
                    <p className="clamp-3 mt-3 text-sm leading-relaxed text-ink/70">
                      {p.overview}
                    </p>

                    <div className="mb-6 mt-5 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-edge bg-base/70 px-2.5 py-1 font-mono text-[0.68rem] text-cyan/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-edge pt-5">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-mint"
                      >
                        Visit live site
                        <ExternalIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider2 text-muted">
                        {p.role}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
