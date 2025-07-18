import sequelize from '../../config/database.js';
import { Profile, User, Relation } from '../../database/db/association.js';
import { Op } from 'sequelize';


const profileController = {


  profile: async (req, res) => {
    // On vérifie que l'utilisateur est connecté
   
    try {
      const profileId = req.params.id;

      // On va chercher le profil par son id
      const profile = await Profile.findByPk(profileId, {
        include: User
      });

      console.log('============== [profilController] Profile ', profile);
      

      if (!profile) {
        return res.status(404).render('error', {
          title: 'Profil non trouvé'
        });
      }

      // on a trouvé le profil, on va chercher les relations si on a un utilisateur connecté
      if (!req.session.userId) {
        return res.render('profile', {
          profile,
          relations: [],
          session: req.session
        });
      }

      const relations = await Relation.findAll({

        where: {
          [Op.or]: [
            {
              user_sender_id: profileId,
              user_recipient_id: req.session.userId
            },
            {
              user_sender_id: req.session.userId,
              user_recipient_id: profileId
            }
          ]
        },

      });

      res.render('profile', {
        profile,
        relations, 
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


