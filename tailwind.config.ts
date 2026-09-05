import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cloud: "#F2F5F2",
        storm: "#2844A5",
        sky: "#45C1E8",
        flare: "#FF7A34",
        shield: "#36B9A5",
        graphite: "#182334",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-bowlby)", "sans-serif"],
        body: ["var(--font-public)", "sans-serif"],
      },
      boxShadow: {
        hard: "9px 9px 0 #182334",
      },
    },
  },
  plugins: [],
};

export default config;
