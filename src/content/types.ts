/**
 * Schéma de données du contenu FFE.
 *
 * Principe : TOUT le contenu (cours, fiches, QCM, checklists, schémas) vit dans
 * des fichiers de données typés (`src/content/galops/galop-N.ts`), jamais codé
 * en dur dans les composants. On peut ainsi corriger/mettre à jour un galop ou
 * une question sans toucher au code de l'UI.
 *
 * Chaque item porte une `source` (ex. « Programme officiel FFE Galop 3 ») pour
 * pouvoir vérifier et mettre à jour la fidélité au programme.
 */

/** Les 5 domaines officiels FFE, communs à tous les galops. */
export type Domaine =
  | "connaissances_generales"
  | "connaitre_le_cheval"
  | "s_occuper_du_cheval"
  | "pratique_a_pied"
  | "pratique_a_cheval";

/**
 * À partir du Galop 5, la « pratique à cheval » se ramifie.
 * `tronc_commun` = contenu partagé par toutes les disciplines à ce niveau.
 * Les items hors `pratique_a_cheval` laissent ce champ vide.
 */
export type Discipline = "tronc_commun" | "dressage" | "cso" | "cross";

/** Disciplines spécialisées (hors tronc commun) déclarées au niveau du galop. */
export type DisciplineSpecialisee = Exclude<Discipline, "tronc_commun">;

/** Difficulté d'une question, alimente la répétition espacée et les filtres. */
export type Difficulte = 1 | 2 | 3;

/** Un schéma/diagramme légendé, rendu en SVG responsive (ou image en secours). */
export type Schema = {
  id: string;
  type: "svg" | "image";
  /** Identifiant du composant SVG à rendre (résolu via le registre de schémas). */
  composant?: string;
  /** URL de l'image si type === "image". */
  src?: string;
  legende: string;
  /**
   * Labels masquables pour le mode « teste-toi » : chaque label peut être caché
   * puis révélé. Optionnel — utile surtout pour les schémas anatomiques/manège.
   */
  labels?: { id: string; texte: string }[];
};

/** Un cours : contenu long en Markdown, avec schémas intégrés optionnels. */
export type Cours = {
  id: string;
  titre: string;
  /** Contenu en Markdown (rendu côté app). */
  contenu: string;
  schemas?: Schema[];
  source: string;
  /** Renseigné uniquement dans `pratique_a_cheval` à partir du G5. */
  discipline?: Discipline;
};

/** Une fiche de révision : format mémo, points-clés courts, imprimable/partageable. */
export type FicheRevision = {
  id: string;
  titre: string;
  points_cles: string[];
  schema?: Schema;
  source: string;
  discipline?: Discipline;
};

/** Un choix de réponse pour un QCM. */
export type Choix = {
  id: string;
  texte: string;
  correct: boolean;
};

/**
 * Une question de QCM à choix multiples avec correction expliquée.
 * `explication_incorrecte` doit toujours dire POURQUOI c'est faux + la bonne
 * réponse — jamais un simple « faux ».
 */
export type Question = {
  id: string;
  domaine: Domaine;
  difficulte: Difficulte;
  enonce: string;
  choix: Choix[];
  explication_correcte: string;
  explication_incorrecte: string;
  source: string;
  discipline?: Discipline;
};

/** Un item de checklist d'acquis, coché par l'utilisateur (« je sais faire »). */
export type ChecklistItem = {
  id: string;
  domaine: Domaine;
  libelle: string;
  discipline?: Discipline;
};

/** Le contenu complet d'un domaine pour un galop donné. */
export type DomaineContenu = {
  domaine: Domaine;
  cours: Cours[];
  fiches: FicheRevision[];
  questions: Question[];
  checklist: ChecklistItem[];
};

/** Un galop complet (1 à 7). */
export type Galop = {
  id: number; // 1..7
  titre: string;
  /** Ce que le niveau valide (résumé court). */
  resume: string;
  /** Galop prérequis, ou null pour le Galop 1. */
  prerequis: number | null;
  domaines: DomaineContenu[];
  /** Disciplines spécialisées disponibles à ce niveau (à partir du G5). */
  specialisation?: DisciplineSpecialisee[];
};

/** Métadonnées d'affichage d'un domaine (libellé, icône, couleur). */
export type DomaineMeta = {
  domaine: Domaine;
  libelle: string;
  description: string;
  /** Emoji d'appoint en attendant les icônes finales. */
  icone: string;
};

/** Métadonnées d'affichage d'une discipline. */
export type DisciplineMeta = {
  discipline: Discipline;
  libelle: string;
  icone: string;
};
