import { Profile, User, Relation } from '../../database/db/association.js';
import { Op } from 'sequelize';


const profileController = {


  profile: async (req, res) => {
    try {
      const profileId = req.params.id;

      // On va chercher le profil par son id
      const profile = await Profile.findByPk(profileId, {
        include: User
      });

      if (!profile) {
        return res.status(404).render('error', {
          title: 'Profil non trouvé'
        });
      }

      res.render('profile', {
        title: `Profil de ${profile.display_name}`,
        profile: {
          id: profile.id_profile,
          firstname: profile.firstname,
          lastname: profile.lastname,
          address: profile.address,
          city: profile.city,
          zipcode: profile.zipcode,
          display_name: profile.display_name,
          company_identification_system: profile.company_identification_system,
          description: profile.description,
        }
      });

    } catch (error) {
      console.error("Erreur lors de l'affichage du profil :", error);
      res.status(500).render('error', {
        title: 'Erreur serveur'
      });
    }
  }
};

export default profileController;


