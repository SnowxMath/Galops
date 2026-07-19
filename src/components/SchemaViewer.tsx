"use client";

import { useState } from "react";
import { SCHEMA_COMPONENTS } from "@/content/schemas";

/** Affiche un schéma SVG légendé, avec un bouton « masquer les labels » (auto-test). */
export default function SchemaViewer({ id, legende }: { id: string; legende: string }) {
  const Comp = SCHEMA_COMPONENTS[id];
  const [show, setShow] = useState(true);
  if (!Comp) return null;

  return (
    <figure className="card my-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <figcaption className="text-sm font-semibold text-brand-700 dark:text-brand-200">
          {legende}
        </figcaption>
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          className="chip"
          aria-pressed={!show}
        >
          {show ? "🙈 Masquer les labels" : "👁️ Afficher les labels"}
        </button>
      </div>
      <Comp showLabels={show} />
      {!show && (
        <p className="mt-2 text-center text-xs text-brand-500 dark:text-brand-300">
          Retrouve chaque numéro… puis affiche les labels pour vérifier.
        </p>
      )}
    </figure>
  );
}
