# Kata Gilded Rose React/TS

## Réalisé sur React/Typescript
* Partie React récupérée du repository suivant : https://github.com/ahmettekeli/GildedRose
* Kata original : https://github.com/emilybache/GildedRose-Refactoring-Kata

## Description
Bonjour et bienvenue dans l'équipe de la Rose dorée.

Comme vous le savez, notre petite taverne située à proximité d'une cité importante est dirigée par l'aubergiste amicale Allison.

Nous achetons et vendons uniquement les meilleurs produits.
Malheureusement, la qualité de nos marchandises se dégrade constamment à l'approche de leur date de péremption.

Un système a été mis en place pour mettre à jour notre inventaire.
Il a été développé par Leeroy, une personne pleine de bon sens qui est partie pour de nouvelles aventures.

Votre mission est **d'ajouter une nouvelle fonctionnalité à notre système** pour que nous puissions commencer à vendre un nouveau type de produits.

Mais d'abord, laissez-moi vous présenter notre système :

- Tous les éléments ont une valeur `sellIn` qui désigne le nombre de jours restant pour vendre l'article.
- Tous les articles ont une valeur `quality` qui dénote combien l'article est précieux.
- À la fin de chaque journée, notre système diminue ces deux valeurs pour chaque produit.


## Votre mission !
Nous avons récemment signé un partenariat avec un fournisseur de produit invoqué ("Conjured").\
Cela nécessite une mise à jour de notre système :

- Les éléments "Conjured" voient leur qualité se dégrader de deux fois plus vite que les objets normaux.

**Vos objectifs sont donc les suivants :**
1. Identifier la méthode principale de l'application qui modifie les caractéristiques de nos produits.
2. Etablir une analyse du code existant et trouver une solution pour implémenter notre nouvelle fonctionnalité.
3. Implémenter notre nouvelle fonctionnalité sans altérer les règles déjà en place dans l'application.
3. Faire ressortir les règles métiers de la méthode principale de l'application.

## Utiliser le projet 

### `npm start`

Exécute l'application en mode développement.\
Ouvrir [http://localhost:3000](http://localhost:3000) pour la voir dans le navigateur.


### `npm test`

Exécute les tests de l'application
