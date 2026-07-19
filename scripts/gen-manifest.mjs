/**
 * Génère public/manifest.webmanifest en tenant compte du basePath.
 * Lancé automatiquement avant `next build` (voir package.json > scripts.build).
 *
 * - En local / Vercel : NEXT_PUBLIC_BASE_PATH vide → chemins à la racine.
 * - Sur GitHub Pages : NEXT_PUBLIC_BASE_PATH = "/Galops" → chemins préfixés.
 */
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "manifest.webmanifest");

const manifest = {
  name: "Galops — Révision FFE",
  short_name: "Galops",
  description: "Cours, fiches, QCM corrigés et gamification pour réviser tes Galops FFE.",
  start_url: `${base}/`,
  scope: `${base}/`,
  display: "standalone",
  orientation: "portrait",
  background_color: "#f6f4ef",
  theme_color: "#3f8a52",
  lang: "fr",
  categories: ["education", "sports"],
  icons: [
    { src: `${base}/icons/icon-192.png`, sizes: "192x192", type: "image/png" },
    { src: `${base}/icons/icon-512.png`, sizes: "512x512", type: "image/png" },
    {
      src: `${base}/icons/icon-maskable-512.png`,
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
};

await writeFile(out, JSON.stringify(manifest, null, 2) + "\n");
console.log(`✓ manifest.webmanifest généré (basePath="${base || "/"}")`);
