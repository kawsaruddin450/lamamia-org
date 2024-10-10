/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'apps-bg': "url('/apps.jpg')",
        'websites-bg': "url('/websites.jpg')",
        'illustrations-bg': "url('/illustration.png')",
      }
    },
  },
  plugins: [],
};
