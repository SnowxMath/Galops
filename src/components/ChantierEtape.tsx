import Link from "next/link";

/**
 * Écran-placeholder pour les onglets pas encore construits.
 * Sera remplacé par les vraies vues aux étapes 3-4 du déroulé.
 */
export function ChantierEtape({
  titre,
  etape,
  description,
}: {
  titre: string;
  etape: string;
  description: string;
}) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-galop-700 dark:text-galop-100">
        {titre}
      </h1>
      <div className="rounded-2xl border border-dashed border-galop-300 bg-white p-5 text-sm text-galop-600 dark:border-galop-700 dark:bg-galop-800 dark:text-galop-300">
        <p className="mb-2 inline-block rounded-full bg-galop-100 px-2 py-0.5 text-xs font-semibold text-galop-700 dark:bg-galop-700 dark:text-galop-100">
          🚧 {etape}
        </p>
        <p>{description}</p>
      </div>
      <Link href="/" className="text-sm font-medium text-galop-600 underline dark:text-galop-200">
        ← Accueil
      </Link>
    </div>
  );
}
