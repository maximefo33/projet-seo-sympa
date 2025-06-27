// page du controller pour signup - inscription - 24/6

// validator vérifiera la conformité des infos saisies
import validator from 'validator';
// bcrypt hachera le mot de passe pour qu'il soit illisible - sécurisation des infos utilisateurs
import bcrypt from 'bcrypt';

// ici on importe les données saisies par l'utilisateur
import User from '../models/User.js';

import sequelize from '../../config/database.js';

// express session installé => cf dans le middleware

const authController = {

  //-------------------------------------------- début code inscription ---------------------------------//
  // code ci-dessous des fonctions signup et signupaction inspirés  de : Pilori S06-Pilori-BDD et S05E15-Atelier-la-Guilde
  // on définit notre controller pour l'authentification de l'inscription
  // pour page /signup, inscription 
  // quand je clique sur bouton "inscription" cela me rend la vue EJS signup


  signup: function (req, res) {
    res.render('signup');
  },

  // sur la vue EJS : on a besoin de saisir nom, prénom, rôle (avec 2 choix possibles de réponse), email, confirmation email, mot de passe
  // tout ça est géré par signupaction 

  // - mot de passe à hasher + validator : email limité 255 caractères (pour le hashage = 255)
  // - confirmation email à coder avec bcrypt compare
  // - nom et prénom : limiter à 50 caractères

  signupAction: async function (req, res) {
    try {
      // on valide le mot de passe 
      // on a mis 8 caractères pour tester avec fakefiller, on repassera à 14 après
      const options = { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };
      if (!validator.isStrongPassword(req.body.password, options)) {
        throw new Error('Le mot de passe doit comporter au moins 14 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial parmi * / &');
      }

      // *********************************ajout code E 27/6
      // hachage du mot de passe
      const hash = await bcrypt.hash(req.body.password, 10);
      // console.log('req body password :', req.body.password);
      // console.log('mdp haché :', hash);
      // le mdp haché est dans <hash>

      // création nouvel utilisateur inscrit
      const userRegistered = new User({
        email: req.body.email,
        // password: req.body.password,
        password: hash, // on stocke le mdp haché
        firstname: req.body.firstname,
        lastname: req.body.lastname
      });
      console.log('utilisateur qui s\inscrit', userRegistered);

      // on fait persister ce nouvel utilisateur inscrit en base de données
      // see @ https://johackim.com/sequelize?utm_source=rss&utm_medium=rss
      // see @ https://sequelize.org/docs/v6/core-concepts/model-querying-basics/ 

      const userNeo = userRegistered.save(); // j'avais mis .create au début mais a priori plutot save pour enregistrer l'instance
      console.log('utilisateur créé :', userNeo);

      // pour que l'utilisateur reste connecté, on le mémorise en session et on le dirige sur la page /dashboard
      req.session.isLogged = true;
      req.session.userId = userNeo.id;
      res.redirect('/dashboard');
    } catch (error) {     // renvoyer message erreur dans la vue
      console.error(error);
      res.render('signup', { alert: error.message });
    }
  },

  // *********************** fin ajout code E 27/6

  //-----------------------------------------fin code inscription ---------------------------------------------//

  //===========Connexion=======================//
  // Affiche la page de connexion
  login: function (req, res) {
    res.render('login', { error: null }); //appel view 
  },

  // Action de connexion
  loginAction: async function (req, res) {
    try {
      const { email, password } = req.body; //recuperer email, password
      console.log("Email reçu:", email);
      console.log("Password reçu:", password);

      const user = await User.findOne({ where: { email } }); //recherche user avec Sequalize via email 
      console.log("Utilisateur trouvé:", user);

      //Gestion des errors avec try/catch et throw 
      if (!user) {
        console.log("Utilisateur introuvable !");
        return res.render('login', { error: 'Mauvais couple identifiant/mot de passe' }); //dans loin ejs -error
      }

      const result = await bcrypt.compare(password, user.password); //verficiation du mote de passe avec bcrypt
      console.log("Résultat comparaison hash:", result);

      if (result) { //Mise en place de la session user
        req.session.isLogged = true;
        req.session.userId = user.id_user;
        req.session.userRole = user.role; //  gérer les rôles

        return res.redirect('/dashboard');
      } else {
        return res.render('login', { error: 'Mauvais couple identifiant/mot de passe' });
      }

    } catch (error) {
      console.error("Erreur attrapée :", error);
      res.render('login', { error: 'Erreur lors de la tentative de connexion' });
    }
  },
};

//=======================================fin de connexion==========================//

//   // pour se déconnecter, la session est terminée, les données sont supprimées, et l'utilisateur est redigiré vers la page d'accueil /

//************* */ à voir où on insère la fonction LOGOUT ci-dessous
//  logout: function(req, res) {
// req.session.destroy();
//  res.redirect('/');
//   },
//*************** */



///*****************FONCTION BCRYPT COMPARE ***************** */

// BCRYPT Compare essai 3 
// bcrypt compare : comparer mot de passe donné à l'inscription et confirmation de ce mdp


// see @ https://laconsole.dev/blog/hacher-mot-de-passe-js-bcrypt 


const plainPassword = 'monMotDePasseSuperSecret';
const confirmPassword = 'monMotDePasseSuperSecret';

// avant d'utiliser bcrypt.hash, on vérifie si mot de passe saisi et sa confirmation sont les mêmes
const verifyPassword = async (plainPassword, confirmPassword) => {
  try {
    if (plainPassword !== confirmPassword) {
      console.log('❌ les mots de passe saisis ne sont pas identiques');
      return false;
    }
    // on hashe le mot de passe
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    console.log('Mot de passe passé au hash :', hashedPassword);

    // on vérifie si le mot de passe en clair correspond au hash
    const same = await bcrypt.compare(plainPassword, hashedPassword);
    if (same) {
      console.log('✅ Mot de passe valide');
    } else {
      console.log('❌ Mot de passe invalide');
    }
    return same;
  } catch (error) {
    console.error('Erreur lors de la vérification du mot de passe', error);
    throw error;
  }
};

// test de la fonction
verifyPassword(plainPassword, confirmPassword);
console.log('test de la fonction verifyPassword', verifyPassword);


// OK fonctionne, maintenant utiliser cette fonction avec éléments saisis récupérés dans le formulaire

// dans la vue ejs signup, les champs NAME pour mots de passe sont password et confirm-password
// surement appliquer cette fonction avec req.body.password et req.body.confirm-password

export default authController;

