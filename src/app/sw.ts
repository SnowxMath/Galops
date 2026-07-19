import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

// Le service worker s'exécute dans un contexte WebWorker.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    // Injecté au build par Serwist : liste des assets à précacher.
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  // Stratégies de cache par défaut (offline-first) fournies par Serwist.
  runtimeCaching: defaultCache,
});

serwist.addEventListeners();
