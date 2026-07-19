import type { MetadataRoute } from "next";

/** Manifeste PWA : rend l'app installable sur l'écran d'accueil iOS/Android. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Galops FFE — Révision",
    short_name: "Galops FFE",
    description:
      "Formation et révision des Galops FFE 1 à 7 : cours, fiches, QCM corrigés, progression.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f0f7f2",
    theme_color: "#2c6540",
    lang: "fr",
    categories: ["education", "sports"],
    icons: [
      { src: "/icons/icon.svg", sizes: "any", type: "image/svg+xml" },
      {
        src: "/icons/icon-maskable.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
