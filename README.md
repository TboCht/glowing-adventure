## Glowing Adventure

Application Nuxt pour explorer un parcours d’orientation (prototype UI).

- Sélection d’une classe et d’un diplôme via des chips interactifs
- Récapitulatif dans un panneau repliable avec animation fluide
- Composants UI réutilisables (bouton, chip, carte établissement)

### Démo

- Accueil: https://steady-piroshki-865684.netlify.app/
- Page test: https://steady-piroshki-865684.netlify.app/test

### Stack

- Nuxt 4, Vue 3, Vite
- Tailwind CSS 4 (styles utilitaires)
- shadcn-nuxt, @nuxt/icon, @vueuse/core /// Non implémenté (bug de config, perte de temps)

### Structure du projet (extraits)

- `app/pages/index.vue` — Sélection Classe + Diplôme (formulaire principal)
- `app/pages/test.vue` — Carte d’évaluation (exemple d’écran)
- `app/components/DropDown.vue` — Panneau repliable avec animation
- `app/components/button/Default.vue`, `app/components/chip/Default.vue`
- `app/components/school/Card.vue` — Carte établissement
- `app/assets/css/main.css` — Tailwind + thèmes
- `server/api/formData.ts` — API mock: données d’établissement et options
- `shared/types/school.ts` — Types partagés

### API (développement)

- `GET /api/formData` → données de la page (établissement aléatoire + options)
  Exemple de réponse:
  ```json
  {
    "highschool": { "name": "…", "town": "Lille", "type": "Lycée Public" },
    "availableClasses": [{ "value": "seconde", "label": "Seconde" }],
    "selectedClass": { "value": "premiere", "label": "Première" },
    "availableDiplomas": [{ "value": "Général", "label": "Général" }]
  }
  ```

### Prérequis

- Node.js ≥ 18.20 (recommandé: 20 LTS)
- npm ≥ 9

### Installation

```bash
npm install
```

(Exécute aussi `nuxt prepare` via le script postinstall.)

### Lancer en développement

```bash
npm run dev
```

Visitez `http://localhost:3000`.

### Build de production

```bash
npm run build
```

### Prévisualiser le build

```bash
npm run preview
```

### Scripts utiles

- `npm run dev` — Démarrer le serveur de dev
- `npm run build` — Construire l’application
- `npm run preview` — Prévisualiser le build
