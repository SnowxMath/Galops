"use client";

import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import Disclaimer from "@/components/Disclaimer";
import ProgressBar from "@/components/ProgressBar";
import { useProgress } from "@/lib/store";
import { levelInfo } from "@/lib/gamification";
import { galopProgress } from "@/lib/selectors";
import { GALOPS, galopHasContent, questionCount } from "@/content";

const ACTIONS = [
  { href: "/qcm", label: "Lancer un QCM", icon: "❓", cls: "bg-prairie-500 text-white shadow-pop" },
  { href: "/cours", label: "Lire les cours", icon: "📖", cls: "bg-sky2-500 text-white" },
  { href: "/reviser", label: "Fiches & checklist", icon: "🗂️", cls: "bg-accent-500 text-white" },
  { href: "/profil", label: "Ma progression", icon: "🏅", cls: "bg-brand-800 text-white dark:bg-brand-700" },
];

export default function HomePage() {
  const progress = useProgress();
  const lvl = levelInfo(progress.xp);
  const goalPct = Math.min(100, Math.round((progress.today.answered / progress.dailyGoal) * 100));

  return (
    <div className="space-y-6">
      <AppHeader title="Galops" emoji="🐴" />

      {/* Hero : niveau, XP, objectif du jour */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-prairie-500 to-prairie-700 p-5 text-white shadow-pop">
        <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-16 -left-8 h-40 w-40 rounded-full bg-white/10" />
        <div className="relative">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-sm/none opacity-90">Niveau</p>
              <p className="text-5xl font-black leading-none">{lvl.level}</p>
            </div>
            <div className="flex gap-2">
              <span className="rounded-2xl bg-white/15 px-3 py-2 text-center backdrop-blur">
                <span className="block text-lg font-black leading-none">{progress.streak.current}</span>
                <span className="text-[11px] opacity-90">🔥 jours</span>
              </span>
              <span className="rounded-2xl bg-white/15 px-3 py-2 text-center backdrop-blur">
                <span className="block text-lg font-black leading-none">{progress.xp}</span>
                <span className="text-[11px] opacity-90">✨ XP</span>
              </span>
            </div>
          </div>

          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs font-medium opacity-95">
              <span>Objectif du jour · {progress.today.answered}/{progress.dailyGoal}</span>
              <span>{goalPct}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-black/15">
              <div
                className="h-full rounded-full bg-white transition-all duration-500"
                style={{ width: `${goalPct}%` }}
              />
            </div>
            <p className="mt-2 text-xs opacity-90">
              Encore {lvl.toNext} XP avant le niveau {lvl.level + 1} 💪
            </p>
          </div>
        </div>
      </section>

      {/* Actions rapides colorées */}
      <section className="grid grid-cols-2 gap-3">
        {ACTIONS.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className={`flex flex-col gap-2 rounded-3xl p-4 font-bold shadow-soft transition-all active:scale-[0.97] ${a.cls}`}
          >
            <span className="text-3xl">{a.icon}</span>
            <span className="text-[15px] leading-tight">{a.label}</span>
          </Link>
        ))}
      </section>

      {/* Galops */}
      <section className="space-y-3">
        <h2 className="px-1 text-lg font-extrabold">Tes Galops</h2>
        {GALOPS.map((g) => {
          const has = galopHasContent(g);
          const prog = galopProgress(progress, g.id);
          return (
            <Link
              key={g.id}
              href={has ? `/galop/${g.id}` : "/cours"}
              className={`card flex items-center gap-4 ${has ? "" : "opacity-70"}`}
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-black ${
                  has
                    ? "bg-prairie-500 text-white shadow-pop"
                    : "bg-brand-100 text-brand-500 dark:bg-brand-700 dark:text-brand-300"
                }`}
              >
                G{g.id}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate font-bold">{g.titre}</p>
                  {g.niveau && <span className="chip py-0.5 text-xs">{g.niveau}</span>}
                  {!has && <span className="chip py-0.5 text-xs">Bientôt</span>}
                </div>
                {has ? (
                  <ProgressBar value={prog.overall} className="mt-2" />
                ) : (
                  <p className="mt-0.5 truncate text-sm text-brand-500 dark:text-brand-400">{g.resume}</p>
                )}
              </div>
              {has && (
                <span className="shrink-0 text-lg font-black text-prairie-600 dark:text-prairie-400">
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
