import type { Galop } from "../types";

const SRC = "Programme officiel FFE — Galop 4 (Guide fédéral)";

/**
 * GALOP 4 — contenu de révision, résumé à partir du Guide fédéral Galop 4 fourni.
 * Niveau Club 4. Le Galop 4 NE se spécialise pas (la ramification
 * Dressage / CSO / Cross commence au Galop 5).
 */
const galop4: Galop = {
  id: 4,
  titre: "Galop 4",
  resume:
    "Conduite, contrôle et saut : diriger et contrôler vitesse et direction aux 3 allures, déplacer épaules et hanches, enchaîner des sauts (~70 cm), partir au galop du pas sur le bon pied.",
  niveau: "Club 4",
  prerequis: 3,
  domaines: [
    // ── Domaine 1 — Connaissances générales ──
    {
      domaine: "connaissances_generales",
      cours: [
        {
          id: "g4-cg-securite",
          titre: "Sécurité en aire de travail et en extérieur",
          source: SRC,
          contenu: `### En manège / carrière
- **Casque** aux normes obligatoire **dès qu'on se prépare à monter**.
- Règles de **priorité** : elle va au cavalier à l'**allure la plus rapide** ; à **allures égales**, priorité à celui qui est **à main gauche**.
- Maintenir son cheval **à distance** des autres, **demander l'autorisation** avant d'entrer où d'autres évoluent, **s'immobiliser** en cas d'incident.

### En extérieur
- On applique le **code de la route** (le cavalier est considéré comme un véhicule ; à pied, comme un piéton).
- **Repasser au pas** quand on croise des piétons, vélos, voitures ou d'autres chevaux.
- Partir **accompagné**, prévenir de son départ et de l'heure de retour, **prendre un téléphone**, adapter l'allure au terrain, garder l'ordre et les distances.`,
        },
        {
          id: "g4-cg-pli-incurvation",
          titre: "Le pli, l'incurvation et l'accord des aides",
          source: SRC,
          contenu: `- **Le pli** : légère flexion **latérale** de la nuque ; le cavalier voit juste l'arcade sourcilière et le naseau intérieurs.
- **L'incurvation** : le cheval est **ployé sur toute sa longueur**, de la nuque à la queue, épousant la **ligne courbe** du tracé (autour de la jambe intérieure).
- **L'accord des aides** : les aides (jambes, mains, poids du corps) agissent **ensemble et sans se contredire** — la ou les jambes créent l'impulsion que la ou les mains reçoivent et canalisent.`,
        },
      ],
      fiches: [
        {
          id: "g4-cg-fiche",
          titre: "Fiche mémo — Connaissances générales",
          source: SRC,
          points_cles: [
            "Priorité au cavalier le plus rapide ; à allures égales → priorité à main gauche.",
            "Casque obligatoire dès qu'on se prépare à monter.",
            "Extérieur : code de la route, repasser au pas en croisant, partir accompagné.",
            "Pli = flexion latérale de la nuque · Incurvation = cheval ployé de la nuque à la queue.",
            "Accord des aides = jambes et mains agissent ensemble, sans se contredire.",
          ],
        },
      ],
      questions: [
        {
          id: "g4-q1",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "En manège, à allures égales, la priorité va au cavalier qui évolue :",
          choix: [
            { id: "a", texte: "À main droite", correct: false },
            { id: "b", texte: "À main gauche", correct: true },
            { id: "c", texte: "Au centre", correct: false },
            { id: "d", texte: "Le plus lentement", correct: false },
          ],
          explication_correcte: "Oui : à allures égales, la priorité est à celui qui va à main gauche.",
          explication_incorrecte:
            "La priorité va d'abord au cavalier le plus rapide ; à allures égales, à celui qui est à main gauche.",
          source: SRC,
        },
        {
          id: "g4-q2",
          domaine: "connaissances_generales",
          difficulte: 1,
          enonce: "En manège ou carrière, qui a la priorité ?",
          choix: [
            { id: "a", texte: "Le cavalier à l'allure la plus rapide", correct: true },
            { id: "b", texte: "Le cavalier le plus âgé", correct: false },
            { id: "c", texte: "Celui qui est arrivé en premier", correct: false },
            { id: "d", texte: "Le cavalier au pas", correct: false },
          ],
          explication_correcte: "Exact : priorité à l'allure la plus rapide (puis à main gauche si allures égales).",
          explication_incorrecte:
            "La priorité va au cavalier à l'allure la plus rapide ; à allures égales, à celui qui est à main gauche.",
          source: SRC,
        },
        {
          id: "g4-q3",
          domaine: "connaissances_generales",
          difficulte: 1,
          enonce: "En extérieur, quand tu croises des piétons ou des voitures, tu :",
          choix: [
            { id: "a", texte: "Accélères pour passer vite", correct: false },
            { id: "b", texte: "Repasses au pas", correct: true },
            { id: "c", texte: "Lâches les rênes", correct: false },
            { id: "d", texte: "Fais demi-tour", correct: false },
          ],
          explication_correcte: "Oui : on repasse au pas pour croiser en sécurité (code de la route).",
          explication_incorrecte:
            "En extérieur, on repasse au pas pour croiser piétons, vélos, voitures ou chevaux. Le code de la route s'applique.",
          source: SRC,
        },
        {
          id: "g4-q4",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "L'incurvation, c'est :",
          choix: [
            { id: "a", texte: "Le cheval qui lève la tête", correct: false },
            { id: "b", texte: "Le cheval ployé de la nuque à la queue sur la ligne courbe", correct: true },
            { id: "c", texte: "Le cheval qui recule", correct: false },
            { id: "d", texte: "Le cheval qui va tout droit", correct: false },
          ],
          explication_correcte: "Exact : le cheval épouse la courbe, ployé sur toute sa longueur.",
          explication_incorrecte:
            "L'incurvation = le cheval ployé de la nuque à la queue, épousant la courbe (le pli n'est que la flexion latérale de la nuque).",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g4-cl-cg-1", domaine: "connaissances_generales", libelle: "J'explique les règles de sécurité en aire de travail et à l'extérieur" },
        { id: "g4-cl-cg-2", domaine: "connaissances_generales", libelle: "J'explique ce qu'est un pli et l'incurvation" },
        { id: "g4-cl-cg-3", domaine: "connaissances_generales", libelle: "J'explique l'accord des aides" },
        { id: "g4-cl-cg-4", domaine: "connaissances_generales", libelle: "Je nomme et reconnais les mors de filet usuels" },
        { id: "g4-cl-cg-5", domaine: "connaissances_generales", libelle: "Je décris la posture du cavalier à l'obstacle" },
      ],
    },

    // ── Domaine 2 — Connaître le cheval ──
    {
      domaine: "connaitre_le_cheval",
      cours: [
        {
          id: "g4-cc-galop",
          titre: "Le mécanisme du galop",
          source: SRC,
          contenu: `Le galop est une allure **sautée, basculée et dissymétrique**, à **3 temps inégaux** (rythme 1-2-3 … 1-2-3). Poser d'un **postérieur**, puis d'un **diagonal**, puis d'un **antérieur**, suivi d'un temps de suspension.

- **Galop à droite / à gauche** : il y a deux mécanismes, selon le côté. En général le cheval galope **à droite** quand il tourne à droite.
- **Le « bon pied »** : galoper **à gauche** quand on tourne à gauche (ou à droite quand on tourne à droite).
- **Le galop « à faux »** : galoper sur le **pied opposé** à la courbe.
- Vitesse moyenne ≈ **20 km/h** ; en course, pointe ≈ **60 km/h**.`,
        },
        {
          id: "g4-cc-robes",
          titre: "Les familles de robes",
          source: SRC,
          contenu: `On classe les robes par **familles** :
- **Les noirs** : **poils noirs et crins noirs**.
- **Les bais** : **crins noirs** mais **poils autres que noirs** (bai, isabelle…).
- **Les alezans** : **poils et crins fauves** (alezan, alezan brûlé…).
- **Autres robes de base** : poils et crins variés (blanc, crème…).

La **détermination de la robe** suit la nomenclature de l'**IFCE** : robe de base → mélanges de poils → panachures (pie, tachetée) → adjonctions (raie de mulet, zébrures).`,
        },
        {
          id: "g4-cc-identification",
          titre: "L'identification et le signalement",
          source: SRC,
          contenu: `Le **signalement** relève en **4 étapes** les caractéristiques qui rendent chaque cheval unique : **sexe, robe, marques, épis**.

- **Sexe** : la **jument** (femelle), l'**étalon** (mâle entier), le **hongre** (mâle **castré**).
- **Marques** : taches blanches en tête (**en-tête, liste**) et sur les membres (**balzanes**).
- **Épis** : tourbillons de poils, notés par forme et emplacement.

L'identification comporte une **puce (transpondeur)**, un **numéro SIRE** et un **document d'identification (livret)** : carte d'identité + **carnet de santé**.`,
        },
        {
          id: "g4-cc-sante",
          titre: "Santé, soins et alimentation",
          source: SRC,
          contenu: `### Normes physiologiques (au repos, à titre indicatif)
- Température ≈ **38 °C**.
- Fréquence cardiaque ≈ **30 à 40 battements/min**.

### Signes de maladie à repérer
**Prostration**, **agitation**, comportement inhabituel, **inappétence** (perte d'appétit), **jetage** (écoulement nasal)…

### Soins
- **Obligatoires** : **vaccination**.
- **Recommandés** : **vermifugation**, **soins dentaires**…

### Alimentation
Besoins en **fourrages** (base), **concentrés** et **minéraux**. Savoir écarter les **végétaux toxiques** et les contaminants.`,
        },
      ],
      fiches: [
        {
          id: "g4-cc-fiche",
          titre: "Fiche mémo — Connaître le cheval",
          source: SRC,
          points_cles: [
            "Galop = 3 temps inégaux, sauté et dissymétrique. Bon pied = galop du côté de la courbe ; à faux = côté opposé.",
            "Robes : noirs (poils+crins noirs) · bais (crins noirs, poils autres) · alezans (poils+crins fauves).",
            "Signalement en 4 étapes : sexe, robe, marques, épis. Hongre = mâle castré.",
            "Livret = carte d'identité + carnet de santé. Puce + numéro SIRE.",
            "Normes : ≈ 38 °C, ≈ 30-40 battements/min. Vaccination obligatoire ; vermifuge + dentiste recommandés.",
          ],
        },
      ],
      questions: [
        {
          id: "g4-q5",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Galoper « à faux », c'est :",
          choix: [
            { id: "a", texte: "Galoper sur le pied opposé à la courbe", correct: true },
            { id: "b", texte: "Galoper trop vite", correct: false },
            { id: "c", texte: "Galoper sur le bon pied", correct: false },
            { id: "d", texte: "Trotter au lieu de galoper", correct: false },
          ],
          explication_correcte: "Exact : à faux = sur le pied opposé à la courbe (le bon pied = du côté de la courbe).",
          explication_incorrecte:
            "Galop à faux = sur le pied OPPOSÉ à la courbe. Le « bon pied » = à gauche quand on tourne à gauche.",
          source: SRC,
        },
        {
          id: "g4-q6",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Le galop est une allure à :",
          choix: [
            { id: "a", texte: "2 temps égaux", correct: false },
            { id: "b", texte: "3 temps inégaux", correct: true },
            { id: "c", texte: "4 temps égaux", correct: false },
            { id: "d", texte: "1 temps", correct: false },
          ],
          explication_correcte: "Oui : 3 temps inégaux, allure sautée et dissymétrique.",
          explication_incorrecte: "Le galop = 3 temps inégaux (sauté, dissymétrique). Pas = 4 temps, trot = 2 temps.",
          source: SRC,
        },
        {
          id: "g4-q7",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Un cheval de la famille des bais a :",
          choix: [
            { id: "a", texte: "Poils et crins noirs", correct: false },
            { id: "b", texte: "Crins noirs et poils d'une autre couleur que noir", correct: true },
            { id: "c", texte: "Poils et crins fauves", correct: false },
            { id: "d", texte: "Poils blancs", correct: false },
          ],
          explication_correcte: "Exact : bai = crins noirs + poils autres que noirs.",
          explication_incorrecte:
            "Les bais ont les crins noirs et les poils d'une autre couleur. Poils+crins fauves = alezans ; tout noir = noirs.",
          source: SRC,
        },
        {
          id: "g4-q8",
          domaine: "connaitre_le_cheval",
          difficulte: 1,
          enonce: "Un hongre, c'est :",
          choix: [
            { id: "a", texte: "Une jeune femelle", correct: false },
            { id: "b", texte: "Un mâle castré", correct: true },
            { id: "c", texte: "Un étalon reproducteur", correct: false },
            { id: "d", texte: "Un poulain", correct: false },
          ],
          explication_correcte: "Oui : le hongre est un cheval mâle qui a été castré.",
          explication_incorrecte:
            "Le hongre = mâle castré. La femelle = jument, le mâle entier reproducteur = étalon.",
          source: SRC,
        },
        {
          id: "g4-q9",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Le signalement d'un cheval relève 4 caractéristiques :",
          choix: [
            { id: "a", texte: "Âge, taille, poids, race", correct: false },
            { id: "b", texte: "Sexe, robe, marques, épis", correct: true },
            { id: "c", texte: "Nom, robe, père, mère", correct: false },
            { id: "d", texte: "Vaccins, dents, pieds, dos", correct: false },
          ],
          explication_correcte: "Exact : sexe, robe, marques et épis rendent chaque cheval unique.",
          explication_incorrecte: "Le signalement relève le sexe, la robe, les marques et les épis.",
          source: SRC,
        },
        {
          id: "g4-q10",
          domaine: "connaitre_le_cheval",
          difficulte: 1,
          enonce: "La température normale du cheval au repos est d'environ :",
          choix: [
            { id: "a", texte: "35 °C", correct: false },
            { id: "b", texte: "38 °C", correct: true },
            { id: "c", texte: "41 °C", correct: false },
            { id: "d", texte: "30 °C", correct: false },
          ],
          explication_correcte: "Oui, autour de 38 °C.",
          explication_incorrecte: "La température normale est d'environ 38 °C (une fièvre commence au-delà).",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g4-cl-cc-1", domaine: "connaitre_le_cheval", libelle: "J'explique le mécanisme du galop à droite et à gauche" },
        { id: "g4-cl-cc-2", domaine: "connaitre_le_cheval", libelle: "Je fais une identification de base (sexe, robe, marques, épis)" },
        { id: "g4-cl-cc-3", domaine: "connaitre_le_cheval", libelle: "Je nomme les parties du livret signalétique" },
        { id: "g4-cl-cc-4", domaine: "connaitre_le_cheval", libelle: "Je cite les normes physiologiques et les signes de maladie" },
        { id: "g4-cl-cc-5", domaine: "connaitre_le_cheval", libelle: "Je décris les besoins alimentaires et les aliments à éviter" },
      ],
    },

    // ── Domaine 3 — S'occuper du cheval ──
    {
      domaine: "s_occuper_du_cheval",
      cours: [
        {
          id: "g4-so-protections",
          titre: "Les protections et le soin des membres",
          source: SRC,
          contenu: `### Protections de travail
- **Protège-boulets** et **guêtres** : protègent les membres des **chocs et des atteintes** (coups que le cheval peut se donner).
- **Cloches** : protègent les **talons / glomes** des antérieurs contre les atteintes (notamment quand le postérieur touche l'antérieur).

### Protections de transport
Protègent les membres pendant le **voyage** (van, camion).

### Soin des membres
**Inspecter et soigner les membres avant et après le travail** : chaleur, gonflement, blessure, curage des pieds.`,
        },
      ],
      fiches: [
        {
          id: "g4-so-fiche",
          titre: "Fiche mémo — S'occuper du cheval",
          source: SRC,
          points_cles: [
            "Protège-boulets / guêtres = protègent les membres des chocs et atteintes.",
            "Cloches = protègent les talons/glomes des antérieurs.",
            "Protections de transport = pour le voyage.",
            "Inspecter et soigner les membres AVANT et APRÈS le travail.",
          ],
        },
      ],
      questions: [
        {
          id: "g4-q11",
          domaine: "s_occuper_du_cheval",
          difficulte: 1,
          enonce: "À quoi servent les cloches ?",
          choix: [
            { id: "a", texte: "À faire du bruit", correct: false },
            { id: "b", texte: "À protéger les talons / glomes des antérieurs des atteintes", correct: true },
            { id: "c", texte: "À tenir le cheval au chaud", correct: false },
            { id: "d", texte: "À décorer la crinière", correct: false },
          ],
          explication_correcte: "Oui : les cloches protègent les talons/glomes des antérieurs.",
          explication_incorrecte:
            "Les cloches protègent les talons / glomes des antérieurs contre les atteintes. Les guêtres/protège-boulets protègent le reste du membre.",
          source: SRC,
        },
        {
          id: "g4-q12",
          domaine: "s_occuper_du_cheval",
          difficulte: 1,
          enonce: "Quand doit-on inspecter et soigner les membres du cheval ?",
          choix: [
            { id: "a", texte: "Seulement en cas de boiterie", correct: false },
            { id: "b", texte: "Avant et après le travail", correct: true },
            { id: "c", texte: "Une fois par mois", correct: false },
            { id: "d", texte: "Jamais", correct: false },
          ],
          explication_correcte: "Exact : avant et après chaque séance de travail.",
          explication_incorrecte: "On inspecte et soigne les membres avant ET après le travail.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g4-cl-so-1", domaine: "s_occuper_du_cheval", libelle: "Je mets et j'enlève des protections de travail (protège-boulets, guêtres, cloches)" },
        { id: "g4-cl-so-2", domaine: "s_occuper_du_cheval", libelle: "Je mets et j'enlève des protections de transport" },
        { id: "g4-cl-so-3", domaine: "s_occuper_du_cheval", libelle: "J'inspecte et je soigne les membres avant et après le travail" },
      ],
    },

    // ── Domaine 4 — Pratique à pied ──
    {
      domaine: "pratique_a_pied",
      cours: [
        {
          id: "g4-pp-cours",
          titre: "Mener, reculer, franchir en main",
          source: SRC,
          contenu: `- **Marcher en main** quelques foulées en gardant un **contact moelleux et permanent sur les deux rênes**.
- **Faire reculer** son cheval **en restant à distance**, et **le faire venir** vers soi.
- Obtenir une **flexion latérale de l'encolure des deux côtés**.
- **Trotter en main** sur des lignes droites et des courbes larges.
- **Franchir des embûches simples au pas** : flaques, bâches, plans inclinés, pont de van ou de camion…`,
        },
      ],
      fiches: [
        {
          id: "g4-pp-fiche",
          titre: "Fiche mémo — Pratique à pied",
          source: SRC,
          points_cles: [
            "Mener en main avec un contact moelleux sur les 2 rênes.",
            "Reculer en restant à distance ; faire venir le cheval.",
            "Flexion latérale de l'encolure des deux côtés.",
            "Franchir des embûches au pas (flaques, bâches, plans inclinés, pont de van).",
          ],
        },
      ],
      questions: [],
      checklist: [
        { id: "g4-cl-pp-1", domaine: "pratique_a_pied", libelle: "Je mène en main avec un contact moelleux sur les deux rênes" },
        { id: "g4-cl-pp-2", domaine: "pratique_a_pied", libelle: "Je fais reculer mon cheval à distance et je le fais venir" },
        { id: "g4-cl-pp-3", domaine: "pratique_a_pied", libelle: "J'obtiens une flexion latérale de l'encolure des deux côtés" },
        { id: "g4-cl-pp-4", domaine: "pratique_a_pied", libelle: "Je franchis des embûches simples au pas" },
      ],
    },

    // ── Domaine 5 — Pratique à cheval ──
    {
      domaine: "pratique_a_cheval",
      cours: [
        {
          id: "g4-pc-cours",
          titre: "Conduite, contrôle et saut",
          source: SRC,
          contenu: `- **Trotter enlevé** dans une bonne posture lors de **changements de direction ou d'amplitude**.
- Être **stable en équilibre sur ses étriers** au galop et sur des **dispositifs de sauts rapprochés (~80 cm)**.
- Prendre et conserver un **contact permanent et moelleux** aux 3 allures, ou évoluer **sans contact** à volonté.
- **Partir au galop du pas** sur le **bon pied**, en ligne droite.
- **Varier la vitesse (l'amplitude)** au trot enlevé et au galop.
- **Déplacer les épaules** et **les hanches** d'un **quart de tour au pas**.
- Contrôler allure, vitesse et direction sur un **enchaînement de sauts isolés (~70 cm)** et en **terrain varié**.`,
        },
      ],
      fiches: [
        {
          id: "g4-pc-fiche",
          titre: "Fiche mémo — Pratique à cheval",
          source: SRC,
          points_cles: [
            "Départ au galop du pas, sur le bon pied, en ligne droite.",
            "Équilibre sur les étriers au galop et sur des sauts rapprochés (~80 cm).",
            "Contact permanent et moelleux aux 3 allures (ou sans contact à volonté).",
            "Déplacer épaules et hanches d'un quart de tour au pas.",
            "Enchaîner des sauts isolés (~70 cm) en contrôlant allure, vitesse et direction.",
          ],
        },
      ],
      questions: [
        {
          id: "g4-q13",
          domaine: "pratique_a_cheval",
          difficulte: 2,
          enonce: "Au Galop 4, le départ au galop se demande :",
          choix: [
            { id: "a", texte: "Du trot uniquement", correct: false },
            { id: "b", texte: "Du pas, sur le bon pied, en ligne droite", correct: true },
            { id: "c", texte: "De l'arrêt, à faux", correct: false },
            { id: "d", texte: "Seulement en cercle", correct: false },
          ],
          explication_correcte: "Oui : partir au galop du pas, sur le bon pied, en ligne droite.",
          explication_incorrecte: "Au Galop 4 : départ au galop du pas, sur le bon pied, en ligne droite.",
          source: SRC,
        },
        {
          id: "g4-q14",
          domaine: "pratique_a_cheval",
          difficulte: 2,
          enonce: "En pratique à cheval au Galop 4, on sait déplacer :",
          choix: [
            { id: "a", texte: "Seulement la tête", correct: false },
            { id: "b", texte: "Les épaules et les hanches d'un quart de tour au pas", correct: true },
            { id: "c", texte: "Rien, le cheval va tout droit", correct: false },
            { id: "d", texte: "La queue", correct: false },
          ],
          explication_correcte: "Exact : déplacer les épaules et les hanches d'un quart de tour au pas.",
          explication_incorrecte:
            "Au Galop 4, on déplace les épaules ET les hanches du cheval d'un quart de tour au pas.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g4-cl-pc-1", domaine: "pratique_a_cheval", libelle: "Je pars au galop du pas sur le bon pied en ligne droite" },
        { id: "g4-cl-pc-2", domaine: "pratique_a_cheval", libelle: "Je suis en équilibre sur mes étriers au galop et sur des sauts (~80 cm)" },
        { id: "g4-cl-pc-3", domaine: "pratique_a_cheval", libelle: "Je garde un contact permanent et moelleux aux 3 allures" },
        { id: "g4-cl-pc-4", domaine: "pratique_a_cheval", libelle: "Je varie l'amplitude au trot enlevé et au galop" },
        { id: "g4-cl-pc-5", domaine: "pratique_a_cheval", libelle: "Je déplace les épaules et les hanches d'un quart de tour au pas" },
        { id: "g4-cl-pc-6", domaine: "pratique_a_cheval", libelle: "J'enchaîne un parcours de sauts isolés (~70 cm)" },
      ],
    },
  ],
};

export default galop4;
