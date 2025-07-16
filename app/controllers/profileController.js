import sequelize from '../../config/database.js';
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

      // on a trouvé le profil, on va chercher les relations

      const relation = await Relation.findAll({

        where: {
          [Op.or]: [
            {
              user_sender_id: profileId,
              user_recipient_id: res.locals.userId
            },
            {
              user_sender_id: res.locals.userId,
              user_recipient_id: profileId
            }
          ]
        },
        /* include: [
          { model: Profile,
            as: 'profile',
            attributes: ['id_profile', 'display_name']
          },
          { model: User,
            as: 'user',
            attributes: ['id_user', 'username']
          }
        ] */
      });

      res.render('profile', {
        // title: `Profil de ${profile.display_name}`, // ce n'est pas utilisé en l'état dans le template
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
        },
          relation, // à garder ou non ? on ne se souvient +
         session: req.session
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


