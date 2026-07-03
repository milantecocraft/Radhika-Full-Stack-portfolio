"use client";

import { motion, useReducedMotion } from "framer-motion";
import { marqueeTech } from "@/lib/data";

export default function TechMarquee() {
  const reduce = useReducedMotion();
  const row = [...marqueeTech, ...marqueeTech];

  return (
    <section aria-label="Technology stack" className="border-y border-edge bg-panel/40 py-6">
      <div
        className="group relative flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <motion.div
          className="flex shrink-0 items-center gap-10 pr-10"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          style={{ willChange: "transform" }}
        >
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap font-mono text-sm text-muted transition-colors duration-300 hover:text-mint"
            >
              <span className="mr-2 text-mint/50">▹</span>
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
