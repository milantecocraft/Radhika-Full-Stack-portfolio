"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  value: string; // "7+", "10+", "9"
  duration?: number;
  delay?: number;
  className?: string;
};

const parse = (value: string) => {
  const match = value.match(/^(\D*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value, decimals: 0 };
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num), suffix, decimals };
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({ value, duration = 1.5, delay = 0.4, className }: Props) {
  const reduce = useReducedMotion();
  const { prefix, target, suffix, decimals } = parse(value);
  const fmt = (v: number) => `${prefix}${v.toFixed(decimals)}${suffix}`;
  const [display, setDisplay] = useState(reduce ? value : fmt(0));

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start - delay * 1000;
      if (elapsed <= 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(elapsed / (duration * 1000), 1);
      setDisplay(fmt(target * easeOutCubic(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, value]);

  return <span className={className}>{display}</span>;
}
