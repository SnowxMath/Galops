"use client";

import { useEffect, useState } from "react";

/** Bascule thème clair / sombre (persisté). Le thème initial est posé par un
 *  script inline dans le <head> pour éviter tout flash. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("galops.theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-full border border-brand-300 bg-white p-2 text-lg shadow-sm dark:border-brand-600 dark:bg-brand-800"
      aria-label={dark ? "Passer en thème clair" : "Passer en thème sombre"}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
