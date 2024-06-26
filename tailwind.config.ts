import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-jetbrains)"],
      },
    },
  },
  plugins: [],
};

export default config;
