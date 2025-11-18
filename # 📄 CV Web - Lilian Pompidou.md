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

## 🛠️ Stack Technique
- **HTML5** (Sémantique)
- **CSS3** (Variables, Flexbox, CSS Grid, Media Queries)
- **JavaScript** (ES6, manipulation du DOM, LocalStorage)
- **Git / GitHub Pages** (Versionning et Hébergement)

### 5. Récapitulatif des évaluations

| Critère | Score (0–4) | Coef | Score pondéré | Justification courte (Objectivité) |
|---|:---:|:---:|:---:|---|
| **C1** Contenu | **4** | 10 | **40** | Contenu orienté résultats (chiffres, tâches précises), orthographe corrigée, concis. |
| **C2** HTML sémantique | **4** | 10 | **40** | H1 unique, hiérarchie stricte, utilisation de `header`, `nav`, `main`, `section`, `article`. |
| **C3** Responsive | **4** | 15 | **60** | Mobile-first, pas de scroll horizontal, grille CSS pour desktop, testé sur mobile (capture ok). |
| **C4** UX & Accessibilité | **4** | 15 | **60** | Dark Mode (JS), contraste couleurs vérifié, navigation Sticky, attributs `alt` et `aria-label`. |
| **C5** SEO | **4** | 10 | **40** | Title optimisé, Meta description présente, balises sémantiques, OpenGraph tags ajoutés. |
| **C6** Performance | **4** | 10 | **40** | Pas de librairie lourde, CSS minifié, script `defer`, polices système, icônes SVG inline. |
| **C7** Validation & corrections | **4** | 10 | **40** | Correction des chemins de fichiers (`css/`, `js/`), nettoyage historique Git, W3C valide. |
| **C8** Publication Pages | **4** | 5 | **20** | Site en ligne, fonctionnel, testé sur mobile, mise à jour effectuée après premier déploiement. |
| **C9** Auto‑évaluation | **4** | 5 | **20** | README complet incluant analyse technique, choix UX et liste des correctifs V1→Finale. |
| **C10** Confidentialité | **4** | 5 | **20** | Aucune donnée sensible (tél/adresse) exposée. Contact via lien GitHub uniquement. |
| **C11** Qualité du dépôt | **3** | 5 | **15** | Structure finale propre (`css/`, `js/`). *Note : Upload final via interface web.* |
| **TOTAL** | | **100** | **395** | **Note estimée : 19,75 / 20** |

---
*© 2025 Lilian Pompidou - Projet BTS SIO*
