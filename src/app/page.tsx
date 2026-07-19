"use client";

import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import Disclaimer from "@/components/Disclaimer";
import ProgressBar from "@/components/ProgressBar";
import { useProgress } from "@/lib/store";
import { levelInfo } from "@/lib/gamification";
import { galopProgress } from "@/lib/selectors";
import { GALOPS, galopHasContent, questionCount } from "@/content";

export default function HomePage() {
  const progress = useProgress();
  const lvl = levelInfo(progress.xp);
  const goalPct = Math.min(100, Math.round((progress.today.answered / progress.dailyGoal) * 100));

  return (
    <div className="space-y-5">
      <AppHeader title="Galops" emoji="🐴" />

      {/* Carte niveau + objectif du jour */}
      <section className="card space-y-4 bg-gradient-to-br from-prairie-500 to-prairie-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm/none opacity-90">Niveau</p>
            <p className="text-3xl font-extrabold">{lvl.level}</p>
          </div>
          <div className="text-right">
            <p className="text-sm/none opacity-90">Série 🔥</p>
            <p className="text-3xl font-extrabold">{progress.streak.current} j</p>
          </div>
          <div className="text-right">
            <p className="text-sm/none opacity-90">XP</p>
            <p className="text-3xl font-extrabold">{progress.xp}</p>
          </div>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-xs opacity-90">
            <span>Objectif du jour : {progress.today.answered}/{progress.dailyGoal} questions</span>
            <span>{goalPct}%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/30">
            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{ width: `${goalPct}%` }}
            />
          </div>
          <p className="mt-1 text-xs opacity-90">
            Encore {lvl.toNext} XP avant le niveau {lvl.level + 1}.
          </p>
        </div>
      </section>

      {/* Actions rapides */}
      <section className="grid grid-cols-2 gap-3">
        <Link href="/qcm" className="btn-primary h-auto flex-col py-5 text-center">
          <span className="text-2xl">❓</span>
          Lancer un QCM
        </Link>
        <Link href="/cours" className="btn-secondary h-auto flex-col py-5 text-center">
          <span className="text-2xl">📖</span>
          Lire les cours
        </Link>
        <Link href="/reviser" className="btn-secondary h-auto flex-col py-4 text-center">
          <span className="text-2xl">🗂️</span>
          Fiches & checklist
        </Link>
        <Link href="/profil" className="btn-secondary h-auto flex-col py-4 text-center">
          <span className="text-2xl">🏅</span>
          Ma progression
        </Link>
      </section>

      {/* Galops */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold">Tes Galops</h2>
        {GALOPS.map((g) => {
          const has = galopHasContent(g);
          const prog = galopProgress(progress, g.id);
          return (
            <Link
              key={g.id}
              href={has ? `/galop/${g.id}` : "/cours"}
              className={`card flex items-center gap-4 ${has ? "" : "opacity-60"}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-extrabold text-brand-700 dark:bg-brand-700 dark:text-brand-100">
                G{g.id}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate font-semibold">{g.titre}</p>
                  {g.niveau && (
                    <span className="chip py-0.5 text-xs">{g.niveau}</span>
                  )}
                  {!has && <span className="chip py-0.5 text-xs">Bientôt</span>}
                </div>
                {has ? (
                  <ProgressBar value={prog.overall} className="mt-1.5" />
                ) : (
                  <p className="truncate text-sm text-brand-500 dark:text-brand-400">{g.resume}</p>
                )}
              </div>
              {has && (
                <span className="shrink-0 text-sm font-bold text-prairie-600 dark:text-prairie-400">
                  {prog.overall}%
                </span>
              )}
            </Link>
          );
        })}
      </section>

      <Disclaimer />
      <p className="pb-2 text-center text-xs text-brand-400">
        {questionCount(1)} questions disponibles pour le Galop 1.
      </p>
    </div>
  );
}
