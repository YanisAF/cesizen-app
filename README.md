# CesiZen — Application mobile santé mentale

Application mobile de sensibilisation aux enjeux de santé mentale (stress, burn-out).
Développée avec **NativeScript Vue 3**, **TypeScript**, **Pinia**, compatible **Android & iOS**.
Design inspiré du **Système de Design de l'État Français (DSFR)**.

---

## 🏗️ Architecture

```
cesizen-app/
├── app/
│   ├── main.ts                     # Point d'entrée
│   ├── App.vue                     # Composant racine
│   ├── router/index.ts             # Routes + guards (auth / guest)
│   ├── types/index.ts              # Types TypeScript alignés sur les DTOs Spring Boot
│   ├── services/api.ts             # Client HTTP vers backend Spring Boot
│   ├── stores/
│   │   ├── auth.ts                 # JWT, login, register, logout
│   │   ├── user.ts                 # Profil, suppression, désactivation
│   │   ├── pages.ts                # Ressources, catégories, favoris
│   │   └── quiz.ts                 # Quiz, soumission, historique
│   ├── utils/
│   │   ├── design.ts               # Tokens DSFR (couleurs, typo, espacement)
│   │   └── validators.ts           # Validations formulaires (alignées @NotBlank Spring)
│   ├── components/
│   │   ├── common/
│   │   │   ├── DsfrButton.vue      # Bouton DSFR (primary/secondary/danger)
│   │   │   ├── DsfrInput.vue       # Champ de saisie accessible RGAA
│   │   │   ├── AlertBanner.vue     # Bandeau alerte (success/error/info/warning)
│   │   │   ├── RiskBadge.vue       # Badge niveau de risque coloré
│   │   │   └── SearchBar.vue       # Barre de recherche universelle
│   │   └── layout/
│   │       ├── AppBar.vue          # Barre de navigation supérieure
│   │       └── BottomMenu.vue      # Menu de navigation bas (Pages/Catégories/Quiz)
│   └── views/
│       ├── home/HomeView.vue        # Accueil : présentation, recherche universelle
│       ├── auth/
│       │   ├── LoginView.vue        # Connexion
│       │   ├── RegisterView.vue     # Création de compte
│       │   ├── ResetRequestView.vue # Demande reset MDP (email/SMS)
│       │   ├── ResetVerifyView.vue  # Vérification code PIN
│       │   └── ResetPasswordView.vue # Nouveau mot de passe
│       ├── pages/
│       │   ├── PageListView.vue     # Liste des ressources
│       │   ├── PageDetailView.vue   # Contenu d'une ressource
│       │   └── CategoriesView.vue   # Catégories
│       ├── quiz/
│       │   ├── QuizListView.vue         # Liste des quiz
│       │   ├── QuizDetailView.vue       # Quiz interactif (offline visiteur + connecté)
│       │   ├── QuizResultView.vue       # Résultat diagnostic + option sauvegarde
│       │   └── DiagnosisHistoryView.vue # Historique des diagnostics (connecté)
│       ├── user/
│       │   ├── ProfileView.vue      # Profil utilisateur
|       |   ├── EditProfilView.vue   # Modification utilisateur
│       │   └── AccountView.vue      # Gestion compte (RGPD : désactivation/suppression)
│       └── support/
│           └── ContactView.vue      # Formulaire de contact + liens urgence
└── tests/
```

---

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Installer NativeScript CLI
npm install -g @nativescript/cli

# Préparer les plateformes
ns platform add android
ns platform add ios
```

---

## ▶️ Développement

```bash
# Android
npm run dev

# iOS (macOS uniquement)
npm run dev:ios
```

---

## 🧪 Tests

```bash

# Mode watch
npm run test:watch

# Couverture de code
npm run test:coverage
```

---

## 🔗 Configuration backend

Modifier l'URL de base dans `app/services/api.ts` :

```typescript
const BASE_URL = 'http://localhost:8080/api/v1'
// Production :
// const BASE_URL = 'https://mon-api.fr/api/v1'
```

---

## 🌐 Endpoints Spring Boot utilisés

| Méthode | Endpoint | Auth | Description |
|---------|----------|------|-------------|
| POST | `/auth/register` | Non | Inscription |
| POST | `/auth/login` | Non | Connexion JWT |
| GET | `/users/profil?id=` | Oui | Profil utilisateur |
| DELETE | `/users/delete?id=` | Oui | Suppression compte |
| PATCH | `/users/deactivate?id=` | Oui | Désactivation compte |
| POST | `/request-password` | Non | Demande reset MDP |
| POST | `/verify-pin` | Non | Vérification PIN |
| POST | `/reset-password` | Non | Nouveau MDP |
| GET | `/page/get-all-pages` | Non | Liste ressources |
| GET | `/page/get-page?id=` | Non | Détail ressource |
| GET | `/categories` | Non | Catégories |
| GET | `/quiz-list` | Non | Liste quiz |
| GET | `/get-quiz-by-id?id=` | Non | Détail quiz |
| POST | `/submit?quizId=` | Optionnel | Soumission quiz |
| GET | `/results?userId=` | Oui | Historique diagnostics |

---

## ♿ Accessibilité RGAA 4.1

- Tous les composants ont `accessibilityRole` et `accessibilityLabel`
- Contrastes conformes WCAG AA (4.5:1 texte normal, 3:1 grands textes)
- Navigation au focus supportée sur Android (TalkBack) et iOS (VoiceOver)
- Messages d'erreur formulaire liés aux champs (`accessibilityLabel`)
- Alertes avec `accessibilityRole="alert"` (annonce automatique)

---

## 🔒 Conformité RGPD

- Données de session stockées localement via `ApplicationSettings` (chiffré par l'OS)
- Droit à l'effacement : suppression compte depuis `AccountView`
- Droit à la limitation : désactivation compte depuis `AccountView`
- Anonymisation automatique côté backend (`UserAnonymizedScheduler`)
- Mention RGPD explicite dans le formulaire de contact
- Aucune donnée personnelle transmise à des tiers

---

## 🎨 Design DSFR

Les tokens de design sont définis dans `app/utils/design.ts` :

- **Bleu République** `#003189` / **Bleu France Sun** `#0063CB`
- **Rouge Marianne** `#E1000F`
- **Typographie Marianne** (police officielle de l'État)
- Espacements, rayons et ombres selon la grille DSFR
- Niveaux de risque : Faible (vert), Modéré (orange), Élevé (rouge), Critique (bordeaux)

---

## 👤 Rôles utilisateurs

| Rôle | Accès |
|------|-------|
| **Visiteur** | Accueil, ressources, catégories, quiz (sans sauvegarde) |
| **ROLE_USER** | Tout + sauvegarde quiz, historique, gestion compte

## Lancer l'application

Ouvrir un terminal de commande powershell et lacner la commande

``` cmd /c .\run.bat ```