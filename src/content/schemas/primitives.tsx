import React from "react";

/**
 * Primitives partagées pour les schémas SVG légendés.
 * Approche : des pastilles numérotées sur le dessin + une légende
 * numéro → nom en dessous. En mode auto-test, on masque la légende
 * (les pastilles restent : à toi de retrouver chaque nom).
 */

/** Une pastille numérotée posée sur un point du dessin. */
export function Pin({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={12} fill="#ffffff" stroke="#3f8a52" strokeWidth={2.5} />
      <text
        x={x}
        y={y}
        dy={4.5}
        textAnchor="middle"
        fontSize={13}
        fontWeight={700}
        fill="#2f6d40"
      >
        {n}
      </text>
    </g>
  );
}

/** Légende numérotée (numéro → nom). */
export function NumberedLegend({ items }: { items: string[] }) {
  return (
    <ol className="mt-3 grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
      {items.map((t, i) => (
        <li key={i} className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-prairie-500 text-xs font-bold text-white">
            {i + 1}
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ol>
  );
}
