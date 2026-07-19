import {
  PROGRESSION_INITIALE,
  type Progression,
  type ProgressStore,
} from "./types";

const CLE = "galops-ffe:progression:v1";

/**
 * Stockage local via localStorage. Fonctionne hors-ligne, sans compte.
 * (On pourra migrer vers IndexedDB si le volume grossit — même interface.)
 */
export class LocalProgressStore implements ProgressStore {
  async load(): Promise<Progression> {
    if (typeof window === "undefined") return { ...PROGRESSION_INITIALE };
    try {
      const brut = window.localStorage.getItem(CLE);
      if (!brut) return { ...PROGRESSION_INITIALE };
      // Fusion défensive : on complète les champs manquants après une évolution
      // du modèle, pour ne pas casser une progression déjà stockée.
      return { ...PROGRESSION_INITIALE, ...(JSON.parse(brut) as Progression) };
    } catch {
      return { ...PROGRESSION_INITIALE };
    }
  }

  async save(progression: Progression): Promise<void> {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CLE, JSON.stringify(progression));
  }

  async reset(): Promise<void> {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(CLE);
  }
}
