# Microsoft 365 Learning Hub — Microsoft Word

Site pédagogique statique basé sur les supports de cours fournis par A. Aouichat.

## Contenu
- 6 modules : Accueil, Insertion, Mise en page, Références, Révision, Publipostage
- exercices d'application
- progression locale via `localStorage`
- ressources originales téléchargeables
- responsive, sans dépendance ni build

## Déploiement GitHub Pages
1. Créez un dépôt GitHub.
2. Envoyez tout le contenu de ce dossier à la racine du dépôt.
3. Ouvrez **Settings → Pages**.
4. Dans **Build and deployment**, choisissez **Deploy from a branch**.
5. Sélectionnez la branche `main` et le dossier `/ (root)`.
6. Enregistrez.

Le site fonctionne directement avec `index.html`.

## Développement local
Ouvrez `index.html` dans un navigateur, ou utilisez un petit serveur local :
`python -m http.server 8000`

## Remarque
Le texte pédagogique du site est dérivé des supports fournis. Les captures/illustrations des diapositives ne sont pas automatiquement reproduites dans les pages du site.

## Cours 01 enrichi
La page `cours-accueil.html` intègre maintenant les captures des diapositives originales, un repère visuel moderne du ruban, des explications détaillées et les exercices 2 à 7 avec documents de départ et modèles de résultat.


## Cours 00 — Prise en main de Word

Module introductif : connexion Microsoft 365, lancement de Word, création et ouverture de fichiers, interface, enregistrement local/OneDrive, PDF et TP guidé.
