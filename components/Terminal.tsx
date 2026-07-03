"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { terminalLines } from "@/lib/data";

type Step = { text: string; isCmd: boolean; prompt?: string };

/**
 * Terminal window that "types" a dev profile. Commands type character by
 * character; output lines print instantly — like a real shell session.
 */
export default function Terminal() {
  const reduce = useReducedMotion();

  const steps = useMemo<Step[]>(
    () =>
      terminalLines.map((l) =>
        "cmd" in l && l.cmd !== undefined
          ? { text: l.cmd, isCmd: true, prompt: l.prompt }
          : { text: (l as { out: string }).out, isCmd: false }
      ),
    []
  );

  const [lineIdx, setLineIdx] = useState(reduce ? steps.length : 0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (reduce || lineIdx >= steps.length) return;
    const step = steps[lineIdx];
    if (step.isCmd && charIdx < step.text.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 45 + Math.random() * 45);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => {
        setLineIdx((i) => i + 1);
        setCharIdx(0);
      },
      step.isCmd ? 350 : 140
    );
    return () => clearTimeout(t);
  }, [reduce, lineIdx, charIdx, steps]);

  const done = lineIdx >= steps.length;

  return (
    <div className="card overflow-hidden font-mono text-[0.8rem] leading-relaxed shadow-lift sm:text-sm">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-edge bg-base/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose/80" />
        <span className="h-3 w-3 rounded-full bg-amber/80" />
        <span className="h-3 w-3 rounded-full bg-mint/80" />
        <span className="ml-3 text-xs text-muted">radhika@dev — zsh</span>
      </div>

      <div className="min-h-[15rem] space-y-1.5 p-5" aria-label="Terminal introduction">
        {steps.slice(0, Math.min(lineIdx + 1, steps.length)).map((s, i) => {
          const isCurrent = i === lineIdx && !done;
          const text = s.isCmd && isCurrent ? s.text.slice(0, charIdx) : s.text;
          if (i > lineIdx) return null;
          return (
            <p key={i} className={s.isCmd ? "text-ink" : "text-muted"}>
              {s.isCmd && <span className="mr-2 text-mint">{s.prompt}</span>}
              {!s.isCmd && text.includes(":") ? (
                <span className="text-cyan/90">{text}</span>
              ) : (
                text
              )}
              {isCurrent && s.isCmd && (
                <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-mint animate-blink" />
              )}
            </p>
          );
        })}
        {done && (
          <p className="text-ink">
            <span className="mr-2 text-mint">~ $</span>
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-mint animate-blink" />
          </p>
        )}
      </div>
    </div>
  );
}
