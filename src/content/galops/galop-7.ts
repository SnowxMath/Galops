import type { Galop } from "../types";

const SRC = "Théorie FFE Galop 7 (document de révision fourni)";

/**
 * GALOP 7 — contenu de révision, résumé à partir du document de théorie fourni.
 * Niveau Club 1 (dernier galop de cavalier). Pratique spécialisée : Dressage / CSO / Cross.
 */
const galop7: Galop = {
  id: 7,
  titre: "Galop 7",
  resume:
    "Cavalier confirmé et autonome : identification et transport, la bride, calcul de ration alimentaire, enrênements de longe, rectitude et épaule en dedans.",
  niveau: "Club 1",
  prerequis: 6,
  specialisation: ["dressage", "cso", "cross"],
  domaines: [
    // ── Domaine 1 — Connaissances générales ──
    {
      domaine: "connaissances_generales",
      cours: [
        {
          id: "g7-cg-identification",
          titre: "L'identification des équidés",
          source: SRC,
          contenu: `L'identification est **obligatoire** (décret d'**octobre 2001**). Elle comporte :
- l'implantation d'un **transpondeur électronique (puce)** dans l'**encolure** ;
- l'attribution d'un **numéro SIRE** unique ;
- l'établissement d'un **document d'identification** (livret / passeport).

Ces données sont enregistrées dans le **fichier central SIRE**, géré par l'**IFCE**.

### Le livret d'identification contient
Date et lieu de naissance, **certificat d'origine** (père, mère, inscription au stud-book), **signalement descriptif** (complété graphiquement à 18 mois), visas et contrôles d'identité, **livret sanitaire** (vaccinations), carte d'immatriculation.`,
        },
        {
          id: "g7-cg-transport",
          titre: "Le transport du cheval",
          source: SRC,
          contenu: `Le cheval reste un **animal de proie**, naturellement **claustrophobe** : le transport est encadré par une **législation** (bien-être animal). Elle interdit le transport d'équidés **inaptes** (malades, blessés, faibles) et pose notamment :
- interdiction de frapper les animaux ;
- les chevaux de **plus de 8 mois** doivent porter un **licol** et être attachés ;
- **longs trajets** : durée maximale de **24 h** ; abreuvés et si besoin alimentés **toutes les 8 h**, avec au moins **1 h de repos** ; après le voyage, **24 h de repos** minimum.

La réglementation est plus stricte pour les déplacements liés à une **activité économique**.`,
        },
        {
          id: "g7-cg-bride",
          titre: "La bride",
          source: SRC,
          contenu: `La bride associe **deux embouchures** aux actions **opposées** :
- **Le mors de filet** : action « **en remontant** », surtout sur les **commissures des lèvres** ; relié à une paire de rênes « boucles », contact franc.
- **Le mors de bride** : action « **abaisseur** », agit sur les **barres et la langue** ; relié à des rênes « coutures » (plus fines), effets d'intensité supérieure.

La **gourmette** (plus ou moins serrée) permet de **régler l'intensité** du mors de bride en modulant son bras de levier. Usage **délicat**, réservé aux cavaliers confirmés.`,
        },
      ],
      fiches: [
        {
          id: "g7-cg-fiche",
          titre: "Fiche mémo — Connaissances générales",
          source: SRC,
          points_cles: [
            "Identification obligatoire (décret 2001) : puce (encolure) + numéro SIRE + livret. Fichier SIRE = IFCE.",
            "Livret : origines, signalement (à 18 mois), livret sanitaire (vaccins).",
            "Transport : licol obligatoire (+8 mois) ; long trajet max 24 h, pause/eau toutes les 8 h.",
            "Bride = mors de filet (remontant, commissures) + mors de bride (abaisseur, barres/langue).",
            "Gourmette = règle l'intensité du mors de bride.",
          ],
        },
      ],
      questions: [
        {
          id: "g7-q1",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Que comporte l'identification obligatoire d'un cheval ?",
          choix: [
            { id: "a", texte: "Uniquement un tatouage", correct: false },
            { id: "b", texte: "Une puce dans l'encolure, un numéro SIRE et un livret d'identification", correct: true },
            { id: "c", texte: "Seulement une photo", correct: false },
            { id: "d", texte: "Une plaque au licol", correct: false },
          ],
          explication_correcte: "Exact : puce (encolure) + numéro SIRE unique + document d'identification.",
          explication_incorrecte:
            "L'identification = puce dans l'encolure + numéro SIRE + livret. Le fichier SIRE est géré par l'IFCE.",
          source: SRC,
        },
        {
          id: "g7-q2",
          domaine: "connaissances_generales",
          difficulte: 3,
          enonce: "Dans une bride, le mors de bride a une action :",
          choix: [
            { id: "a", texte: "En remontant, sur les commissures", correct: false },
            { id: "b", texte: "Abaisseur, sur les barres et la langue (réglée par la gourmette)", correct: true },
            { id: "c", texte: "Sur les naseaux", correct: false },
            { id: "d", texte: "Aucune action", correct: false },
          ],
          explication_correcte: "Oui : le mors de bride abaisse et agit sur barres/langue, la gourmette règle son intensité.",
          explication_incorrecte:
            "Le mors de bride = action abaisseur (barres et langue), réglée par la gourmette. L'action « en remontant » (commissures) est celle du mors de filet.",
          source: SRC,
        },
        {
          id: "g7-q3",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Pour un long trajet, un cheval peut être transporté au maximum :",
          choix: [
            { id: "a", texte: "48 heures sans pause", correct: false },
            { id: "b", texte: "24 heures, avec eau/repos toutes les 8 heures", correct: true },
            { id: "c", texte: "1 semaine", correct: false },
            { id: "d", texte: "Sans limite", correct: false },
          ],
          explication_correcte: "Exact : 24 h maximum, abreuvé (et si besoin alimenté) et reposé toutes les 8 h.",
          explication_incorrecte:
            "Long trajet = 24 h maximum, avec eau/alimentation et repos (≥ 1 h) toutes les 8 h, puis 24 h de repos après.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g7-cl-cg-1", domaine: "connaissances_generales", libelle: "J'explique l'identification obligatoire (puce, SIRE, livret)" },
        { id: "g7-cl-cg-2", domaine: "connaissances_generales", libelle: "Je connais les règles de transport des équidés" },
        { id: "g7-cl-cg-3", domaine: "connaissances_generales", libelle: "Je décris la bride (mors de filet, mors de bride, gourmette)" },
      ],
    },

    // ── Domaine 2 — Connaître le cheval ──
    { domaine: "connaitre_le_cheval", cours: [], fiches: [], questions: [], checklist: [] },

    // ── Domaine 3 — S'occuper du cheval ──
    {
      domaine: "s_occuper_du_cheval",
      cours: [
        {
          id: "g7-so-alimentation",
          titre: "L'alimentation et le calcul de la ration",
          source: SRC,
          contenu: `Le cheval est un herbivore **monogastrique** et grégaire ; son alimentation doit être **adaptée** au travail, au gabarit et au rythme de vie. Durée de la digestion : **48 à 72 h**.

### Les unités de la ration
- **UFC** : Unité Fourragère Cheval (**valeur énergétique** ; 1 UFC ≈ 1 kg d'orge).
- **MADC** : Matière Azotée Digestible Cheval (**protéines**).
- **MS** : Matière Sèche (en %).

Un cheval de **500 kg au repos** a besoin d'environ **4,5 UFC/jour** ; au **travail moyen**, environ **5,5 UFC/jour**.
Poids estimé au ruban : **PV(kg) = 3×HG + 4,3×PT − 785** (HG = hauteur au garrot, PT = tour de poitrine).

### Les aliments
- **Céréales** : **orge** (bon rapport, douce pour le tube digestif), **avoine** (plus énergétique), **maïs** (très énergétique, peu de fibres), blé, lin, tourteau de soja (protéines).
- **Eau** : **20 à 40 L/jour** (jusqu'à **80 L** par forte chaleur), à température ambiante.`,
        },
        {
          id: "g7-so-bride-bandes",
          titre: "Monter/démonter une bride · bandes de polo",
          source: SRC,
          contenu: `### Démonter et remonter une bride
Savoir **nommer chaque pièce** puis la **remonter** dans le bon ordre : têtière + sous-gorge, montants de bride, mors de bride + **gourmette**, frontal, têtière/montants du **filet**, mors de filet, montants + **muserolle**, **rênes de filet** et **rênes de bride**.

### Les bandes de polo
Elles **soutiennent les tendons** du cheval au travail et le **protègent des chocs**.`,
        },
      ],
      fiches: [
        {
          id: "g7-so-fiche",
          titre: "Fiche mémo — Alimentation & matériel",
          source: SRC,
          points_cles: [
            "UFC = énergie (1 UFC ≈ 1 kg d'orge) · MADC = protéines · MS = matière sèche.",
            "500 kg au repos ≈ 4,5 UFC/j ; au travail moyen ≈ 5,5 UFC/j.",
            "Poids au ruban : PV = 3×HG + 4,3×PT − 785. Digestion : 48–72 h.",
            "Eau : 20 à 40 L/jour (jusqu'à 80 L par forte chaleur).",
            "Bandes de polo : soutiennent les tendons + protègent des chocs.",
          ],
        },
      ],
      questions: [
        {
          id: "g7-q4",
          domaine: "s_occuper_du_cheval",
          difficulte: 1,
          enonce: "Combien un cheval boit-il d'eau par jour (en conditions normales) ?",
          choix: [
            { id: "a", texte: "2 à 5 litres", correct: false },
            { id: "b", texte: "20 à 40 litres (jusqu'à 80 par forte chaleur)", correct: true },
            { id: "c", texte: "100 à 150 litres", correct: false },
            { id: "d", texte: "Il ne boit pas s'il mange du foin", correct: false },
          ],
          explication_correcte: "Oui : 20 à 40 L/jour, et jusqu'à 80 L par forte chaleur.",
          explication_incorrecte: "Un cheval boit 20 à 40 L/jour (jusqu'à 80 L par forte chaleur), à température ambiante.",
          source: SRC,
        },
        {
          id: "g7-q5",
          domaine: "s_occuper_du_cheval",
          difficulte: 3,
          enonce: "Que signifie « UFC » dans le calcul d'une ration ?",
          choix: [
            { id: "a", texte: "Unité de Force du Cheval", correct: false },
            { id: "b", texte: "Unité Fourragère Cheval (valeur énergétique)", correct: true },
            { id: "c", texte: "Unité de Fibre Concentrée", correct: false },
            { id: "d", texte: "Union Française des Cavaliers", correct: false },
          ],
          explication_correcte: "Exact : l'UFC mesure la valeur énergétique (1 UFC ≈ 1 kg d'orge).",
          explication_incorrecte:
            "UFC = Unité Fourragère Cheval (valeur énergétique, 1 UFC ≈ 1 kg d'orge). Les protéines, c'est la MADC.",
          source: SRC,
        },
        {
          id: "g7-q6",
          domaine: "s_occuper_du_cheval",
          difficulte: 1,
          enonce: "À quoi servent les bandes de polo ?",
          choix: [
            { id: "a", texte: "À décorer le cheval", correct: false },
            { id: "b", texte: "À soutenir les tendons et protéger des chocs au travail", correct: true },
            { id: "c", texte: "À le tenir au chaud la nuit", correct: false },
            { id: "d", texte: "À longer", correct: false },
          ],
          explication_correcte: "Oui : soutien des tendons + protection contre les chocs pendant le travail.",
          explication_incorrecte:
            "Les bandes de polo soutiennent les tendons et protègent des chocs au travail (≠ bandes de repos, au box).",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g7-cl-so-1", domaine: "s_occuper_du_cheval", libelle: "Je calcule une ration (UFC, MADC, MS)" },
        { id: "g7-cl-so-2", domaine: "s_occuper_du_cheval", libelle: "Je distingue les principales céréales et les besoins en eau" },
        { id: "g7-cl-so-3", domaine: "s_occuper_du_cheval", libelle: "Je démonte et remonte une bride en nommant les pièces" },
        { id: "g7-cl-so-4", domaine: "s_occuper_du_cheval", libelle: "Je pose des bandes de polo" },
      ],
    },

    // ── Domaine 4 — Pratique à pied ──
    {
      domaine: "pratique_a_pied",
      cours: [
        {
          id: "g7-pp-enrenements-longe",
          titre: "Les enrênements du travail en longe",
          source: SRC,
          contenu: `- **Le Pessoa** : agit sur l'**engagement des postérieurs** et la **tension de la ligne du dos**.
- **Le gogue fixe** : demande au cheval de **céder dans la nuque**.
- **Les élastiques** : demandent au cheval de **venir tendre son dos** sur un contact fixe.
- **Les rênes allemandes** : attitude choisie selon le **réglage** (ex. en triangle bas = extension d'encolure).`,
        },
      ],
      fiches: [
        {
          id: "g7-pp-fiche",
          titre: "Fiche mémo — Travail en longe",
          source: SRC,
          points_cles: [
            "Pessoa = engagement des postérieurs + tension de la ligne du dos.",
            "Gogue fixe = céder dans la nuque.",
            "Élastiques = tendre le dos sur un contact fixe.",
            "Rênes allemandes = attitude selon le réglage.",
          ],
        },
      ],
      questions: [
        {
          id: "g7-q7",
          domaine: "pratique_a_pied",
          difficulte: 2,
          enonce: "En longe, le Pessoa agit principalement sur :",
          choix: [
            { id: "a", texte: "La queue du cheval", correct: false },
            { id: "b", texte: "L'engagement des postérieurs et la tension de la ligne du dos", correct: true },
            { id: "c", texte: "La bouche uniquement", correct: false },
            { id: "d", texte: "Rien du tout", correct: false },
          ],
          explication_correcte: "Exact : le Pessoa favorise l'engagement des postérieurs et la tension du dos.",
          explication_incorrecte:
            "Le Pessoa agit sur l'engagement des postérieurs et la tension de la ligne du dos.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g7-cl-pp-1", domaine: "pratique_a_pied", libelle: "Je connais les principaux enrênements de longe et leur rôle" },
      ],
    },

    // ── Domaine 5 — Pratique à cheval ──
    {
      domaine: "pratique_a_cheval",
      cours: [
        {
          id: "g7-pc-rectitude",
          titre: "La rectitude et l'épaule en dedans",
          source: SRC,
          contenu: `### La rectitude
Le cheval se déplace **dans le canal des aides**, **épaules devant les hanches**, sans torsion, avec une **impulsion constante**. C'est une qualité à rechercher sans cesse.

### L'épaule en dedans
Exercice à **deux pistes** : le cheval se déplace **latéralement**, **infléchi de la nuque à la queue**. Il se déplace vers le **côté extérieur** du pli, le **regard porté vers l'intérieur** du pli. S'exécute aux **trois allures**, avec une obliquité d'environ **30 à 45°**.

**Buts** : assouplir le cheval, **engager les postérieurs**, faire baisser les hanches, relever l'avant-main, décontracter. L'encolure reste presque droite, la tête haute et fixe (pas trop de pli).`,
        },
      ],
      fiches: [
        {
          id: "g7-pc-fiche",
          titre: "Fiche mémo — Pratique à cheval",
          source: SRC,
          points_cles: [
            "Rectitude : épaules devant les hanches, sans torsion, impulsion constante.",
            "Épaule en dedans : exercice à 2 pistes, cheval infléchi, va vers l'extérieur du pli, regard vers l'intérieur.",
            "Buts : assouplir, engager les postérieurs, placer et décontracter. Obliquité ~30-45°.",
          ],
        },
      ],
      questions: [
        {
          id: "g7-q8",
          domaine: "pratique_a_cheval",
          specialisation: "dressage",
          difficulte: 3,
          enonce: "Dans l'épaule en dedans, le cheval :",
          choix: [
            { id: "a", texte: "Regarde là où il se déplace", correct: false },
            {
              id: "b",
              texte: "Est infléchi et se déplace vers l'extérieur du pli, le regard vers l'intérieur",
              correct: true,
            },
            { id: "c", texte: "Recule en ligne droite", correct: false },
            { id: "d", texte: "Galope à faux", correct: false },
          ],
          explication_correcte:
            "Exact : exercice à deux pistes, infléchi de la nuque à la queue, il va vers l'extérieur du pli.",
          explication_incorrecte:
            "Épaule en dedans = le cheval est infléchi, se déplace vers l'EXTÉRIEUR du pli, le regard porté vers l'intérieur. But : engager les postérieurs, assouplir.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g7-cl-pc-1", domaine: "pratique_a_cheval", libelle: "Je recherche la rectitude dans le canal des aides" },
        { id: "g7-cl-pc-2", domaine: "pratique_a_cheval", libelle: "Je réalise et j'explique l'épaule en dedans" },
        { id: "g7-cl-pc-dr", domaine: "pratique_a_cheval", specialisation: "dressage", libelle: "Dressage : je présente une reprise Club 1" },
        { id: "g7-cl-pc-cso", domaine: "pratique_a_cheval", specialisation: "cso", libelle: "CSO : j'enchaîne un parcours Club 1" },
        { id: "g7-cl-pc-cross", domaine: "pratique_a_cheval", specialisation: "cross", libelle: "Cross : je franchis un parcours Club 1" },
      ],
    },
  ],
};

export default galop7;
