"use client";

import { useEffect } from "react";
import { progressStore } from "@/lib/store";
import { BASE_PATH } from "@/lib/base-path";

/**
 * Initialisation côté client :
 *  - hydrate le store depuis localStorage
 *  - enregistre le service worker (PWA / offline)
 */
export default function ClientInit() {
  useEffect(() => {
    progressStore.hydrate();

    if ("serviceWorker" in navigator) {
      const onLoad = () => {
        // basePath : le SW vit sous le sous-chemin et ne contrôle que celui-ci.
        navigator.serviceWorker
          .register(`${BASE_PATH}/sw.js`, { scope: `${BASE_PATH}/` })
          .catch(() => {
            /* enregistrement SW impossible : l'app reste utilisable en ligne */
          });
      };
      if (document.readyState === "complete") onLoad();
      else window.addEventListener("load", onLoad, { once: true });
    }
  }, []);

  return null;
}
