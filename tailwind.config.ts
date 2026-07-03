import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    relative: true, // resolve globs relative to this config file, not cwd
    files: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./lib/**/*.{ts,tsx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        // Dark "code-native" palette
        base: "#0A0E14", // page background
        panel: "#0F1520", // cards / surfaces
        edge: "rgba(148, 163, 184, 0.14)", // hairline borders
        ink: "#E6EDF3", // primary text
        muted: "#8B98A9", // secondary text
        mint: "#34D399", // primary accent (emerald)
        cyan: "#22D3EE", // secondary accent
        amber: "#FBBF24", // terminal accent
        rose: "#FB7185", // terminal accent 2
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightish: "-0.02em",
        wider2: "0.18em",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 16px 40px -20px rgba(0,0,0,0.6)",
        glowmint: "0 0 0 1px rgba(52,211,153,0.25), 0 12px 44px -12px rgba(52,211,153,0.35)",
        lift: "0 24px 60px -24px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 55% at 70% 20%, rgba(34,211,238,0.13) 0%, rgba(34,211,238,0) 60%), radial-gradient(55% 50% at 20% 75%, rgba(52,211,153,0.12) 0%, rgba(52,211,153,0) 60%)",
        "grid-lines":
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "accent-line":
          "linear-gradient(90deg, rgba(52,211,153,0) 0%, rgba(52,211,153,0.8) 50%, rgba(34,211,238,0) 100%)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.5)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        "float-soft": "float-soft 7s ease-in-out infinite",
        "pulse-dot": "pulse-dot 3.5s ease-in-out infinite",
        "spin-slow": "spin-slow 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
