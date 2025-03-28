# Recycle-App: Transformez vos déchets en trésors 

## 1. Installation
### Prérequis
- Node.js installé ([Télécharger ici](https://nodejs.org/))
- Expo CLI installé globalement :
  ```sh
  npm install -g expo-cli
  ```
- Un compte Firebase configuré
- API Google Maps activée

### Étapes d'Installation
1. **Cloner le dépôt**
   ```sh
   git clone https://github.com/zlahmar/recycle-app.git
   cd recycle-app
   ```
2. **Installer les dépendances**
   ```sh
   npm install
   ```
3. **Configurer Firebase**
   - Créer un projet sur [Firebase](https://firebase.google.com/)
   - Copier le fichier `firebaseConfig.example.tsx` et le renommer en `firebaseConfig.tsx`
   - Ajouter vos clés d’API Firebase
4. **Lancer l'application**
   ```sh
   expo start
   ```

---

## 2. Introduction
### 2.1 Contexte
Recycle-App vise à améliorer la gestion des déchets en facilitant l'accès aux points de recyclage via la géolocalisation et la reconnaissance d'images. L'application encourage des pratiques éco-responsables à travers des conseils et un système de gamification.

### 2.2 Objectifs
- Localiser rapidement les points de recyclage à proximité.
- Scanner les déchets via la caméra pour identifier leur catégorie.
- Intégrer une API pour récupérer et maintenir une base de données des points de recyclage.
- Sensibiliser les utilisateurs via des notifications et des conseils.

---

## 3. Fonctionnalités Principales
### 3.1 Localisation et Carte Interactive
- Affichage des points de recyclage proches via une carte interactive.
- Filtrage par type de déchet (plastique, verre, papier, etc.).
- Navigation vers les points de recyclage via Google Maps/Apple Maps.

### 3.2 Scan des Déchets
- Utilisation de la caméra pour identifier le type de déchet.
- Proposition du point de recyclage adapté.

### 3.3 API et Gestion des Données
- Connexion à une API pour récupérer les points de recyclage.
- Possibilité pour les utilisateurs d'ajouter de nouveaux points.
- Mise à jour automatique des données.

### 3.4 Notifications et Sensibilisation
- Rappels sur les jours de collecte locaux.
- Conseils et astuces pour mieux recycler.
- Suivi des habitudes de recyclage.

### 3.5 Gamification
- Attribution de points pour chaque action de recyclage.
- Défis et badges pour motiver les utilisateurs.
- Classements et partage sur les réseaux sociaux.

---

## 4. Technologies et Architecture
### 4.1 Technologies
- **Framework mobile** : React Native
- **Carte interactive** : Google Maps / OpenStreetMap
- **Base de données** : Firebase Firestore
- **Stockage d’images** : Firebase Storage
- **Authentification** : Firebase Auth (Google, Email, etc.)

### 4.2 Architecture du Projet
```
RecycleApp/
│── src/
│   ├── components/      # Composants réutilisables (cartes, boutons, modals)
│   ├── screens/         # Pages principales
│   ├── navigation/      # Gestion de la navigation
│   ├── services/        # Interaction avec Firebase
│   ├── utils/           # Fonctions utilitaires
│   ├── hooks/           # Hooks personnalisés
│   ├── assets/          # Images et icônes
│   ├── styles/          # Styles globaux
│── firebaseConfig.tsx   # Configuration Firebase
│── App.tsx              # Point d’entrée
│── package.json         # Dépendances du projet
│── README.md            # Documentation
```

**Détails des dossiers**
- **screens/** : Contient les écrans principaux (Accueil, Ajout d’un point, Liste, Profil, Connexion).
- **components/** : Inclut MapComponent, MarkerComponent, Button, Input, Modal.
- **navigation/** : Contient la gestion de navigation (AppNavigator, AuthNavigator, BottomTabNavigator).
- **services/** : Contient les services liés à Firebase (authentification, Firestore, stockage d’images).
- **utils/** : Contient les fonctions utiles (géolocalisation, validation, formatage des données).
- **hooks/** : Hooks personnalisés pour la localisation et l’authentification.

---

## 5. Déroulement du Projet
### Phases de Développement
1. **Analyse et Conception** : Définition des besoins et création des maquettes UI/UX.
2. **Développement** : Implémentation des fonctionnalités principales.
3. **Tests** : Vérification de la stabilité et correction des bugs.
4. **Lancement** : Déploiement sur les stores (Google Play & App Store).
5. **Maintenance et Améliorations** : Ajout de nouvelles fonctionnalités et mises à jour.

---

## 6. Conclusion
Recycle-App facilite l'accès aux points de recyclage et encourage une gestion plus efficace des déchets. Grâce à la géolocalisation, la reconnaissance d’images et l’intégration d’API, elle propose une solution engageante et éducative pour un recyclage plus efficace.

---

## 7. Outils Utilisés
- ✅ **Jira** → Gestion des tâches et suivi du projet
- ✅ **Firebase** → Auth, Firestore (Base de données), Storage
- ✅ **Google Maps API** → Géolocalisation
- ✅ **TensorFlow Lite** → Reconnaissance d’images (Scan des déchets)
- ✅ **React Native** → Développement mobile cross-platform
- ✅ **GitHub/GitLab** → Gestion du code et collaboration

