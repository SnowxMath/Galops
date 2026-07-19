import type { Domaine, DomaineMeta, Discipline, DisciplineMeta } from "./types";

/** Ordre canonique des 5 domaines FFE (utilisé pour l'affichage). */
export const DOMAINES_ORDRE: Domaine[] = [
  "connaissances_generales",
  "connaitre_le_cheval",
  "s_occuper_du_cheval",
  "pratique_a_pied",
  "pratique_a_cheval",
];

/** Libellés et méta d'affichage des domaines. */
export const DOMAINES_META: Record<Domaine, DomaineMeta> = {
  connaissances_generales: {
    domaine: "connaissances_generales",
    libelle: "Connaissances générales",
    description: "Culture équestre, rôle de la FFE, licence, sécurité, réglementation.",
    icone: "📖",
  },
  connaitre_le_cheval: {
    domaine: "connaitre_le_cheval",
    libelle: "Connaître le cheval",
    description: "Comportement, anatomie, robes, allures, santé et soins, alimentation.",
    icone: "🐴",
  },
  s_occuper_du_cheval: {
    domaine: "s_occuper_du_cheval",
    libelle: "S'occuper du cheval",
    description: "Pansage, harnachement, entretien, litière, sécurité aux écuries.",
    icone: "🧹",
  },
  pratique_a_pied: {
    domaine: "pratique_a_pied",
    libelle: "Pratique à pied",
    description: "Mener en main, longer, déplacer épaules/hanches, manipulations.",
    icone: "🚶",
  },
  pratique_a_cheval: {
    domaine: "pratique_a_cheval",
    libelle: "Pratique à cheval",
    description: "Équilibre, allures, tracés, dressage / obstacle / extérieur.",
    icone: "🏇",
  },
};

/** Libellés et méta d'affichage des disciplines (G5+). */
export const DISCIPLINES_META: Record<Discipline, DisciplineMeta> = {
  tronc_commun: { discipline: "tronc_commun", libelle: "Tronc commun", icone: "🎯" },
  dressage: { discipline: "dressage", libelle: "Dressage", icone: "🎼" },
  cso: { discipline: "cso", libelle: "Obstacle (CSO)", icone: "🚧" },
  cross: { discipline: "cross", libelle: "Cross / extérieur", icone: "🌳" },
};
