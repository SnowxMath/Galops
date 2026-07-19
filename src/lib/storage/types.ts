/**
 * Modèle de progression et interface de stockage.
 *
 * L'app ne parle JAMAIS directement à localStorage ni à Supabase : elle passe
 * par l'interface `ProgressStore`. On peut ainsi brancher Supabase (sync
 * multi-appareils) plus tard sans refactorer l'UI — il suffit d'une autre
 * implémentation de cette interface.
 */

/** État de répétition espacée d'une question (SRS simple). */
export type EtatQuestion = {
  questionId: string;
  /** Nombre de bonnes réponses consécutives. */
  reussitesConsecutives: number;
  /** Nombre total de tentatives. */
  tentatives: number;
  /** Nombre total d'échecs (alimente « points faibles »). */
  echecs: number;
  /** Timestamp (ms) de la dernière révision. */
  derniereRevision: number;
  /** Timestamp (ms) de la prochaine échéance de révision. */
  prochaineRevision: number;
};

/** Progression globale de l'utilisateur, persistée. */
export type Progression = {
  /** XP cumulés (gamification). */
  xp: number;
  /** Badges débloqués (ids). */
  badges: string[];
  /** Cases de checklist cochées (ids d'items). */
  checklist: string[];
  /** État SRS par question, indexé par questionId. */
  questions: Record<string, EtatQuestion>;
  /** Suivi du streak (objectif quotidien). */
  streak: {
    jours: number;
    /** Date « YYYY-MM-DD » du dernier jour actif. */
    dernierJour: string | null;
  };
  /** Nombre de questions réussies aujourd'hui (objectif quotidien). */
  objectifDuJour: {
    date: string | null;
    reussies: number;
  };
};

/** Progression vierge par défaut. */
export const PROGRESSION_INITIALE: Progression = {
  xp: 0,
  badges: [],
  checklist: [],
  questions: {},
  streak: { jours: 0, dernierJour: null },
  objectifDuJour: { date: null, reussies: 0 },
};

/**
 * Contrat de stockage de la progression. Implémentations :
 *  - LocalProgressStore (localStorage) — défaut, hors-ligne, sans compte.
 *  - SupabaseProgressStore — optionnel, sync multi-appareils (désactivé).
 */
export interface ProgressStore {
  /** Charge la progression (ou la valeur initiale si vide). */
  load(): Promise<Progression>;
  /** Persiste la progression complète. */
  save(progression: Progression): Promise<void>;
  /** Réinitialise toute la progression. */
  reset(): Promise<void>;
}
