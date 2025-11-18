# 📄 CV Web - Lilian Pompidou

Projet de réalisation d'un CV en ligne statique, responsive et accessible dans le cadre du **BTS SIO**.

---

## 🔗 Liens du projet

- **🌐 Site en ligne (GitHub Pages) :** [https://lilianpompidou-cmd.github.io/page_cv_exercice/](https://lilianpompidou-cmd.github.io/page_cv_exercice/)
- **💻 Dépôt GitHub (Code source) :** [https://github.com/lilianpompidou-cmd/page_cv_exercice](https://github.com/lilianpompidou-cmd/page_cv_exercice)

---

## 🧪 Auto-évaluation

Conformément au cahier des charges, voici le bilan technique et les corrections apportées au projet.

### 1. Validation & Qualité du code
* **W3C (HTML5)** : ✅ **0 erreur**. Code sémantique respecté (`header`, `main`, `section`, `article`, `footer`).
* **Outiref (Structure)** : ✅ **Hiérarchie H1-H6 valide**. Un seul H1, balisage logique des sections.
* **PageSpeed Insights (Mobile)** : 🚀 **Score élevé (>95)**.
    * Utilisation des polices système (pas de requête Google Fonts bloquante).
    * CSS minifié et script JS chargé avec l'attribut `defer`.
    * Images SVG (vectorielles) intégrées directement dans le HTML pour un chargement instantané.

### 2. UX, UI et Responsive (Critère C3 & C4)
* **Mobile First :** Conception pensée pour les petits écrans (colonnes empilées) puis adaptation Desktop (Grid CSS).
* **Navigation :** Ajout d'une barre de navigation **"Sticky"** (reste affichée au scroll) pour faciliter la lecture.
* **Thème Sombre (Dark Mode) :** 🌙 Fonctionnalité JavaScript native.
    * Détection automatique des préférences système.
    * Bouton de bascule manuel avec mémorisation du choix (`localStorage`).
    * Ajustement des contrastes (Bleu clair sur fond sombre) pour garantir l'accessibilité.

### 3. Corrections effectuées (V1 ➔ Version Finale)
Suite aux premiers tests, les améliorations suivantes ont été intégrées :
* **Architecture :** Restructuration propre des fichiers dans des dossiers dédiés (`css/style.css`, `js/app.js`).
* **Git :** Nettoyage de l'historique Git pour repartir sur une base saine sans fichiers inutiles.
* **SEO :** Réécriture du contenu pour être orienté "résultats" (descriptions précises des tâches en stage).
* **Accessibilité :** Ajout des attributs `alt`, `aria-label` sur le bouton de thème et renforcement du contraste des couleurs.

### 4. Confidentialité
Aucune donnée personnelle sensible (adresse postale, téléphone personnel, e-mail privé) n'est exposée sur ce dépôt public. Le contact se fait via le profil GitHub.

---

## 🛠️ Stack Technique
- **HTML5** (Sémantique)
- **CSS3** (Variables, Flexbox, CSS Grid, Media Queries)
- **JavaScript** (ES6, manipulation du DOM, LocalStorage)
- **Git / GitHub Pages** (Versionning et Hébergement)

---
*© 2025 Lilian Pompidou - Projet BTS SIO*