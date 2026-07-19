import type { ProgressState } from "./progress-types";
import type { Domaine } from "@/content/types";
import { getGalop } from "@/content";

export interface Progress {
  qcmTotal: number;
  qcmDone: number; // questions réussies au moins une fois
  qcmPct: number;
  checklistTotal: number;
  checklistDone: number;
  checklistPct: number;
  overall: number; // moyenne des deux (si disponibles)
}

function pct(done: number, total: number): number {
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

function combine(qcm: { done: number; total: number }, cl: { done: number; total: number }): Progress {
  const qcmPct = pct(qcm.done, qcm.total);
  const checklistPct = pct(cl.done, cl.total);
  const parts: number[] = [];
  if (qcm.total > 0) parts.push(qcmPct);
  if (cl.total > 0) parts.push(checklistPct);
  const overall = parts.length ? Math.round(parts.reduce((a, b) => a + b, 0) / parts.length) : 0;
  return {
    qcmTotal: qcm.total,
    qcmDone: qcm.done,
    qcmPct,
    checklistTotal: cl.total,
    checklistDone: cl.done,
    checklistPct,
    overall,
  };
}

/** Progression globale d'un galop (QCM réussis + checklist cochée). */
export function galopProgress(s: ProgressState, galopId: number): Progress {
  const g = getGalop(galopId);
  if (!g) return combine({ done: 0, total: 0 }, { done: 0, total: 0 });

  const questions = g.domaines.flatMap((d) => d.questions);
  const qcmDone = questions.filter((q) => (s.questions[q.id]?.correct ?? 0) > 0).length;

  const checklist = g.domaines.flatMap((d) => d.checklist);
  const clDone = checklist.filter((it) => s.checklist[it.id]).length;

  return combine(
    { done: qcmDone, total: questions.length },
    { done: clDone, total: checklist.length },
  );
}

/** Progression d'un domaine dans un galop. */
export function domaineProgress(s: ProgressState, galopId: number, domaine: Domaine): Progress {
  const g = getGalop(galopId);
  const d = g?.domaines.find((x) => x.domaine === domaine);
  if (!d) return combine({ done: 0, total: 0 }, { done: 0, total: 0 });

  const qcmDone = d.questions.filter((q) => (s.questions[q.id]?.correct ?? 0) > 0).length;
  const clDone = d.checklist.filter((it) => s.checklist[it.id]).length;

  return combine(
    { done: qcmDone, total: d.questions.length },
    { done: clDone, total: d.checklist.length },
  );
}

/** Précision par domaine, tous galops confondus (points forts / faibles). */
export function accuracyByDomaine(s: ProgressState): Record<Domaine, { seen: number; correct: number }> {
  const acc = {} as Record<Domaine, { seen: number; correct: number }>;
  for (const [id, stat] of Object.entries(s.questions)) {
    // On retrouve le domaine via l'index de contenu.
    const dom = questionDomaine(id);
    if (!dom) continue;
    if (!acc[dom]) acc[dom] = { seen: 0, correct: 0 };
    acc[dom].seen += stat.seen;
    acc[dom].correct += stat.correct;
  }
  return acc;
}

// Import tardif pour éviter les cycles au chargement.
import { QUESTION_INDEX } from "@/content";
function questionDomaine(id: string): Domaine | null {
  return QUESTION_INDEX.get(id)?.domaine ?? null;
}
