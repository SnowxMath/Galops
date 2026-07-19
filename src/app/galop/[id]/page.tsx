import GalopClient from "@/components/GalopClient";
import { GALOPS } from "@/content";

// Pré-génère une page par galop (export statique).
export function generateStaticParams() {
  return GALOPS.map((g) => ({ id: String(g.id) }));
}

export default function GalopPage({ params }: { params: { id: string } }) {
  return <GalopClient id={Number(params.id)} />;
}
