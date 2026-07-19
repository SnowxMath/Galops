# Galops FFE — WebApp de révision (PWA)

WebApp **mobile-first** et **installable (PWA, hors-ligne)** pour la formation et
la révision des **Galops FFE 1 à 7** : cours, fiches de révision, QCM corrigés et
expliqués, checklists d'acquis, suivi de progression et gamification.

> ⚠️ **Contenu non officiel**, à visée de révision et d'auto-évaluation. La
> validation d'un galop se fait **en club, par l'enseignant·e**. Se référer au
> programme et aux guides officiels de la FFE.

## Stack

- **Next.js (App Router) + TypeScript + Tailwind CSS**
- **PWA** via [Serwist](https://serwist.pages.dev/) (service worker, offline, installable)
- Progression **en local** (localStorage) par défaut — pas de compte requis
- Couche **Supabase** optionnelle (sync multi-appareils) prévue mais désactivée
- Déployable sur **Vercel**

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres commandes :

```bash
npm run build      # build de production (génère aussi le service worker)
npm run start      # sert le build de production
npm run typecheck  # vérification TypeScript
npm run lint       # ESLint
```

> Le service worker PWA est **désactivé en dev** (pour éviter le cache pendant
> le développement) et **actif en production** (`build` / `start`).

## Architecture

Le contenu est **entièrement piloté par la donnée** : rien n'est codé en dur dans
les composants. Tout vit dans des fichiers typés sous `src/content/`.

```
src/
├── app/                      # Routes (App Router)
│   ├── layout.tsx            # Layout global + bottom-nav + métadonnées PWA
│   ├── page.tsx              # Accueil (choix du galop, disclaimer)
│   ├── globals.css           # Tailwind + thème
│   ├── manifest.ts           # Manifeste PWA (icônes, couleurs, install)
│   ├── sw.ts                 # Service worker Serwist (offline-first)
│   ├── cours/                # Onglet Cours
│   ├── reviser/              # Onglet Réviser (fiches + révision espacée)
│   ├── qcm/                  # Onglet QCM (correction expliquée)
│   └── profil/               # Onglet Profil (stats, gamification)
├── components/               # Composants UI réutilisables
│   ├── BottomNav.tsx         # Navigation basse (Cours/Réviser/QCM/Profil)
│   └── Disclaimer.tsx        # Avertissement « contenu non officiel »
├── content/                  # 📚 CONTENU (séparé du code)
│   ├── types.ts              # Schéma de données TypeScript (source de vérité)
│   ├── domaines.ts           # Libellés des 5 domaines + disciplines G5+
│   ├── index.ts              # Registre des galops + accesseurs
│   └── galops/
│       └── galop-1.ts        # Un fichier par galop (galop-2.ts, ... à venir)
└── lib/
    └── storage/              # Couche de persistance (abstraction)
        ├── types.ts          # Modèle Progression + interface ProgressStore
        ├── local.ts          # Implémentation localStorage (défaut)
        ├── supabase.ts       # Implémentation Supabase (stub, désactivée)
        └── index.ts          # Fabrique du store (choix via variable d'env)
```

### Modèle de données

Les 5 domaines FFE (`src/content/types.ts`) :
`connaissances_generales`, `connaitre_le_cheval`, `s_occuper_du_cheval`,
`pratique_a_pied`, `pratique_a_cheval`.

À partir du **Galop 5**, `pratique_a_cheval` se ramifie via le champ
`discipline` (`tronc_commun` | `dressage` | `cso` | `cross`), et le galop
déclare ses `specialisation`. Chaque item de contenu porte une **`source`**
(ex. « Programme officiel FFE Galop 3 ») pour vérifier et mettre à jour.

## Ajouter / modifier un galop ou une question

Tout se passe dans `src/content/` — **aucun** code d'UI à toucher.

**Modifier une question / un cours / une fiche** : éditer le fichier du galop
concerné (ex. `src/content/galops/galop-1.ts`). Les types garantissent la forme
(pour chaque QCM : `explication_correcte` ET `explication_incorrecte`, qui doit
dire *pourquoi* c'est faux + la bonne réponse).

**Ajouter un galop** :

1. Créer `src/content/galops/galop-N.ts` exportant un objet `Galop`.
2. L'importer et l'ajouter au tableau `GALOPS` dans `src/content/index.ts`.
3. C'est tout — l'app le prend en compte automatiquement.

Pour un galop 5+, renseigner `specialisation: ["dressage", "cso", "cross"]` et
taguer les items de `pratique_a_cheval` avec le champ `discipline`.

## Déployer sur Vercel

1. Pousser le repo sur GitHub.
2. Sur [vercel.com](https://vercel.com) : *New Project* → importer le repo.
3. Framework détecté automatiquement (Next.js) — aucun réglage particulier.
4. Deploy. L'app est installable en PWA depuis le navigateur mobile
   (« Ajouter à l'écran d'accueil »).

## Activer Supabase plus tard (sync multi-appareils)

La persistance passe par l'interface `ProgressStore` : brancher Supabase ne
demande **aucun refactor de l'UI**.

1. `npm install @supabase/supabase-js`.
2. Renseigner `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   (cf. `.env.example`).
3. Implémenter `load/save/reset` dans `src/lib/storage/supabase.ts`
   (table `progressions` indexée par utilisateur).
4. Passer `NEXT_PUBLIC_STORAGE_PROVIDER=supabase`.

## État d'avancement

- [x] **Étape 1** — Setup : Next.js + Tailwind + PWA + structure + schéma de données
- [ ] **Étape 2** — Galop 1 complet (5 domaines : cours, fiches, ~25-30 QCM, checklist, schémas SVG)
- [ ] **Étape 3** — UI de base (Cours, QCM corrigé) jouable de bout en bout
- [ ] **Étape 4** — Gamification, checklists, révision espacée, stats
- [ ] **Étape 5** — Galops 2 à 7 (ramification Dressage/CSO/Cross au G5+)
- [ ] **Étape 6** — Polish : schémas restants, thème sombre, offline, déploiement
