// basePath / export statique activés uniquement pour GitHub Pages (via env).
// En local et sur Vercel : build classique à la racine.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isPages
    ? {
        output: "export", // génère un site statique dans /out
        basePath, // ex. "/Galops"
        trailingSlash: true, // routes en /chemin/ → compat hébergement statique
        images: { unoptimized: true }, // pas d'optimiseur d'images côté serveur
      }
    : {}),
};

export default nextConfig;
