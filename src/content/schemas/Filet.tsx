import React from "react";
import { Pin, NumberedLegend } from "./primitives";

/** Parties du filet — illustration originale, tête de profil museau à gauche. */
const POINTS = [
  { n: "Têtière", x: 258, y: 96 },
  { n: "Frontal", x: 210, y: 120 },
  { n: "Montant de filet", x: 190, y: 200 },
  { n: "Muserolle", x: 150, y: 215 },
  { n: "Sous-gorge", x: 288, y: 175 },
  { n: "Mors", x: 120, y: 234 },
  { n: "Rêne", x: 250, y: 278 },
];

export default function Filet({ showLabels }: { showLabels: boolean }) {
  return (
    <>
      <svg viewBox="0 0 400 380" className="w-full" role="img" aria-label="Parties du filet">
        <rect x="0" y="0" width="400" height="380" rx="16" fill="#f6f4ef" />

        {/* Tête + encolure */}
        <path
          d="M250 96 C300 104 330 150 330 210 C330 300 330 340 330 360 L250 360 C250 320 246 300 230 286 C210 270 170 268 140 262 C110 256 92 244 84 228 C78 216 80 206 92 202 C98 200 104 202 110 206 C120 196 130 176 150 150 C176 116 210 92 250 96 Z"
          fill="#c0a882"
          stroke="#5b442c"
          strokeWidth={2.8}
          strokeLinejoin="round"
        />

        {/* Oreilles */}
        <g fill="#ac8d60" stroke="#5b442c" strokeWidth={2.5} strokeLinejoin="round">
          <path d="M244 98 L232 66 L258 92 Z" />
          <path d="M262 96 L272 64 L282 96 Z" />
        </g>
        {/* Crinière */}
        <path d="M258 92 C300 104 322 150 326 200 C316 156 292 118 256 106 Z" fill="#6b4f30" />

        {/* Naseau + oeil */}
        <ellipse cx="98" cy="216" rx="4" ry="5" fill="#3f3022" />
        <circle cx="176" cy="150" r="4.5" fill="#3f3022" />

        {/* Le filet (cuir foncé) */}
        <g fill="none" stroke="#2c2320" strokeWidth={7} strokeLinecap="round">
          <path d="M232 92 C252 96 262 98 276 96" />
          <path d="M236 100 C220 112 206 120 192 128" />
          <path d="M240 100 C210 150 170 200 128 232" />
          <path d="M270 100 C286 150 280 210 244 240" />
          <path d="M150 176 C128 196 116 214 120 232" />
          <path d="M150 176 C176 200 176 226 150 244 C130 244 120 240 118 232" />
        </g>
        <circle cx="120" cy="234" r="10" fill="none" stroke="#2c2320" strokeWidth={6} />
        <path d="M130 234 C190 250 250 270 300 300" fill="none" stroke="#3a2f28" strokeWidth={6} strokeLinecap="round" />

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
