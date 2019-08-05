# MARVEL CHARACTERS

Le projet  MARVEL CHARACTERS utilise Javascript Node +ReactJs (flux):


- <strong>L'API Fetch</strong> est utilisés pour récupérer les données.

## Technique

 `ReactJS`, `Flux`, `API Marvel` 

# Sommaire

1. [Organisation du projet](#organisation-du-projet)
2. [Démarrer le projet](#démarrer-le-projet)


## Organisation du projet

 Dossiers projet

* `/src/action/` :  l'action: déclenchées par un clic dans une UI, ou bien peuvent provenir du serveur.

* `/src/assets/` :  contient le style css des composants.

* `/src/common/` : contient les modules communs.

* `/src/component/` : contient les composants utilisés par les view.

* `/src/dispatcher/` :  le dispatcher:exécute les callbacks et propage les actions.

* `/src/service/` : Contient l'ensemble des appels au web services.

* `/src/store/` : contient le contexte d'état complexe de l'application.

* `/src/view/` :  les View:'rendering' des données dans le DOM , ou bien lancer les actions utilisateurs.

Fichiers projet

* `index.js` : point d'entré de l'application.

* `/public/index.html` : interprète par le navigateur pour afficher la logique des composants.

Configuration

* `/common/config.js` : contient la configuration de l'api marvel.


## Démarrer le projet

1. se placer dans le répertoire `/marvel-characters/`.
2. lancer la commande **npm install**.
3. lancer la commande **npm start**.

**Note :**
Pour générer le hash en MD5 accéder au site https://www.md5.fr/ et 'hasher': timestamp+privatekey+publickey