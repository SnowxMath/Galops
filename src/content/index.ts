import type { Galop, Question, Domaine, DomaineContenu } from "./types";
import galop1 from "./galops/galop-1";
import galop2 from "./galops/galop-2";
import galop3 from "./galops/galop-3";
import galop4 from "./galops/galop-4";
import galop5 from "./galops/galop-5";
import galop6 from "./galops/galop-6";
import galop7 from "./galops/galop-7";

/**
 * Registre central du contenu. Pour ajouter/mettre à jour un galop,
 * on édite le fichier de données correspondant — pas les composants.
 */
export const GALOPS: Galop[] = [galop1, galop2, galop3, galop4, galop5, galop6, galop7];

export function getGalop(id: number): Galop | undefined {
  return GALOPS.find((g) => g.id === id);
}

export function getDomaineContenu(galopId: number, domaine: Domaine): DomaineContenu | undefined {
  return getGalop(galopId)?.domaines.find((d) => d.domaine === domaine);
}

/** Toutes les questions d'un galop, tous domaines confondus. */
export function questionsForGalop(galopId: number): Question[] {
  const g = getGalop(galopId);
  if (!g) return [];
  return g.domaines.flatMap((d) => d.questions);
}

/** Nombre total de questions disponibles pour un galop. */
export function questionCount(galopId: number): number {
  return questionsForGalop(galopId).length;
}

/** Vrai si le galop possède au moins un contenu (cours/fiche/question). */
export function galopHasContent(g: Galop): boolean {
  if (g.aVenir) return false;
  return g.domaines.some(
    (d) => d.cours.length + d.fiches.length + d.questions.length + d.checklist.length > 0,
  );
}

/** Toutes les questions de tous les galops (mode « tout mélangé »). */
export function allQuestions(): Question[] {
  return GALOPS.flatMap((g) => g.domaines.flatMap((d) => d.questions));
}

/** Index question.id -> question, pour retrouver rapidement une question. */
export const QUESTION_INDEX: Map<string, Question> = new Map(
  allQuestions().map((q) => [q.id, q]),
);

/** Retrouve le galop d'origine d'une question (via son id). */
export const QUESTION_GALOP: Map<string, number> = new Map(
  GALOPS.flatMap((g) => g.domaines.flatMap((d) => d.questions.map((q) => [q.id, g.id] as const))),
);

export * from "./types";
