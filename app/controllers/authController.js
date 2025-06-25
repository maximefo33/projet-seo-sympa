// page du controller pour sign-in - inscription - 24/6

// validator vérifiera la conformité des infos saisies
import validator from 'validator';
// bcrypt hachera le mot de passe pour qu'il soit illisible - sécurisation des infos utilisateurs
import bcrypt from 'bcrypt';

// ici on importe les données saisies par l'utilisateur
import User from '../models/User.js';

// express session installé => cf dans le middleware

// code ci-dessous des fonctions signup et signupaction inspirés  de : Pilori S06-Pilori-BDD et S05E15-Atelier-la-Guilde

// on définit notre controller pour l'authentification de l'inscription

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

// ***** solution 1 - atelier S05E15-Atelier-la-Guilde

   // 1.B hachage du mot de passe
      bcrypt.hash(req.body.password, 10, (error, hash) => {
        // console.log('req body password :', req.body.password);
        // console.log('mdp haché :', hash);
        // le mdp haché est dans <hash>
        try {
          if (error) {
            throw error;
          }
   
          const userNew = new User({
            email: req.body.email,
            // password: req.body.password,
            password : hash, // on stocke le mdp haché
            firstname: req.body.firstname,
            lastname : req.body.lastname
          });
          console.log('utilisateur qui s\inscrit', userNew);

          // on ajoute le nouvel utilisateur dans la liste des utilisateurs => Où se trouve cette liste ???? A revoir
          users.push(userNew);
          console.log(users, 'utilisateur ajouté dans la liste des utilisateurs, dans un tableau USERS pour l\'instant');

          // on redirige vers la page de connexion, par exemple : 
          res.redirect('/login');
        }
        catch (error) {
          // on affiche l erreur pour l utilisateur
        }
      });
    }

    catch (error) {
      // renvoyer message erreur dans la vue
      res.render('sign-in', {
        message: error.message
      });

    };

    res.redirect('/'); // ou /sign-in
  },



//****** fin solution 1, 2eme solution ci-dessous

      // ******** solution 2
//       // on crée le hash
//       const hash = await bcrypt.hash(req.body.password, 10);
//       // 10 = nombre de tours de répétition pour le sallage pour rendre le mot de passe illisible, 10 = nombre préconisé
//       // on insère cette const hash dans req.body
//       req.body.hash = hash;

// // ajouter bcrypt compare pour mdp + confirmation mdp


//       //************************************* */
//       // on crée un objet user
//       const userNew = new User(req.body);
//       // qu'on fait persister en bdd
//       await userNew.create();
//       console.log('utilisateur créé', userNew);
      
//       // pour que l'utilisateur reste connecté on le mémorise en session et on le dirige sur la page /dashboard
//       req.session.isLogged = true;
//       req.session.userId = userNew.id;
//       res.redirect('/dashboard');
//     } catch (error) {
//       console.error(error);
//       res.render('sign-in', { alert: error.message });
//     }
//   },
  
//   // pour se déconnecter, la session est terminée, les données sont supprimées, et l'utilisateur est redigiré vers la page d'accueil /
//   logout: function(req, res) {
//     req.session.destroy();
//     res.redirect('/');
//   },
// ******fin solution 2



};

export default authController;
