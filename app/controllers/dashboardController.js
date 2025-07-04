import { Profile, User } from '../../database/db/association.js';




const dashboardController = {

dashboard: async (req, res) => {
  try {
      //  Je récupère l'identifiant de l'utilisateur connecté depuis la session
    const userId = req.session.userId
   ;
    

              // Si aucun utilisateur connecté (pas de session ou d’ID), je redirige vers la page de login
    if (!userId) {
      return res.redirect('/connexion');
       
    }
    
      // Je cherche dans la base de données le profil qui correspond à cet utilisateur
    const profile = await Profile.findOne({
      where: { user_id: userId }, // je filtre pour obtenir le bon profil
       include: User // j'inclus aussi les infos de l'utilisateur (par ex. son email)
    });
    
    
       // Si aucun profil trouvé, je redirige vers la page de création de profil
    if (!profile) {
      return res.redirect('/inscription');
        
      }
        // Si tout va bien, j'affiche la page dashboard
      res.render('dashboard', {
        title: 'Mon tableau de bord Mon profile',
        profile: {
          firstname: profile.firstname,
          lastname: profile.lastname,
          address: profile.address,
          city: profile.city,
          // company_identification_system:Profile.company_identification_system,
          // email: profile.User.email,
        },
      });
    } catch (error) {
      console.error("Erreur attrapée :", error);
      res.render('login', { error: 'Erreur lors de la tentative de connexion' });
    }
  }
};

export default dashboardController;