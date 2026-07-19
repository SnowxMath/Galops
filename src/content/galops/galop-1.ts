import type { Galop } from "../types";

const SRC = "Programme officiel FFE — Galop 1 (Guide fédéral)";

/**
 * GALOP 1 — Pack de révision complet.
 * Contenu transcrit depuis le pack de révision validé (basé sur le
 * programme officiel FFE des Galops de cavalier, niveau Galop 1).
 * Document de révision : la validation se fait en club, par l'enseignant.
 */
const galop1: Galop = {
  id: 1,
  titre: "Galop 1",
  resume:
    "Devenir cavalier : découvrir le cheval/poney et les bases de l'équitation, en sécurité. Pas d'examen couperet — l'enseignant valide quand tu maîtrises.",
  prerequis: null,
  domaines: [
    // ─────────────────────────────────────────────────────────────
    // DOMAINE 1 — Connaissances générales
    // ─────────────────────────────────────────────────────────────
    {
      domaine: "connaissances_generales",
      cours: [
        {
          id: "g1-cg-securite",
          titre: "La sécurité, à pied et à cheval",
          source: SRC,
          contenu: `### La sécurité, à pied
- On approche toujours un cheval **en lui parlant**, par l'**épaule** (côté), jamais brusquement de face ni par-derrière : le cheval a un **angle mort** juste devant son nez et juste derrière lui.
- On **ne passe jamais** juste derrière un cheval sans se signaler ; si on doit passer derrière, soit on passe **très près** en gardant une main dessus et en lui parlant, soit **très loin**.
- On **n'enroule jamais** la longe ou les rênes autour de sa main ou de son poignet.
- On plie les genoux plutôt que de s'asseoir/s'accroupir près d'un cheval (pour pouvoir se relever vite).
- Tenue : **chaussures fermées** à petit talon, **casque (bombe)** bien attaché.

### La sécurité, à cheval
- **Casque attaché** en permanence.
- On respecte une **distance** avec les autres chevaux (au moins la longueur d'un cheval).
- Règle de circulation en manège/carrière : quand deux cavaliers se croisent, **on se croise main gauche contre main gauche**.
- On **prévient** avant de changer d'allure ou de s'arrêter quand d'autres suivent.`,
        },
        {
          id: "g1-cg-club-ffe",
          titre: "Le club, la FFE et la licence",
          source: SRC,
          contenu: `### Le club (centre équestre)
Les principaux espaces : l'**écurie / les box**, la **sellerie** (où sont rangés selles et filets), la **carrière** (extérieure), le **manège** (couvert), le **paddock / pré**. Il faut savoir se repérer et connaître les règles de chaque lieu.

### La FFE et la licence
- **FFE** = Fédération Française d'Équitation. Elle organise l'équitation en France : les **Galops**, les compétitions, la réglementation.
- La **licence** est ton adhésion annuelle : elle t'assure, te permet de **monter en club** et de **passer tes Galops**.`,
        },
        {
          id: "g1-cg-materiel",
          titre: "Le matériel : la selle et le filet",
          source: SRC,
          schemas: [
            {
              id: "selle",
              type: "memo",
              legende: "Les parties de la selle",
              parties: ["Pommeau", "Troussequin", "Siège", "Quartier", "Étrivière", "Étrier", "Sangle"],
            },
            {
              id: "filet",
              type: "memo",
              legende: "Les parties du filet",
              parties: ["Têtière", "Frontal", "Montant", "Muserolle", "Sous-gorge", "Mors", "Rêne"],
            },
          ],
          contenu: `Savoir **nommer** les principales parties du harnachement.

### La selle
**Pommeau** (avant), **troussequin** (arrière), **siège**, **quartiers**, **étrivières** + **étriers**, **sangle**.

### Le filet
**Têtière**, **frontal**, **muserolle**, **sous-gorge**, **montants**, **mors**, **rênes**.`,
        },
      ],
      fiches: [
        {
          id: "g1-cg-fiche",
          titre: "Fiche mémo — Connaissances générales",
          source: SRC,
          points_cles: [
            "Approcher : parler + par l'épaule. Angle mort = devant le nez + derrière.",
            "Jamais de longe/rêne enroulée autour de la main.",
            "Croisement en manège : main gauche / main gauche.",
            "FFE = Fédération Française d'Équitation ; licence = assurance + passage des Galops.",
            "Selle : pommeau, troussequin, siège, quartiers, étrivières, étriers, sangle.",
            "Filet : têtière, frontal, muserolle, sous-gorge, montants, mors, rênes.",
          ],
        },
      ],
      questions: [
        {
          id: "g1-q1",
          domaine: "connaissances_generales",
          difficulte: 1,
          enonce: "Que veut dire « FFE » ?",
          choix: [
            { id: "a", texte: "Fédération Française d'Élevage", correct: false },
            { id: "b", texte: "Fédération Française d'Équitation", correct: true },
            { id: "c", texte: "Fédération Française d'Endurance", correct: false },
            { id: "d", texte: "Formation Française des Écuries", correct: false },
          ],
          explication_correcte: "Exact ! La FFE organise les Galops et l'équitation en France.",
          explication_incorrecte:
            "FFE = Fédération Française d'Équitation. C'est elle qui crée les Galops.",
          source: SRC,
        },
        {
          id: "g1-q2",
          domaine: "connaissances_generales",
          difficulte: 1,
          enonce: "À quoi sert la licence ?",
          choix: [
            { id: "a", texte: "Seulement à faire de la compétition", correct: false },
            { id: "b", texte: "À acheter un cheval", correct: false },
            {
              id: "c",
              texte: "À être assuré et pouvoir monter en club et passer ses Galops",
              correct: true,
            },
            { id: "d", texte: "À rien d'obligatoire", correct: false },
          ],
          explication_correcte:
            "Oui : la licence est ton adhésion annuelle, elle t'assure et te permet de passer les Galops.",
          explication_incorrecte:
            "La licence sert à t'assurer, monter en club et passer tes Galops — pas seulement la compétition.",
          source: SRC,
        },
        {
          id: "g1-q3",
          domaine: "connaissances_generales",
          difficulte: 1,
          enonce: "Comment approcher un cheval en sécurité ?",
          choix: [
            { id: "a", texte: "En silence, par-derrière", correct: false },
            { id: "b", texte: "En courant vers lui de face", correct: false },
            { id: "c", texte: "En lui parlant, par le côté (l'épaule)", correct: true },
            { id: "d", texte: "En le surprenant pour voir sa réaction", correct: false },
          ],
          explication_correcte: "Bravo, on se signale à la voix et on approche par l'épaule.",
          explication_incorrecte:
            "On approche en parlant et par l'épaule : le cheval a un angle mort devant le nez et derrière.",
          source: SRC,
        },
        {
          id: "g1-q4",
          domaine: "connaissances_generales",
          difficulte: 1,
          enonce: "Où se trouvent les angles morts du cheval (là où il ne te voit pas) ?",
          choix: [
            { id: "a", texte: "Sur les côtés", correct: false },
            { id: "b", texte: "Juste devant son nez et juste derrière lui", correct: true },
            { id: "c", texte: "Au-dessus de sa tête", correct: false },
            { id: "d", texte: "Il voit partout pareil", correct: false },
          ],
          explication_correcte: "Exact ! D'où l'importance de se signaler.",
          explication_incorrecte:
            "Le cheval ne te voit pas juste devant son nez ni juste derrière lui.",
          source: SRC,
        },
        {
          id: "g1-q14",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Parmi ces éléments, lequel fait partie du filet ?",
          choix: [
            { id: "a", texte: "Le pommeau", correct: false },
            { id: "b", texte: "Le troussequin", correct: false },
            { id: "c", texte: "La muserolle", correct: true },
            { id: "d", texte: "L'étrier", correct: false },
          ],
          explication_correcte: "Exact, la muserolle fait partie du filet.",
          explication_incorrecte:
            "La muserolle appartient au filet. Pommeau, troussequin et étrier, eux, sont sur la selle.",
          source: SRC,
        },
        {
          id: "g1-q15",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Parmi ces éléments, lequel fait partie de la selle ?",
          choix: [
            { id: "a", texte: "Le mors", correct: false },
            { id: "b", texte: "Le frontal", correct: false },
            { id: "c", texte: "Le troussequin", correct: true },
            { id: "d", texte: "La têtière", correct: false },
          ],
          explication_correcte: "Oui, le troussequin est l'arrière de la selle.",
          explication_incorrecte:
            "Le troussequin (arrière de la selle) fait partie de la selle. Mors, frontal et têtière sont sur le filet.",
          source: SRC,
        },
        {
          id: "g1-q18",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "En manège, quand deux cavaliers se croisent, ils se croisent :",
          choix: [
            { id: "a", texte: "Main droite contre main droite", correct: false },
            { id: "b", texte: "Main gauche contre main gauche", correct: true },
            { id: "c", texte: "Au hasard", correct: false },
            { id: "d", texte: "En s'arrêtant tous les deux", correct: false },
          ],
          explication_correcte: "Exact, la règle est main gauche / main gauche.",
          explication_incorrecte:
            "Règle de circulation : on se croise main gauche contre main gauche.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g1-cl-cg-1", domaine: "connaissances_generales", libelle: "Je cite les règles de sécurité à pied" },
        { id: "g1-cl-cg-2", domaine: "connaissances_generales", libelle: "Je cite les règles de sécurité à cheval" },
        { id: "g1-cl-cg-3", domaine: "connaissances_generales", libelle: "Je me repère dans les espaces de mon club" },
        { id: "g1-cl-cg-4", domaine: "connaissances_generales", libelle: "J'explique ce qu'est mon club, ma licence et la FFE" },
        { id: "g1-cl-cg-5", domaine: "connaissances_generales", libelle: "Je nomme les principales parties de la selle" },
        { id: "g1-cl-cg-6", domaine: "connaissances_generales", libelle: "Je nomme les principales parties du filet" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // DOMAINE 2 — Connaître le cheval
    // ─────────────────────────────────────────────────────────────
    {
      domaine: "connaitre_le_cheval",
      cours: [
        {
          id: "g1-cc-comportement",
          titre: "Comportement et besoins du cheval",
          source: SRC,
          contenu: `### Un animal de proie et grégaire
- Le cheval est un **herbivore** : il mange de l'**herbe** et du **foin**, en **petites quantités mais souvent** (presque toute la journée).
- C'est un **animal grégaire** : il vit en **groupe (troupeau)** et a besoin de la compagnie d'autres chevaux.
- C'est un **animal de proie** : il est **peureux** et sa première réaction face au danger est la **fuite**.

### Ses besoins
Eau fraîche à volonté, nourriture (herbe/foin), un abri, la compagnie d'autres chevaux, et du mouvement.

### Ses attitudes (il communique avec son corps)
- **Oreilles pointées vers l'avant** = attentif, curieux, intéressé.
- **Oreilles couchées en arrière** = mécontentement, énervement, menace → prudence.
- Queue qui fouaille, jambe qui gratte, tête basse et calme… autant de signaux à observer.`,
        },
        {
          id: "g1-cc-allures-robes",
          titre: "Les allures, les robes et le corps du cheval",
          source: SRC,
          schemas: [
            {
              id: "cheval",
              type: "memo",
              legende: "Les principales parties du cheval",
              parties: [
                "Tête",
                "Encolure",
                "Crinière",
                "Garrot",
                "Dos",
                "Rein",
                "Croupe",
                "Queue",
                "Épaule",
                "Poitrail",
                "Flanc",
                "Ventre",
                "Membres antérieurs",
                "Membres postérieurs",
                "Sabot",
              ],
            },
          ],
          contenu: `### Les 3 allures
- **Le pas** : allure la plus **lente**, marchée, à **4 temps**.
- **Le trot** : allure **sautée**, à **2 temps** (les membres bougent en diagonale).
- **Le galop** : allure **rapide**, sautée, à **3 temps**.

### Les 3 robes de base
- **Noir** : corps et crins noirs.
- **Alezan** : corps **marron/roux**, crins de la **même couleur** (ou plus clairs).
- **Bai** : corps **brun-roux**, mais **crins et bas des membres noirs**.

### Les principales parties du corps
Tête, **encolure** (le cou), **garrot** (base de l'encolure, point le plus haut du dos), dos, **rein**, **croupe**, épaule, **poitrail**, membres (antérieurs et postérieurs), **sabots**, ventre, flanc, queue, **crinière** (les crins).`,
        },
      ],
      fiches: [
        {
          id: "g1-cc-fiche",
          titre: "Fiche mémo — Connaître le cheval",
          source: SRC,
          schema: {
            id: "cheval",
            type: "memo",
            legende: "Les principales parties du cheval",
            parties: [
              "Tête",
              "Encolure",
              "Crinière",
              "Garrot",
              "Dos",
              "Rein",
              "Croupe",
              "Queue",
              "Épaule",
              "Poitrail",
              "Flanc",
              "Ventre",
              "Membres antérieurs",
              "Membres postérieurs",
              "Sabot",
            ],
          },
          points_cles: [
            "Herbivore + grégaire + animal de proie (réaction = fuite).",
            "Pas = 4 temps (lent) · Trot = 2 temps · Galop = 3 temps.",
            "Robes : noir / alezan / bai (bai = corps roux + crins noirs).",
            "Oreilles en arrière = danger / mécontentement.",
            "Garrot = point le plus haut du dos (là où on mesure le cheval).",
          ],
        },
      ],
      questions: [
        {
          id: "g1-q5",
          domaine: "connaitre_le_cheval",
          difficulte: 1,
          enonce: "Combien de temps compte l'allure du pas ?",
          choix: [
            { id: "a", texte: "2 temps", correct: false },
            { id: "b", texte: "3 temps", correct: false },
            { id: "c", texte: "4 temps", correct: true },
            { id: "d", texte: "1 temps", correct: false },
          ],
          explication_correcte: "Oui : le pas est à 4 temps, c'est l'allure marchée la plus lente.",
          explication_incorrecte: "Le pas = 4 temps. (Trot = 2 temps, galop = 3 temps.)",
          source: SRC,
        },
        {
          id: "g1-q6",
          domaine: "connaitre_le_cheval",
          difficulte: 1,
          enonce: "Le trot est une allure à…",
          choix: [
            { id: "a", texte: "2 temps", correct: true },
            { id: "b", texte: "3 temps", correct: false },
            { id: "c", texte: "4 temps", correct: false },
            { id: "d", texte: "5 temps", correct: false },
          ],
          explication_correcte: "Exact, le trot est à 2 temps (déplacements en diagonale).",
          explication_incorrecte: "Le trot = 2 temps. Retiens : pas 4, trot 2, galop 3.",
          source: SRC,
        },
        {
          id: "g1-q7",
          domaine: "connaitre_le_cheval",
          difficulte: 1,
          enonce: "Le galop est une allure à…",
          choix: [
            { id: "a", texte: "2 temps", correct: false },
            { id: "b", texte: "3 temps", correct: true },
            { id: "c", texte: "4 temps", correct: false },
            { id: "d", texte: "6 temps", correct: false },
          ],
          explication_correcte: "Oui, le galop est à 3 temps.",
          explication_incorrecte: "Le galop = 3 temps. (Pas 4, trot 2, galop 3.)",
          source: SRC,
        },
        {
          id: "g1-q8",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Un cheval bai, c'est…",
          choix: [
            { id: "a", texte: "Tout blanc", correct: false },
            { id: "b", texte: "Tout noir", correct: false },
            { id: "c", texte: "Corps roux/brun avec crins et bas des membres noirs", correct: true },
            { id: "d", texte: "Corps roux avec crins roux", correct: false },
          ],
          explication_correcte: "Parfait ! Le bai a le corps roux mais crins et membres noirs.",
          explication_incorrecte:
            "Bai = corps brun-roux + crins et bas des jambes NOIRS. S'il a les crins de la même couleur que le corps, c'est un alezan.",
          source: SRC,
        },
        {
          id: "g1-q9",
          domaine: "connaitre_le_cheval",
          difficulte: 1,
          enonce: "Les 3 robes de base au Galop 1 sont :",
          choix: [
            { id: "a", texte: "Noir, alezan, bai", correct: true },
            { id: "b", texte: "Blanc, gris, marron", correct: false },
            { id: "c", texte: "Pie, rouan, isabelle", correct: false },
            { id: "d", texte: "Beige, doré, argenté", correct: false },
          ],
          explication_correcte: "Oui : noir, alezan, bai.",
          explication_incorrecte: "Au Galop 1 on retient noir, alezan, bai.",
          source: SRC,
        },
        {
          id: "g1-q10",
          domaine: "connaitre_le_cheval",
          difficulte: 1,
          enonce: "Le cheval est un animal…",
          choix: [
            { id: "a", texte: "Carnivore et solitaire", correct: false },
            { id: "b", texte: "Herbivore, grégaire et peureux (proie)", correct: true },
            { id: "c", texte: "Omnivore et territorial", correct: false },
            { id: "d", texte: "Herbivore mais solitaire", correct: false },
          ],
          explication_correcte: "Exact : herbivore, il vit en groupe et fuit quand il a peur.",
          explication_incorrecte:
            "Le cheval est herbivore, grégaire (vit en groupe) et animal de proie → il réagit par la fuite.",
          source: SRC,
        },
        {
          id: "g1-q11",
          domaine: "connaitre_le_cheval",
          difficulte: 1,
          enonce: "Quand un cheval couche ses oreilles en arrière, cela signifie souvent :",
          choix: [
            { id: "a", texte: "Il est content", correct: false },
            { id: "b", texte: "Il a sommeil", correct: false },
            { id: "c", texte: "Il est mécontent ou menace", correct: true },
            { id: "d", texte: "Il a faim", correct: false },
          ],
          explication_correcte: "Oui, oreilles en arrière = prudence, il est contrarié.",
          explication_incorrecte:
            "Oreilles couchées en arrière = mécontentement / menace. Oreilles vers l'avant = attentif.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g1-cl-cc-1", domaine: "connaitre_le_cheval", libelle: "Je décris le comportement de base du cheval (proie, grégaire, herbivore)" },
        { id: "g1-cl-cc-2", domaine: "connaitre_le_cheval", libelle: "Je reconnais quelques attitudes (oreilles, calme/stress)" },
        { id: "g1-cl-cc-3", domaine: "connaitre_le_cheval", libelle: "Je nomme les 3 allures (pas, trot, galop)" },
        { id: "g1-cl-cc-4", domaine: "connaitre_le_cheval", libelle: "Je reconnais les 3 robes de base (noir, alezan, bai)" },
        { id: "g1-cl-cc-5", domaine: "connaitre_le_cheval", libelle: "Je nomme les principales parties du corps" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // DOMAINE 3 — S'occuper du cheval
    // ─────────────────────────────────────────────────────────────
    {
      domaine: "s_occuper_du_cheval",
      cours: [
        {
          id: "g1-so-approcher",
          titre: "Approcher, attacher et manipuler",
          source: SRC,
          contenu: `- On s'occupe du cheval **avant et après** l'avoir monté.
- On le **caresse** (sur l'encolure), on lui parle.
- On sait mettre un **licol** et attacher le cheval avec un **nœud d'attache** (nœud rapide, qui se défait d'un geste en cas de problème).
- On attache toujours à une **hauteur suffisante** et à un point solide, avec une longe pas trop longue.`,
        },
        {
          id: "g1-so-pansage",
          titre: "Le matériel de pansage",
          source: SRC,
          contenu: `Savoir **nommer** le matériel et à quoi il sert.
- **Cure-pied** : nettoie l'intérieur des sabots (on cure de la fourchette vers l'avant, on enlève cailloux et terre).
- **Étrille** (souvent en caoutchouc) : décrotte, enlève la boue et la poussière **sur le corps** — **pas sur les jambes ni la tête** (zones sensibles). Mouvements circulaires.
- **Bouchon** (brosse dure) : enlève la poussière que l'étrille a fait remonter.
- **Brosse douce** : lustre le poil, s'utilise sur tout le corps **et** les zones sensibles (tête, jambes).
- Éponge, peigne/brosse à crins complètent le kit.

### Le harnachement de base
Reconnaître : le **filet**, la **selle**, le **tapis** (sous la selle).`,
        },
      ],
      fiches: [
        {
          id: "g1-so-fiche",
          titre: "Fiche mémo — S'occuper du cheval",
          source: SRC,
          points_cles: [
            "Cure-pied = sabots · Étrille = corps (pas jambes/tête) · Bouchon = enlève la poussière · Brosse douce = partout + zones sensibles.",
            "Nœud d'attache = nœud qui se défait vite en cas de souci.",
            "Harnachement de base : filet + selle + tapis.",
          ],
        },
      ],
      questions: [
        {
          id: "g1-q12",
          domaine: "s_occuper_du_cheval",
          difficulte: 1,
          enonce: "À quoi sert le cure-pied ?",
          choix: [
            { id: "a", texte: "À brosser la crinière", correct: false },
            { id: "b", texte: "À nettoyer l'intérieur des sabots", correct: true },
            { id: "c", texte: "À laver le cheval", correct: false },
            { id: "d", texte: "À enlever la poussière du corps", correct: false },
          ],
          explication_correcte: "Exact, le cure-pied nettoie les sabots.",
          explication_incorrecte: "Le cure-pied nettoie l'intérieur des sabots (cailloux, terre).",
          source: SRC,
        },
        {
          id: "g1-q13",
          domaine: "s_occuper_du_cheval",
          difficulte: 2,
          enonce: "L'étrille s'utilise…",
          choix: [
            { id: "a", texte: "Sur les jambes et la tête", correct: false },
            { id: "b", texte: "Sur le corps, mais pas les jambes ni la tête", correct: true },
            { id: "c", texte: "Uniquement sur la queue", correct: false },
            { id: "d", texte: "Sur les sabots", correct: false },
          ],
          explication_correcte: "Oui : l'étrille décrotte le corps, on évite les zones sensibles.",
          explication_incorrecte:
            "L'étrille s'utilise sur le corps (mouvements circulaires), jamais sur les jambes ni la tête (trop sensibles).",
          source: SRC,
        },
        {
          id: "g1-q16",
          domaine: "s_occuper_du_cheval",
          difficulte: 1,
          enonce: "Un nœud d'attache, c'est un nœud qui…",
          choix: [
            { id: "a", texte: "Ne se défait jamais", correct: false },
            {
              id: "b",
              texte: "Se défait rapidement d'un seul geste en cas de problème",
              correct: true,
            },
            { id: "c", texte: "Sert à monter à cheval", correct: false },
            { id: "d", texte: "Attache les étriers", correct: false },
          ],
          explication_correcte: "Exact, c'est un nœud de sécurité qui se libère vite.",
          explication_incorrecte:
            "Le nœud d'attache doit pouvoir se défaire vite (sécurité) si le cheval panique.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g1-cl-so-1", domaine: "s_occuper_du_cheval", libelle: "Je m'occupe du cheval avant et après l'avoir monté" },
        { id: "g1-cl-so-2", domaine: "s_occuper_du_cheval", libelle: "Je mets un licol et je fais un nœud d'attache" },
        { id: "g1-cl-so-3", domaine: "s_occuper_du_cheval", libelle: "Je reconnais et nomme le matériel de pansage" },
        { id: "g1-cl-so-4", domaine: "s_occuper_du_cheval", libelle: "Je reconnais le harnachement de base (filet, selle, tapis)" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // DOMAINE 4 — Pratique équestre à pied
    // ─────────────────────────────────────────────────────────────
    {
      domaine: "pratique_a_pied",
      cours: [
        {
          id: "g1-pp-mener",
          titre: "Mener en main au pas",
          source: SRC,
          contenu: `- Se **positionner à côté** de son cheval (à hauteur de l'épaule), pas devant ni derrière.
- **Mener en main au pas** sur un tracé simple et connu : lignes droites et courbes, **des deux côtés** (savoir mener aussi bien à main droite qu'à main gauche).
- Savoir **s'arrêter** et faire **s'arrêter** son cheval.
- Savoir **éloigner** son cheval de soi (le repousser doucement pour se faire respecter).`,
        },
      ],
      fiches: [
        {
          id: "g1-pp-fiche",
          titre: "Fiche mémo — Pratique à pied",
          source: SRC,
          points_cles: [
            "Menée : à côté, à l'épaule, jamais devant ni derrière.",
            "Mener des deux mains (droite et gauche), lignes droites + courbes.",
          ],
        },
      ],
      questions: [
        {
          id: "g1-q17",
          domaine: "pratique_a_pied",
          difficulte: 1,
          enonce: "Quand tu mènes ton cheval en main, tu te places…",
          choix: [
            { id: "a", texte: "Juste devant lui", correct: false },
            { id: "b", texte: "Juste derrière lui", correct: false },
            { id: "c", texte: "À côté, à hauteur de son épaule", correct: true },
            { id: "d", texte: "Très loin devant au bout de la longe", correct: false },
          ],
          explication_correcte: "Oui, à l'épaule : tu le vois et tu es en sécurité.",
          explication_incorrecte:
            "On mène à côté du cheval, à hauteur de l'épaule — pas devant (il pourrait te marcher dessus), pas derrière.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g1-cl-pp-1", domaine: "pratique_a_pied", libelle: "Je me positionne correctement à côté du cheval" },
        { id: "g1-cl-pp-2", domaine: "pratique_a_pied", libelle: "Je mène en main au pas (lignes droites + courbes, des deux côtés)" },
        { id: "g1-cl-pp-3", domaine: "pratique_a_pied", libelle: "Je sais m'arrêter et éloigner le cheval de moi" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // DOMAINE 5 — Pratique équestre à cheval
    // ─────────────────────────────────────────────────────────────
    {
      domaine: "pratique_a_cheval",
      cours: [
        {
          id: "g1-pc-selle",
          titre: "Se tenir et diriger au pas",
          source: SRC,
          contenu: `- **Se mettre en selle** avec l'aide d'un **montoir**, **descendre** en autonomie.
- **Ressangler** en selle (resserrer la sangle une fois monté).
- **Tenir ses rênes** correctement : savoir les **ajuster**, les **allonger**, les **lâcher** et les **reprendre**.
- **Chausser / déchausser ses étriers** au pas.
- **Être assis dans une bonne posture** au pas ; **rester en équilibre sur ses étriers** quelques foulées au pas et au trot.
- **Diriger au pas**, faire des **transitions simples** (arrêt ↔ pas ↔ trot).
- **Trotter enlevé** en rythme sur un tracé simple.
- **Galoper quelques foulées**.`,
        },
      ],
      fiches: [
        {
          id: "g1-pc-fiche",
          titre: "Fiche mémo — Pratique à cheval",
          source: SRC,
          points_cles: [
            "En selle : montoir pour monter, descendre seul(e), ressangler.",
            "Posture assise correcte au pas + équilibre sur les étriers au pas/trot.",
            "Objectifs : diriger au pas, trotter enlevé, galoper quelques foulées, transitions simples.",
          ],
        },
      ],
      questions: [],
      checklist: [
        { id: "g1-cl-pc-1", domaine: "pratique_a_cheval", libelle: "Je me mets en selle au montoir et je descends seul(e)" },
        { id: "g1-cl-pc-2", domaine: "pratique_a_cheval", libelle: "Je tiens, ajuste, allonge et reprends mes rênes" },
        { id: "g1-cl-pc-3", domaine: "pratique_a_cheval", libelle: "Je chausse/déchausse mes étriers au pas" },
        { id: "g1-cl-pc-4", domaine: "pratique_a_cheval", libelle: "Je suis assis(e) dans une bonne posture au pas" },
        { id: "g1-cl-pc-5", domaine: "pratique_a_cheval", libelle: "Je reste en équilibre sur mes étriers au pas et au trot" },
        { id: "g1-cl-pc-6", domaine: "pratique_a_cheval", libelle: "Je dirige au pas et je fais des transitions simples" },
        { id: "g1-cl-pc-7", domaine: "pratique_a_cheval", libelle: "Je trotte enlevé en rythme sur un tracé simple" },
        { id: "g1-cl-pc-8", domaine: "pratique_a_cheval", libelle: "Je galope quelques foulées" },
      ],
    },
  ],
};

export default galop1;
