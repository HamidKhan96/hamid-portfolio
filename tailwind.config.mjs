/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Paper (default light) palette
        paper: {
          DEFAULT: "#F6F2E9",   // page background — warm cream
          deep: "#EFE8D8",      // recessed cards / sections that need slight contrast
          rule: "rgba(20, 18, 14, 0.10)",
          rule2: "rgba(20, 18, 14, 0.18)",
        },
        // Dark stays for breakout sections (LiveFeed, PipelineMock, CaseStudies)
        bg: "#0A0A0A",
        surface: {
          1: "#0F0F0F",
          2: "#141414",
          3: "#1A1A1A",
        },
        line: "rgba(255, 255, 255, 0.08)",
        line2: "rgba(255, 255, 255, 0.14)",
        // Ink reads on paper (warm near-black)
        ink: {
          50: "#FAFAF7",   // pure light, on dark
          100: "#EFEFEC",  // light text on dark
          200: "#C9C9C5",
          300: "#9A9A95",
          400: "#6E6E69",
          500: "#4A4A46",
          600: "#2E2E2C",
        },
        // Pen reads on paper (warm dark)
        pen: {
          900: "#16140F",  // primary text on paper
          800: "#2A271F",
          700: "#3F3B30",
          500: "#6B6557",
          400: "#8C8678",
          300: "#A8A294",
        },
        lime: {
          DEFAULT: "#B9FF66",
          dim: "#9DE83F",
          deep: "#86C72E",
          glow: "rgba(185, 255, 102, 0.16)",
        },
        sand: {
          DEFAULT: "#E5DCC4",
          deep: "#D6C9A6",
        },
        sage: "#C7D7B5",
        peach: "#F4D9B8",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        // Display sizes are tuned to wrap to 2-3 lines on real content at the
        // viewports we care about (1280, 1440, 1920). Pushing larger caused
        // the hero headline to wrap to 5-6 lines at >=1440 and dominate the
        // section vertically. Caps lowered accordingly.
        "display-2xl": ["clamp(3.75rem, 10vw, 8rem)", { lineHeight: "0.94", letterSpacing: "-0.045em" }],
        "display-xl": ["clamp(3rem, 7.2vw, 6.25rem)", { lineHeight: "0.96", letterSpacing: "-0.038em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.032em" }],
        "display-md": ["clamp(1.875rem, 3.5vw, 2.875rem)", { lineHeight: "1.08", letterSpacing: "-0.028em" }],
      },
      letterSpacing: {
        tightest: "-0.045em",
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
        "dots-paper":
          "radial-gradient(rgba(20,18,14,0.06) 1px, transparent 1px)",
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
