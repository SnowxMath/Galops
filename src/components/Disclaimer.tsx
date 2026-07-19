/** Bandeau d'avertissement : contenu non officiel, à visée de révision. */
export default function Disclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs leading-snug text-brand-500 dark:text-brand-400">
        ⚠️ Contenu de révision non officiel. La validation se fait en club, par ton enseignant.
      </p>
    );
  }
  return (
    <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-700/60 dark:bg-amber-900/20 dark:text-amber-200">
      <strong>⚠️ Outil de révision, pas un examen officiel.</strong> Le contenu suit le
      programme officiel FFE des Galops mais reste non officiel. Réfère-toi au programme et aux
      guides fédéraux FFE, et à ton enseignant, pour la validation de tes Galops.
    </div>
  );
}
