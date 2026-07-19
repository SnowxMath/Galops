import React from "react";
import { Pin, NumberedLegend } from "./primitives";

/** Parties de la selle — illustration originale, pommeau à gauche. */
const POINTS = [
  { n: "Pommeau", x: 96, y: 138 },
  { n: "Troussequin", x: 358, y: 134 },
  { n: "Siège", x: 200, y: 146 },
  { n: "Quartier", x: 165, y: 205 },
  { n: "Étrivière", x: 256, y: 168 },
  { n: "Étrier", x: 256, y: 286 },
  { n: "Sangle", x: 220, y: 306 },
];

export default function Selle({ showLabels }: { showLabels: boolean }) {
  return (
    <>
      <svg viewBox="0 0 440 340" className="w-full" role="img" aria-label="Parties de la selle">
        <rect x="0" y="0" width="440" height="340" rx="16" fill="#f6f4ef" />

        {/* Sangle */}
        <path
          d="M150 176 C150 250 150 300 175 306 C205 312 250 312 280 306 C305 300 300 250 300 190"
          fill="none"
          stroke="#8f6f45"
          strokeWidth={16}
          strokeLinecap="round"
        />

        {/* Quartier */}
        <path
          d="M120 150 C130 140 300 138 330 158 C348 172 348 210 336 234 C326 252 150 256 128 236 C112 220 110 176 120 150 Z"
          fill="#ac8d60"
          stroke="#5b442c"
          strokeWidth={2.5}
          strokeLinejoin="round"
        />

        {/* Siège */}
        <path
          d="M96 150 C104 128 128 120 150 122 C170 124 176 138 200 138 C240 138 300 128 336 132 C360 134 372 146 366 160 C360 172 344 168 330 164 C300 156 250 158 210 162 C176 166 150 168 130 166 C112 164 100 160 96 150 Z"
          fill="#c0a882"
          stroke="#5b442c"
          strokeWidth={2.8}
          strokeLinejoin="round"
        />
        {/* Pommeau */}
        <path
          d="M96 150 C88 142 88 128 100 126 C110 124 112 136 108 146 Z"
          fill="#b89b70"
          stroke="#5b442c"
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        {/* Troussequin */}
        <path
          d="M336 132 C352 122 372 126 372 140 C372 150 360 150 350 148 Z"
          fill="#b89b70"
          stroke="#5b442c"
          strokeWidth={2.5}
          strokeLinejoin="round"
        />

        {/* Contre-sanglon */}
        <rect x="176" y="200" width="10" height="40" rx="2" fill="#8f6f45" stroke="#5b442c" strokeWidth={1.5} />

        {/* Étrivière + étrier (par-dessus le quartier, donc visibles) */}
        <rect x="250" y="150" width="12" height="120" rx="3" fill="#725636" stroke="#5b442c" strokeWidth={2} />
        <path d="M242 268 C242 288 270 288 270 268" fill="none" stroke="#4a3826" strokeWidth={6} />
        <rect x="246" y="284" width="20" height="6" rx="2" fill="#4a3826" />

        {POINTS.map((p, i) => (
          <Pin key={p.n} x={p.x} y={p.y} n={i + 1} />
        ))}
      </svg>
      {showLabels ? (
        <NumberedLegend items={POINTS.map((p) => p.n)} />
      ) : (
        <p className="mt-3 text-center text-xs text-brand-500 dark:text-brand-300">
          Retrouve chaque numéro, puis affiche les labels pour vérifier.
        </p>
      )}
    </>
  );
}
