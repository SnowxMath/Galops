"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Question } from "@/content/types";
import { useProgressActions } from "@/lib/store";
import { XP_PER_CORRECT, XP_PER_WRONG } from "@/lib/gamification";
import { DOMAINE_LABEL } from "@/content/domaines";

interface RunResult {
  question: Question;
  correct: boolean;
}

const TIME_PER_QUESTION = 25; // secondes en mode chronométré

export default function QuizEngine({
  questions,
  timed = false,
  onRestart,
}: {
  questions: Question[];
  timed?: boolean;
  onRestart: () => void;
}) {
  const { recordAnswer } = useProgressActions();

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<RunResult[]>([]);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const recordedRef = useRef(false);

  const q = questions[index];
  const correctIds = useMemo(
    () => new Set(q?.choix.filter((c) => c.correct).map((c) => c.id)),
    [q],
  );
  const multi = correctIds.size > 1;

  // Ordre des choix mélangé une fois par question.
  const shuffledChoices = useMemo(() => {
    if (!q) return [];
    return [...q.choix].sort(() => Math.random() - 0.5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q?.id]);

  const isCorrect = useMemo(() => {
    if (selected.size !== correctIds.size) return false;
    for (const id of selected) if (!correctIds.has(id)) return false;
    return true;
  }, [selected, correctIds]);

  // Minuteur (mode chronométré).
  useEffect(() => {
    if (!timed || validated || !q) return;
    setTimeLeft(TIME_PER_QUESTION);
    const t = setInterval(() => {
      setTimeLeft((v) => {
        if (v <= 1) {
          clearInterval(t);
          validate();
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, timed]);

  // Attention : ne pas court-circuiter quand on a atteint la fin du quiz
  // (index === questions.length) — l'écran de résultat doit alors s'afficher.
  if (!q && index < questions.length) return null;

  function toggle(id: string) {
    if (validated) return;
    setSelected((prev) => {
      const next = new Set(multi ? prev : []);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function validate() {
    if (validated || recordedRef.current) return;
    recordedRef.current = true;
    const ok = (() => {
      if (selected.size !== correctIds.size) return false;
      for (const id of selected) if (!correctIds.has(id)) return false;
      return selected.size > 0;
    })();
    recordAnswer(q.id, ok);
    setResults((r) => [...r, { question: q, correct: ok }]);
    setValidated(true);
  }

  function next() {
    recordedRef.current = false;
    setSelected(new Set());
    setValidated(false);
    setIndex((i) => i + 1);
  }

  // ── Écran de fin ──
  if (index >= questions.length) {
    const good = results.filter((r) => r.correct).length;
    const wrong = results.filter((r) => !r.correct);
    const xpGained = good * XP_PER_CORRECT + wrong.length * XP_PER_WRONG;
    const pct = Math.round((good / results.length) * 100);
    return (
      <div className="space-y-4">
        <section className="card text-center">
          <p className="text-5xl">{pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "💪"}</p>
          <h2 className="mt-2 text-2xl font-extrabold">
            {good} / {results.length}
          </h2>
          <p className="text-brand-500 dark:text-brand-400">{pct}% de réussite</p>
          <p className="mt-1 text-sm font-semibold text-prairie-600 dark:text-prairie-400">
            +{xpGained} XP
          </p>
        </section>

        {wrong.length > 0 && (
          <section className="space-y-2">
            <h3 className="font-bold">À revoir ({wrong.length})</h3>
            {wrong.map((r) => (
              <div key={r.question.id} className="card">
                <p className="text-sm font-medium">{r.question.enonce}</p>
                <p className="mt-1 text-sm text-prairie-700 dark:text-prairie-300">
                  ✓ {r.question.choix.find((c) => c.correct)?.texte}
                </p>
                <p className="mt-1 text-xs text-brand-500 dark:text-brand-400">
                  {r.question.explication_incorrecte}
                </p>
              </div>
            ))}
          </section>
        )}

        <div className="flex gap-3">
          <button onClick={onRestart} className="btn-secondary flex-1">
            ↻ Nouveau QCM
          </button>
          <Link href="/" className="btn-primary flex-1">
            Accueil
          </Link>
        </div>
      </div>
    );
  }

  // ── Écran d'une question ──
  return (
    <div className="space-y-4">
      {/* Barre de progression */}
      <div>
        <div className="mb-1 flex justify-between text-xs text-brand-500 dark:text-brand-400">
          <span>
            Question {index + 1} / {questions.length}
          </span>
          <span>{DOMAINE_LABEL[q.domaine]}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-brand-200 dark:bg-brand-700">
          <div
            className="h-full rounded-full bg-prairie-500 transition-all"
            style={{ width: `${(index / questions.length) * 100}%` }}
          />
        </div>
        {timed && !validated && (
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-amber-200 dark:bg-amber-900/40">
            <div
              className="h-full rounded-full bg-amber-500 transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / TIME_PER_QUESTION) * 100}%` }}
            />
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="text-lg font-semibold leading-snug">{q.enonce}</h2>
        {multi && (
          <p className="mt-1 text-xs text-brand-500 dark:text-brand-400">
            Plusieurs réponses possibles.
          </p>
        )}
        <div className="mt-3 space-y-2">
          {shuffledChoices.map((c) => {
            const chosen = selected.has(c.id);
            let cls =
              "w-full text-left rounded-xl border p-3.5 text-base transition flex items-center gap-3 ";
            if (!validated) {
              cls += chosen
                ? "border-prairie-500 bg-prairie-500/10 dark:bg-prairie-500/20"
                : "border-brand-200 bg-white hover:border-brand-300 dark:border-brand-600 dark:bg-brand-800";
            } else if (c.correct) {
              cls += "border-prairie-500 bg-prairie-500/15 dark:bg-prairie-500/25";
            } else if (chosen) {
              cls += "border-red-400 bg-red-50 dark:border-red-500/60 dark:bg-red-900/20";
            } else {
              cls += "border-brand-200 bg-white opacity-70 dark:border-brand-700 dark:bg-brand-800";
            }
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => toggle(c.id)}
                disabled={validated}
                className={cls}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-sm ${
                    chosen ? "border-prairie-500 bg-prairie-500 text-white" : "border-brand-300"
                  }`}
                >
                  {validated && c.correct ? "✓" : validated && chosen ? "✕" : ""}
                </span>
                <span className="flex-1">{c.texte}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Correction expliquée */}
      {validated && (
        <div
          className={`rounded-2xl border p-4 ${
            isCorrect
              ? "border-prairie-400 bg-prairie-50 dark:border-prairie-600/60 dark:bg-prairie-900/20"
              : "border-red-300 bg-red-50 dark:border-red-600/60 dark:bg-red-900/20"
          }`}
        >
          <p className="font-bold">
            {isCorrect ? "✅ Bonne réponse !" : "❌ Pas tout à fait…"}
          </p>
          <p className="mt-1 text-sm leading-relaxed">
            {isCorrect ? q.explication_correcte : q.explication_incorrecte}
          </p>
          <p className="mt-2 text-[11px] text-brand-400">Source : {q.source}</p>
        </div>
      )}

      {/* Actions */}
      {!validated ? (
        <button onClick={validate} disabled={selected.size === 0} className="btn-primary w-full">
          Valider
        </button>
      ) : (
        <button onClick={next} className="btn-primary w-full">
          {index + 1 >= questions.length ? "Voir mon résultat" : "Question suivante →"}
        </button>
      )}
    </div>
  );
}
