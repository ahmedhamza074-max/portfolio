import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        bg: "#0d0f14",
        surface: "#13161d",
        card: "#181b23",
        border: "#232734",
        accent: "#3b82f6",
        "accent-hover": "#2563eb",
        muted: "#6b7280",
        subtle: "#374151",
        text: "#e5e7eb",
        "text-dim": "#9ca3af",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
        fadeIn: "fadeIn 0.5s ease forwards",
        blink: "blink 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
