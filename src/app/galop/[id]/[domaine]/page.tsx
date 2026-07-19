"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import AppHeader from "@/components/AppHeader";
import Disclaimer from "@/components/Disclaimer";
import Markdown from "@/components/Markdown";
import SchemaViewer from "@/components/SchemaViewer";
import { getGalop, getDomaineContenu } from "@/content";
import type { Domaine } from "@/content/types";
import { DOMAINE_META } from "@/content/domaines";

export default function DomainePage() {
  const params = useParams();
  const id = Number(params.id);
  const domaine = String(params.domaine) as Domaine;
  const galop = getGalop(id);
  const contenu = getDomaineContenu(id, domaine);
  const meta = DOMAINE_META[domaine];

  if (!galop || !contenu || !meta) {
    return (
      <div className="space-y-4">
        <AppHeader title="Domaine" back={`/galop/${id}`} />
        <div className="card text-center">Contenu introuvable.</div>
      </div>
    );
  }

  const empty = contenu.cours.length + contenu.fiches.length === 0;

  return (
    <div className="space-y-4">
      <AppHeader title={meta.libelle} emoji={meta.emoji} back={`/galop/${id}`} />
      <p className="text-sm text-brand-500 dark:text-brand-400">
        {galop.titre} · {contenu.questions.length} questions · {contenu.checklist.length} acquis
      </p>

      {empty ? (
        <div className="card text-center">
          <p className="text-3xl">🚧</p>
          <p className="mt-2 text-sm text-brand-500 dark:text-brand-400">
            Le cours de ce domaine n&apos;est pas encore rédigé.
          </p>
        </div>
      ) : (
        <>
          {contenu.cours.map((c) => (
            <article key={c.id} className="card">
              <h2 className="text-lg font-bold">{c.titre}</h2>
              <Markdown content={c.contenu} />
              {c.schemas?.map((s) =>
                s.type === "svg" ? (
                  <SchemaViewer key={s.id} id={s.id} legende={s.legende} />
                ) : null,
              )}
              <p className="mt-3 border-t border-brand-100 pt-2 text-xs text-brand-400 dark:border-brand-700">
                Source : {c.source}
              </p>
            </article>
          ))}

          {contenu.fiches.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-lg font-bold">🗂️ Fiches de révision</h2>
              {contenu.fiches.map((f) => (
                <article key={f.id} className="card">
                  <h3 className="font-semibold">{f.titre}</h3>
                  <ul className="mt-2 space-y-1.5">
                    {f.points_cles.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed">
                        <span className="text-prairie-500">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  {f.schema && f.schema.type === "svg" && (
                    <SchemaViewer id={f.schema.id} legende={f.schema.legende} />
                  )}
                </article>
              ))}
            </section>
          )}
        </>
      )}

      {contenu.questions.length > 0 && (
        <Link href={`/qcm?galop=${id}&domaine=${domaine}`} className="btn-primary w-full">
          ❓ Tester ce domaine ({contenu.questions.length} questions)
        </Link>
      )}

      <Disclaimer compact />
    </div>
  );
}
