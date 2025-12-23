import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",

        muted: "rgb(var(--muted))",
        "muted-foreground": "rgb(var(--muted-foreground))",

        border: "rgb(var(--border))",

        accent: "rgb(var(--accent))",
        "accent-soft": "rgb(var(--accent-soft))",

        link: "rgb(var(--link))",
        "link-hover": "rgb(var(--link-hover))",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
