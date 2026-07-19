"use client";

import { useState } from "react";

/**
 * Carte mémo : liste d'éléments à retenir (ex. parties du cheval).
 * Mode « Se tester » : les noms sont masqués ; on appuie sur chaque case
 * pour la révéler et vérifier qu'on l'avait en tête.
 */
export default function MemoList({ titre, items }: { titre: string; items: string[] }) {
  const [testing, setTesting] = useState(false);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  function toggleTest() {
    setTesting((t) => !t);
    setRevealed(new Set());
  }

  function reveal(i: number) {
    if (!testing) return;
    setRevealed((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <figure className="card my-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <figcaption className="font-bold">{titre}</figcaption>
        <button type="button" onClick={toggleTest} className="chip" aria-pressed={testing}>
          {testing ? "👁️ Tout revoir" : "🎯 Se tester"}
        </button>
      </div>

      <ol className="grid grid-cols-2 gap-2">
        {items.map((it, i) => {
          const hidden = testing && !revealed.has(i);
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => reveal(i)}
                disabled={!testing}
                className={`flex w-full items-center gap-2 rounded-2xl border p-2.5 text-left text-sm transition ${
                  hidden
                    ? "border-dashed border-brand-300 bg-brand-100/60 text-brand-400 active:scale-95 dark:border-brand-600 dark:bg-brand-700/40"
                    : "border-brand-200 bg-white dark:border-brand-700 dark:bg-brand-800"
                }`}
              >
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-prairie-500 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="font-medium">{hidden ? "Appuie pour révéler" : it}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {testing && (
        <p className="mt-3 text-center text-xs text-brand-500 dark:text-brand-300">
          Cite chaque partie de tête, puis appuie pour vérifier. ✅
        </p>
      )}
    </figure>
  );
}
