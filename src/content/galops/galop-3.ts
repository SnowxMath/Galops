import type { Galop } from "../types";
import { domainesVides } from "./_stub";

// GALOP 3 — contenu à rédiger et à valider (FFE).
const galop3: Galop = {
  id: 3,
  titre: "Galop 3",
  resume: "Cavalier autonome au galop, premiers sauts et soins courants.",
  prerequis: 2,
  aVenir: true,
  domaines: domainesVides(),
};

export default galop3;
