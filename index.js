// index.js = index général de notre projet SEO Sympa

// on récupère .gitignore la fonction express du package express

import express from "express";

// on importe le router
import router from "./app/router.js";

import session from "express-session";

// on peut continuer à utiliser dotenv pour les variables d'environnement

import * as dotenv from "dotenv";

dotenv.config();

// on choisit un port comme d'habitude

const port = process.env.PORT || 5000;

// on execute la fonction express pour récupérer un objet Application, notre serveur http
// une version enrichie du serveur http qu'on créait avec le module http

const app = express();

//appeler les templates EJS

app.set("view engine", "ejs");
app.set("views", "./app/views");


app.use(express.urlencoded({ extended: true })); // middleware pour parser les données urlencoded


//Configuration de session 

app.use(session({
  secret: process.env.SECRET || "un_secret_par_defaut",
  resave: false,
  saveUninitialized: false
}));


// on ajoute un middleware via .use à qui on passe la fonction retournée par express.static
// on doit configurer en argument le chemin vers le dossier à servir
app.use(express.static("./public"));

// on l'associe au serveur via la méthode use
app.use(router);

//? ce middleware n'est donc pas appelé si le précédent est appelé,
//? mais si ce n'est pas le cas il sera appelé
// réponse pour toutes les autres requêtes :
app.use((req, res) => {
  // https://expressjs.com/fr/4x/api.html#res.status
  res.status(404).send("<h1>Page non trouvée</h1>");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
