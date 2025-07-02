// on a besoin de récupérer le module express

import express from "express";

//imports ajoutés pour les routes backend 
import mainController from "./controllers/mainController.js";
import authController from "./controllers/authController.js";
import * as userController  from "./controllers/userController.js";

import isLogged from './middlewares/isLogged.js';
import { isLoggedIn } from './middlewares/authMiddleware.js';

console.log("test affichage console");

// on crée un objet router à l'aide de la méthode adaptée fournie par express
const router = express.Router();



router.get("/contact", (req, res) => {
   console.log('route /contact');
  res.render('contact');
});

router.get("/users",userController.getAll);

router.get("/about", (req, res) => {
   console.log('route /about');
  res.render('about');
});


// router.get("/users",usercontroler.getAll); => test avec Virginie

router.get("/search", (req, res) => {
  console.log('route /search');
  res.render('search');
});

// je la commente car route refaite plus bas avec authController
// router.get("/sign-in", (req, res) => {
//   console.log('route /sign-in');
//   res.render('sign-in');
// });


router.get("/dashboard", (req, res) => {
  console.log('route /dashboard');
});

//Protection page privée

router.get('/dashboard', isLoggedIn, (req, res) => {

  res.render('dashboard');
});

  
router.get("/profile", (req, res) => { 
  console.log('route /profile');
  const user = {
    name: "Marie Dupont",
    bio: "Passionnée par le référencement naturel, l'accessibilité numérique et la performance web.",
    job: "Expert SEO",
    location: "Paris",
    imagePath: "/assets/img/profile-img.png"
  };
  res.render('profile', { user });
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


// code des routes avec le mainController en place

router.get('/', mainController.home); 
router.get('/contact', mainController.home); 
router.get('/a-propos', mainController.about); 
// =================== Connexion /  ===================
router.post('/login', authController.loginAction);
router.get('/login', authController.login); //  GET pour afficher la page de connexion

//==========================================// 

// CODES DES ROUTES DU BACK

// ici code ajouté par E - A le 25/6/25
// import des fonctions (cf haut du fichier)

// création des routes pour l'inscription

// route pour aller sur inscription
router.get('/signup', authController.signup);
// route inscription faite
router.post('/signup', authController.signupAction);

// s'il se déconnecte, route retour vers la page accueil
// commenté car 2 routes / accueil pour l'instant
// router.get('/', isLogged, authController.logout);


// on l'exporte
export default router;

 












// PAR LA SUITE :

// il faudra déplacer les routes front dans le mainController, 
// importer ici le mainController 
// notre api est une liste de endpoint (d'adresses) qui donneront lieu à un résultat
// et ajouter les endpoints simplifiées telles que 
// A REMETTRE sur nos fichiers /+ nom EN FRANCAIS AVANT !!!

// ***********
// exemples d'endpoints A VERIFIER ci dessous
// router.get('/rechercher', mainController.search); 
// router.get('/connexion', mainController.login); 
// router.get('/inscription', mainController.signup); 
// router.get('/tableau-de-bord', mainController.dashboard); 
// router.get('/conditions-legales', mainController.conditions); 
// router.get('/declaration-d-accessibilite', mainController.accessibility); 
// router.get('/mentions-legales', mainController.legal); 
// router.get('/profile', mainController.profile); 
 //************
