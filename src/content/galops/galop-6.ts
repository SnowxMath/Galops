import type { Galop } from "../types";

const SRC = "Théorie FFE Galop 6 (document de révision fourni)";

/**
 * GALOP 6 — contenu de révision, résumé à partir du document de théorie fourni.
 * Niveau Club 2. La pratique à cheval reste spécialisée : Dressage / CSO / Cross.
 */
const galop6: Galop = {
  id: 6,
  titre: "Galop 6",
  resume:
    "Perfectionnement : allures particulières, critères de jugement en dressage, santé du cheval (maladies), enrênements. La pratique reste en Dressage / CSO / Cross.",
  niveau: "Club 2",
  prerequis: 5,
  specialisation: ["dressage", "cso", "cross"],
  domaines: [
    // ── Domaine 1 — Connaissances générales ──
    {
      domaine: "connaissances_generales",
      cours: [
        {
          id: "g6-cg-allures-artif",
          titre: "Les allures artificielles",
          source: SRC,
          contenu: `Ce sont des allures **apprises au cheval par le dressage** : spectaculaires et exigeantes musculairement.

- **Le passage** : un trot **écourté et raccourci**, très relevé, avec une **phase de projection prolongée** (temps de suspension marqué).
- **Le piaffer** : un **trot sur place**, relevé, rond et suspendu ; le cheval se projette d'un diagonal sur l'autre **sans se déplacer**.
- **Le pas espagnol** : pas cadencé et majestueux où le cheval **projette exagérément chaque antérieur** devant lui (spectacle).
- **Le tölt** : allure **marchée à 4 temps égaux**, très rapide et confortable (un pied toujours au sol). **Innée**, on la trouve surtout chez l'**Islandais**.

**Les airs relevés** (haute école — Cadre Noir, École de Vienne) : le cheval quitte le sol en restant quasi sur place (levade, pesade, courbette, croupade, cabriole…).`,
        },
        {
          id: "g6-cg-allures-defect",
          titre: "Les allures défectueuses",
          source: SRC,
          contenu: `Elles viennent souvent d'une **souffrance**, d'un **défaut de conformation** ou d'une mauvaise utilisation.

- **L'amble** : allure à **2 temps** par **bipèdes latéraux** (les deux membres du même côté). Non sautée, rapide et confortable.
- **Le traquenard** : trot **décousu / désuni**, battues diagonales dissociées.
- **L'aubin** : le cheval **galope des antérieurs et trotte des postérieurs**.
- **Le galop désuni** : galopé à gauche des antérieurs et à droite des postérieurs (ou l'inverse).`,
        },
        {
          id: "g6-cg-jugement",
          titre: "Critères de jugement d'une reprise de dressage",
          source: SRC,
          contenu: `Ce qu'un juge évalue :

- **Les allures** : **franchise, régularité, rythme** (bien distinguer les 4 temps du pas, 2 temps du trot, 3 temps du galop).
- **L'impulsion** : désir de se porter en avant, élasticité des foulées (suspension), souplesse du dos, engagement de l'arrière-main.
- **La soumission** : soumission au mors, attention, confiance, harmonie, légèreté et aisance des mouvements.
- **Position et assiette du cavalier** : bonne tenue, **efficacité et discrétion des aides**.

Les **notes d'ensemble** (soumises à des coefficients) reflètent l'impression générale et peuvent faire basculer la moyenne.`,
        },
        {
          id: "g6-cg-cross",
          titre: "Les obstacles de cross",
          source: SRC,
          contenu: `Obstacles naturels d'extérieur à connaître : le **contre-bas** et le **contre-haut**, la **pointe**, le **string**, le **gué** (passage dans l'eau) et la **haie**.`,
        },
      ],
      fiches: [
        {
          id: "g6-cg-fiche",
          titre: "Fiche mémo — Connaissances générales",
          source: SRC,
          points_cles: [
            "Artificielles (apprises) : passage, piaffer, pas espagnol, tölt (4 temps, Islandais).",
            "Airs relevés = haute école (levade, courbette, cabriole…).",
            "Défectueuses : amble (2 temps, bipèdes latéraux), traquenard, aubin, galop désuni.",
            "Jugement dressage : allures (franchise/régularité/rythme), impulsion, soumission, position du cavalier.",
            "Cross : contre-bas, contre-haut, pointe, string, gué, haie.",
          ],
        },
      ],
      questions: [
        {
          id: "g6-q1",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Le passage est une allure artificielle qui consiste en :",
          choix: [
            { id: "a", texte: "Un trot sur place sans avancer", correct: false },
            { id: "b", texte: "Un trot écourté et très relevé, avec une projection prolongée", correct: true },
            { id: "c", texte: "Un pas très rapide à 4 temps", correct: false },
            { id: "d", texte: "Un galop à 3 temps ralenti", correct: false },
          ],
          explication_correcte: "Oui : le passage est un trot raccourci, relevé, avec un temps de suspension marqué.",
          explication_incorrecte:
            "Le passage = trot écourté, relevé, projection prolongée. Le trot sur place et suspendu, c'est le piaffer.",
          source: SRC,
        },
        {
          id: "g6-q2",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Le piaffer, c'est :",
          choix: [
            { id: "a", texte: "Un trot sur place, relevé et suspendu, sans se déplacer", correct: true },
            { id: "b", texte: "Un galop de côté", correct: false },
            { id: "c", texte: "Un pas espagnol", correct: false },
            { id: "d", texte: "Une allure défectueuse", correct: false },
          ],
          explication_correcte: "Exact : le cheval trotte sur place, en se projetant d'un diagonal sur l'autre.",
          explication_incorrecte: "Le piaffer = trot sur place, relevé et suspendu, sans avancer.",
          source: SRC,
        },
        {
          id: "g6-q3",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Le tölt est une allure :",
          choix: [
            { id: "a", texte: "Sautée à 2 temps", correct: false },
            { id: "b", texte: "Marchée à 4 temps égaux, très confortable (cheval islandais)", correct: true },
            { id: "c", texte: "Défectueuse", correct: false },
            { id: "d", texte: "À 3 temps comme le galop", correct: false },
          ],
          explication_correcte: "Oui : 4 temps égaux, un pied toujours au sol, innée surtout chez l'Islandais.",
          explication_incorrecte: "Le tölt = allure marchée à 4 temps égaux, très confortable, typique de l'Islandais.",
          source: SRC,
        },
        {
          id: "g6-q4",
          domaine: "connaissances_generales",
          difficulte: 3,
          enonce: "L'amble est une allure défectueuse à :",
          choix: [
            { id: "a", texte: "4 temps par bipèdes diagonaux", correct: false },
            { id: "b", texte: "2 temps par bipèdes latéraux", correct: true },
            { id: "c", texte: "3 temps sautée", correct: false },
            { id: "d", texte: "1 temps", correct: false },
          ],
          explication_correcte: "Exact : les deux membres d'un même côté se déplacent ensemble.",
          explication_incorrecte: "L'amble = 2 temps par bipèdes latéraux (les membres d'un même côté ensemble).",
          source: SRC,
        },
        {
          id: "g6-q5",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Parmi ces critères, lesquels jugent la qualité d'une allure en dressage ?",
          choix: [
            { id: "a", texte: "La couleur de la robe", correct: false },
            { id: "b", texte: "Franchise, régularité, rythme", correct: true },
            { id: "c", texte: "La taille du cheval", correct: false },
            { id: "d", texte: "Le nombre de foulées", correct: false },
          ],
          explication_correcte: "Oui : une allure se juge sur sa franchise, sa régularité et son rythme.",
          explication_incorrecte: "Une allure se juge sur la franchise, la régularité et le rythme.",
          source: SRC,
        },
        {
          id: "g6-q6",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Le galop à faux, c'est quand :",
          choix: [
            { id: "a", texte: "Le cheval galope trop vite", correct: false },
            { id: "b", texte: "Sur une courbe à droite, le cheval reste sur son galop à gauche", correct: true },
            { id: "c", texte: "Le cheval trotte au lieu de galoper", correct: false },
            { id: "d", texte: "Le cheval est désuni", correct: false },
          ],
          explication_correcte: "Exact : c'est un exercice qui engage les postérieurs et équilibre le galop.",
          explication_incorrecte:
            "Galop à faux = à main droite (courbe à droite) le cheval reste sur le galop gauche. C'est un exercice (≠ galop désuni).",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g6-cl-cg-1", domaine: "connaissances_generales", libelle: "Je décris les allures artificielles (passage, piaffer, pas espagnol, tölt)" },
        { id: "g6-cl-cg-2", domaine: "connaissances_generales", libelle: "Je reconnais les allures défectueuses (amble, traquenard, aubin, galop désuni)" },
        { id: "g6-cl-cg-3", domaine: "connaissances_generales", libelle: "J'explique les critères de jugement d'une reprise de dressage" },
        { id: "g6-cl-cg-4", domaine: "connaissances_generales", libelle: "Je nomme les principaux obstacles de cross" },
      ],
    },

    // ── Domaine 2 — Connaître le cheval ──
    {
      domaine: "connaitre_le_cheval",
      cours: [
        {
          id: "g6-cc-allures-qualite",
          titre: "Qualités et défauts des allures",
          source: SRC,
          contenu: `### Le pas
Un bon pas montre l'**engagement des postérieurs** (le cheval « se méjuge » : le postérieur se pose **en avant** de l'empreinte de l'antérieur), un **balancement de la queue** et un geste ample — signes d'un dos souple et tonique.

### Le trot
Un bon trot : **symétrie** du geste des 4 membres, bonne **suspension**, bon **soutien du dos**. L'**irrégularité** est toujours un défaut (manque de préparation ou problème de locomotion).

### Le galop
Un bon galop est **équilibré** : bon **engagement des postérieurs** sous la masse, bon soutien du devant, **bascule du dos**, souple et étendu. La qualité du galop est déterminante pour un cheval de sport.`,
        },
        {
          id: "g6-cc-digestif",
          titre: "Le tube digestif du cheval",
          source: SRC,
          contenu: `Le tube digestif : œsophage → estomac → **intestin grêle** (duodénum, jéjunum, iléon) → **gros intestin** (caecum, côlon ascendant et descendant).

- Le **gros intestin représente plus de 60 %** du volume intestinal : c'est une particularité du cheval, qui lui permet de digérer la **cellulose** (végétaux).
- Il a besoin de **lest** : un apport de **fourrage** tout au long de la journée fait mastiquer et saliver → bonne motricité digestive.
- Rappel : le cheval est **incapable de vomir**.`,
        },
      ],
      fiches: [
        {
          id: "g6-cc-fiche",
          titre: "Fiche mémo — Connaître le cheval",
          source: SRC,
          points_cles: [
            "Bon pas : engagement (le cheval se « méjuge »), balancement de la queue.",
            "Bon trot : symétrie, suspension, soutien du dos. Irrégularité = défaut.",
            "Bon galop : équilibré, engagé, dos qui bascule, souple et étendu.",
            "Gros intestin = +60 % du volume (digère la cellulose). Le cheval ne vomit pas.",
          ],
        },
      ],
      questions: [
        {
          id: "g6-q7",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Un cheval « se méjuge » quand :",
          choix: [
            { id: "a", texte: "Il se trompe de pied au galop", correct: false },
            { id: "b", texte: "Son postérieur se pose en avant de l'empreinte de l'antérieur", correct: true },
            { id: "c", texte: "Il refuse un obstacle", correct: false },
            { id: "d", texte: "Il mange trop vite", correct: false },
          ],
          explication_correcte: "Oui : signe d'un bon engagement des postérieurs et d'un dos qui fonctionne.",
          explication_incorrecte:
            "Se méjuger = le postérieur se pose en avant de l'empreinte de l'antérieur (bon engagement).",
          source: SRC,
        },
        {
          id: "g6-q8",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Quelle est une particularité du tube digestif du cheval ?",
          choix: [
            { id: "a", texte: "Il a deux estomacs", correct: false },
            { id: "b", texte: "Son gros intestin représente plus de 60 % du volume intestinal", correct: true },
            { id: "c", texte: "Il digère en une heure", correct: false },
            { id: "d", texte: "Il peut vomir facilement", correct: false },
          ],
          explication_correcte: "Exact : le gros intestin (caecum, côlon) lui permet de digérer la cellulose.",
          explication_incorrecte:
            "Le gros intestin = +60 % du volume et digère la cellulose. Et le cheval ne peut pas vomir.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g6-cl-cc-1", domaine: "connaitre_le_cheval", libelle: "J'explique les qualités et défauts des 3 allures" },
        { id: "g6-cl-cc-2", domaine: "connaitre_le_cheval", libelle: "Je décris le tube digestif du cheval" },
      ],
    },

    // ── Domaine 3 — S'occuper du cheval ──
    {
      domaine: "s_occuper_du_cheval",
      cours: [
        {
          id: "g6-so-maladies",
          titre: "Les maladies du cheval",
          source: SRC,
          contenu: `### La colique
**1ʳᵉ cause de mortalité** chez le cheval. Ce n'est **pas une maladie mais un syndrome** (douleurs abdominales). Les stades vont de **légère** (gratte le sol, se regarde les flancs) à **sévère** (se roule violemment, transpire beaucoup). **Urgence vétérinaire**.

### La fourbure
**Inflammation / congestion du pied** (surtout les antérieurs). **2ᵉ cause de mortalité**. Pieds chauds et douloureux, réticence à se déplacer, bascule du poids sur les postérieurs.

### L'abcès de pied
**Infection bactérienne** dans le sabot → **boiterie aiguë** et brutale, pied chaud, pouls digité. Bien soigné, guérison rapide.

### Le coup de sang (rhabdomyolyse)
Maladie **musculaire** douloureuse survenant **à l'effort** (« maladie du lundi »). Crampes intenses et généralisées.

### Le syndrome naviculaire
Lésions douloureuses à **l'arrière du pied** (autour de l'os naviculaire), surtout aux **antérieurs** → boiterie souvent bilatérale et progressive.`,
        },
        {
          id: "g6-so-enrenements",
          titre: "Les principaux enrênements au travail monté",
          source: SRC,
          contenu: `Il existe deux types : **fixes** (gogue fixe, martingale, élastiques) et **coulissants** (rênes allemandes, gogue commandé).

- **Le gogue** : effet abaisseur sur la **nuque** (pas sur la bouche), allonge l'encolure.
- **La martingale à anneaux** : empêche le cheval de **relever trop la tête** (pression vers le bas sur les rênes quand il relève).
- **Les rênes allemandes** : enrênement coulissant, **réservé aux cavaliers expérimentés** (usage délicat).

Objectif général : accompagner le cheval à **tendre son dos** sans se creuser, en **conservant l'impulsion**.`,
        },
      ],
      fiches: [
        {
          id: "g6-so-fiche",
          titre: "Fiche mémo — Santé & enrênements",
          source: SRC,
          points_cles: [
            "Colique = 1ʳᵉ cause de mortalité, syndrome (douleur abdominale) → urgence véto.",
            "Fourbure = inflammation du pied (antérieurs), 2ᵉ cause de mortalité.",
            "Abcès de pied = infection bactérienne → boiterie aiguë. Coup de sang = crampes à l'effort.",
            "Syndrome naviculaire = arrière du pied, antérieurs, boiterie progressive.",
            "Enrênements : fixes (gogue, martingale) / coulissants (rênes allemandes = experts).",
          ],
        },
      ],
      questions: [
        {
          id: "g6-q9",
          domaine: "s_occuper_du_cheval",
          difficulte: 1,
          enonce: "Quelle est la première cause de mortalité chez le cheval ?",
          choix: [
            { id: "a", texte: "La fourbure", correct: false },
            { id: "b", texte: "La colique", correct: true },
            { id: "c", texte: "L'abcès de pied", correct: false },
            { id: "d", texte: "Le coup de sang", correct: false },
          ],
          explication_correcte: "Oui : la colique est la 1ʳᵉ cause de mortalité — c'est une urgence vétérinaire.",
          explication_incorrecte:
            "La colique est la 1ʳᵉ cause de mortalité (la fourbure est la 2ᵉ). C'est un syndrome, pas une maladie.",
          source: SRC,
        },
        {
          id: "g6-q10",
          domaine: "s_occuper_du_cheval",
          difficulte: 2,
          enonce: "La fourbure est une maladie qui touche :",
          choix: [
            { id: "a", texte: "Les poumons", correct: false },
            { id: "b", texte: "Le pied (surtout les antérieurs), par inflammation", correct: true },
            { id: "c", texte: "L'estomac", correct: false },
            { id: "d", texte: "Les yeux", correct: false },
          ],
          explication_correcte: "Exact : inflammation / congestion du pied, surtout les antérieurs.",
          explication_incorrecte: "La fourbure = inflammation du pied (surtout antérieurs), 2ᵉ cause de mortalité.",
          source: SRC,
        },
        {
          id: "g6-q11",
          domaine: "s_occuper_du_cheval",
          difficulte: 2,
          enonce: "Le « coup de sang » (rhabdomyolyse) est une maladie :",
          choix: [
            { id: "a", texte: "De la peau", correct: false },
            { id: "b", texte: "Musculaire, survenant à l'effort", correct: true },
            { id: "c", texte: "Des dents", correct: false },
            { id: "d", texte: "Digestive", correct: false },
          ],
          explication_correcte: "Oui, des crampes musculaires intenses à l'exercice (« maladie du lundi »).",
          explication_incorrecte: "Le coup de sang = maladie musculaire à l'effort (rhabdomyolyse, « maladie du lundi »).",
          source: SRC,
        },
        {
          id: "g6-q12",
          domaine: "s_occuper_du_cheval",
          difficulte: 3,
          enonce: "Les rênes allemandes sont un enrênement :",
          choix: [
            { id: "a", texte: "Fixe, pour débutants", correct: false },
            { id: "b", texte: "Coulissant, réservé aux cavaliers expérimentés", correct: true },
            { id: "c", texte: "Qui agit seulement sur la queue", correct: false },
            { id: "d", texte: "Interdit en France", correct: false },
          ],
          explication_correcte: "Exact : coulissant et d'usage délicat, réservé aux cavaliers expérimentés.",
          explication_incorrecte:
            "Les rênes allemandes = enrênement coulissant, d'usage délicat, réservé aux cavaliers expérimentés.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g6-cl-so-1", domaine: "s_occuper_du_cheval", libelle: "Je reconnais les principales maladies (colique, fourbure, abcès, coup de sang, naviculaire)" },
        { id: "g6-cl-so-2", domaine: "s_occuper_du_cheval", libelle: "Je distingue les stades d'une colique et je réagis" },
        { id: "g6-cl-so-3", domaine: "s_occuper_du_cheval", libelle: "Je décris les principaux enrênements et leur rôle" },
      ],
    },

    // ── Domaine 4 — Pratique à pied ──
    { domaine: "pratique_a_pied", cours: [], fiches: [], questions: [], checklist: [] },

    // ── Domaine 5 — Pratique à cheval ──
    {
      domaine: "pratique_a_cheval",
      cours: [
        {
          id: "g6-pc-surlamain",
          titre: "La mise sur la main et l'impulsion",
          source: SRC,
          contenu: `### La mise sur la main
Un cheval est **sur la main** lorsqu'il tend ses rênes **vers le bas et l'avant**, de façon constante, grâce à l'**engagement de ses postérieurs**. Il prend un **appui franc** sur le mors, sans résistance ; la tête est fléchie à la nuque, le **chanfrein légèrement en avant de la verticale**.

⚠️ Le contact doit être la **conséquence de l'impulsion** (engagement des postérieurs), **jamais** d'une action des mains vers l'arrière.
Enchaînement : **1. engagement des postérieurs → 2. tension du dos → 3. tension des rênes.**

### L'impulsion
L'**énergie** qui génère le mouvement : le cheval développe la même dose d'énergie **sans augmenter la vitesse**. Un cheval « en sous-impulsion » est inattentif et lent à répondre. ⚠️ Impulsion **≠** vitesse.`,
        },
        {
          id: "g6-pc-galopfaux",
          titre: "Le galop à faux",
          source: SRC,
          contenu: `Le cheval galope **à faux** lorsque, sur une courbe à droite, il **reste sur son galop à gauche** (ployé à gauche, antérieur et postérieur gauche devant).

C'est un **exercice** (et non un défaut) qui fait **engager le postérieur interne**, mobilise la croupe et **équilibre le galop**. À aborder avec tact, en partant du pas, en gardant le cheval **relaxé et dans une bonne cadence**.`,
        },
      ],
      fiches: [
        {
          id: "g6-pc-fiche",
          titre: "Fiche mémo — Pratique à cheval",
          source: SRC,
          points_cles: [
            "Sur la main : rênes tendues vers le bas/avant par l'engagement des postérieurs (chanfrein devant la verticale).",
            "Le contact est une conséquence de l'impulsion, jamais de la main qui tire.",
            "Ordre : engagement → tension du dos → tension des rênes.",
            "Impulsion ≠ vitesse. Galop à faux = exercice qui équilibre le galop.",
          ],
        },
      ],
      questions: [
        {
          id: "g6-q13",
          domaine: "pratique_a_cheval",
          specialisation: "dressage",
          difficulte: 3,
          enonce: "Un cheval est « sur la main » lorsque :",
          choix: [
            { id: "a", texte: "Le cavalier tire sur les rênes vers lui", correct: false },
            {
              id: "b",
              texte: "Il tend ses rênes vers le bas et l'avant grâce à l'engagement des postérieurs",
              correct: true,
            },
            { id: "c", texte: "Il lève la tête très haut", correct: false },
            { id: "d", texte: "Il ouvre la bouche", correct: false },
          ],
          explication_correcte:
            "Exact : le contact est la conséquence de l'impulsion (postérieurs), pas d'une action des mains.",
          explication_incorrecte:
            "Sur la main = le cheval tend ses rênes vers le bas/avant grâce à l'engagement des postérieurs. Le contact vient de l'impulsion, pas de la main.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g6-cl-pc-1", domaine: "pratique_a_cheval", libelle: "Je recherche la mise sur la main par l'impulsion" },
        { id: "g6-cl-pc-2", domaine: "pratique_a_cheval", libelle: "Je comprends et j'utilise le galop à faux" },
        { id: "g6-cl-pc-dr", domaine: "pratique_a_cheval", specialisation: "dressage", libelle: "Dressage : je présente une reprise Club 2" },
        { id: "g6-cl-pc-cso", domaine: "pratique_a_cheval", specialisation: "cso", libelle: "CSO : j'enchaîne un parcours Club 2" },
        { id: "g6-cl-pc-cross", domaine: "pratique_a_cheval", specialisation: "cross", libelle: "Cross : je franchis un parcours Club 2" },
      ],
    },
  ],
};

export default galop6;
