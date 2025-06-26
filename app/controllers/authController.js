// page du controller pour signup - inscription - 24/6

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

//-------------------------------------------- début code inscription ---------------------------------//
// pour page /signup, inscription
// quand je clique sur bouton "inscription" cela me rend la vue EJS signup

{
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

          const userRegistered = new User({
            email: req.body.email,
            // password: req.body.password,
            password: hash, // on stocke le mdp haché
            firstname: req.body.firstname,
            lastname: req.body.lastname
          });
          console.log('utilisateur qui s\inscrit', userRegistered);

          //*********!!!!!!!!!!!!!! ici besoin  aide !!!!!!!!!!!!!!! */
          // on ajoute le nouvel utilisateur dans la liste des utilisateurs => Où se trouve cette liste ???? A revoir
          users.push(userRegistered); // ICI ASSOCIER LA BASE DE DONNEES LISTANT TOUS LES USERS
          // lancer la création de la base de données
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
      res.render('signup', {
        message: error.message
      });

    };

    res.redirect('/'); // ou /signup
  },
};

  //****fin solution 1, solution qui fonctionne en tous cas dans la console et le devtool */

  
//****** fin solution 1, 2eme solution ci-dessous

      // ******** solution 2
//       // on crée le hash
//       const hash = await bcrypt.hash(req.body.password, 10);
//       // 10 = nombre de tours de répétition pour le sallage pour rendre le mot de passe illisible, 10 = nombre préconisé
//       // on insère cette const hash dans req.body
//       req.body.hash = hash;



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
//       res.render('signup', { alert: error.message });
//     }
//   },

//   // pour se déconnecter, la session est terminée, les données sont supprimées, et l'utilisateur est redigiré vers la page d'accueil /
//   logout: function(req, res) {
//     req.session.destroy();
//     res.redirect('/');
//   },
// ******fin solution 2

///*****************BCRYPT COMPARE ***************** */

  // ici ajout 26/6 - bcrypt compare mot de passe donné à l'inscription et confirmation de ce mdp
  // et bcrypt compare couple mail/ mdp => dans LOGIN je pense voir avec Gulnur

// !!!!!!!!!!!!!!!!!!!! je n'ai pas compris comment récupérer ma liste d'USERS (sûrement avec script suite seeds ?) !!!!!!!!!

// dans la vue ejs signup, les champs NAME pour mots de passe sont password et confirm-password


// essai 1 bcrypt compare password *****************
// async function signupUser(password, confirm-password) {
//   if (password !== confirm-password) {
//     throw : new Error ('Les 2 mots de passe saisis ne sont pas identiques');
//   }

//   const saltRounds = 10; // nb de tours pour le hash
//   const hashedPassword = await bcrypt.hash(password, saltRounds);
// console.log('Mot de passe passé au hash', hashedPassword);
// return hashedPassword;
// console.log(signupUser, 'fonction inscription User');

// };
// }
// const verifyPassword = async (hash, passwordConfirm) => {
//   try {
//     const match = await bcrypt.compare(hash, req.body.password);
//     if (match) {
//       console.log('✅ Mot de passe valide');
//     } else {
//       console.log('❌ Mot de passe invalide');
//     }
//     return match;
//   } catch (error) {
//     console.error('Erreur lors de la vérification du mot de passe :', error);
//     throw error;
//   }
// };


// essai 2 bcrypt compare password *****************

// see @ https://laconsole.dev/blog/hacher-mot-de-passe-js-bcrypt 

const plainPassword = 'monMotDePasseSuperSecret';
const hashedPassword = '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36YzTQ0iP/hxt8PxyeKnVSS';

const verifyPassword = async (plainPassword, hashedPassword) => {
  try {
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    if (match) {
      console.log('✅ Mot de passe valide');
    } else {
      console.log('❌ Mot de passe invalide');
    }
    return match;
  } catch (error) {
    console.error('Erreur lors de la vérification du mot de passe :', error);
    throw error;
  }
};

// on essaie d'appeler cette fonction :
verifyPassword(plainPassword, hashedPassword);
console.log('essai appel fonction verifyPassword',verifyPassword);

verifyPassword('ELISEelise2025//', '$2b$10$bhI25Sj5gTtJ/kPlK9/xEOmYTN8tprq0hW5VPnc9yp5uC9Ts1NpsS');
console.log('2e essai verifyPassword', verifyPassword);


// OK fonctionne, maintenant utiliser cette fonction avec éléments saisis récupérés dans le formulaire

// surement appliquer cette fonction avec req.body.password et req.body.confirm-password


//-----------------------------------------fin code inscription ---------------------------------------------//
export default authController;
