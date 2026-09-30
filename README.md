# antl — Landing Page Template 04

Template React, Vite et TypeScript pour un garage ou une petite concession. Les visuels et contenus sont des données de démonstration, prêtes à être remplacées pour chaque client.

## Personnaliser un site client

`src/content/site.ts` est le point d'entrée unique de personnalisation : marque, navigation, textes, CTA, images, cadrage des images et coordonnées.

- Modifier `site.theme` pour changer les couleurs globales (`canvas`, `ink`, `dark`, `accent`, `muted` et `lightInk`). Les composants consomment ces tokens CSS, sans couleur métier codée en dur.
- Remplacer les sources et alternatives des images via chaque objet `image` ; utiliser `position` pour le cadrage si nécessaire.
- Réordonner les blocs ou désactiver un bloc dans `site.sections`, sans modifier les composants :

```ts
sections: [
  { id: "collection", enabled: true },
  { id: "approach", enabled: true },
  { id: "gallery", enabled: false },
]
```

Le header, le hero et le footer restent structurels ; les sections métier (`collection`, `gallery`, `story`, `approach`, `contact`) sont indépendantes et configurables.

## Architecture

- `src/content/` : données client configurables
- `src/types/` : contrats TypeScript stricts
- `src/views/components/` : composants métier isolés
- `src/styles/` : mise en page, variables et responsive

## Démarrer

```sh
npm install
npm run dev
npm run build
```

Le projet utilise `HashRouter` et inclut une page 404 compatible GitHub Pages.
