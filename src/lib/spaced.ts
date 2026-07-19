/**
 * Répétition espacée simple (système de Leitner).
 * Les questions ratées reviennent plus souvent ; les questions maîtrisées
 * s'espacent progressivement.
 */

export interface QuestionStat {
  /** Nombre de fois vue. */
  seen: number;
  /** Nombre de bonnes réponses. */
  correct: number;
  /** Série de bonnes réponses consécutives. */
  streak: number;
  /** Boîte de Leitner (0 = à revoir souvent … 5 = maîtrisée). */
  box: number;
  /** Dernière réponse (ISO). */
  last: string | null;
  /** Prochaine échéance de révision (timestamp ms). */
  due: number;
}

export const BOX_INTERVALS_DAYS = [0, 1, 2, 4, 8, 16];
const DAY_MS = 24 * 60 * 60 * 1000;

export function emptyStat(): QuestionStat {
  return { seen: 0, correct: 0, streak: 0, box: 0, last: null, due: 0 };
}

export function nextBox(box: number, correct: boolean): number {
  if (!correct) return 0;
  return Math.min(box + 1, BOX_INTERVALS_DAYS.length - 1);
}

/** Met à jour une stat après une réponse. */
export function applyAnswer(stat: QuestionStat, correct: boolean, now: number): QuestionStat {
  const box = nextBox(stat.box, correct);
  return {
    seen: stat.seen + 1,
    correct: stat.correct + (correct ? 1 : 0),
    streak: correct ? stat.streak + 1 : 0,
    box,
    last: new Date(now).toISOString(),
    due: now + BOX_INTERVALS_DAYS[box] * DAY_MS,
  };
}

/** Score de priorité pour la révision intelligente (plus grand = plus urgent). */
export function reviewPriority(stat: QuestionStat | undefined, now: number): number {
  if (!stat || stat.seen === 0) return 1000; // jamais vue → priorité haute
  const overdue = now - stat.due;
  // En retard → très prioritaire ; boîte basse (souvent ratée) → prioritaire.
  const overdueScore = overdue > 0 ? 500 + overdue / DAY_MS : 0;
  const boxScore = (BOX_INTERVALS_DAYS.length - stat.box) * 20;
  return overdueScore + boxScore;
}

export function isDue(stat: QuestionStat | undefined, now: number): boolean {
  if (!stat || stat.seen === 0) return true;
  return now >= stat.due;
}
