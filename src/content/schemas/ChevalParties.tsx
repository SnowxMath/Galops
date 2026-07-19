import React from "react";
import { Pin, NumberedLegend } from "./primitives";

/** Parties du cheval — illustration originale, profil tête à gauche. */
const POINTS = [
  { n: "Tête", x: 95, y: 150 },
  { n: "Crinière", x: 178, y: 128 },
  { n: "Encolure", x: 150, y: 168 },
  { n: "Garrot", x: 206, y: 134 },
  { n: "Dos", x: 258, y: 128 },
  { n: "Rein", x: 300, y: 132 },
  { n: "Croupe", x: 322, y: 140 },
  { n: "Queue", x: 352, y: 185 },
  { n: "Épaule", x: 198, y: 182 },
  { n: "Poitrail", x: 184, y: 202 },
  { n: "Ventre", x: 250, y: 216 },
  { n: "Flanc", x: 296, y: 200 },
  { n: "Membre antérieur", x: 208, y: 258 },
  { n: "Membre postérieur", x: 312, y: 258 },
  { n: "Sabot", x: 190, y: 300 },
];

export default function ChevalParties({ showLabels }: { showLabels: boolean }) {
  return (
    <>
      <svg viewBox="0 0 460 340" className="w-full" role="img" aria-label="Parties du cheval">
        <rect x="0" y="0" width="460" height="340" rx="16" fill="#f6f4ef" />

        {/* Pattes */}
        <g fill="#b89b70" stroke="#5b442c" strokeWidth={2.5} strokeLinejoin="round">
          <path d="M300 206 C304 240 301 270 300 292 C300 300 290 300 289 292 C287 266 286 236 283 210 Z" />
          <path d="M324 204 C329 240 326 270 324 292 C324 300 314 300 313 292 C311 266 309 234 306 208 Z" />
          <path d="M196 206 C199 240 196 270 195 292 C195 300 185 300 184 292 C182 266 181 236 179 210 Z" />
          <path d="M218 208 C221 242 218 270 217 292 C217 300 207 300 206 292 C204 266 203 238 201 212 Z" />
        </g>
        <g fill="#3f3022">
          <path d="M183 291 L197 291 L198 303 L182 303 Z" />
          <path d="M205 293 L219 293 L220 305 L204 305 Z" />
          <path d="M288 291 L302 291 L303 303 L287 303 Z" />
          <path d="M312 293 L326 293 L327 305 L311 305 Z" />
        </g>

        {/* Queue */}
        <path
          d="M330 150 C362 152 378 196 374 250 C366 226 356 206 338 197 C342 214 340 232 334 244 C326 226 322 196 320 166 Z"
          fill="#6b4f30"
          stroke="#4a3826"
          strokeWidth={2}
        />

        {/* Silhouette tête + encolure + corps */}
        <path
          d="M150 115 C175 118 195 122 205 132 C250 128 290 128 315 134 C326 138 332 146 333 158 C336 175 332 192 326 205 C320 214 300 218 280 218 C240 220 210 218 190 214 C184 210 182 206 182 200 C176 190 168 182 156 176 C150 173 144 172 140 172 C122 180 104 188 90 190 C80 191 74 188 72 182 C71 178 72 174 76 171 C96 158 120 140 138 124 C143 120 146 117 150 115 Z"
          fill="#c0a882"
          stroke="#5b442c"
          strokeWidth={2.8}
          strokeLinejoin="round"
        />

        {/* Oreilles */}
        <g fill="#ac8d60" stroke="#5b442c" strokeWidth={2.5} strokeLinejoin="round">
          <path d="M150 116 L148 94 L160 114 Z" />
          <path d="M160 115 L169 96 L174 116 Z" />
        </g>

        {/* Crinière + toupet */}
        <path
          d="M150 116 C168 120 184 126 200 134 C204 142 202 150 196 156 C188 142 170 128 150 124 Z"
          fill="#6b4f30"
        />
        <path d="M150 114 C156 106 161 106 160 117 Z" fill="#6b4f30" />

        {/* Naseau + oeil */}
        <ellipse cx="82" cy="179" rx="3" ry="4" fill="#3f3022" />
        <circle cx="118" cy="150" r="3.6" fill="#3f3022" />

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
