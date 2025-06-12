# Suivi de notre projet - sprint 1 - ce qu'on fait quotidiennement

## 10/06/25
- initialisation du projet : https://github.com/O-clock-Behemoth/S05E06-Decouvrir-Express-Marion-Oclock#démarrer-un-nouveau-serveur-express 

COMMANDES
npm init -y
npm install express
npm install ejs pg cors helmet dotenv
npm install --save-dev nodemon
install --save-dev parcel
        cf : https://github.com/O-clock-Behemoth/Fiches-Objectifs/blob/main/saison-3/e12.md 


.gitignore  
            avec node_modules/ .env / .parcel-cache / dist 

.env avec PORT=3000
.env.example avec PORT=
ajout "type":"module" dans package.json

ajout dans package.json : "source": "src/index.html",

ajout script nodemon
            "scripts": {
                "start": "node index",
                "dev": "nodemon index"
            },


- code des pages html
    - home
    - signin / login
    - contact
    - about + header + footer (modèle page statique)
    - search
    
- penser à vérifier son code sur https://validator.w3.org/


## 11/6
suite de code des pages html du 10/6
3 contacts vocaux avec Aurélie pour nous aider (1er git pull request, explication de la structure àm ettre en place pour le statique... + aide pour nos premiers git merge)


## 12/6
- pages profil + recherche résultats - html à coder
- suivi de sprint 9h30-10h15 avec Aurélie
- merge de toutes nos branches + 
        puis : git checkout dev
        git pull
        git checkout + nom de sa branche
        git merge dev
- retouches de codes scss et html





coder ensemble header + footer



## A penser, à faire, suivi général

- []  mettre l'intégration : wireframes et maquettes



- architecture de base (exemple) : 
/
├─ node_modules/
├─ app/
├─ public/
│  ├─ css/
│  │  ├─ style.css
│  │  └─ reset.css
│  └─ img/
|     └─ background.png
├─ .gitignore
├─ .env
├─ index.js
└─ package.json

- architecture MVC (exemple) modele vue controleurs
/
├─ node_modules/
├─ app/
│  ├─ controllers/    // des fichiers type userController.js avec les callbacks pour construire les pages concernant les utilisateurs, productController.js avec les callback des pages produits, etc
│  ├─ models/         // des fichiers type User.js, Product.js etc contenant chacun une classe donnant la forme d'un objet utilisateur, d'un objet produit ou autre
│  ├─ views/          // des fichiers .ejs contenant des structures html de présentation dynamisées
│  └─ router.js
├─ public/
├─ .gitignore
├─ .env
├─ index.js
└─ package.json



- []  
- []  
- []  
- []  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  
- [x]  


## ......

- [x]  
- [x]  
- [x]  

## .....

- [ ]  
- [ ]  
- []  
