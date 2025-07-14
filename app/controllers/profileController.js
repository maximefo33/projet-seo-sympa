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

// exemple avec op *************************
// let relation = []; 
//  if relation (sessionUserId)= Relation.findAll({  where: {
//     [Op.or]: { user_sender_id, user_recipient_id},
//   },
// });
// S

// let results = [];

//  });


// *********************************

 const relationSearch = normalizedKeywords.map(word => ({
    description: { [Op.iLike]: `%${word}%` }
  }));

  
  searchConditions.push({
    [Op.or]: keywordConditions
  });
// exemple sequelize ******************************************



// This is shorter, and less error prone because it still works if you add / remove attributes from your model later
Model.findAll({
  attributes: {
    include: [[sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats']],
  },
});

const { Op } = require('sequelize');
Post.findAll({
  where: {
    [Op.or]: [{ authorId: 12 }, { authorId: 13 }],
  },
});
// SELECT * FROM post WHERE authorId = 12 OR authorId = 13;

// fin exemple ***********************************************************

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


