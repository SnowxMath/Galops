import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Neutres (fond, texte, bordures) — gris légèrement teintés de vert,
        // pour un rendu clair et moderne plutôt que « marron ».
        brand: {
          50: "#f5f8f6",
          100: "#e9f0ec",
          200: "#d7e3dc",
          300: "#b6c8bf",
          400: "#8aa298",
          500: "#647a70",
          600: "#4b5d55",
          700: "#384741",
          800: "#212b27",
          900: "#141a17",
        },
        // Accent principal : vert vif (émeraude).
        prairie: {
          50: "#e9fbf1",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        // Accent chaleureux : ambre (XP, séries, badges).
        accent: {
          50: "#fffbeb",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        // Accent secondaire ludique : bleu ciel (variété visuelle).
        sky2: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(16,24,20,0.06), 0 1px 3px rgba(16,24,20,0.05)",
        card: "0 4px 16px rgba(16,24,20,0.07)",
        pop: "0 8px 24px rgba(16,185,129,0.20)",
      },
    },
  },
  plugins: [],
};

export default config;
