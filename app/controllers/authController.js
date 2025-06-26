import validator from 'validator';
import bcrypt from 'bcrypt';
import User from "../models/User.js";
import sequelize from '../../config/database.js';


const authController = {
  //===========Connexion=======================//
 // Affiche la page de connexion
  login: function(req, res) {
    res.render('login', { error: null }); //appel view 
  },
  
  // Action de connexion
  loginAction: async function(req, res) {
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

  //=======================================fin de connexion==========================//
  
  signup: function(req, res) {
    res.render('register');
  },
  //**ici pour aide seo sympa inscription */
  signupAction: async function(req, res) {
    try {
      // on valide le mot de passe
      const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };
      if (!validator.isStrongPassword(req.body.password, options)) {
        throw new Error('Le mot de passe doit comporter au moins 12 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial');
      }
      // on crée le hash
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.hash = hash;
      // on crée un objet user
      const user = new User(req.body);
      // qu'on fait persister en bdd
      await user.create();
      // pour que l'utilisateur reste connecté on le mémorise en session
      req.session.isLogged = true;
      req.session.userId = user.id;
      res.redirect('/profile');
    } catch (error) {
      console.error(error);
      res.render('register', { alert: error.message });
    }
  },
  
   logout: function(req, res) {
    req.session.destroy();
    res.redirect('/');
  },

};

export default authController;