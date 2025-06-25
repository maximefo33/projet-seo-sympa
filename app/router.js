// on a besoin de récupérer le module express
import express from "express";
// import * as usercontroler  from "../app/controllers/usercontroler.js" => test avec Virginie

//**************** */
//imports ajoutés pour les routes backend 
import authController from "./controllers/authController.js";
import isLogged from './middlewares/isLogged.js';

//*********** */

console.log("test affichage console");

// on crée un objet router à l'aide de la méthode adaptée fournie par express
const router = express.Router();

// *************************** voir si dans l'url du nav vous voulez mettre les noms des routes en français ou en anglais ?

// il faudra déplacer les routes front dans le mainController, 
// importer ici le mainController 
// et ajouter les routes simplifiées telles que 
// A REMETTRE sur nos fichiers /+ nom EN FRANCAIS AVANT !!!

// ***********
// exemples A VERIFIER ci dessous
// router.get('/', mainController.home); 
// router.get('/contact', mainController.home); 
// router.get('/a-propos', mainController.about); 
// router.get('/rechercher', mainController.search); 
// router.get('/connexion', mainController.login); 
// router.get('/inscription', mainController.signup); 
// router.get('/tableau-de-bord', mainController.dashboard); 
// router.get('/conditions-legales', mainController.conditions); 
// router.get('/declaration-d-accessibilite', mainController.accessibility); 
// router.get('/mentions-legales', mainController.legal); 
// router.get('/profile', mainController.profile); 
 //************


router.get("/", (req, res) => {
  console.log('route /');
  res.render('home');
});

router.get("/contact", (req, res) => {
  console.log('route /contact');
  res.render('contact');
});

// router.get("/users",usercontroler.getAll); => test avec Virginie

router.get("/about", (req, res) => {
  console.log('route /about');
  res.render('about');
});


router.get("/search", (req, res) => {
  console.log('route /search');
  res.render('search');
});

router.get("/login", (req, res) => {
  console.log('route /login');
  res.render('login');
});

router.get("/sign-in", (req, res) => {
  console.log('route /sign-in');
  res.render('sign-in');
});

router.get("/dashboard", (req, res) => {
  console.log('route /dashboard');
  res.render('dashboard');
});


router.get("/profile", (req, res) => {
  console.log('route /profile');
  res.render('profile');
});

router.get("/terms-and-conditions", (req, res) => {
  console.log('route /terms-and-conditions');
  res.render('conditions');
});

router.get("/legal", (req, res) => {
  console.log('route /legal-notices');
  res.render('legal');
});

router.get("/accessibility-statement", (req, res) => {
  console.log('route /accessibility');
  res.render('accessibility');
});


router.get("/profiles", (req, res) => {
  console.log('route /profiles');
  res.render('profiles');
});

// à ajouter route sitemap quand vue sitemap sera OK

// CODES DES ROUTES DU BACK

// ici code ajouté par E - A le 25/6/25
// import des fonctions (cf haut du fichier)

// création des routes pour l'inscription
router.get('/sign-in', authController.signup);
router.post('/sign-in', authController.signupAction);
// si il se déconnecte, retour vers la page accueil
router.get('/', isLogged, authController.logout);





// on l'exporte
export default router;
