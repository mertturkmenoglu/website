/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#be185d",
        midnight: "#1a1a1a",
        accent: "#0ea5e9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
