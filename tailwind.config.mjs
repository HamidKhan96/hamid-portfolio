/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0A0B",
          900: "#0F0F11",
          800: "#15151A",
          700: "#1C1C22",
          600: "#26262E",
          500: "#3A3A45",
          400: "#5C5C68",
          300: "#8A8A95",
          200: "#C7C7CD",
          100: "#E8E8EB",
          50: "#F5F5F4",
        },
        accent: {
          DEFAULT: "#7CFFB2",
          dim: "#5CE89A",
          soft: "rgba(124, 255, 178, 0.12)",
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        "fade-up": "fadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
