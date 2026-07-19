import type { Galop } from "../types";
import { domainesVides } from "./_stub";

// GALOP 4 — contenu à rédiger et à valider (FFE).
const galop4: Galop = {
  id: 4,
  titre: "Galop 4",
  resume: "Maîtrise des allures sur des tracés variés, enchaînements d'obstacles.",
  prerequis: 3,
  aVenir: true,
  domaines: domainesVides(),
};

export default galop4;
