// page du controller pour sign-in - inscription - 24/6

import validator from 'validator';
import bcrypt from 'bcrypt';

// express session installé => cf dans le middleware

/////////// code inspiré depuis Pilori S06-Pilori-BDD

import User from '../models/User.js';


const authController = 

// pour page /sign-in, inscription

// quand je clique sur bouton "inscription" cela me rend la vue EJS sign-in

{signup: function(req, res) {
    res.render('sign-in');
  },

// sur la vue EJS : on a besoin de saisir nom, prénom, rôle (avec 2 choix possibles de réponse), email, confirmation email, mot de passe
// tout ça est géré par signupaction 

// - mot de passe à hasher + validator : email limité 255 caractères (pour le hashage = 255)
// - confirmation email à coder avec bcrypt compare
// - nom et prénom : limiter à 50 caractères
 
  signupAction: async function(req, res) {
    try {
      // on valide le mot de passe
      const options = { minLength: 14, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };
      if (!validator.isStrongPassword(req.body.password, options)) {
        throw new Error('Le mot de passe doit comporter au moins 14 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial parmi * / &');
      }
      // on crée le hash
      const hash = await bcrypt.hash(req.body.password, 10);
      // 10 = nombre de tours de répétition pour le sallage pour rendre le mot de passe illisible, 10 = nombre préconisé
      req.body.hash = hash;

// ajouter bcrypt compare pour mdp + confirmation mdp


      //************************************* */
      // on crée un objet user
      const userNew = new User(req.body);
      // qu'on fait persister en bdd
      await userNew.create();
      // pour que l'utilisateur reste connecté on le mémorise en session et on le dirige sur la page /dashboard
      req.session.isLogged = true;
      req.session.userId = userNew.id;
      res.redirect('/dashboard');
    } catch (error) {
      console.error(error);
      res.render('sign-in', { alert: error.message });
    }
  },
  
  // pour se déconnecter, la session est terminée, et l'utilisateur est redigiré vers la page d'accueil /
  logout: function(req, res) {
    req.session.destroy();
    res.redirect('/');
  },

};

export default authController;
