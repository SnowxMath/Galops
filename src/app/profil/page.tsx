"use client";

import AppHeader from "@/components/AppHeader";
import ProgressBar from "@/components/ProgressBar";
import { useProgress, useProgressActions } from "@/lib/store";
import { levelInfo, BADGES } from "@/lib/gamification";
import { accuracyByDomaine } from "@/lib/selectors";
import { DOMAINES, DOMAINE_LABEL } from "@/content/domaines";

export default function ProfilPage() {
  const progress = useProgress();
  const { setDailyGoal, reset } = useProgressActions();
  const lvl = levelInfo(progress.xp);
  const unlocked = new Set(progress.badges);
  const acc = accuracyByDomaine(progress);
  const globalAcc =
    progress.totalAnswered === 0
      ? 0
      : Math.round((progress.totalCorrect / progress.totalAnswered) * 100);

  // Points forts / faibles (domaines vus, triés par précision).
  const domainePerf = DOMAINES.map((d) => {
    const a = acc[d.id];
    return {
      id: d.id,
      libelle: DOMAINE_LABEL[d.id],
      emoji: d.emoji,
      seen: a?.seen ?? 0,
      pct: a && a.seen > 0 ? Math.round((a.correct / a.seen) * 100) : null,
    };
  }).filter((d) => d.seen > 0);
  domainePerf.sort((a, b) => (b.pct ?? 0) - (a.pct ?? 0));

  function confirmReset() {
    if (window.confirm("Effacer toute ta progression ? Cette action est irréversible.")) {
      reset();
    }
  }

  return (
    <div className="space-y-5">
      <AppHeader title="Profil" emoji="🏅" back="/" />

      {/* Niveau + XP */}
      <section className="card">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full bg-prairie-500 text-white">
            <span className="text-[10px] leading-none opacity-90">NIV.</span>
            <span className="text-2xl font-extrabold leading-none">{lvl.level}</span>
          </div>
          <div className="flex-1">
            <ProgressBar
              value={Math.round((lvl.intoLevel / Math.max(1, lvl.span)) * 100)}
              label={`${progress.xp} XP · encore ${lvl.toNext} avant niv. ${lvl.level + 1}`}
            />
          </div>
        </div>
      </section>

      {/* Stats clés */}
      <section className="grid grid-cols-3 gap-3">
        <Stat label="Série" value={`${progress.streak.current} j`} sub={`record ${progress.streak.longest}`} />
        <Stat label="Répondu" value={`${progress.totalAnswered}`} sub={`${progress.totalCorrect} justes`} />
        <Stat label="Précision" value={`${globalAcc}%`} sub="global" />
      </section>

      {/* Points forts / faibles */}
      {domainePerf.length > 0 && (
        <section className="card">
          <h2 className="mb-3 font-bold">Par domaine</h2>
          <div className="space-y-3">
            {domainePerf.map((d) => (
              <ProgressBar
                key={d.id}
                value={d.pct ?? 0}
                label={`${d.emoji} ${d.libelle}`}
              />
            ))}
          </div>
          {domainePerf.length >= 2 && (
            <p className="mt-3 text-xs text-brand-500 dark:text-brand-400">
              💪 Point fort : {domainePerf[0].emoji} {domainePerf[0].libelle} · 🎯 À travailler :{" "}
              {domainePerf[domainePerf.length - 1].emoji}{" "}
              {domainePerf[domainePerf.length - 1].libelle}
            </p>
          )}
        </section>
      )}

      {/* Badges */}
      <section className="card">
        <h2 className="mb-3 font-bold">
          Badges{" "}
          <span className="text-sm font-normal text-brand-500">
            ({unlocked.size}/{BADGES.length})
          </span>
        </h2>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {BADGES.map((b) => {
            const on = unlocked.has(b.id);
            return (
              <div
                key={b.id}
                className={`flex flex-col items-center rounded-xl border p-3 text-center ${
                  on
                    ? "border-prairie-400 bg-prairie-50 dark:border-prairie-600/60 dark:bg-prairie-900/20"
                    : "border-brand-200 bg-brand-50 opacity-50 dark:border-brand-700 dark:bg-brand-800"
                }`}
                title={b.description}
              >
                <span className="text-3xl">{on ? b.emoji : "🔒"}</span>
                <span className="mt-1 text-[11px] font-semibold leading-tight">{b.titre}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Objectif quotidien */}
      <section className="card">
        <h2 className="mb-2 font-bold">Objectif quotidien</h2>
        <div className="flex flex-wrap gap-2">
          {[5, 10, 15, 20].map((n) => (
            <button
              key={n}
              onClick={() => setDailyGoal(n)}
              className={`chip ${progress.dailyGoal === n ? "chip-active" : ""}`}
            >
              {n} / jour
            </button>
          ))}
        </div>
      </section>

      <button onClick={confirmReset} className="btn-secondary w-full text-red-600 dark:text-red-400">
        Réinitialiser ma progression
      </button>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="card items-center py-3 text-center">
      <p className="text-xs text-brand-500 dark:text-brand-400">{label}</p>
      <p className="text-xl font-extrabold">{value}</p>
      {sub && <p className="text-[10px] text-brand-400">{sub}</p>}
    </div>
  );
}
