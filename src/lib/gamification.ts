import type { ProgressState } from "./progress-types";
import { GALOPS, getGalop } from "@/content";
import { DOMAINE_LABEL } from "@/content/domaines";

/* ─────────────────────────── XP & Niveaux ─────────────────────────── */

export const XP_PER_CORRECT = 10;
export const XP_PER_WRONG = 2; // on récompense l'effort

/** XP cumulé nécessaire pour atteindre un niveau donné (courbe douce). */
export function xpForLevel(level: number): number {
  // niveau 1 = 0 XP, puis 60, 150, 270, 420 … (croissance quadratique douce)
  return Math.round(30 * (level - 1) * level);
}

export interface LevelInfo {
  level: number;
  intoLevel: number; // XP acquis dans le niveau courant
  span: number; // XP total du niveau courant
  toNext: number; // XP restant avant le prochain niveau
}

export function levelInfo(xp: number): LevelInfo {
  let level = 1;
  while (xp >= xpForLevel(level + 1)) level++;
  const base = xpForLevel(level);
  const next = xpForLevel(level + 1);
  return {
    level,
    intoLevel: xp - base,
    span: next - base,
    toNext: next - xp,
  };
}

/* ─────────────────────────── Badges ─────────────────────────── */

export interface Badge {
  id: string;
  emoji: string;
  titre: string;
  description: string;
  /** Vrai si le badge est débloqué au vu de l'état. */
  unlocked: (s: ProgressState) => boolean;
}

/** Précision (0..1) sur un ensemble de questions, d'après les stats. */
function accuracyOn(s: ProgressState, questionIds: string[]): { seen: number; acc: number } {
  let seen = 0;
  let correct = 0;
  for (const id of questionIds) {
    const st = s.questions[id];
    if (st && st.seen > 0) {
      seen++;
      if (st.correct > 0) correct++;
    }
  }
  return { seen, acc: seen === 0 ? 0 : correct / seen };
}

/** Toutes les questions d'un galop ont été vues et réussies au moins une fois. */
function galopMastered(s: ProgressState, galopId: number): boolean {
  const g = getGalop(galopId);
  if (!g) return false;
  const ids = g.domaines.flatMap((d) => d.questions.map((q) => q.id));
  if (ids.length === 0) return false;
  return ids.every((id) => (s.questions[id]?.correct ?? 0) > 0);
}

/** Un domaine (au moins) est maîtrisé : toutes ses questions réussies. */
function anyDomaineMastered(s: ProgressState): string | null {
  for (const g of GALOPS) {
    for (const d of g.domaines) {
      if (d.questions.length === 0) continue;
      if (d.questions.every((q) => (s.questions[q.id]?.correct ?? 0) > 0)) {
        return `${g.titre} · ${DOMAINE_LABEL[d.domaine]}`;
      }
    }
  }
  return null;
}

/** Une checklist de galop est entièrement cochée. */
function anyChecklistComplete(s: ProgressState): boolean {
  for (const g of GALOPS) {
    const items = g.domaines.flatMap((d) => d.checklist);
    if (items.length === 0) continue;
    if (items.every((it) => s.checklist[it.id])) return true;
  }
  return false;
}

export const BADGES: Badge[] = [
  {
    id: "premiers-pas",
    emoji: "🐣",
    titre: "Premiers pas",
    description: "Répondre à ta première question",
    unlocked: (s) => s.totalAnswered >= 1,
  },
  {
    id: "objectif-du-jour",
    emoji: "🎯",
    titre: "Objectif atteint",
    description: "Atteindre ton objectif quotidien de questions",
    unlocked: (s) => s.today.answered >= s.dailyGoal,
  },
  {
    id: "serie-3",
    emoji: "🔥",
    titre: "En selle 3 jours",
    description: "Réviser 3 jours d'affilée",
    unlocked: (s) => s.streak.longest >= 3,
  },
  {
    id: "serie-7",
    emoji: "🏆",
    titre: "Semaine complète",
    description: "Réviser 7 jours d'affilée",
    unlocked: (s) => s.streak.longest >= 7,
  },
  {
    id: "50-bonnes",
    emoji: "⭐",
    titre: "50 bonnes réponses",
    description: "Cumuler 50 bonnes réponses",
    unlocked: (s) => s.totalCorrect >= 50,
  },
  {
    id: "100-bonnes",
    emoji: "🌟",
    titre: "Centurion",
    description: "Cumuler 100 bonnes réponses",
    unlocked: (s) => s.totalCorrect >= 100,
  },
  {
    id: "domaine-maitrise",
    emoji: "📗",
    titre: "Domaine maîtrisé",
    description: "Réussir toutes les questions d'un domaine",
    unlocked: (s) => anyDomaineMastered(s) !== null,
  },
  {
    id: "galop-complet",
    emoji: "🥇",
    titre: "Galop bouclé",
    description: "Réussir toutes les questions d'un galop",
    unlocked: (s) => GALOPS.some((g) => galopMastered(s, g.id)),
  },
  {
    id: "checklist-complete",
    emoji: "✅",
    titre: "Checklist au complet",
    description: "Cocher toute la checklist d'un galop",
    unlocked: (s) => anyChecklistComplete(s),
  },
];

/** Recalcule la liste des badges débloqués. */
export function computeBadges(s: ProgressState): string[] {
  return BADGES.filter((b) => b.unlocked(s)).map((b) => b.id);
}

export { accuracyOn, anyDomaineMastered };
