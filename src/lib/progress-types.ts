import type { QuestionStat } from "./spaced";

/** Compteur quotidien (objectif du jour). */
export interface DailyCounter {
  day: string; // AAAA-MM-JJ
  answered: number;
  correct: number;
}

/** Suivi de la série de jours de révision (streak). */
export interface StreakState {
  current: number;
  longest: number;
  lastDay: string | null; // AAAA-MM-JJ
}

/** État complet de la progression (persisté). */
export interface ProgressState {
  version: number;
  xp: number;
  /** itemId de checklist -> coché. */
  checklist: Record<string, boolean>;
  /** questionId -> statistiques (répétition espacée). */
  questions: Record<string, QuestionStat>;
  /** ids de badges débloqués. */
  badges: string[];
  streak: StreakState;
  /** Compteur du jour + historique par jour. */
  today: DailyCounter;
  history: DailyCounter[];
  totalAnswered: number;
  totalCorrect: number;
  /** Objectif quotidien de questions. */
  dailyGoal: number;
}

export const CURRENT_VERSION = 1;

export function initialProgress(): ProgressState {
  return {
    version: CURRENT_VERSION,
    xp: 0,
    checklist: {},
    questions: {},
    badges: [],
    streak: { current: 0, longest: 0, lastDay: null },
    today: { day: "", answered: 0, correct: 0 },
    history: [],
    totalAnswered: 0,
    totalCorrect: 0,
    dailyGoal: 10,
  };
}
