/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: {
          1: "#0F0F0F",
          2: "#141414",
          3: "#1A1A1A",
        },
        line: "rgba(255, 255, 255, 0.08)",
        line2: "rgba(255, 255, 255, 0.14)",
        ink: {
          50: "#FAFAF7",
          100: "#EFEFEC",
          200: "#C9C9C5",
          300: "#9A9A95",
          400: "#6E6E69",
          500: "#4A4A46",
          600: "#2E2E2C",
        },
        lime: {
          DEFAULT: "#B9FF66",
          dim: "#9DE83F",
          glow: "rgba(185, 255, 102, 0.16)",
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        container: "1240px",
        prose: "640px",
      },
      backgroundImage: {
        dots:
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        grid:
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "24px 24px",
        grid: "64px 64px",
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        ticker: "ticker 60s linear infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(0.85)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
