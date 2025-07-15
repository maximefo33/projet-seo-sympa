import { Relation, User, Profile } from '../../database/db/association.js';

const relationController = {

 demander: async (req, res) => {
    try {
      // const relationId = req.params.id_relation; // => ça n'existe pas à ce moment là !
      const user_sender_id = req.session.userId;
      const user_recipient_id = req.params.id;

      console.log("ID de l'utilisateur qui envoie la demande :", user_sender_id);
      console.log("ID de l'utilisateur destinataire de la demande :", user_recipient_id);
      

      //todo ici, on pourrait faire un premier test pour vérifier qu'il n'y a pas de demande de relation déjà existante entre ces deux utilisateurs
      // ce serait pour éviter que quelqu'un accède à cette méthode directement en tapant la route
      
      // ce que doit faire la méthode ici, c'est ajouter la demande à la base de données

      const relation = await Relation.create({
        user_sender_id: user_sender_id,
        user_recipient_id: user_recipient_id,
        status: 'pending' // ou 'accepted' si on veut accepter directement la relation
      });

      //console.log("Nouvelle relation créée :", relation);
      
      // une fois l'enregistrement fait, on redirige vers le dashboard, qui se chargera d'afficher les demandes et relations
      return res.redirect('/tableau-de-bord-prive');

      // On va chercher la relation par son id
      /* const relationExisting = await Relation.findByPk(relationId, {
        include: [user_sender_id, user_recipient_id],
      }); */

      /* if (user_sender_id === user_recipient_id)
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
      } */

    } catch (error) {
      console.error("Erreur, demande non valide :", error);
      res.status(500).render('error', {
        title: 'Erreur serveur'
      });
    }
  }
};

export default relationController;

