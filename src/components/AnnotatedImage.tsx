"use client";

import { useState } from "react";
import type { PointAnnotation } from "@/content/types";
import { withBase } from "@/lib/base-path";

/**
 * Image annotée : une illustration + des pastilles numérotées posées dessus,
 * accompagnées d'une légende numérotée.
 *
 * Mode « Se tester » : la légende masque les noms ; on appuie sur chaque
 * pastille (ou sur la ligne) pour la révéler et vérifier qu'on la connaît.
 */
export default function AnnotatedImage({
  titre,
  src,
  points,
}: {
  titre: string;
  src: string;
  points: PointAnnotation[];
}) {
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

      <div className="relative overflow-hidden rounded-2xl border border-brand-100 bg-white dark:border-brand-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={withBase(src)} alt={titre} className="block h-auto w-full" loading="lazy" />
        {points.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => reveal(i)}
            disabled={!testing}
            title={p.label}
            aria-label={`${i + 1}. ${p.label}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-prairie-500 text-white shadow-pop transition disabled:cursor-default"
          >
            <span className="flex h-6 w-6 items-center justify-center text-xs font-bold sm:h-7 sm:w-7 sm:text-sm">
              {i + 1}
            </span>
          </button>
        ))}
      </div>

      <ol className="mt-3 grid grid-cols-2 gap-2">
        {points.map((p, i) => {
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
                <span className="font-medium">{hidden ? "Appuie pour révéler" : p.label}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {testing && (
        <p className="mt-3 text-center text-xs text-brand-500 dark:text-brand-300">
          Nomme chaque partie repérée par une pastille, puis appuie pour vérifier. ✅
        </p>
      )}
    </figure>
  );
}
