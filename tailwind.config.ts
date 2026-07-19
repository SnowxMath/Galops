import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette "équestre" : brun cuir, vert prairie, sable
        brand: {
          50: "#f6f4ef",
          100: "#e9e2d5",
          200: "#d6c7ae",
          300: "#c0a882",
          400: "#ac8d60",
          500: "#8f6f45",
          600: "#725636",
          700: "#5b442c",
          800: "#4a3826",
          900: "#3f3022",
        },
        prairie: {
          400: "#5aa469",
          500: "#3f8a52",
          600: "#2f6d40",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
