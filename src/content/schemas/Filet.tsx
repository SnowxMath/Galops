import React from "react";
import { Label, NumberedLegend } from "./primitives";

/** Parties du filet sur une tête de cheval (profil, nez à gauche). */
const POINTS = [
  { x: 205, y: 60, tx: 250, ty: 40, text: "Têtière", anchor: "start" as const },
  { x: 150, y: 92, tx: 120, ty: 46, text: "Frontal", anchor: "middle" as const },
  { x: 108, y: 150, tx: 40, ty: 140, text: "Muserolle", anchor: "start" as const },
  { x: 200, y: 130, tx: 250, ty: 120, text: "Sous-gorge", anchor: "start" as const },
  { x: 165, y: 120, tx: 235, ty: 175, text: "Montant", anchor: "start" as const },
  { x: 95, y: 178, tx: 40, ty: 205, text: "Mors", anchor: "start" as const },
  { x: 120, y: 200, tx: 150, ty: 250, text: "Rêne", anchor: "start" as const },
];

export default function Filet({ showLabels }: { showLabels: boolean }) {
  return (
    <figure className="w-full">
      <svg
        viewBox="0 0 300 280"
        className="w-full text-brand-800 dark:text-brand-100"
        role="img"
        aria-label="Schéma des parties du filet"
      >
        {/* Tête du cheval (profil, nez en bas à gauche) */}
        <g className="fill-brand-200 stroke-brand-500 dark:fill-brand-700" strokeWidth={2}>
          <path d="M205 55 q10 40 -10 90 q-15 45 -55 55 q-30 6 -40 -18 q-8 -30 8 -70 q18 -55 65 -80 q22 -10 27 -7 z" />
          {/* Oreille */}
          <polygon points="200,55 210,30 222,58" />
        </g>

        {/* Le filet (sangles) */}
        <g className="fill-none stroke-brand-700 dark:stroke-brand-200" strokeWidth={4} strokeLinecap="round">
          {/* Têtière (derrière les oreilles) */}
          <path d="M188 58 q28 6 20 26" />
          {/* Frontal (front) */}
          <path d="M150 78 q30 8 55 -2" />
          {/* Montant (joue) */}
          <path d="M170 96 q-20 40 -60 78" />
          {/* Muserolle (autour du nez) */}
          <path d="M96 128 q30 20 55 6" />
          <path d="M96 128 q-6 20 14 34" />
          {/* Sous-gorge */}
          <path d="M200 96 q18 30 -8 44" className="stroke-brand-500" strokeWidth={3} />
        </g>
        {/* Mors + rêne */}
        <circle cx="95" cy="178" r="5" className="fill-brand-700 dark:fill-brand-200" />
        <path
          d="M95 178 q40 6 70 34"
          className="fill-none stroke-brand-600 dark:stroke-brand-300"
          strokeWidth={4}
          strokeLinecap="round"
        />

        {POINTS.map((p, i) => (
          <Label key={p.text} {...p} n={i + 1} show={showLabels} />
        ))}
      </svg>
      {!showLabels && <NumberedLegend items={POINTS.map((p) => p.text)} />}
    </figure>
  );
}
