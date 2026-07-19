import type { Galop } from "../types";
import { domainesVides } from "./_stub";

// GALOP 7 — contenu à rédiger et à valider (FFE).
const galop7: Galop = {
  id: 7,
  titre: "Galop 7",
  resume: "Cavalier confirmé et autonome dans les 3 disciplines ; dernier galop de cavalier.",
  niveau: "Club 1",
  prerequis: 6,
  specialisation: ["dressage", "cso", "cross"],
  aVenir: true,
  domaines: domainesVides(),
};

export default galop7;
