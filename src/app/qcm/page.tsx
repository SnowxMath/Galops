import { ChantierEtape } from "@/components/ChantierEtape";

export default function QcmPage() {
  return (
    <ChantierEtape
      titre="QCM"
      etape="Étape 3 (UI de base)"
      description="Questions à choix multiples avec correction immédiate et expliquée (pourquoi c'est juste / pourquoi c'est faux), filtres par galop et par domaine, mode chronométré optionnel."
    />
  );
}
