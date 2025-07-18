// tailwind.config.mjs
// @ts-check

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "3rem",
        lg: "5rem",
        "large-desktop": "0",
      },
    },
    extend: {
      colors: {
        primary: "#6dc032",
        secondary: "#FFA737",
        dark: "#2D2D2A",
        plain: "#F1F3F9",
        line: "#00C48C",
      },
      boxShadow: {
        "bookmark-btn": "0px 4px 8px 0px rgba(39, 124, 165, 0.25)",
        card: "0px 4px 8px 0px rgba(17, 53, 71, 0.25)",
        nav: "0px 1px 9px 0px rgba(61, 22, 1, 0.25)",
      },
      screens: {
        "large-desktop": "1720px",
      },
      animation: { "scale-in": "scaleIn 0.5s ease backwards" },
      keyframes: {
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.5)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
