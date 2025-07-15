// on a besoin de récupérer le module express

import express from "express";

//imports ajoutés pour les ENDPOINTS
import authController from "./controllers/authController.js";
import dashboardController from "./controllers/dashboardController.js";
import deletController from "../app/controllers/deletController.js";
import mainController from "./controllers/mainController.js";
import profileController from './controllers/profileController.js';
import relationController from "./controllers/relationController.js";
import searchController from "./controllers/searchController.js";
import * as userController  from "./controllers/userController.js";


import isLogged from './middlewares/isLogged.js';
import { isLoggedIn } from './middlewares/authMiddleware.js';


// console.log("test affichage console");

// on crée un objet router à l'aide de la méthode adaptée fournie par express
const router = express.Router();

// notre api est une liste de endpoint (d'adresses) qui donneront lieu à un résultat

// ********************* CODE DES ROUTES DU FRONT ****************

router.get('/', mainController.home); 
router.get('/contact', mainController.contact); 
router.get('/a-propos', mainController.about); 
router.get('/tableau-de-bord-prive', isLoggedIn, dashboardController.dashboard); 
router.get('/conditions-generales', mainController.conditions); 
router.get('/mentions-legales', mainController.legal); 
router.get('/declaration-d-accessibilite', mainController.accessibility); 
router.get('/page-d-erreur', mainController.error);


// *********************** CODES DES ENDPOINTS DU BACK **************************

//============ Inscription ====================// 

// route pour aller sur inscription
router.get('/inscription', authController.signup);
// route inscription faite
router.post('/inscription', authController.signupAction);


// =================== Connexion /  ===================
router.post('/connexion', authController.loginAction);
router.get('/connexion', authController.login); //  GET pour afficher la page de connexion

// =================== déconnexion /  ===================
router.get('/logout', isLoggedIn, authController.logout);


// ======================== éditer / modifier son compte ==================================

router.get('/dashboard-edite', isLoggedIn, dashboardController.editProfile);
router.post('/dashboard-edite', isLoggedIn, dashboardController.updateProfile);
router.get('/profil/:id', profileController.profile);

// ============== Suppression compte (confirmation, action) ================
router.get('/delete-account-confirm', (req, res) => {
  res.render('delete-account-confirm');
});

//router.get('/delete-account-final', isLoggedIn, deletController.loginForDelete);
router.post('/delete-account-final', isLoggedIn, deletController.deleteAccount);

// ================================== établir une demande de relation avec un autre user ============================

router.post('/relation/demander/:id', isLogged, relationController.demander);
// router.post('/relation/accepter', isLogged, relationController.accepter);
// router.post('/relation/refuser', isLogged, relationController.refuser);
// router.post('/relation/supprimer', isLogged, relationController.supprimer);

// router.post('profile/:id', relationController.demander); // ???

//Page fonctionnalité rechercher + resultats de la recherche et recherche avancée avec mots clefs et filtres ville
router.get('/rechercher', searchController.searchPage);

// on l'exporte
export default router;



