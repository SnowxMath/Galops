import React from "react";

/**
 * Primitives partagées pour les schémas SVG légendés.
 * Chaque schéma peut masquer ses labels (mode auto-test).
 */

export interface LabelProps {
  /** Point désigné sur le dessin. */
  x: number;
  y: number;
  /** Position du texte du label. */
  tx: number;
  ty: number;
  text: string;
  show: boolean;
  /** Ancrage du texte. */
  anchor?: "start" | "middle" | "end";
  /** Index (pour numéroter en mode masqué). */
  n?: number;
}

/** Une étiquette : pastille sur le dessin + trait de rappel + texte. */
export function Label({ x, y, tx, ty, text, show, anchor = "start", n }: LabelProps) {
  return (
    <g>
      <line
        x1={x}
        y1={y}
        x2={tx}
        y2={ty}
        className="stroke-brand-400/70"
        strokeWidth={1}
      />
      <circle cx={x} cy={y} r={3.4} className="fill-prairie-500 stroke-white" strokeWidth={1.2} />
      {show ? (
        <text
          x={tx}
          y={ty}
          dy={anchor === "middle" ? -6 : 3}
          textAnchor={anchor}
          className="fill-current text-[11px] font-medium"
        >
          {text}
        </text>
      ) : (
        n != null && (
          <>
            <circle cx={tx} cy={ty} r={8} className="fill-white stroke-brand-400" strokeWidth={1.2} />
            <text
              x={tx}
              y={ty}
              dy={3.5}
              textAnchor="middle"
              className="fill-brand-700 text-[10px] font-bold"
            >
              {n}
            </text>
          </>
        )
      )}
    </g>
  );
}

/** Légende numérotée affichée sous le schéma en mode masqué. */
export function NumberedLegend({ items }: { items: string[] }) {
  return (
    <ol className="mt-3 grid grid-cols-1 gap-1 text-sm sm:grid-cols-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2">
          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-300 text-xs font-bold text-brand-700 dark:text-brand-200">
            {i + 1}
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ol>
  );
}
