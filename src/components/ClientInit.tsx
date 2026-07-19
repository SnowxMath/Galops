"use client";

import { useEffect } from "react";
import { progressStore } from "@/lib/store";

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
        navigator.serviceWorker.register("/sw.js").catch(() => {
          /* enregistrement SW impossible : l'app reste utilisable en ligne */
        });
      };
      if (document.readyState === "complete") onLoad();
      else window.addEventListener("load", onLoad, { once: true });
    }
  }, []);

  return null;
}
