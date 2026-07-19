import type { Domaine, DomaineMeta, Specialisation } from "./types";

/** Ordre et présentation officiels des 5 domaines FFE. */
export const DOMAINES: DomaineMeta[] = [
  {
    id: "connaissances_generales",
    libelle: "Connaissances générales",
    emoji: "📘",
    accent: "bg-brand-500",
  },
  {
    id: "connaitre_le_cheval",
    libelle: "Connaître le cheval",
    emoji: "📗",
    accent: "bg-prairie-500",
  },
  {
    id: "s_occuper_du_cheval",
    libelle: "S'occuper du cheval",
    emoji: "📙",
    accent: "bg-brand-400",
  },
  {
    id: "pratique_a_pied",
    libelle: "Pratique à pied",
    emoji: "📕",
    accent: "bg-brand-600",
  },
  {
    id: "pratique_a_cheval",
    libelle: "Pratique à cheval",
    emoji: "🏇",
    accent: "bg-prairie-600",
  },
];

export const DOMAINE_LABEL: Record<Domaine, string> = Object.fromEntries(
  DOMAINES.map((d) => [d.id, d.libelle]),
) as Record<Domaine, string>;

export const DOMAINE_META: Record<Domaine, DomaineMeta> = Object.fromEntries(
  DOMAINES.map((d) => [d.id, d]),
) as Record<Domaine, DomaineMeta>;

export const SPECIALISATION_LABEL: Record<Specialisation, string> = {
  dressage: "Dressage",
  cso: "Obstacle (CSO)",
  cross: "Cross",
};

export const SPECIALISATION_EMOJI: Record<Specialisation, string> = {
  dressage: "🎵",
  cso: "🚧",
  cross: "🌳",
};
