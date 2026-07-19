import type { Galop } from "../types";
import { domainesVides } from "./_stub";

// GALOP 6 — contenu à rédiger et à valider (FFE).
const galop6: Galop = {
  id: 6,
  titre: "Galop 6",
  resume: "Perfectionnement dans les 3 disciplines et connaissances approfondies.",
  niveau: "Club 2",
  prerequis: 5,
  specialisation: ["dressage", "cso", "cross"],
  aVenir: true,
  domaines: domainesVides(),
};

export default galop6;
