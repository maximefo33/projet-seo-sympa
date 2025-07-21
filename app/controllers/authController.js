
// validator vérifiera la conformité des infos saisies
import validator from 'validator';
// bcrypt hachera le mot de passe pour qu'il soit illisible - sécurisation des infos utilisateurs
import bcrypt from 'bcrypt';

// ici on importe les données saisies par l'utilisateur
import User from '../models/User.js';
import Profile from '../models/Profile.js';


// express session installé => cf dans le middleware

const authController = {

  //-------------------------------------------- début code inscription ---------------------------------//
  // code ci-dessous des fonctions signup et signupaction inspirés  de : Pilori S06-Pilori-BDD et S05E15-Atelier-la-Guilde
  // on définit notre controller pour l'authentification de l'inscription
  // pour page /inscription 
  // quand je clique sur bouton "inscription" cela me rend la vue EJS inscription


  signup: function (req, res) {
    res.render('inscription');
  },

  // sur la vue EJS : on a besoin de saisir nom, prénom, rôle (avec 2 choix possibles de réponse), email, confirmation email, mot de passe
  // tout ça est géré par signupaction 

  // - mot de passe à hasher + validator : email limité 255 caractères (pour le hashage = 255)
  // - confirmation email à coder avec bcrypt compare
  // - nom et prénom : limiter à 50 caractères

  // *********************************début /inscription ******************
  signupAction: async function (req, res) {
    try {

      const plainPassword = req.body.password; // 1er mot de passe saisi
      const confirmPassword = req.body.confirmPassword; // confirmation du mot de passe
      const email = req.body.email; // Récupération de l'email

      // vérification du format email
      // see@ https://www.npmjs.com/package/validator

      if (!validator.isEmail(email)) {
        // throw new Error('L\'adresse e-mail fournie est invalide.');
        return res.render('inscription', { error: 'L\'adresse email fournie est invalide, merci d\'en saisir une au bon format.' });
      }

      //** début ajout code 3/7 E pour vérifier si email déjà dans bdd */
      // je vérifie si mail saisi dans le formulaire déjà enregistré dans la base de données

      const mailAlreadyUse = await User.findOne({ where: { email: req.body.email } });
      if (mailAlreadyUse) {
        //('mail déjà connu dans bdd :', mailAlreadyUse);
        // si mail existe, on redirige sur page inscription
        return res.render('inscription', { error: 'Inscription impossible car l\'adresse mail existe déjà, veuillez vous connecter directement sur l\'onglet connexion OU vous inscrire avec un autre mail.' });
      }

      // autrement l'inscription peut continuer
      //**************************fin ajout code 3/7 E */

      // fonction de vérification entre le mot de passe saisi + la confirmation du mot de passe saisi
      const verifyPassword = async (plainPassword, confirmPassword) => {
        if (plainPassword !== confirmPassword) {
        
          return false;
        }
        return true; // retourne vrai si les mots de passe sont identiques
      }

      // vérification des password

      const passwordsSame = await verifyPassword(plainPassword, confirmPassword);
      if (!passwordsSame) {
        // throw new Error('Les mots de passe ne correspondent pas.');
        return res.render('inscription', { error: 'Les mots de passe saisis sont différents, merci de recommencer votre inscription.' });
      }

      // on valide le mot de passe 
      const options = { minLength: 14, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };
      if (!validator.isStrongPassword(plainPassword, options)) {
        return res.render('inscription', { error: 'Le mot de passe doit comporter au moins 14 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial' });
      }

      // hachage du mot de passe
      const hash = await bcrypt.hash(req.body.password, 10);
      // le mdp haché est dans <hash>

      if (!req.body.firstname || !req.body.lastname) {
        return res.render('inscription', { error: 'Le prénom et le nom sont obligatoires.' });
      }

      // ajouter CODE EMPECHER METTRE 2 FOIS MEME MAIL

      // création nouvel utilisateur (données qui vont dans table USER) inscrit
      const userRegistered = {
        email: req.body.email,
        // password: req.body.password, = const plainPassword
        password: hash, // on stocke le mdp haché
        role: req.body.role,
        // on ne demande pas d'ID dans notre formulaire donc pas besoin de ce champ ci-dessous qui pourtant arrive en erreur
        // user_sender_id : req.user.id,
      };
      const userNeo = await User.create(userRegistered);
      // création nouvel utilisateur (données qui vont dans la table PROFILE) inscrit
      const profileRegistered = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        description: "",
        user_id: userNeo.id_user,
      };

      // on fait persister ce nouvel utilisateur inscrit en base de données
      // see @ https://johackim.com/sequelize?utm_source=rss&utm_medium=rss
      // see @ https://sequelize.org/docs/v6/core-concepts/model-querying-basics/ 


      const profileNeo = await Profile.create(profileRegistered);
      res.redirect('/connexion');
    } catch (error) {     // renvoyer message erreur dans la vue
      console.error(error);
      res.render('inscription', { alert: error.message });
    }
  },

  //-----------------------------------------fin code inscription ---------------------------------------------//

  //===========Connexion    page /login=======================//
  // Affiche la page de connexion
  login: function (req, res) {
    res.render('connexion', { error: null }); //appel view 
  },

  // Action de connexion
  loginAction: async function (req, res) {
    try {
      const { email, password } = req.body; //recuperer email, password

      const user = await User.findOne({ where: { email } }); //recherche user avec Sequalize via email 


      //Gestion des errors avec try/catch et throw 
      if (!user) {
        return res.render('connexion', { error: 'Mauvais couple identifiant/mot de passe' }); //dans loin ejs -error
      }

      const result = await bcrypt.compare(password, user.password); //verification du mote de passe avec bcrypt

      if (result) { //Mise en place de la session user
        req.session.isLogged = true;
        req.session.userId = user.id_user;
        req.session.userRole = user.role;  //gérer les rôles
        req.session.userDescription = Profile.description

        return res.redirect('/tableau-de-bord-prive');
      } else {
        return res.render('connexion', { error: 'Mauvais couple identifiant/mot de passe' });
      }

    } catch (error) {
      console.error("Erreur attrapée :", error);
      res.render('connexion', { error: 'Erreur lors de la tentative de connexion' });
    }
  },




  //=======================================fin de connexion==========================//


 

  //   // pour se déconnecter, la session est terminée, les données sont supprimées, et l'utilisateur est redigiré vers la page d'accueil / à voir où on insère la fonction LOGOUT ci-dessous
  logout: function (req, res) {
    // on détruit la session
    req.session.destroy((err) => {
      if (err) {
        console.error('Erreur lors de la destruction de la session:', err);
        return res.redirect('/connexion'); // redirige vers la page de connexion en cas d'erreur
      }
      // redirection vers la page d'accueil
      res.redirect('/');
    });
  }

};




export default authController;