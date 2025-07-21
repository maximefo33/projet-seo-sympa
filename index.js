// index.js = index général de notre projet SEO Sympa

// on récupère .gitignore la fonction express du package express

import express from "express";

// on importe le router
import router from "./app/router.js";

import session from "express-session";

// on peut continuer à utiliser dotenv pour les variables d'environnement

import * as dotenv from "dotenv";
// import { globalSession } from "./app/middlewares/globalSession.js"; // ajout 15/7

dotenv.config();

// on choisit un port comme d'habitude

const port = process.env.PORT || 5000;

// on execute la fonction express pour récupérer un objet Application, notre serveur http
// une version enrichie du serveur http qu'on créait avec le module http

const app = express();

//  Pour récupérer les données du payload, on doit ajouter le middleware express.urlencoded
// see @ https://github.com/O-clock-Behemoth/Fiches-Objectifs/blob/main/saison5/e12.md
app.use(express.urlencoded({ extended: true })); 
// l'option extended permet de passer aussi des objets et des tableaux
app.use(express.json());

//appeler les templates EJS

app.set("view engine", "ejs");
app.set("views", "./app/views");




//Configuration de session 

app.use(session({
  secret: process.env.SECRET || "un_secret_par_defaut",
  resave: false,
  saveUninitialized: false
}));


// app.use(globalSession); // ajout 15/7

app.use(function(req, res, next) {
 res.locals.userId = req.session.userId || null; // on ajoute l'id de l'utilisateur à la réponse
  next();
});
// on ajoute un middleware via .use à qui on passe la fonction retournée par express.static
// on doit configurer en argument le chemin vers le dossier à servir
app.use(express.static("public"));

// on l'associe au serveur via la méthode use
app.use(router);

//? ce middleware n'est donc pas appelé si le précédent est appelé,
//? mais si ce n'est pas le cas il sera appelé
// réponse pour toutes les autres requêtes :
//app.use((req, res) => {
  // https://expressjs.com/fr/4x/api.html#res.status
 // res.status(404).send("<h1>Page non trouvée</h1>");
//});

//ERROR HANDLER 
app.use((req, res) => {
  res.status(404).render('error', {
    status: 404,
    message: "Désolé, la page que vous cherchez n'existe pas."
  });
});

// Ta route POST DELETE ACCOUNT



app.listen(port, () => {
  (`Listening on http://localhost:${port}/`);
  console.log(`Listening on http://localhost:${port}/`);
});


//Elise ajouter app use req urlencoded cf S5E12