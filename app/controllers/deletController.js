import User from '../models/User.js';
import Profile from '../models/Profile.js';
import bcrypt from 'bcrypt';

const deletController = {


  // Contrôleur appelé après validation du mot de passe pour supprimer définitivement le compte
  deleteAccount: async (req, res) => {

  
    // On vérifie que l'utilisateur est connecté
    const { password } = req.body;


    try {
      // Si l'utilisateur n'est pas connecté, on redirige vers la page de confirmation
      const user = await User.findOne({ where: { id_user: req.session.userId } });
      

      // Si l'utilisateur n'existe pas, on renvoie une erreur à la vue
      if (!user) {
        return res.render('delete-account-confirm', {
          error: 'Utilisateur introuvable.'
        });
      }

      // Comparaison du mot de passe fourni avec le mot de passe haché en base
      const isMatch = await bcrypt.compare(password, user.password);

      // Si le mot de passe est incorrect, on affiche une erreur
      if (!isMatch) {
        return res.render('delete-account-confirm', {
          error: 'Mot de passe incorrect. Veuillez réessayer.'
        });
      }
     

      // Authentification réussie : on stocke des infos dans la session
      req.session.deletionValidated = true; // Permet de sécuriser l'accès à la suppression finale
      req.session.userToDeleteId = user.id_user; // Stocke l'ID de l'utilisateur à supprimer (à adapter si id ≠ id_user)
      

      // Redirection vers la page de suppression définitive du compte
      

      // On vérifie si la session contient les informations nécessaires pour procéder à la suppression
      // (validation de la suppression et ID de l'utilisateur à supprimer)
      if (!req.session.deletionValidated || !req.session.userToDeleteId) {
        // Si ce n’est pas le cas, on redirige vers la page de confirmation
        return res.redirect('/delete-account-confirm');
      }

      // Récupération de l'ID utilisateur à supprimer depuis la session
      const userId = req.session.userToDeleteId;
      

      try {
        // Suppression du profil associé à l'utilisateur
        await Profile.destroy({ where: { id_profile: userId } });
        //  Assure-toi que la colonne dans la table "Profile" s'appelle bien `id_user`

        // Suppression de l'utilisateur dans la base de données
        await User.destroy({ where: { id_user: userId } });
        //  Pareil ici, vérifie que c’est bien `id_user` dans le modèle `User`

        // Destruction de la session après suppression des données
        req.session.destroy(err => {
          if (err) {
            console.error(err); // Log en cas d'erreur à la suppression de la session
            return res.status(500).send('Erreur lors de la destruction de la session.');
          }

          // Si tout est OK, redirection vers la page d’accueil
          res.redirect('/'); // Redirection vers la page d'accueil après suppression
        });   

      } catch (error) {
        // En cas d'erreur lors de la suppression (base de données par ex.)
        console.error('Erreur lors de la suppression du compte :', error);
        res.status(500).send('Erreur serveur.');
      }
      

    } catch (error) {
      // Si une erreur survient, on l'affiche dans la console pour le dev
      console.error('Erreur de reconnexion :', error);

      // Et on affiche un message générique à l'utilisateur
      return res.render('delete-account-confirm', {
        error: "Une erreur est survenue. Veuillez réessayer plus tard."
      });
    }


  },

};


export default deletController;