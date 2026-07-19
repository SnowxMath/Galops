import type { Galop } from "../types";
import { domainesVides } from "./_stub";

// GALOP 2 — contenu à rédiger et à valider (FFE).
const galop2: Galop = {
  id: 2,
  titre: "Galop 2",
  resume: "Confirmer les acquis du Galop 1 et gagner en aisance aux 3 allures.",
  prerequis: 1,
  aVenir: true,
  domaines: domainesVides(),
};

export default galop2;
