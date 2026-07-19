"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import AppHeader from "@/components/AppHeader";
import Disclaimer from "@/components/Disclaimer";
import QuizEngine from "@/components/QuizEngine";
import { GALOPS, allQuestions, questionsForGalop } from "@/content";
import type { Domaine, Question } from "@/content/types";
import { DOMAINES, DOMAINE_LABEL } from "@/content/domaines";
import { useProgress } from "@/lib/store";
import { reviewPriority } from "@/lib/spaced";

type GalopFilter = number | "all";
type DomaineFilter = Domaine | "all";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function QcmSetup() {
  const params = useSearchParams();
  const progress = useProgress();

  const initialGalop: GalopFilter = params.get("galop") ? Number(params.get("galop")) : 1;
  const initialDomaine: DomaineFilter = (params.get("domaine") as Domaine) || "all";

  const [galop, setGalop] = useState<GalopFilter>(initialGalop);
  const [domaine, setDomaine] = useState<DomaineFilter>(initialDomaine);
  const [smart, setSmart] = useState(false);
  const [timed, setTimed] = useState(false);
  const [count, setCount] = useState<number | "all">(10);
  const [run, setRun] = useState<Question[] | null>(null);

  // Galops qui ont des questions.
  const availableGalops = GALOPS.filter((g) => questionsForGalop(g.id).length > 0);

  // Pool de questions selon les filtres.
  const pool = useMemo(() => {
    let qs = galop === "all" ? allQuestions() : questionsForGalop(galop);
    if (domaine !== "all") qs = qs.filter((q) => q.domaine === domaine);
    return qs;
  }, [galop, domaine]);

  function start() {
    let qs = [...pool];
    if (smart) {
      const now = Date.now();
      qs.sort(
        (a, b) =>
          reviewPriority(progress.questions[b.id], now) -
          reviewPriority(progress.questions[a.id], now),
      );
    } else {
      qs = shuffle(qs);
    }
    if (count !== "all") qs = qs.slice(0, count);
    if (qs.length === 0) return;
    setRun(qs);
  }

  if (run) {
    return (
      <div className="space-y-4">
        <AppHeader title="QCM" emoji="❓" back="/qcm" />
        <QuizEngine questions={run} timed={timed} onRestart={() => setRun(null)} />
      </div>
    );
  }

  const domainesForGalop =
    galop === "all"
      ? DOMAINES
      : DOMAINES.filter((d) =>
          questionsForGalop(galop).some((q) => q.domaine === d.id),
        );

  return (
    <div className="space-y-5">
      <AppHeader title="QCM" emoji="❓" back="/" />

      {/* Galop */}
      <section>
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-500">Galop</h2>
        <div className="flex flex-wrap gap-2">
          <button
            className={`chip ${galop === "all" ? "chip-active" : ""}`}
            onClick={() => setGalop("all")}
          >
            Tout mélangé
          </button>
          {availableGalops.map((g) => (
            <button
              key={g.id}
              className={`chip ${galop === g.id ? "chip-active" : ""}`}
              onClick={() => {
                setGalop(g.id);
                setDomaine("all");
              }}
            >
              G{g.id}
            </button>
          ))}
        </div>
      </section>

      {/* Domaine */}
      <section>
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-500">Domaine</h2>
        <div className="flex flex-wrap gap-2">
          <button
            className={`chip ${domaine === "all" ? "chip-active" : ""}`}
            onClick={() => setDomaine("all")}
          >
            Tous
          </button>
          {domainesForGalop.map((d) => (
            <button
              key={d.id}
              className={`chip ${domaine === d.id ? "chip-active" : ""}`}
              onClick={() => setDomaine(d.id)}
            >
              {d.emoji} {DOMAINE_LABEL[d.id]}
            </button>
          ))}
        </div>
      </section>

      {/* Nombre de questions */}
      <section>
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-500">
          Nombre de questions
        </h2>
        <div className="flex flex-wrap gap-2">
          {[5, 10, 20].map((n) => (
            <button
              key={n}
              className={`chip ${count === n ? "chip-active" : ""}`}
              onClick={() => setCount(n)}
            >
              {n}
            </button>
          ))}
          <button
            className={`chip ${count === "all" ? "chip-active" : ""}`}
            onClick={() => setCount("all")}
          >
            Toutes
          </button>
        </div>
      </section>

      {/* Modes */}
      <section className="space-y-2">
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-500">Mode</h2>
        <label className="card flex cursor-pointer items-center justify-between">
          <span>
            <span className="font-semibold">🧠 Révision intelligente</span>
            <span className="block text-xs text-brand-500 dark:text-brand-400">
              Les questions ratées reviennent en priorité.
            </span>
          </span>
          <input
            type="checkbox"
            checked={smart}
            onChange={(e) => setSmart(e.target.checked)}
            className="h-6 w-6 accent-prairie-500"
          />
        </label>
        <label className="card flex cursor-pointer items-center justify-between">
          <span>
            <span className="font-semibold">⏱️ Chronométré</span>
            <span className="block text-xs text-brand-500 dark:text-brand-400">
              25 s par question, comme en condition d&apos;examen.
            </span>
          </span>
          <input
            type="checkbox"
            checked={timed}
            onChange={(e) => setTimed(e.target.checked)}
            className="h-6 w-6 accent-prairie-500"
          />
        </label>
      </section>

      <p className="text-center text-sm text-brand-500 dark:text-brand-400">
        {pool.length} question{pool.length > 1 ? "s" : ""} disponible
        {pool.length > 1 ? "s" : ""} avec ces filtres.
      </p>

      <button onClick={start} disabled={pool.length === 0} className="btn-primary w-full">
        Commencer
      </button>

      <Disclaimer compact />
    </div>
  );
}

export default function QcmPage() {
  // useSearchParams nécessite une frontière Suspense au prérendu.
  return (
    <Suspense fallback={<div className="p-8 text-center">Chargement…</div>}>
      <QcmSetup />
    </Suspense>
  );
}
