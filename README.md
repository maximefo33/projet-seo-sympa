# README projet SEO Sympa

## présentation du projet

à compléter

## procédure pour installer le projet en local une fois le repo cloné depuis github

à compléter

* lancer le projet en statique, avec affichage des pages en html, avec buil de parcel pour le scss :
npm start 

* lancer le projet pour les vues ejs :
npm run dev 


## à déplacer dans un fichier à part type INSTALL-BDD.md ? ce qui concerne la base de données Sequelize + postGreSQL ?

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

