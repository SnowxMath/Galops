import React from "react";
import { Label, NumberedLegend } from "./primitives";

/** Points désignés sur le cheval (silhouette de profil, tête à gauche). */
const POINTS = [
  { x: 70, y: 95, tx: 20, ty: 70, text: "Tête", anchor: "start" as const },
  { x: 118, y: 88, tx: 95, ty: 40, text: "Crinière", anchor: "start" as const },
  { x: 120, y: 120, tx: 40, ty: 150, text: "Encolure", anchor: "start" as const },
  { x: 165, y: 120, tx: 165, ty: 40, text: "Garrot", anchor: "middle" as const },
  { x: 215, y: 122, tx: 230, ty: 38, text: "Dos", anchor: "middle" as const },
  { x: 262, y: 126, tx: 300, ty: 45, text: "Rein", anchor: "middle" as const },
  { x: 300, y: 138, tx: 360, ty: 60, text: "Croupe", anchor: "start" as const },
  { x: 340, y: 175, tx: 388, ty: 150, text: "Queue", anchor: "start" as const },
  { x: 158, y: 168, tx: 150, ty: 205, text: "Épaule", anchor: "end" as const },
  { x: 132, y: 178, tx: 60, ty: 230, text: "Poitrail", anchor: "start" as const },
  { x: 220, y: 212, tx: 210, ty: 250, text: "Ventre", anchor: "middle" as const },
  { x: 275, y: 195, tx: 320, ty: 225, text: "Flanc", anchor: "start" as const },
  { x: 160, y: 250, tx: 95, ty: 285, text: "Membre antérieur", anchor: "start" as const },
  { x: 290, y: 250, tx: 300, ty: 292, text: "Membre postérieur", anchor: "start" as const },
  { x: 160, y: 292, tx: 40, ty: 300, text: "Sabot", anchor: "start" as const },
];

export default function ChevalParties({ showLabels }: { showLabels: boolean }) {
  return (
    <figure className="w-full">
      <svg
        viewBox="0 0 420 320"
        className="w-full text-brand-800 dark:text-brand-100"
        role="img"
        aria-label="Schéma des principales parties du cheval"
      >
        {/* Silhouette du cheval */}
        <g className="fill-brand-200 stroke-brand-500 dark:fill-brand-700" strokeWidth={2}>
          {/* Corps */}
          <ellipse cx="222" cy="168" rx="98" ry="50" />
          {/* Encolure */}
          <polygon points="150,140 128,150 92,108 118,92" />
          {/* Tête */}
          <polygon points="118,92 92,108 60,120 48,112 56,92 78,78 100,78" />
          {/* Oreille */}
          <polygon points="98,80 104,62 112,82" />
          {/* Membres antérieurs */}
          <rect x="150" y="205" width="14" height="88" rx="4" />
          <rect x="182" y="205" width="14" height="88" rx="4" />
          {/* Membres postérieurs */}
          <rect x="278" y="205" width="15" height="88" rx="4" />
          <rect x="300" y="205" width="15" height="88" rx="4" />
          {/* Queue */}
          <path d="M318 150 q34 6 40 78 q-22 -30 -44 -40 z" />
        </g>
        {/* Crinière */}
        <path
          d="M120 92 q6 -14 26 44"
          className="fill-none stroke-brand-600 dark:stroke-brand-300"
          strokeWidth={5}
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
