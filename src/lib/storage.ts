/**
 * Couche de persistance abstraite.
 *
 * Par défaut, la progression est stockée en local (localStorage) — aucun
 * compte requis, tout fonctionne hors-ligne.
 *
 * Pour brancher une sync multi-appareils plus tard (Supabase), il suffit
 * d'implémenter `StorageAdapter` et de le fournir au store : aucun autre
 * code n'a besoin de changer.
 */

export interface StorageAdapter {
  load<T>(key: string): T | null;
  save<T>(key: string, value: T): void;
  remove(key: string): void;
}

/** Implémentation localStorage (client uniquement). */
export class LocalStorageAdapter implements StorageAdapter {
  load<T>(key: string): T | null {
    if (typeof window === "undefined") return null;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  }

  save<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* quota dépassé ou stockage indisponible : on ignore silencieusement */
    }
  }

  remove(key: string): void {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
  }
}

/**
 * Squelette d'adaptateur Supabase (désactivé par défaut).
 * À compléter le jour où on active la sync. Voir README > « Activer Supabase ».
 *
 * export class SupabaseAdapter implements StorageAdapter { ... }
 */

/** Adaptateur par défaut de l'application. */
export const defaultAdapter: StorageAdapter = new LocalStorageAdapter();
