/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mnit: {
          blue: "#161982", // NCC navy blue
          navy: "#0c0e45", // Deeper navy for gradients / dark blocks
          red: "#C41E3A", // Cardinal red
          gold: "#FFD700", // Gold
          sky: "#2563EB", // Sky / royal blue accent (NCC flag blue)
          tint: "#eef1f8", // Soft slate-sky page background
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
