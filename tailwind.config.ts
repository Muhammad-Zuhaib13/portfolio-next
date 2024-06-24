import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lufgalight: ["var(--font-lufga-light)"],
        lufgamedium: ["var(--font-lufga-medium)"],
        lufgasemibold: ["var(--font-lufga-semi-bold)"],
        lufgabold: ["var(--font-lufga-bold)"],
      },
    },
  },
  plugins: [],
};
export default config;
