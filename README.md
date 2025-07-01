# README projet SEO Sympa

## présentation du projet

à compléter

## procédure pour installer le projet en local une fois le repo cloné depuis github


à compléter

* lancer le projet en statique, avec affichage des pages en html, avec buil de parcel pour le scss :
npm start 

* lancer le projet pour les vues ejs :
npm run dev 


## à déplacer dans un fichier à part type INSTALL-BDD.md ? ce qui concerne la base de données Sequelize + postGreSQL

### commandes pour la base de données sur postGreSQL

cf : https://kourou.oclock.io/ressources/fiche-recap/postgresql/ 

\l = liste les base de données
\du = liste les utilisateurs
\q = quitte psql
\dt = liste les tables de la base de données sur laquelle on est connectée
\d student = décrit la table student

q : sortir d'un résultat psql

### avec WSL/UBUNTU (config comme Elise)

* aller sur postGreSQL pour voir les bases de données existantes :
sudo -i -u postgres psql


* ouvrir la bdd seo sympa - à partir du terminal (ne pas être déjà connecté à postGreSQL) :
psql -d seo_sympa -U seo_sympa
OU
psql -d seo_sympa -U seo_sympa -h localhost 

* relancer si besoin postGreSQL après des changements
sudo service postgresql restart

notre mot de passe : **(A EFFACER ensuite quand site déployé !!)**
**aegm_mgea_2025**

notre USER : seo_sympa
notre DATABASE : seo_sympa
notre OWNER : seo_sympa

* lancer la création de la base de données - Sequelize communiquera avec postGreSQL :

npm run db:create
PUIS
npm run seed

### nos 4 tables créées à chaque démarrage :

table USER
table PROFILE
table MESSAGE
table RELATION


### nos scripts de création de tables => A EFFACER ENSUITE

CREATE USER seo_sympa WITH PASSWORD 'aegm_mgea_2025'; 
CREATE DATABASE seo_sympa WITH OWNER seo_sympa;

## si problème, supprimer les database ou les tables et recommencer les scripts de création de table
exemple :
DROP DATABASE seo_sympa;

## Elise 30/6/25 et 1/7/25 - essais : compléter pages signup puis login

avec ces faux utilisateurs, je remplis les champs dans /signup dans le navigateur

prénom : Leo
nom : MAT
rôle : expert
email | leo@gmail.com     
mdp LEOleo2025//**


prénom : Laura
nom : Ingalls
rôle : demandeur
email : petitemaison@aol.com
mdp : PRAIRIEprairie80*

prénom : Lara
nom : CROFT
rôle : expert
email : tombraider@yahoo.com
mdp : LARAdeschamps00/

lili
rose
expert  
lilirose@aol.com
LILIlili2025...





puis je vais sur /login et saisis le mail + mdp = ça marche
puis je regarde sur psql avec  : SELECT * FROM "user";

l'utilisateur Léo est bien créé !

 => ça fonctionne et réoriente sur la vue dashboard.ejs (pour l'instant page en erreur)

