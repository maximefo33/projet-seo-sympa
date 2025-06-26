// on a besoin de récupérer le module express
import express from "express";
import * as userController  from "./controllers/userController.js";
import authController from './controllers/authController.js';
import { isLoggedIn } from './middlewares/authMiddleware.js';


console.log("coucou");

// on crée un objet router à l'aide de la méthode adaptée fournie par express
const router = express.Router();

// *************************** voir si dans l'url du nav vous voulez mettre les noms des routes en français ou en anglais ?

router.get("/", (req, res) => {
   console.log('route /');
  res.render('home');
});

router.get("/contact", (req, res) => {
   console.log('route /contact');
  res.render('contact');
});

router.get("/users",userController.getAll);

router.get("/about", (req, res) => {
   console.log('route /about');
  res.render('about');
});


router.get("/search", (req, res) => {
   console.log('route /search');
  res.render('search');
});

// =================== Connexion /  ===================
router.post('/login', authController.loginAction);
router.get('/login', authController.login); //  GET pour afficher la page de connexion

//==========================================// 


router.get("/sign-in", (req, res) => {
   console.log('route /sign-in');
  res.render('sign-in');
});

//Protection page prive 

router.get('/dashboard', isLoggedIn, (req, res) => {
  res.render('dashboard');
});


//public profile
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


// on l'exporte
export default router;
