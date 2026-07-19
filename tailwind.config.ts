import type { Config } from "tailwindcss";

const config: Config = {
  // Thème sombre piloté par la classe `dark` sur <html> (toggle manuel + préférence système).
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette FFE-ish : vert « écurie » + accents chauds. Ajustable au polish.
        galop: {
          50: "#f0f7f2",
          100: "#dcecdf",
          200: "#bcdac3",
          300: "#8fbf9c",
          400: "#5c9d70",
          500: "#3a7f52",
          600: "#2c6540",
          700: "#245034",
          800: "#1f402b",
          900: "#1a3524",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
