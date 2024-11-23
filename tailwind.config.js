/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: "#1fb6ff",
      orange: "#ff7849",
      yellow: "#ffc82c",
      white: "#ffffff",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "slate-100": "#f1f5f9",
      "slate-200": "#e2e8f0",
      "slate-300": "#cbd5e1",
      "slate-400": "#94a3b8",
      "slate-500": "#64748b",
      brandOrange: "#F58A07",
      titleColor: "#0D1317",
      subTitleColor: "#585858",
      "brand-dark": "#010a24e6",
    },
  },
  plugins: [],
};
