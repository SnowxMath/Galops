/**
 * Disclaimer obligatoire : contenu non officiel, à visée de révision.
 * Doit rester visible dans l'app (cf. exigences FFE de la spec).
 */
export function Disclaimer() {
  return (
    <p className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100">
      ⚠️ <strong>Contenu non officiel</strong>, à visée de révision et
      d'auto-évaluation. La validation d'un galop se fait{" "}
      <strong>en club, par votre enseignant·e</strong>. Référez-vous au
      programme et aux guides officiels de la FFE ainsi qu'à votre enseignant·e
      pour la validation.
    </p>
  );
}
