"use client";

import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import Disclaimer from "@/components/Disclaimer";
import ProgressBar from "@/components/ProgressBar";
import { useProgress } from "@/lib/store";
import { galopProgress } from "@/lib/selectors";
import { GALOPS, galopHasContent } from "@/content";

export default function CoursPage() {
  const progress = useProgress();

  return (
    <div className="space-y-4">
      <AppHeader title="Cours" emoji="📖" back="/" />
      <p className="text-sm text-brand-600 dark:text-brand-300">
        Choisis un galop, puis un domaine, pour lire le cours et les schémas.
      </p>

      <ul className="space-y-3">
        {GALOPS.map((g) => {
          const has = galopHasContent(g);
          const prog = galopProgress(progress, g.id);
          return (
            <li key={g.id}>
              {has ? (
                <Link href={`/galop/${g.id}`} className="card flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-prairie-500 text-lg font-extrabold text-white">
                    G{g.id}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{g.titre}</p>
                    <p className="line-clamp-2 text-sm text-brand-500 dark:text-brand-400">
                      {g.resume}
                    </p>
                    <ProgressBar value={prog.overall} className="mt-1.5" />
                  </div>
                </Link>
              ) : (
                <div className="card flex items-center gap-4 opacity-70">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-200 text-lg font-extrabold text-brand-600 dark:bg-brand-700 dark:text-brand-200">
                    G{g.id}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{g.titre}</p>
                      <span className="chip py-0.5 text-xs">Bientôt</span>
                    </div>
                    <p className="line-clamp-2 text-sm text-brand-500 dark:text-brand-400">
                      {g.resume}
                    </p>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <Disclaimer />
    </div>
  );
}
