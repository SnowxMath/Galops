import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { GALOPS } from "@/content";

export default function Accueil() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-galop-700 dark:text-galop-100">
          Galops FFE
        </h1>
        <p className="text-sm text-galop-500 dark:text-galop-300">
          Révise tes Galops 1 à 7 : cours, fiches, QCM corrigés et suivi de
          progression.
        </p>
      </header>

      <Disclaimer />

      <section aria-labelledby="titre-galops" className="space-y-3">
        <h2
          id="titre-galops"
          className="text-sm font-semibold uppercase tracking-wide text-galop-500 dark:text-galop-300"
        >
          Choisir un galop
        </h2>
        <ul className="grid grid-cols-2 gap-3">
          {GALOPS.map((galop) => (
            <li key={galop.id}>
              <Link
                href={`/cours?galop=${galop.id}`}
                className="flex h-full flex-col justify-between rounded-2xl border border-galop-200 bg-white p-4 shadow-sm transition-colors hover:border-galop-400 dark:border-galop-700 dark:bg-galop-800"
              >
                <span className="text-lg font-bold text-galop-700 dark:text-galop-100">
                  {galop.titre}
                </span>
                <span className="mt-1 line-clamp-3 text-xs text-galop-500 dark:text-galop-300">
                  {galop.resume}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs text-galop-400">
          Galops 2 à 7 : ajoutés au fur et à mesure (contenu piloté par la
          donnée).
        </p>
      </section>
    </div>
  );
}
