"use client";

import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import Disclaimer from "@/components/Disclaimer";
import ProgressBar from "@/components/ProgressBar";
import { useProgress } from "@/lib/store";
import { domaineProgress } from "@/lib/selectors";
import { getGalop, galopHasContent } from "@/content";
import { DOMAINE_META, SPECIALISATION_EMOJI, SPECIALISATION_LABEL } from "@/content/domaines";

export default function GalopClient({ id }: { id: number }) {
  const galop = getGalop(id);
  const progress = useProgress();

  if (!galop || !galopHasContent(galop)) {
    return (
      <div className="space-y-4">
        <AppHeader title={galop?.titre ?? "Galop"} emoji="🐴" back="/cours" />
        <div className="card text-center">
          <p className="text-4xl">🚧</p>
          <p className="mt-2 font-semibold">Contenu à venir</p>
          <p className="mt-1 text-sm text-brand-500 dark:text-brand-400">
            Le contenu de ce galop n&apos;est pas encore rédigé.
          </p>
          <Link href="/galop/1" className="btn-primary mt-4">
            Réviser le Galop 1
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <AppHeader title={galop.titre} emoji="🐴" back="/cours" />

      <section className="card">
        <div className="flex items-center gap-2">
          <p className="font-semibold">Ce que valide ce galop</p>
          {galop.niveau && <span className="chip py-0.5 text-xs">{galop.niveau}</span>}
        </div>
        <p className="mt-1 text-sm text-brand-600 dark:text-brand-300">{galop.resume}</p>
        {galop.specialisation && (
          <p className="mt-2 text-sm text-brand-600 dark:text-brand-300">
            Spécialisations :{" "}
            {galop.specialisation
              .map((s) => `${SPECIALISATION_EMOJI[s]} ${SPECIALISATION_LABEL[s]}`)
              .join(" · ")}
          </p>
        )}
      </section>

      <div className="flex gap-3">
        <Link href={`/qcm?galop=${galop.id}`} className="btn-primary flex-1">
          ❓ QCM du galop
        </Link>
      </div>

      <h2 className="pt-1 text-lg font-bold">Les 5 domaines</h2>
      <ul className="space-y-3">
        {galop.domaines.map((d) => {
          const meta = DOMAINE_META[d.domaine];
          const prog = domaineProgress(progress, galop.id, d.domaine);
          const nbCours = d.cours.length;
          const empty = nbCours + d.fiches.length + d.questions.length === 0;
          return (
            <li key={d.domaine}>
              <Link
                href={`/galop/${galop.id}/${d.domaine}`}
                className={`card flex items-center gap-4 ${empty ? "opacity-60" : ""}`}
              >
                <span className="text-2xl">{meta.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{meta.libelle}</p>
                  <p className="text-xs text-brand-500 dark:text-brand-400">
                    {nbCours} cours · {d.questions.length} questions · {d.checklist.length} acquis
                  </p>
                  {!empty && <ProgressBar value={prog.overall} className="mt-1.5" />}
                </div>
                <span className="text-brand-400">›</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <Disclaimer />
    </div>
  );
}
