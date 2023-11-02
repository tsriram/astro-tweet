/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#f0ebd8",
          text: "#1b2836"
        },
        dark: {
          bg: "#243447",
          text: "#fff"
        }
      }
    }
  },
  plugins: []
};
