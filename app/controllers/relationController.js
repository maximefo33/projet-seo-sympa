import { Relation, User, Profile } from '../../database/db/association.js';

const relationController = {

 demander: async (req, res) => {
    try {
      const relationId = req.params.id_relation;
      const user_sender_id = req.session.userId;
      const user_recipient_id = req.session.userId;

      // On va chercher la relation par son id
      const relationExisting = await Relation.findByPk(relationId, {
        include: [user_sender_id, user_recipient_id],
      });

   if (user_sender_id === user_recipient_id)
       {
        return res.status(404).render('error', {
          title: 'demande impossible'
        });
      } else if (relationExisting.status=== 'accepted') 
{
        return res.status(404).render('error', {
          title: 'votre demande de relation a déjà été acceptée'
        });
      } else if (relationExisting.status== 'pending') 
      {
return res.status(404).render('error', {
          title: 'votre demande de relation est en attente de réponse'
        });
      } else if (relationExisting.status=== 'rejected') {
return res.render('profile'); // rendre vue profile avec id user

// pas besoin du res render puisque dans la vue profile.ejs 
// on a déjà un affichage conditionnel si déjà en lien alors affichage profil avec mail
    //   res.render('profile', {
    //     title: `Relation de ${profile.display_name}`,
    //     user: {
    //       user.email,
    //     }
      // });
      }

    } catch (error) {
      console.error("Erreur, demande non valide :", error);
      res.status(500).render('error', {
        title: 'Erreur serveur'
      });
    }
  }
};

export default relationController;

