import type { Galop } from "../types";

const SRC = "Programme officiel FFE — Galop 5 (niveau Club 3)";
const SRC_ANAT = "Programme officiel FFE — Galop 5 · Anatomie (squelette et muscles)";

/**
 * GALOP 5 — Pack de révision complet (niveau Club 3).
 * Contenu transcrit depuis les packs de révision fournis (programme officiel
 * FFE Galop 5 + module anatomie approfondie).
 * À partir du Galop 5, la pratique à cheval se spécialise : Dressage / CSO / Cross.
 */
const galop5: Galop = {
  id: 5,
  titre: "Galop 5",
  resume:
    "Cavalier plus autonome qui commence à contribuer à la formation du cheval. La pratique à cheval se spécialise en Dressage / CSO / Cross (on passe les trois).",
  niveau: "Club 3",
  prerequis: 4,
  specialisation: ["dressage", "cso", "cross"],
  domaines: [
    // ─────────────────────────────────────────────────────────────
    // DOMAINE 1 — Connaissances générales
    // ─────────────────────────────────────────────────────────────
    {
      domaine: "connaissances_generales",
      cours: [
        {
          id: "g5-cg-notions",
          titre: "Les notions techniques clés",
          source: SRC,
          contenu: `Savoir **définir** ces notions — c'est très demandé.

- **Impulsion** : le **désir de se porter en avant**, l'énergie qui naît de l'engagement des postérieurs. ⚠️ Ce n'est **pas** la vitesse : on peut aller vite sans impulsion, et avoir de l'impulsion au pas.
- **Rectitude** : le cheval est **droit** quand ses **postérieurs suivent la trace des antérieurs**, sur les lignes droites **comme** sur les courbes.
- **Incurvation** : le cheval **épouse la courbe**, plié latéralement du bout du nez à la queue, autour de la jambe intérieure du cavalier.
- **Cadence** : la **régularité du rythme** de l'allure (le tempo reste constant).
- **Cession à la jambe** : exercice d'assouplissement où le cheval se déplace **en avant et de côté**, légèrement **incurvé à l'inverse** de sa direction, en **croisant** les membres. Critères : régularité, angle correct, croisement des membres, léger pli, impulsion conservée.
- **Transitions** : passage d'une allure à une autre — **montante** (vers plus animé) ou **descendante** (vers plus calme). Qualités : nettes, précises, équilibrées, sur les aides.`,
        },
        {
          id: "g5-cg-reperes",
          titre: "Repères de dressage, obstacles et mors",
          source: SRC,
          contenu: `### Lettres de la carrière (20 × 40 m)
En tournant autour de la piste : **A – K – E – H – C – M – B – F** (puis retour à A). Sur la **ligne du milieu** : **D – X – G**, avec **X au centre** exact.

### Principaux obstacles de CSO
- **Verticaux / droits** : croix, vertical, mur.
- **Larges (de volée)** : **oxer**, spa / triple barre, rivière.
- **Combinaisons** : double, triple (obstacles rapprochés enchaînés).

### Principaux mors de filet
À **olives**, à **aiguilles**, **Chantilly**, **Verdun**… Le mors de filet agit sur les commissures des lèvres, la langue et les barres (à distinguer du mors de bride, qui fait levier).`,
        },
        {
          id: "g5-cg-identification",
          titre: "Identification des équidés",
          source: SRC,
          contenu: `- **SIRE** = Système d'Identification Répertoriant les Équidés, géré par l'**IFCE**. Chaque équidé a un **numéro SIRE unique** et un **document d'identification (livret)**.
- **La puce (transpondeur)** : implantée dans l'**encolure, côté gauche** ; se lit avec un **lecteur de puce**. Elle rend l'identification obligatoire et infalsifiable.
- **Pour concourir** : le cheval doit être enregistré sur les bonnes listes (engagement **Club**, listes des chevaux de sport).`,
        },
        {
          id: "g5-cg-apprentissage",
          titre: "Les grands principes d'apprentissage du cheval",
          source: SRC,
          contenu: `Savoir **définir + donner un exemple**.

- **Habituation** : à force de répéter un stimulus sans conséquence, le cheval **cesse d'y réagir** (ex : une bâche au sol finit par ne plus l'effrayer).
- **Sensibilisation** : l'inverse — le cheval réagit **de plus en plus fort**.
- **Renforcement négatif** : on **retire une pression/gêne** dès que le cheval donne la bonne réponse (ex : on relâche la jambe dès qu'il avance). C'est la **base du dressage**.
- **Renforcement positif** : on **ajoute quelque chose d'agréable** après la bonne réponse (caresse, voix, friandise).
- **Punition** : on **ajoute quelque chose de désagréable** après un comportement indésirable — à manier avec **prudence** (le timing est crucial).`,
        },
      ],
      fiches: [
        {
          id: "g5-cg-fiche",
          titre: "Fiche mémo — Connaissances générales",
          source: SRC,
          points_cles: [
            "Impulsion ≠ vitesse (désir d'avancer). Rectitude = postérieurs dans la trace des antérieurs.",
            "Incurvation = plié sur la courbe. Cadence = rythme régulier.",
            "Cession à la jambe : en avant + de côté, pli à l'inverse du déplacement.",
            "Lettres carrière : A K E H C M B F ; centre = X.",
            "Renforcement négatif = retrait d'une pression (≠ punition).",
            "Puce = encolure gauche ; SIRE géré par l'IFCE.",
          ],
        },
      ],
      questions: [
        {
          id: "g5-q1",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "L'impulsion, c'est :",
          choix: [
            { id: "a", texte: "La vitesse du cheval", correct: false },
            { id: "b", texte: "Le désir du cheval de se porter en avant", correct: true },
            { id: "c", texte: "La longueur des foulées", correct: false },
            { id: "d", texte: "Le fait de tourner", correct: false },
          ],
          explication_correcte: "Exact — l'impulsion est l'énergie / le désir d'avancer, pas la vitesse.",
          explication_incorrecte:
            "L'impulsion = désir de se porter en avant. On peut avoir de l'impulsion au pas et aller vite sans impulsion.",
          source: SRC,
        },
        {
          id: "g5-q2",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Un cheval est droit (rectitude) quand :",
          choix: [
            { id: "a", texte: "Il tient sa tête droite", correct: false },
            { id: "b", texte: "Ses postérieurs suivent la trace de ses antérieurs", correct: true },
            { id: "c", texte: "Il va tout droit uniquement", correct: false },
            { id: "d", texte: "Il a le dos plat", correct: false },
          ],
          explication_correcte: "Oui : arrière-main dans l'axe de l'avant-main, sur les droites comme les courbes.",
          explication_incorrecte:
            "La rectitude = les postérieurs dans la trace des antérieurs (même dans les courbes).",
          source: SRC,
        },
        {
          id: "g5-q3",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Dans une cession à la jambe, le cheval :",
          choix: [
            { id: "a", texte: "Regarde dans la direction où il va", correct: false },
            { id: "b", texte: "Est plié à l'inverse de sa direction et croise les membres", correct: true },
            { id: "c", texte: "Recule", correct: false },
            { id: "d", texte: "Reste immobile", correct: false },
          ],
          explication_correcte: "Exact : léger pli à l'opposé du déplacement, membres qui se croisent.",
          explication_incorrecte:
            "En cession à la jambe, le cheval avance ET se déplace de côté, incurvé à l'inverse de sa direction, en croisant les membres.",
          source: SRC,
        },
        {
          id: "g5-q4",
          domaine: "connaissances_generales",
          difficulte: 1,
          enonce: "La cadence, c'est :",
          choix: [
            { id: "a", texte: "La vitesse maximale", correct: false },
            { id: "b", texte: "La régularité du rythme de l'allure", correct: true },
            { id: "c", texte: "Le nombre d'obstacles", correct: false },
            { id: "d", texte: "La taille des foulées", correct: false },
          ],
          explication_correcte: "Oui, un tempo régulier et constant.",
          explication_incorrecte: "La cadence = régularité du rythme de l'allure (le tempo reste constant).",
          source: SRC,
        },
        {
          id: "g5-q5",
          domaine: "connaissances_generales",
          difficulte: 1,
          enonce: "Une transition descendante, c'est passer :",
          choix: [
            { id: "a", texte: "Du pas au trot", correct: false },
            { id: "b", texte: "Du trot au galop", correct: false },
            { id: "c", texte: "Du galop au trot", correct: true },
            { id: "d", texte: "De l'arrêt au pas", correct: false },
          ],
          explication_correcte: "Exact : descendante = vers une allure plus calme.",
          explication_incorrecte:
            "Descendante = vers une allure plus calme (galop → trot). Montante = vers une allure plus animée.",
          source: SRC,
        },
        {
          id: "g5-q6",
          domaine: "connaissances_generales",
          difficulte: 3,
          enonce: "Le renforcement négatif, en apprentissage, c'est :",
          choix: [
            { id: "a", texte: "Punir le cheval", correct: false },
            { id: "b", texte: "Retirer une pression/gêne quand le cheval donne la bonne réponse", correct: true },
            { id: "c", texte: "Donner une friandise", correct: false },
            { id: "d", texte: "Ignorer le cheval", correct: false },
          ],
          explication_correcte: "Bravo — c'est le principe pression / relâchement, la base du dressage.",
          explication_incorrecte:
            "Piège : le renforcement négatif = RETIRER une pression dès la bonne réponse (≠ punition). Ajouter une friandise = renforcement positif.",
          source: SRC,
        },
        {
          id: "g5-q7",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "L'habituation, c'est quand le cheval :",
          choix: [
            { id: "a", texte: "Réagit de plus en plus fort à un stimulus", correct: false },
            { id: "b", texte: "Cesse de réagir à un stimulus répété sans conséquence", correct: true },
            { id: "c", texte: "Apprend un nouveau tour", correct: false },
            { id: "d", texte: "A peur d'un objet", correct: false },
          ],
          explication_correcte: "Oui : à force de répétition sans danger, il n'y réagit plus.",
          explication_incorrecte:
            "Habituation = le cheval s'habitue et cesse de réagir. L'inverse (réagir de plus en plus) = sensibilisation.",
          source: SRC,
        },
        {
          id: "g5-q15",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Où est implantée la puce électronique du cheval ?",
          choix: [
            { id: "a", texte: "Dans le sabot", correct: false },
            { id: "b", texte: "Dans l'encolure, côté gauche", correct: true },
            { id: "c", texte: "Dans la queue", correct: false },
            { id: "d", texte: "Sous la selle", correct: false },
          ],
          explication_correcte: "Oui : encolure gauche, lue par un lecteur de puce.",
          explication_incorrecte: "La puce s'implante dans l'encolure, du côté gauche ; elle se lit avec un lecteur.",
          source: SRC,
        },
        {
          id: "g5-q16",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Que signifie SIRE ?",
          choix: [
            { id: "a", texte: "Société d'Inscription des Rênes Équestres", correct: false },
            { id: "b", texte: "Système d'Identification Répertoriant les Équidés", correct: true },
            { id: "c", texte: "Service International des Races Équines", correct: false },
            { id: "d", texte: "Syndicat des Instructeurs et Randonneurs Équestres", correct: false },
          ],
          explication_correcte: "Exact, géré par l'IFCE.",
          explication_incorrecte: "SIRE = Système d'Identification Répertoriant les Équidés (géré par l'IFCE).",
          source: SRC,
        },
        {
          id: "g5-q17",
          domaine: "connaissances_generales",
          difficulte: 1,
          enonce: "Quelle lettre se trouve au centre de la carrière de dressage ?",
          choix: [
            { id: "a", texte: "A", correct: false },
            { id: "b", texte: "C", correct: false },
            { id: "c", texte: "X", correct: true },
            { id: "d", texte: "B", correct: false },
          ],
          explication_correcte: "Oui, X est au centre exact.",
          explication_incorrecte: "Le centre de la carrière, c'est X (sur la ligne du milieu D–X–G).",
          source: SRC,
        },
        {
          id: "g5-q18",
          domaine: "connaissances_generales",
          difficulte: 3,
          enonce: "Sur les grands côtés, l'ordre des lettres est :",
          choix: [
            { id: "a", texte: "A – B – C – D – E – F", correct: false },
            { id: "b", texte: "A – K – E – H – C – M – B – F", correct: true },
            { id: "c", texte: "A – F – B – M – C – H – E – K", correct: false },
            { id: "d", texte: "A – E – B – C – M – F – K – H", correct: false },
          ],
          explication_correcte: "Exact, dans le sens de rotation autour de la piste.",
          explication_incorrecte: "L'ordre autour de la piste est A – K – E – H – C – M – B – F.",
          source: SRC,
        },
        {
          id: "g5-q19",
          domaine: "connaissances_generales",
          difficulte: 2,
          enonce: "Un oxer est un obstacle :",
          choix: [
            { id: "a", texte: "Vertical (droit)", correct: false },
            { id: "b", texte: "Large (de volée)", correct: true },
            { id: "c", texte: "Un fossé", correct: false },
            { id: "d", texte: "Une combinaison", correct: false },
          ],
          explication_correcte: "Oui, l'oxer est un obstacle large (deux plans).",
          explication_incorrecte:
            "L'oxer est un obstacle large (de volée). Les verticaux, ce sont la croix, le vertical, le mur.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g5-cl-cg-1", domaine: "connaissances_generales", libelle: "Je définis impulsion, rectitude, incurvation, cadence" },
        { id: "g5-cl-cg-2", domaine: "connaissances_generales", libelle: "Je définis la cession à la jambe et ses critères de jugement" },
        { id: "g5-cl-cg-3", domaine: "connaissances_generales", libelle: "Je définis les transitions (qualités / défauts)" },
        { id: "g5-cl-cg-4", domaine: "connaissances_generales", libelle: "Je place les lettres de la carrière de dressage" },
        { id: "g5-cl-cg-5", domaine: "connaissances_generales", libelle: "Je nomme les principaux obstacles de CSO" },
        { id: "g5-cl-cg-6", domaine: "connaissances_generales", libelle: "Je reconnais les principaux mors de filet" },
        { id: "g5-cl-cg-7", domaine: "connaissances_generales", libelle: "J'explique le SIRE et la puce" },
        { id: "g5-cl-cg-8", domaine: "connaissances_generales", libelle: "Je connais les grands principes d'apprentissage" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // DOMAINE 2 — Connaître le cheval (anatomie approfondie)
    // ─────────────────────────────────────────────────────────────
    {
      domaine: "connaitre_le_cheval",
      cours: [
        {
          id: "g5-cc-squelette",
          titre: "Le squelette : la charpente",
          source: SRC_ANAT,
          contenu: `Le squelette (**~200 os**) soutient le corps, protège les organes et sert de **point d'attache aux muscles**. On le découpe en **4 grandes régions** : **la tête**, **la colonne vertébrale**, **le thorax**, **les membres**.

⚡ **À retenir** : le cheval **n'a pas de clavicule**. Ses membres antérieurs ne sont **pas attachés au tronc par un os** : ils y sont reliés par des **muscles et des ligaments**. D'où sa formidable capacité à **absorber les chocs**.

### La colonne vertébrale (5 régions, de l'avant vers l'arrière)
- **Cervicales** (7) → l'encolure
- **Dorsales** (18) → garrot et dos (portent les côtes)
- **Lombaires** (6) → le rein
- **Sacrées** (5, soudées = sacrum) → la croupe
- **Coccygiennes** (~18) → la queue

### Le thorax
**18 paires de côtes** (36 os) + le **sternum**. Il protège le cœur et les poumons.`,
        },
        {
          id: "g5-cc-membres",
          titre: "Les membres et le pied",
          source: SRC_ANAT,
          contenu: `### Membre antérieur (l'avant-main = amortisseur, ~60 % du poids)
Omoplate (scapula) → humérus → radius → **carpe** (le « genou » = notre poignet) → **canon** (métacarpe) → **boulet** → **paturon (P1)** → **couronne (P2)** → **pied (P3)**.

### Membre postérieur (l'arrière-main = moteur, propulsion)
Bassin → fémur → rotule → tibia → **tarse** (le « jarret » = notre cheville) → canon → boulet → phalanges.

### Le pied (très demandé)
- **1ʳᵉ phalange** = paturon · **2ᵉ** = couronne · **3ᵉ phalange = l'os du pied**, enfermé dans le **sabot**.
- **Os naviculaire** : petit sésamoïde à l'arrière du pied, sert de **poulie** au **tendon perforant**. Sa zone peut être touchée par le **syndrome naviculaire**.
- 🧠 Le cheval marche sur l'**équivalent de la pointe d'un doigt** : le sabot = l'ongle.`,
        },
        {
          id: "g5-cc-tissus-muscles",
          titre: "Os, tendons, ligaments et muscles",
          source: SRC_ANAT,
          contenu: `### Ne pas confondre (piège classique)
- **Tendon** = relie un **muscle à un os**.
- **Ligament** = relie un **os à un os**.

Les os sont des **tissus vivants**, recouverts du **périoste** (membrane qui les nourrit). La **croissance osseuse se termine vers 5 à 7 ans** → on ménage un jeune cheval.

### Les 3 types de muscles
- **Striés (squelettiques)** : contraction **volontaire** → la **locomotion**.
- **Lisses (viscéraux)** : contraction **involontaire** → les organes (digestion, respiration).
- **Cardiaque** : strié mais **involontaire et automatique**.`,
        },
        {
          id: "g5-cc-digestion-robes",
          titre: "La digestion et les robes",
          source: SRC,
          contenu: `### La digestion — particularités
- **Petit estomac** → il doit manger **peu à la fois mais souvent**.
- Il **ne peut pas vomir** → tout passe par l'intestin.
- Fermentation des fibres surtout dans le **gros intestin (caecum)**.
- Système **fragile** → **coliques** fréquentes ; **transitions alimentaires progressives**.

### Les robes (approfondissement)
Au-delà des robes de base : **robes tachetées** (type appaloosa = petites taches), **pies** (grandes taches blanches et colorées : tobiano, overo…), et **adjonctions / particularités** (listes en tête, balzanes aux membres, épis).`,
        },
      ],
      fiches: [
        {
          id: "g5-cc-fiche",
          titre: "Fiche mémo — Connaître le cheval (anatomie)",
          source: SRC_ANAT,
          points_cles: [
            "~200 os, 4 régions : tête / colonne / thorax / membres.",
            "Colonne : 7 cervicales · 18 dorsales · 6 lombaires · 5 sacrées · ~18 coccygiennes.",
            "18 paires de côtes. Pas de clavicule → antérieurs reliés par les muscles.",
            "Antérieur : omoplate → humérus → radius → carpe (genou) → canon → boulet → paturon / couronne / pied.",
            "Pied : P3 = os du pied dans le sabot + os naviculaire (poulie du tendon perforant).",
            "Tendon = muscle→os · Ligament = os→os.",
            "Muscles : striés = volontaires (locomotion) · lisses = involontaires (organes) · cardiaque = automatique.",
            "Cheval : petit estomac, ne vomit pas, fermentation au caecum → manger souvent, coliques.",
          ],
        },
        {
          id: "g5-cc-fiche-mnemo",
          titre: "Moyens mnémotechniques",
          source: SRC_ANAT,
          points_cles: [
            "Colonne 7-18-6-5-18 : « Ce Dos Le Sacré Coche » (Cervicales, Dorsales, Lombaires, Sacrées, Coccygiennes).",
            "Phalanges de haut en bas : « Pa-Cou-Pied » (Paturon, Couronne, Pied).",
            "Tendon = Traction du muscle (muscle→os) · Ligament = Lie deux os (os→os).",
            "Genou devant (carpe / poignet) · Jarret derrière (tarse / cheville).",
          ],
        },
      ],
      questions: [
        {
          id: "g5-q8",
          domaine: "connaitre_le_cheval",
          difficulte: 1,
          enonce: "Pourquoi le cheval doit-il manger peu à la fois mais souvent ?",
          choix: [
            { id: "a", texte: "Parce qu'il est gourmand", correct: false },
            { id: "b", texte: "Parce qu'il a un estomac de petite taille", correct: true },
            { id: "c", texte: "Parce qu'il dort debout", correct: false },
            { id: "d", texte: "Parce qu'il a de grandes dents", correct: false },
          ],
          explication_correcte: "Exact : petit estomac + transit continu.",
          explication_incorrecte: "Le cheval a un petit estomac et un transit continu → il mange peu mais souvent.",
          source: SRC,
        },
        {
          id: "g5-q9",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Une particularité importante de la digestion du cheval :",
          choix: [
            { id: "a", texte: "Il rumine", correct: false },
            { id: "b", texte: "Il ne peut pas vomir", correct: true },
            { id: "c", texte: "Il a deux estomacs", correct: false },
            { id: "d", texte: "Il digère en 1 heure", correct: false },
          ],
          explication_correcte: "Oui, il ne peut pas régurgiter → d'où le risque de colique.",
          explication_incorrecte:
            "Le cheval ne peut pas vomir : tout doit passer par l'intestin, ce qui le rend sensible aux coliques.",
          source: SRC,
        },
        {
          id: "g5-q13",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Dans la colonne vertébrale, les vertèbres de l'encolure sont les :",
          choix: [
            { id: "a", texte: "Dorsales", correct: false },
            { id: "b", texte: "Lombaires", correct: false },
            { id: "c", texte: "Cervicales", correct: true },
            { id: "d", texte: "Sacrées", correct: false },
          ],
          explication_correcte: "Oui : cervicales = encolure (7).",
          explication_incorrecte:
            "Les cervicales forment l'encolure. Dorsales = garrot/dos, lombaires = rein, sacrées = croupe.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a1",
          domaine: "connaitre_le_cheval",
          difficulte: 1,
          enonce: "En combien de régions découpe-t-on classiquement le squelette du cheval ?",
          choix: [
            { id: "a", texte: "2", correct: false },
            { id: "b", texte: "4 (tête, colonne, thorax, membres)", correct: true },
            { id: "c", texte: "6", correct: false },
            { id: "d", texte: "10", correct: false },
          ],
          explication_correcte: "Exact : tête, colonne vertébrale, thorax, membres.",
          explication_incorrecte: "On retient 4 grandes régions : tête, colonne vertébrale, thorax, membres.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a2",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Combien le cheval a-t-il de vertèbres cervicales (encolure) ?",
          choix: [
            { id: "a", texte: "5", correct: false },
            { id: "b", texte: "7", correct: true },
            { id: "c", texte: "12", correct: false },
            { id: "d", texte: "18", correct: false },
          ],
          explication_correcte: "Oui, 7 — comme presque tous les mammifères.",
          explication_incorrecte: "7 cervicales. C'est le même nombre chez presque tous les mammifères, girafe comprise.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a4",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Quelle particularité a le squelette du cheval par rapport à l'homme ?",
          choix: [
            { id: "a", texte: "Il a deux cœurs", correct: false },
            { id: "b", texte: "Il n'a pas de clavicule", correct: true },
            { id: "c", texte: "Il n'a pas de colonne vertébrale", correct: false },
            { id: "d", texte: "Il a des ailes", correct: false },
          ],
          explication_correcte: "Oui : pas de clavicule → antérieurs reliés par les muscles, meilleure absorption des chocs.",
          explication_incorrecte:
            "Le cheval n'a pas de clavicule : ses antérieurs sont reliés au tronc par des muscles et ligaments, pas par un os.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a5",
          domaine: "connaitre_le_cheval",
          difficulte: 3,
          enonce: "Ce qu'on appelle le « genou » de l'antérieur correspond en fait à :",
          choix: [
            { id: "a", texte: "Notre genou", correct: false },
            { id: "b", texte: "Notre poignet (le carpe)", correct: true },
            { id: "c", texte: "Notre cheville", correct: false },
            { id: "d", texte: "Notre épaule", correct: false },
          ],
          explication_correcte: "Exact, le « genou » du cheval = le carpe = notre poignet.",
          explication_incorrecte: "Le « genou » de l'antérieur = le carpe, l'équivalent de notre poignet.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a6",
          domaine: "connaitre_le_cheval",
          difficulte: 3,
          enonce: "Le jarret (membre postérieur) correspond à :",
          choix: [
            { id: "a", texte: "Le carpe", correct: false },
            { id: "b", texte: "Le tarse (notre cheville)", correct: true },
            { id: "c", texte: "Le fémur", correct: false },
            { id: "d", texte: "Le bassin", correct: false },
          ],
          explication_correcte: "Oui, jarret = tarse = notre cheville / talon.",
          explication_incorrecte: "Le jarret = le tarse, équivalent de notre cheville.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a7",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Dans quel ordre trouve-t-on les os du bas du membre antérieur ?",
          choix: [
            { id: "a", texte: "Canon → boulet → paturon → couronne → pied", correct: true },
            { id: "b", texte: "Pied → canon → boulet → couronne", correct: false },
            { id: "c", texte: "Boulet → canon → pied → paturon", correct: false },
            { id: "d", texte: "Paturon → canon → boulet → pied", correct: false },
          ],
          explication_correcte: "Exact, de haut en bas : canon, boulet, paturon, couronne, pied.",
          explication_incorrecte: "Ordre correct : canon → boulet → paturon (P1) → couronne (P2) → pied (P3).",
          source: SRC_ANAT,
        },
        {
          id: "g5-q14",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Le pied du cheval correspond à quel os ?",
          choix: [
            { id: "a", texte: "La 1ʳᵉ phalange", correct: false },
            { id: "b", texte: "La 3ᵉ phalange", correct: true },
            { id: "c", texte: "Le fémur", correct: false },
            { id: "d", texte: "Le canon", correct: false },
          ],
          explication_correcte: "Exact, la 3ᵉ phalange est enfermée dans le sabot.",
          explication_incorrecte: "Le pied = 3ᵉ phalange (dans le sabot). La 1ʳᵉ = paturon, la 2ᵉ = couronne.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a9",
          domaine: "connaitre_le_cheval",
          difficulte: 3,
          enonce: "À quoi sert l'os naviculaire ?",
          choix: [
            { id: "a", texte: "À rien", correct: false },
            { id: "b", texte: "De poulie de renvoi au tendon perforant", correct: true },
            { id: "c", texte: "À porter le cavalier", correct: false },
            { id: "d", texte: "À mâcher", correct: false },
          ],
          explication_correcte: "Exact, c'est un petit sésamoïde derrière le pied, poulie du tendon perforant.",
          explication_incorrecte:
            "L'os naviculaire sert de poulie au tendon perforant. Sa région peut être touchée par le syndrome naviculaire.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a10",
          domaine: "connaitre_le_cheval",
          difficulte: 3,
          enonce: "Quelle est la différence entre un tendon et un ligament ?",
          choix: [
            { id: "a", texte: "Aucune", correct: false },
            { id: "b", texte: "Tendon = muscle-os ; ligament = os-os", correct: true },
            { id: "c", texte: "Tendon = os-os ; ligament = muscle-os", correct: false },
            { id: "d", texte: "Les deux relient deux muscles", correct: false },
          ],
          explication_correcte: "Parfait : tendon relie muscle→os, ligament relie os→os.",
          explication_incorrecte: "Tendon = muscle à os ; ligament = os à os. Piège classique à ne pas inverser.",
          source: SRC_ANAT,
        },
        {
          id: "g5-q12",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Les muscles striés du cheval assurent :",
          choix: [
            { id: "a", texte: "La digestion", correct: false },
            { id: "b", texte: "Les mouvements volontaires (locomotion)", correct: true },
            { id: "c", texte: "La respiration involontaire", correct: false },
            { id: "d", texte: "Le rythme cardiaque", correct: false },
          ],
          explication_correcte: "Exact : striés = volontaires = locomotion.",
          explication_incorrecte:
            "Les muscles striés = volontaires, ils font la locomotion. Les muscles lisses (involontaires) gèrent les organes.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a12",
          domaine: "connaitre_le_cheval",
          difficulte: 3,
          enonce: "Le périoste, c'est :",
          choix: [
            { id: "a", texte: "Un muscle de la cuisse", correct: false },
            { id: "b", texte: "La membrane qui recouvre et nourrit l'os", correct: true },
            { id: "c", texte: "Un tendon du pied", correct: false },
            { id: "d", texte: "Une vertèbre", correct: false },
          ],
          explication_correcte: "Exact : membrane vascularisée qui recouvre l'os et permet sa croissance.",
          explication_incorrecte:
            "Le périoste est la membrane fibreuse et vascularisée qui recouvre l'os, le nourrit et assure sa croissance en épaisseur.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a13",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Vers quel âge se termine la croissance osseuse du cheval ?",
          choix: [
            { id: "a", texte: "1 an", correct: false },
            { id: "b", texte: "5 à 7 ans", correct: true },
            { id: "c", texte: "15 ans", correct: false },
            { id: "d", texte: "6 mois", correct: false },
          ],
          explication_correcte: "Oui — d'où l'importance d'attendre avant de trop le solliciter.",
          explication_incorrecte:
            "La croissance se termine vers 5-7 ans. C'est pourquoi on ménage un jeune cheval avant de le travailler intensément.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a14",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Quel rôle principal jouent les membres postérieurs ?",
          choix: [
            { id: "a", texte: "L'amortissement uniquement", correct: false },
            { id: "b", texte: "La propulsion", correct: true },
            { id: "c", texte: "La mastication", correct: false },
            { id: "d", texte: "La respiration", correct: false },
          ],
          explication_correcte: "Exact : l'arrière-main est le moteur (propulsion, engagement).",
          explication_incorrecte: "Les postérieurs = propulsion (le moteur). Les antérieurs amortissent et portent plus de poids.",
          source: SRC_ANAT,
        },
        {
          id: "g5-a15",
          domaine: "connaitre_le_cheval",
          difficulte: 2,
          enonce: "Combien de paires de côtes a le cheval ?",
          choix: [
            { id: "a", texte: "8", correct: false },
            { id: "b", texte: "13", correct: false },
            { id: "c", texte: "18", correct: true },
            { id: "d", texte: "24", correct: false },
          ],
          explication_correcte: "Oui, 18 paires (36 os), autant que de vertèbres dorsales.",
          explication_incorrecte: "18 paires de côtes, en lien avec les 18 vertèbres dorsales.",
          source: SRC_ANAT,
        },
      ],
      checklist: [
        { id: "g5-cl-cc-1", domaine: "connaitre_le_cheval", libelle: "J'identifie les principales parties du squelette" },
        { id: "g5-cl-cc-2", domaine: "connaitre_le_cheval", libelle: "J'identifie les grands groupes musculaires et leur rôle" },
        { id: "g5-cl-cc-3", domaine: "connaitre_le_cheval", libelle: "J'explique les grandes particularités de la digestion" },
        { id: "g5-cl-cc-4", domaine: "connaitre_le_cheval", libelle: "Je reconnais les robes pie, tachetées et les adjonctions" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // DOMAINE 3 — S'occuper du cheval
    // ─────────────────────────────────────────────────────────────
    {
      domaine: "s_occuper_du_cheval",
      cours: [
        {
          id: "g5-so-bandes",
          titre: "Bandes de repos et mors",
          source: SRC,
          contenu: `### Bandes de repos
- Servent à **protéger et soutenir les membres au repos** (au box). On pose d'abord du **coton / une plaque** dessous, puis la bande **de haut en bas**, sans plis, avec une **tension régulière** — ni trop serrée (gêne la circulation) ni trop lâche (elle tombe).
- Savoir aussi les **rouler** proprement avant de les poser.

### Les mors de filet
Savoir **reconnaître et nommer** les principaux mors de filet (à olives, à aiguilles, Chantilly, Verdun…) et comprendre leur action douce sur les commissures, la langue et les barres.`,
        },
        {
          id: "g5-so-alimentation",
          titre: "L'alimentation et les soins",
          source: SRC,
          contenu: `### Alimentation
- Besoins : **eau propre à volonté**, **fourrage** (foin/herbe) en base, **concentrés** (granulés) en complément selon le travail.
- Règles : distribuer le **foin avant les concentrés**, ne **pas nourrir ni abreuver abondamment un cheval en sueur** juste après l'effort, faire des **transitions progressives**, écarter les **plantes toxiques**.

### Soins courants
Curage des pieds, entretien du matériel, **contrôle de l'état général** du cheval, savoir **reconnaître une colique** et réagir.`,
        },
        {
          id: "g5-so-colique",
          titre: "La colique — une urgence",
          source: SRC,
          contenu: `- **Signes** : le cheval **regarde ses flancs**, **gratte**, **se couche et se relève**, **se roule**, **transpire**, **refuse de manger**, absence de crottins.
- **Premiers réflexes** : **prévenir un adulte / le vétérinaire**, retirer la nourriture, surveiller — c'est une **urgence vétérinaire**.`,
        },
      ],
      fiches: [
        {
          id: "g5-so-fiche",
          titre: "Fiche mémo — S'occuper du cheval",
          source: SRC,
          points_cles: [
            "Bandes de repos : coton dessous, pose de haut en bas, tension régulière.",
            "Alimentation : foin AVANT concentrés, jamais sur un cheval en sueur, transitions progressives.",
            "Colique = regarde ses flancs / se roule / transpire → urgence véto.",
          ],
        },
      ],
      questions: [
        {
          id: "g5-q10",
          domaine: "s_occuper_du_cheval",
          difficulte: 2,
          enonce: "Quels signes évoquent une colique ?",
          choix: [
            { id: "a", texte: "Le cheval mange bien et est calme", correct: false },
            { id: "b", texte: "Il se roule, regarde ses flancs, transpire, refuse de manger", correct: true },
            { id: "c", texte: "Il dort debout", correct: false },
            { id: "d", texte: "Il boit beaucoup", correct: false },
          ],
          explication_correcte: "Exact — et c'est une urgence vétérinaire.",
          explication_incorrecte:
            "Une colique : le cheval regarde ses flancs, se roule, transpire, ne mange plus → urgence véto.",
          source: SRC,
        },
        {
          id: "g5-q11",
          domaine: "s_occuper_du_cheval",
          difficulte: 1,
          enonce: "Dans quel ordre distribuer les aliments ?",
          choix: [
            { id: "a", texte: "Les concentrés avant le foin", correct: false },
            { id: "b", texte: "Le foin avant les concentrés", correct: true },
            { id: "c", texte: "Peu importe", correct: false },
            { id: "d", texte: "Tout en même temps, mouillé", correct: false },
          ],
          explication_correcte: "Oui : le foin d'abord, ça régule la digestion des concentrés.",
          explication_incorrecte: "On distribue le foin AVANT les concentrés (et jamais sur un cheval en sueur).",
          source: SRC,
        },
        {
          id: "g5-q20",
          domaine: "s_occuper_du_cheval",
          difficulte: 1,
          enonce: "À quoi servent les bandes de repos ?",
          choix: [
            { id: "a", texte: "À monter à cheval", correct: false },
            { id: "b", texte: "À protéger et soutenir les membres au repos", correct: true },
            { id: "c", texte: "À longer le cheval", correct: false },
            { id: "d", texte: "À nettoyer les pieds", correct: false },
          ],
          explication_correcte: "Exact : elles protègent les membres au box, posées sur du coton.",
          explication_incorrecte:
            "Les bandes de repos protègent / soutiennent les membres au repos, posées de haut en bas sur du coton, tension régulière.",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g5-cl-so-1", domaine: "s_occuper_du_cheval", libelle: "Je pose, enlève et roule des bandes de repos" },
        { id: "g5-cl-so-2", domaine: "s_occuper_du_cheval", libelle: "Je nomme et reconnais les principaux mors de filet" },
        { id: "g5-cl-so-3", domaine: "s_occuper_du_cheval", libelle: "Je connais les règles d'alimentation" },
        { id: "g5-cl-so-4", domaine: "s_occuper_du_cheval", libelle: "Je reconnais une colique et je sais réagir" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // DOMAINE 4 — Pratique équestre à pied
    // ─────────────────────────────────────────────────────────────
    {
      domaine: "pratique_a_pied",
      cours: [
        {
          id: "g5-pp-cours",
          titre: "Présenter, longer, longues rênes, embarquer",
          source: SRC,
          contenu: `- **Présenter seul un cheval en main** au pas **et au trot** (le montrer bougé, propre, obéissant).
- **Longer** un cheval détendu **au pas, au trot et à l'arrêt** (gérer la longe, la chambrière, le cercle, la voix).
- **Utiliser les longues rênes** sur le cercle **au pas** (initiation au travail à deux rênes depuis le sol).
- **Embarquer** un cheval dans un **van ou un camion**, en sécurité, avec calme et méthode.`,
        },
      ],
      fiches: [
        {
          id: "g5-pp-fiche",
          titre: "Fiche mémo — Pratique à pied",
          source: SRC,
          points_cles: [
            "Présenter en main pas + trot.",
            "Longer pas / trot / arrêt.",
            "Longues rênes au pas.",
            "Embarquer en van / camion.",
          ],
        },
      ],
      questions: [],
      checklist: [
        { id: "g5-cl-pp-1", domaine: "pratique_a_pied", libelle: "Je présente seul un cheval en main au pas et au trot" },
        { id: "g5-cl-pp-2", domaine: "pratique_a_pied", libelle: "Je longe un cheval détendu au pas, au trot et à l'arrêt" },
        { id: "g5-cl-pp-3", domaine: "pratique_a_pied", libelle: "J'utilise les longues rênes sur le cercle au pas" },
        { id: "g5-cl-pp-4", domaine: "pratique_a_pied", libelle: "J'embarque un cheval dans un van ou un camion" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // DOMAINE 5 — Pratique équestre à cheval (+ spécialisations)
    // ─────────────────────────────────────────────────────────────
    {
      domaine: "pratique_a_cheval",
      cours: [
        {
          id: "g5-pc-troncommun",
          titre: "Tronc commun (toutes disciplines)",
          source: SRC,
          contenu: `- Être **stable et décontracté sans étriers** aux **3 allures**.
- **Rechercher l'incurvation** de son cheval dans les courbes.
- Effectuer des **variations / développements progressifs d'allure** ; **varier l'amplitude au pas**.
- Réaliser une **cession à la jambe au pas des deux côtés**, en gardant l'impulsion.
- Aller en **extérieur et terrain varié** aux 3 allures.`,
        },
        {
          id: "g5-pc-dressage",
          titre: "🎵 Dressage",
          source: SRC,
          contenu: `Présenter dans une bonne posture une **reprise de dressage niveau Club 3** : transitions **nettes et précises sur les lettres**, **cercles de 12-15 m**, serpentines (changement d'incurvation sur la ligne médiane), cession à la jambe au pas. La **cadence** doit rester identique avant/après un exercice.`,
        },
        {
          id: "g5-pc-cso",
          titre: "🚧 Obstacle (CSO)",
          source: SRC,
          contenu: `Enchaîner un **parcours CSO type Club 3** (obstacles **~70-75 cm**, avec **combinaisons et lignes**). Gérer l'**équilibre** (latéral et longitudinal), le **rythme / la cadence**, la **trajectoire** ; conserver l'équilibre dans les abords, les courbes et les réceptions.`,
        },
        {
          id: "g5-pc-cross",
          titre: "🌳 Cross",
          source: SRC,
          contenu: `Franchir un **parcours de cross Club 3** (obstacles d'extérieur **~60 cm**). Mêmes aides qu'en CSO mais à **vitesse plus élevée** : c'est la notion de **« train »** (vitesse + équilibre adaptés au terrain). Rester **en équilibre sur ses étriers**, franchise et adaptation au relief.`,
        },
      ],
      fiches: [
        {
          id: "g5-pc-fiche",
          titre: "Fiche mémo — Pratique à cheval",
          source: SRC,
          points_cles: [
            "Tronc commun : sans étriers aux 3 allures, incurvation, cession à la jambe au pas des 2 côtés, extérieur.",
            "Dressage = reprise Club 3 (transitions sur les lettres, cercles 12-15 m).",
            "CSO = parcours ~70-75 cm (équilibre, rythme, trajectoire).",
            "Cross = ~60 cm, notion de « train », équilibre sur les étriers.",
          ],
        },
      ],
      questions: [
        {
          id: "g5-q21",
          domaine: "pratique_a_cheval",
          specialisation: "cso",
          difficulte: 2,
          enonce: "À quelle hauteur sont environ les obstacles du CSO au Galop 5 (Club 3) ?",
          choix: [
            { id: "a", texte: "40 cm", correct: false },
            { id: "b", texte: "70-75 cm", correct: true },
            { id: "c", texte: "1 m 10", correct: false },
            { id: "d", texte: "1 m 30", correct: false },
          ],
          explication_correcte: "Oui, autour de 70-75 cm avec combinaisons.",
          explication_incorrecte:
            "Le CSO du Galop 5 (Club 3) tourne autour de 70-75 cm. Le cross est un peu plus bas (~60 cm).",
          source: SRC,
        },
      ],
      checklist: [
        { id: "g5-cl-pc-1", domaine: "pratique_a_cheval", libelle: "Je suis stable et décontracté sans étriers aux 3 allures" },
        { id: "g5-cl-pc-2", domaine: "pratique_a_cheval", libelle: "Je recherche l'incurvation dans les courbes" },
        { id: "g5-cl-pc-3", domaine: "pratique_a_cheval", libelle: "Je varie l'amplitude au pas" },
        { id: "g5-cl-pc-4", domaine: "pratique_a_cheval", libelle: "Je réalise une cession à la jambe au pas des deux côtés" },
        { id: "g5-cl-pc-5", domaine: "pratique_a_cheval", libelle: "Je vais en extérieur et terrain varié aux 3 allures" },
        { id: "g5-cl-pc-dr", domaine: "pratique_a_cheval", specialisation: "dressage", libelle: "Dressage : je présente une reprise Club 3" },
        { id: "g5-cl-pc-cso", domaine: "pratique_a_cheval", specialisation: "cso", libelle: "CSO : j'enchaîne un parcours Club 3 (~70-75 cm)" },
        { id: "g5-cl-pc-cross", domaine: "pratique_a_cheval", specialisation: "cross", libelle: "Cross : je franchis un parcours Club 3 (~60 cm)" },
      ],
    },
  ],
};

export default galop5;
