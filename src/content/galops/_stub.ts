import type { Domaine, DomaineContenu } from "../types";

/**
 * Fabrique un domaine vide (aucun contenu encore rédigé).
 * Sert de gabarit pour les galops « à venir » : il suffit de remplir
 * cours / fiches / questions / checklist dans le fichier du galop.
 */
export function domaineVide(domaine: Domaine): DomaineContenu {
  return { domaine, cours: [], fiches: [], questions: [], checklist: [] };
}

/** Les 5 domaines FFE, vides, dans l'ordre officiel. */
export function domainesVides(): DomaineContenu[] {
  return [
    domaineVide("connaissances_generales"),
    domaineVide("connaitre_le_cheval"),
    domaineVide("s_occuper_du_cheval"),
    domaineVide("pratique_a_pied"),
    domaineVide("pratique_a_cheval"),
  ];
}
