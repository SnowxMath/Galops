"use client";

import { useCallback, useSyncExternalStore } from "react";
import { defaultAdapter, type StorageAdapter } from "./storage";
import {
  type ProgressState,
  CURRENT_VERSION,
  initialProgress,
} from "./progress-types";
import { applyAnswer, emptyStat } from "./spaced";
import { XP_PER_CORRECT, XP_PER_WRONG, computeBadges } from "./gamification";

const STORAGE_KEY = "galops.progress.v1";

/* ─────────── Utilitaires date (jour local AAAA-MM-JJ) ─────────── */

function todayKey(now = Date.now()): string {
  const d = new Date(now);
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function isYesterday(prev: string, today: string): boolean {
  const p = new Date(prev + "T00:00:00");
  const t = new Date(today + "T00:00:00");
  return t.getTime() - p.getTime() === 24 * 60 * 60 * 1000;
}

/* ─────────── Store minimal réactif (useSyncExternalStore) ─────────── */

class ProgressStore {
  private state: ProgressState;
  private listeners = new Set<() => void>();
  private adapter: StorageAdapter;
  private hydrated = false;

  constructor(adapter: StorageAdapter) {
    this.adapter = adapter;
    this.state = initialProgress();
  }

  /** Charge l'état persistant (à appeler côté client au montage). */
  hydrate() {
    if (this.hydrated) return;
    this.hydrated = true;
    const loaded = this.adapter.load<ProgressState>(STORAGE_KEY);
    if (loaded && loaded.version === CURRENT_VERSION) {
      this.state = { ...initialProgress(), ...loaded };
      this.rolloverDay();
    }
    this.emit();
  }

  subscribe = (cb: () => void) => {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  };

  getSnapshot = () => this.state;
  getServerSnapshot = () => this.state;

  private emit() {
    for (const l of this.listeners) l();
  }

  private commit(next: ProgressState) {
    this.state = next;
    this.adapter.save(STORAGE_KEY, next);
    this.emit();
  }

  /** Bascule le compteur du jour si on a changé de journée. */
  private rolloverDay(now = Date.now()) {
    const day = todayKey(now);
    if (this.state.today.day !== day) {
      const history = this.state.today.day
        ? [...this.state.history, this.state.today].slice(-90)
        : this.state.history;
      this.state = { ...this.state, today: { day, answered: 0, correct: 0 }, history };
    }
  }

  /** Enregistre une réponse à une question. */
  recordAnswer(questionId: string, correct: boolean) {
    const now = Date.now();
    this.rolloverDay(now);
    const s = this.state;

    const stat = applyAnswer(s.questions[questionId] ?? emptyStat(), correct, now);
    const questions = { ...s.questions, [questionId]: stat };

    const day = todayKey(now);
    const today = {
      day,
      answered: s.today.answered + 1,
      correct: s.today.correct + (correct ? 1 : 0),
    };

    // Streak : on incrémente au premier passage de la journée.
    let streak = s.streak;
    if (s.streak.lastDay !== day) {
      const current =
        s.streak.lastDay && isYesterday(s.streak.lastDay, day) ? s.streak.current + 1 : 1;
      streak = {
        current,
        longest: Math.max(current, s.streak.longest),
        lastDay: day,
      };
    }

    const xp = s.xp + (correct ? XP_PER_CORRECT : XP_PER_WRONG);

    const next: ProgressState = {
      ...s,
      questions,
      today,
      streak,
      xp,
      totalAnswered: s.totalAnswered + 1,
      totalCorrect: s.totalCorrect + (correct ? 1 : 0),
    };
    next.badges = computeBadges(next);
    this.commit(next);
  }

  toggleChecklist(itemId: string) {
    const s = this.state;
    const checklist = { ...s.checklist, [itemId]: !s.checklist[itemId] };
    const next = { ...s, checklist };
    next.badges = computeBadges(next);
    this.commit(next);
  }

  setDailyGoal(goal: number) {
    this.commit({ ...this.state, dailyGoal: Math.max(1, Math.min(100, goal)) });
  }

  reset() {
    const fresh = initialProgress();
    fresh.today = { day: todayKey(), answered: 0, correct: 0 };
    this.commit(fresh);
  }
}

export const progressStore = new ProgressStore(defaultAdapter);

/** Hook principal : état de progression réactif. */
export function useProgress(): ProgressState {
  return useSyncExternalStore(
    progressStore.subscribe,
    progressStore.getSnapshot,
    progressStore.getServerSnapshot,
  );
}

/** Actions liées (stables). */
export function useProgressActions() {
  return {
    recordAnswer: useCallback(
      (id: string, correct: boolean) => progressStore.recordAnswer(id, correct),
      [],
    ),
    toggleChecklist: useCallback((id: string) => progressStore.toggleChecklist(id), []),
    setDailyGoal: useCallback((g: number) => progressStore.setDailyGoal(g), []),
    reset: useCallback(() => progressStore.reset(), []),
  };
}

export { todayKey };
