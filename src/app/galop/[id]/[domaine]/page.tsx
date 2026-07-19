import DomaineClient from "@/components/DomaineClient";
import { GALOPS } from "@/content";
import type { Domaine } from "@/content/types";

// Pré-génère chaque combinaison galop × domaine (export statique).
export function generateStaticParams() {
  return GALOPS.flatMap((g) =>
    g.domaines.map((d) => ({ id: String(g.id), domaine: d.domaine })),
  );
}

export default function DomainePage({
  params,
}: {
  params: { id: string; domaine: string };
}) {
  return <DomaineClient id={Number(params.id)} domaine={params.domaine as Domaine} />;
}
