// on a besoin de récupérer le module express

import express from "express";

//imports ajoutés pour les ENDPOINTS
import mainController from "./controllers/mainController.js";
import authController from "./controllers/authController.js";
import * as userController  from "./controllers/userController.js";

import isLogged from './middlewares/isLogged.js';
import { isLoggedIn } from './middlewares/authMiddleware.js';

console.log("test affichage console");

// on crée un objet router à l'aide de la méthode adaptée fournie par express
const router = express.Router();

// notre api est une liste de endpoint (d'adresses) qui donneront lieu à un résultat

// CODE DES ROUTES DU FRONT

router.get('/', mainController.home); 
router.get('/contact', mainController.contact); 
router.get('/a-propos', mainController.about); 
router.get('/rechercher', mainController.search); 
router.get('/tableau-de-bord-prive', mainController.dashboard); 
router.get('/profil', mainController.profile); 
router.get('/conditions-generales', mainController.conditions); 
router.get('/mentions-legales', mainController.legal); 
router.get('/declaration-d-accessibilite', mainController.accessibility); 
router.get('/page-d-erreur', mainController.error);
 


// CODES DES ENDPOINTS DU BACK

// =================== Connexion /  ===================
router.post('/login', authController.loginAction);
router.get('/login', authController.login); //  GET pour afficher la page de connexion

//============ Inscription ====================// 

// route pour aller sur inscription
router.get('/signup', authController.signup);
// route inscription faite
router.post('/signup', authController.signupAction);

// si l'user déconnecte, route retour vers la page accueil
// commenté car 2 routes / accueil pour l'instant
// router.get('/', isLogged, authController.logout);
// ------------ fin routes inscription -------



// on l'exporte
export default router;
