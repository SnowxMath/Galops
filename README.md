# 🐴 Galops — WebApp de révision FFE

Application **mobile-first (PWA installable, utilisable hors-ligne)** pour
**réviser les Galops FFE (1 à 7)** : cours, fiches de révision, QCM corrigés et
expliqués, checklists d'acquis, schémas SVG, gamification et suivi de progression.

> ⚠️ **Outil de révision, pas un examen officiel.** Le contenu suit le programme
> officiel FFE des Galops mais reste non officiel. La validation se fait **en
> club, par ton enseignant**. Réfère-toi au programme et aux guides fédéraux FFE.

Actuellement, le **Galop 1** est entièrement rédigé. Les Galops 2 à 7 sont des
fichiers de données prêts à remplir (voir « Ajouter / modifier un galop »).

---

## ✨ Fonctionnalités

- **Cours** par galop → par domaine, avec schémas SVG intégrés.
- **Fiches de révision** au format mémo (points-clés).
- **QCM** à correction **immédiate et expliquée** (pourquoi c'est juste / faux),
  jamais un simple « faux ».
- **Révision intelligente** : les questions ratées reviennent plus souvent
  (répétition espacée, système de Leitner).
- **Filtres** : par galop, par domaine, ou « tout mélangé ». Mode **chronométré**.
- **Checklists d'acquis** par galop et par domaine.
- **Gamification** : XP, niveaux, badges, séries (streak), objectif quotidien.
- **Profil / stats** : points forts et points faibles par domaine.
- **Schémas SVG légendés** (cheval, selle, filet) avec mode « masquer les
  labels » pour s'auto-tester.
- **PWA** : installable sur l'écran d'accueil, thème clair/sombre,
  **fonctionne hors-ligne**.
- **Progression stockée en local** (aucun compte requis).

## 🧱 Stack

- **Next.js 14 (App Router) + TypeScript + Tailwind CSS**
- PWA « maison » : `public/manifest.webmanifest` + `public/sw.js` (service
  worker enregistré par `src/components/ClientInit.tsx`).
- Persistance locale (localStorage) derrière une **couche d'abstraction**
  (`src/lib/storage.ts`) prête à accueillir Supabase.

## 🚀 Lancer en local

```bash
npm install
npm run dev          # http://localhost:3000
```

Autres commandes :

```bash
npm run build        # build de production
npm run start        # sert le build de production
npm run icons        # régénère les icônes PWA (public/icons) via sharp
```

## 🗂️ Structure du projet

```
src/
├── app/                     # routes (App Router)
│   ├── page.tsx             # accueil / tableau de bord
│   ├── cours/               # liste des galops
│   ├── galop/[id]/          # vue d'un galop + [domaine]/ (lecteur de cours)
│   ├── qcm/                 # moteur de QCM + filtres
│   ├── reviser/             # fiches + checklists
│   └── profil/              # stats, badges, réglages
├── components/              # UI (nav, QuizEngine, SchemaViewer, …)
├── content/                 # ★ TOUT LE CONTENU (séparé du code)
│   ├── types.ts             # modèle de données typé
│   ├── domaines.ts          # métadonnées des 5 domaines FFE
│   ├── index.ts             # registre + helpers de requête
│   ├── galops/              # galop-1.ts … galop-7.ts (données)
│   └── schemas/             # schémas SVG (React) + registre
└── lib/                     # store, storage, gamification, répétition espacée
```

## ✏️ Ajouter / modifier un galop ou une question

**Tout le contenu vit dans `src/content/` — inutile de toucher aux composants.**

### Modifier un galop existant

Édite le fichier `src/content/galops/galop-N.ts`. Chaque galop suit le type
`Galop` (voir `src/content/types.ts`) et s'organise en **5 domaines FFE** :
`connaissances_generales`, `connaitre_le_cheval`, `s_occuper_du_cheval`,
`pratique_a_pied`, `pratique_a_cheval`. Chaque domaine contient `cours`,
`fiches`, `questions` et `checklist`.

### Remplir un galop « à venir » (2 à 7)

Les galops 2 à 7 sont des gabarits (`aVenir: true`, domaines vides). Pour en
rédiger un, remplace `domainesVides()` par les vrais domaines et passe
`aVenir` à `false`. Le Galop 1 (`galop-1.ts`) sert de modèle complet.

### Ajouter une question de QCM

Ajoute un objet `Question` dans le tableau `questions` du domaine concerné :

```ts
{
  id: "g1-q99",                 // identifiant unique et stable
  domaine: "connaitre_le_cheval",
  difficulte: 1,                // 1 | 2 | 3
  enonce: "Ta question ?",
  choix: [
    { id: "a", texte: "Réponse A", correct: false },
    { id: "b", texte: "Réponse B", correct: true },
  ],
  explication_correcte: "Pourquoi c'est juste.",
  explication_incorrecte: "Pourquoi c'est faux + la bonne réponse.",
  source: "Programme officiel FFE — Galop 1",
}
```

> Garde toujours une `source` par item : ça permet de vérifier et mettre à jour
> le contenu par rapport au programme officiel.

### Ajouter une carte mémo (liste à retenir)

Les listes de parties (cheval, selle, filet…) utilisent des **cartes mémo** :
liste numérotée + bouton « Se tester » qui masque les noms pour s'auto-tester.
Il suffit de l'ajouter dans un cours ou une fiche, dans la donnée :

```ts
schemas: [
  { id: "cheval", type: "memo", legende: "Les parties du cheval",
    parties: ["Tête", "Encolure", "Garrot", "…"] },
]
```

(Le modèle `Schema` prévoit aussi `type: "image"` avec un `src` dans `/public`
si tu ajoutes plus tard de vraies photos dont tu as les droits.)

## 📱 Installer en PWA

Ouvre l'app dans le navigateur du téléphone puis « Ajouter à l'écran
d'accueil ». L'app s'installe, garde ton thème et fonctionne hors-ligne une fois
les pages visitées (contenu + progression accessibles sans réseau).

## ☁️ Déployer sur Vercel

1. Pousse le repo sur GitHub.
2. Sur [vercel.com](https://vercel.com), « New Project » → importe le repo.
3. Framework détecté automatiquement (Next.js). Aucune variable requise.
4. « Deploy ». C'est en ligne. ✅

## 🔌 Activer Supabase plus tard (sync multi-appareils)

La persistance passe par l'interface `StorageAdapter` (`src/lib/storage.ts`).
Aujourd'hui l'app utilise `LocalStorageAdapter`. Pour brancher Supabase :

1. `npm install @supabase/supabase-js`.
2. Crée une classe `SupabaseAdapter implements StorageAdapter` (méthodes
   `load` / `save` / `remove`) qui lit/écrit dans une table de progression.
3. Fournis-la au store à la place de `defaultAdapter` (dans `src/lib/store.tsx`).

Aucun autre code n'a besoin de changer : le reste de l'app ne connaît que
l'interface, pas l'implémentation.

## 📄 Sources & mentions

Contenu basé sur le **programme officiel FFE des Galops de cavalier**. Document
de révision non officiel — voir le disclaimer en tête de ce README.
