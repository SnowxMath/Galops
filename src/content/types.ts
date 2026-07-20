/**
 * Modèle de données du contenu FFE.
 *
 * PRINCIPE CLÉ : le contenu n'est jamais codé en dur dans les composants.
 * Tout vit dans des fichiers de données typés (src/content/galops/galop-N.ts)
 * qu'on peut éditer sans toucher au code de l'app.
 *
 * Chaque notion garde une `source` (ex. « Programme officiel FFE Galop 1 »)
 * pour pouvoir vérifier et mettre à jour le contenu.
 */

/** Les 5 domaines officiels FFE, communs à tous les galops. */
export type Domaine =
  | "connaissances_generales"
  | "connaitre_le_cheval"
  | "s_occuper_du_cheval"
  | "pratique_a_pied"
  | "pratique_a_cheval";

/** Les 3 spécialisations de la pratique à cheval, à partir du Galop 5. */
export type Specialisation = "dressage" | "cso" | "cross";

/** Métadonnées d'affichage d'un domaine (libellé, icône, couleur). */
export interface DomaineMeta {
  id: Domaine;
  libelle: string;
  emoji: string;
  /** classe de couleur Tailwind pour l'accent (ex. "bg-brand-500"). */
  accent: string;
}

/** Une pastille numérotée posée sur une image annotée (coordonnées en %). */
export interface PointAnnotation {
  /** Nom de la partie (ex. « Garrot »). */
  label: string;
  /** Position horizontale de la pastille, en % de la largeur (0–100). */
  x: number;
  /** Position verticale de la pastille, en % de la hauteur (0–100). */
  y: number;
}

/** Un schéma / une carte mémo associée à un cours ou une fiche. */
export interface Schema {
  id: string;
  type: "svg" | "image" | "memo";
  legende: string;
  /** Pour type "image" : chemin dans /public. Pour "svg" : id du composant enregistré. */
  src?: string;
  /** Pour type "memo" : liste des éléments à mémoriser (ex. parties à nommer). */
  parties?: string[];
  /** Pour type "image" : pastilles numérotées à superposer + légende « se tester ». */
  points?: PointAnnotation[];
}

/** Un cours (texte long en Markdown léger). */
export interface Cours {
  id: string;
  titre: string;
  /** Contenu en Markdown simplifié (titres, listes, gras). */
  contenu: string;
  schemas?: Schema[];
  source: string;
}

/** Une fiche de révision (format mémo, points-clés courts). */
export interface FicheRevision {
  id: string;
  titre: string;
  points_cles: string[];
  schema?: Schema;
  source: string;
}

/** Un choix de réponse d'un QCM. */
export interface Choix {
  id: string;
  texte: string;
  correct: boolean;
}

/** Une question de QCM à choix multiples. */
export interface Question {
  id: string;
  domaine: Domaine;
  /** Spécialisation optionnelle (dressage/cso/cross) pour le G5+. */
  specialisation?: Specialisation;
  difficulte: 1 | 2 | 3;
  enonce: string;
  choix: Choix[];
  /** Affichée si la réponse est correcte (renforce le pourquoi). */
  explication_correcte: string;
  /** Affichée si la réponse est fausse (dit POURQUOI, jamais juste « faux »). */
  explication_incorrecte: string;
  source: string;
}

/** Un item de checklist d'acquis. */
export interface ChecklistItem {
  id: string;
  domaine: Domaine;
  specialisation?: Specialisation;
  libelle: string;
}

/** Le contenu d'un domaine pour un galop donné. */
export interface DomaineContenu {
  domaine: Domaine;
  cours: Cours[];
  fiches: FicheRevision[];
  questions: Question[];
  checklist: ChecklistItem[];
}

/** Un galop complet (1 à 7). */
export interface Galop {
  id: number; // 1..7
  titre: string;
  /** Ce que le niveau valide (vue d'ensemble). */
  resume: string;
  /** Niveau Club/équivalence (ex. "Club 3"), optionnel. */
  niveau?: string;
  /** Galop prérequis (ou null pour le Galop 1). */
  prerequis: number | null;
  domaines: DomaineContenu[];
  /** À partir du G5, la pratique à cheval se ramifie. */
  specialisation?: Specialisation[];
  /** Vrai tant que le contenu n'est pas rédigé (galop "stub"). */
  aVenir?: boolean;
}
