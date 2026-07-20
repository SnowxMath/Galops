"use client";

import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import Disclaimer from "@/components/Disclaimer";
import ProgressBar from "@/components/ProgressBar";
import MemoList from "@/components/MemoList";
import AnnotatedImage from "@/components/AnnotatedImage";
import { GALOPS, galopHasContent, getGalop } from "@/content";
import { DOMAINE_META } from "@/content/domaines";
import { useProgress, useProgressActions } from "@/lib/store";
import { galopProgress } from "@/lib/selectors";

type Tab = "fiches" | "checklist";

export default function ReviserPage() {
  const progress = useProgress();
  const { toggleChecklist } = useProgressActions();
  const withContent = GALOPS.filter(galopHasContent);
  const [galopId, setGalopId] = useState(withContent[0]?.id ?? 1);
  const [tab, setTab] = useState<Tab>("fiches");

  const galop = getGalop(galopId);
  const prog = galopProgress(progress, galopId);

  return (
    <div className="space-y-4">
      <AppHeader title="Réviser" emoji="🗂️" back="/" />

      {/* Sélecteur de galop */}
      {withContent.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {withContent.map((g) => (
            <button
              key={g.id}
              onClick={() => setGalopId(g.id)}
              className={`chip ${galopId === g.id ? "chip-active" : ""}`}
            >
              G{g.id}
            </button>
          ))}
        </div>
      )}

      {/* Onglets */}
      <div className="flex rounded-xl bg-brand-100 p-1 dark:bg-brand-800">
        {(["fiches", "checklist"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 rounded-lg py-2 text-sm font-semibold transition ${
              tab === t
                ? "bg-white text-brand-900 shadow-sm dark:bg-brand-600 dark:text-white"
                : "text-brand-500 dark:text-brand-300"
            }`}
          >
            {t === "fiches" ? "🗂️ Fiches" : "✅ Checklist"}
          </button>
        ))}
      </div>

      {!galop ? null : tab === "fiches" ? (
        <div className="space-y-4">
          {galop.domaines.flatMap((d) =>
            d.fiches.map((f) => (
              <article key={f.id} className="card">
                <div className="mb-1 flex items-center gap-2">
                  <span>{DOMAINE_META[d.domaine].emoji}</span>
                  <h2 className="font-bold">{f.titre}</h2>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {f.points_cles.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed">
                      <span className="text-prairie-500">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {f.schema && f.schema.type === "image" && f.schema.src && f.schema.points ? (
                  <AnnotatedImage
                    titre={f.schema.legende}
                    src={f.schema.src}
                    points={f.schema.points}
                  />
                ) : f.schema && f.schema.type === "memo" && f.schema.parties ? (
                  <MemoList titre={f.schema.legende} items={f.schema.parties} />
                ) : null}
              </article>
            )),
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <ProgressBar
            value={prog.checklistPct}
            label={`Acquis cochés : ${prog.checklistDone}/${prog.checklistTotal}`}
            className="card"
          />
          {galop.domaines.map((d) =>
            d.checklist.length === 0 ? null : (
              <section key={d.domaine} className="card">
                <h2 className="mb-2 flex items-center gap-2 font-bold">
                  <span>{DOMAINE_META[d.domaine].emoji}</span>
                  {DOMAINE_META[d.domaine].libelle}
                </h2>
                <ul className="space-y-1">
                  {d.checklist.map((it) => {
                    const done = !!progress.checklist[it.id];
                    return (
                      <li key={it.id}>
                        <label className="flex cursor-pointer items-start gap-3 rounded-lg p-2 transition hover:bg-brand-50 dark:hover:bg-brand-700/40">
                          <input
                            type="checkbox"
                            checked={done}
                            onChange={() => toggleChecklist(it.id)}
                            className="mt-0.5 h-5 w-5 shrink-0 accent-prairie-500"
                          />
                          <span
                            className={`text-sm ${
                              done ? "text-brand-400 line-through" : ""
                            }`}
                          >
                            {it.libelle}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ),
          )}
        </div>
      )}

      <Disclaimer compact />
    </div>
  );
}
