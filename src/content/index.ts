import type {
  Galop,
  DomaineContenu,
  Domaine,
  Question,
  Cours,
  FicheRevision,
  ChecklistItem,
} from "./types";
import { galop1 } from "./galops/galop-1";

/**
 * Registre central des galops. Pour ajouter un galop : créer
 * `src/content/galops/galop-N.ts` puis l'ajouter à ce tableau. Rien d'autre à
 * toucher côté UI — tout est piloté par la donnée.
 *
 * (Galops 2 à 7 : ajoutés par lots après validation, cf. README.)
 */
export const GALOPS: Galop[] = [galop1];

/** Récupère un galop par son id (1..7). */
export function getGalop(id: number): Galop | undefined {
  return GALOPS.find((g) => g.id === id);
}

/** Récupère le contenu d'un domaine dans un galop. */
export function getDomaine(galop: Galop, domaine: Domaine): DomaineContenu | undefined {
  return galop.domaines.find((d) => d.domaine === domaine);
}

/** Toutes les questions d'un galop, tous domaines confondus. */
export function getQuestionsGalop(galop: Galop): Question[] {
  return galop.domaines.flatMap((d) => d.questions);
}

/** Toutes les questions de tous les galops (mode « tout mélangé »). */
export function getToutesLesQuestions(): Question[] {
  return GALOPS.flatMap(getQuestionsGalop);
}

/** Tous les cours d'un galop. */
export function getCoursGalop(galop: Galop): Cours[] {
  return galop.domaines.flatMap((d) => d.cours);
}

/** Toutes les fiches d'un galop. */
export function getFichesGalop(galop: Galop): FicheRevision[] {
  return galop.domaines.flatMap((d) => d.fiches);
}

/** Toute la checklist d'un galop. */
export function getChecklistGalop(galop: Galop): ChecklistItem[] {
  return galop.domaines.flatMap((d) => d.checklist);
}

export * from "./types";
export * from "./domaines";
