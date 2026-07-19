import React from "react";
import { Label, NumberedLegend } from "./primitives";

/** Parties de la selle (vue de profil, avant à gauche). */
const POINTS = [
  { x: 92, y: 98, tx: 40, ty: 70, text: "Pommeau", anchor: "start" as const },
  { x: 300, y: 100, tx: 320, ty: 70, text: "Troussequin", anchor: "start" as const },
  { x: 200, y: 118, tx: 200, ty: 60, text: "Siège", anchor: "middle" as const },
  { x: 250, y: 150, tx: 320, ty: 150, text: "Quartier", anchor: "start" as const },
  { x: 150, y: 175, tx: 60, ty: 185, text: "Étrivière", anchor: "end" as const },
  { x: 150, y: 235, tx: 60, ty: 250, text: "Étrier", anchor: "end" as const },
  { x: 210, y: 210, tx: 250, ty: 250, text: "Sangle", anchor: "start" as const },
];

export default function Selle({ showLabels }: { showLabels: boolean }) {
  return (
    <figure className="w-full">
      <svg
        viewBox="0 0 380 300"
        className="w-full text-brand-800 dark:text-brand-100"
        role="img"
        aria-label="Schéma des parties de la selle"
      >
        <g className="fill-brand-300 stroke-brand-600 dark:fill-brand-600" strokeWidth={2}>
          {/* Corps de la selle */}
          <path d="M90 110 q0 -22 22 -18 q90 -14 176 0 q22 -4 22 18 q0 26 -30 30 q-80 10 -160 0 q-30 -4 -30 -30 z" />
          {/* Quartier */}
          <path d="M150 132 q60 -8 120 0 l14 60 q-70 14 -148 0 z" className="fill-brand-400 dark:fill-brand-500" />
        </g>
        {/* Étrivière + étrier */}
        <line x1="150" y1="140" x2="150" y2="228" className="stroke-brand-700 dark:stroke-brand-200" strokeWidth={5} />
        <path
          d="M138 228 q12 24 24 0"
          className="fill-none stroke-brand-700 dark:stroke-brand-200"
          strokeWidth={5}
        />
        {/* Sangle */}
        <path d="M180 160 l30 70" className="stroke-brand-500" strokeWidth={7} strokeLinecap="round" />

        {POINTS.map((p, i) => (
          <Label key={p.text} {...p} n={i + 1} show={showLabels} />
        ))}
      </svg>
      {!showLabels && <NumberedLegend items={POINTS.map((p) => p.text)} />}
    </figure>
  );
}
