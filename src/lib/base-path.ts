/**
 * Préfixe d'URL de l'application.
 *
 * - Vide en local et sur un hébergement à la racine du domaine (Vercel).
 * - "/Galops" sur GitHub Pages (l'app est servie sur un sous-chemin).
 *
 * Défini au build via NEXT_PUBLIC_BASE_PATH (voir next.config.mjs et le
 * workflow .github/workflows/deploy.yml). Inliné dans le bundle client.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Préfixe un chemin absolu (commençant par « / ») avec le basePath. */
export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
