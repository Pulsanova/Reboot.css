## 2.1.4 (UNRELEASED)
- Remplace l'usage des fonctions SASS par leurs équivalents via module.

## 2.1.3 (2021-11-30)
- Remplace la target de la font-size root de `html` à `:root`.

## 2.1.2 (2021-08-05)
- Corrige le CI pour la publication

## 2.1.1 (2021-08-05)
- Met à jour les dépendances profondes

## 2.1.0 (2021-08-05)
- Corrige les divisions : utilise `math.div()` au lieu d'un simple slash (`/`)
  pour se conformer au changement de `sass` (voir https://sass-lang.com/d/slash-div).

## 2.0.1 (2021-04-19)
- Corrige l'import de `normalize.css`.

## 2.0.0 (2021-04-17)
- Le paquet utilise maintenant les modules SASS.
- Supprime l'overwrite obsolète du fond des champs de texte auto-complété sous chrome.
- Prend en charge les thèmes sombres / clairs : Il est maintenant possible de passer
  des listes de deux couleurs pour les variables attendant des couleurs, la première
  sera utilisée en tant que couleur de thème clair et la seconde de thème sombre.

## 1.1.1 (2020-10-26)
- Aucun changement dans cette release.

## 1.1.0 (2020-10-26)
- Met à jour les dépendances de développement.

## 1.0.0 (2020-08-12)
- Première version "stable".
- Corrige la liste des fonts de base.  
  (Supprime `system-ui` qui a un comportement trop imprévisible dans certains cas)
- Fixe la graisse des `strong` à `700` plutôt que `bolder`.

## 0.2.1 (2020-07-15)
- Corrige la version publiée.

## 0.2.0 (2020-07-15)
- Change la taille de police "root" par défaut de 14px à 16px.
- Ajoute le style des liens qui n'était pas inclus dans les éléments.

## 0.1.2 (2020-07-15)
- Remplace `gulp-banner` qui contenait des dépendances avec alertes de sécurité par `gulp-banner`.
- Corrige le script de déploiement de la doc.

## 0.1.1 (2020-07-15)
- Première version.
