/**
 * Génère les icônes PWA (PNG) à partir d'un logo SVG « fer à cheval ».
 * Usage : npm run icons
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "icons");

/** Logo : fer à cheval blanc sur fond vert prairie. */
function logoSVG(size, { maskable = false } = {}) {
  const pad = maskable ? size * 0.16 : 0; // marge de sécurité pour l'icône maskable
  const bg = "#10b981";
  const inner = size - pad * 2;
  const cx = size / 2;
  const cy = size / 2;
  const r = inner * 0.3;
  const sw = inner * 0.13;
  // Arc ouvert vers le bas (fer à cheval)
  const start = { x: cx - r * Math.sin(0.5), y: cy + r * Math.cos(0.5) };
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="${bg}"/>
  <g fill="none" stroke="#ffffff" stroke-width="${sw}" stroke-linecap="round">
    <path d="M ${cx - r} ${cy + r * 0.35}
             A ${r} ${r} 0 1 1 ${cx + r} ${cy + r * 0.35}" />
  </g>
  <g fill="#ffffff">
    <circle cx="${cx - r}" cy="${cy + r * 0.45}" r="${sw * 0.32}"/>
    <circle cx="${cx + r}" cy="${cy + r * 0.45}" r="${sw * 0.32}"/>
    <circle cx="${cx - r * 1.02}" cy="${cy - r * 0.2}" r="${sw * 0.3}"/>
    <circle cx="${cx + r * 1.02}" cy="${cy - r * 0.2}" r="${sw * 0.3}"/>
    <circle cx="${cx - r * 0.7}" cy="${cy - r * 0.75}" r="${sw * 0.3}"/>
    <circle cx="${cx + r * 0.7}" cy="${cy - r * 0.75}" r="${sw * 0.3}"/>
  </g>
</svg>`;
}

async function render(size, name, opts) {
  const svg = Buffer.from(logoSVG(size, opts));
  await sharp(svg).png().toFile(join(outDir, name));
  console.log("✓", name);
}

await mkdir(outDir, { recursive: true });
await render(192, "icon-192.png");
await render(512, "icon-512.png");
await render(512, "icon-maskable-512.png", { maskable: true });
await render(180, "apple-touch-icon.png");
console.log("Icônes générées dans public/icons/");
