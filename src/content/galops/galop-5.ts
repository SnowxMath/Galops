import type { Galop } from "../types";
import { domainesVides } from "./_stub";

// GALOP 5 — contenu à rédiger et à valider (FFE).
// Niveau Club 3. À partir d'ici, la pratique à cheval se spécialise
// en Dressage / Obstacle (CSO) / Cross.
const galop5: Galop = {
  id: 5,
  titre: "Galop 5",
  resume:
    "Cavalier plus autonome qui commence à contribuer à la formation du cheval. La pratique à cheval se spécialise en Dressage / CSO / Cross.",
  niveau: "Club 3",
  prerequis: 4,
  specialisation: ["dressage", "cso", "cross"],
  aVenir: true,
  domaines: domainesVides(),
};

export default galop5;
