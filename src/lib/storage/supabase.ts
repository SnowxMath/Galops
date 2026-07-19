import type { Progression, ProgressStore } from "./types";

/**
 * Emplacement réservé pour la sync multi-appareils via Supabase.
 *
 * DÉSACTIVÉ par défaut. Pour l'activer plus tard (cf. README) :
 *   1. Ajouter le client @supabase/supabase-js et les variables d'env
 *      NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY.
 *   2. Implémenter load/save/reset ci-dessous (table `progressions`
 *      indexée par utilisateur).
 *   3. Passer NEXT_PUBLIC_STORAGE_PROVIDER=supabase.
 *
 * La signature respecte déjà `ProgressStore` : aucun refactor de l'UI requis.
 */
export class SupabaseProgressStore implements ProgressStore {
  async load(): Promise<Progression> {
    throw new Error("SupabaseProgressStore non implémenté (couche sync désactivée).");
  }
  async save(_progression: Progression): Promise<void> {
    throw new Error("SupabaseProgressStore non implémenté (couche sync désactivée).");
  }
  async reset(): Promise<void> {
    throw new Error("SupabaseProgressStore non implémenté (couche sync désactivée).");
  }
}
