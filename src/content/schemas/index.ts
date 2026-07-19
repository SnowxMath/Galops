import type { ComponentType } from "react";
import ChevalParties from "./ChevalParties";
import Selle from "./Selle";
import Filet from "./Filet";

/**
 * Registre des schémas SVG. La donnée (Schema.id) référence une clé ici ;
 * ça garde le contenu sérialisable tout en autorisant des SVG riches.
 */
export const SCHEMA_COMPONENTS: Record<string, ComponentType<{ showLabels: boolean }>> = {
  cheval: ChevalParties,
  selle: Selle,
  filet: Filet,
};

export function hasSchema(id: string): boolean {
  return id in SCHEMA_COMPONENTS;
}
