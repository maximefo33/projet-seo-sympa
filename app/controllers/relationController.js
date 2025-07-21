import { Relation, User, Profile } from '../../database/db/association.js';

const relationController = {

 demander: async (req, res) => {
    try {
      const user_sender_id = req.session.userId;
      const user_recipient_id = req.params.id;

 // vérifier si il y a déjà une demande

 const existRelation = await Relation.findOne({
where : {
user_sender_id: user_sender_id,
user_recipient_id: user_recipient_id
}
 });

 if (existRelation) {
  return res.status(400).render('error', {
    title: 'Il existe déjà une demande'
  });
 }

      
      // ce que doit faire la méthode ici, c'est ajouter la demande à la base de données

      const relation = await Relation.create({
        user_sender_id: user_sender_id,
        user_recipient_id: user_recipient_id,
        status: 'en attente de réponse' // ou 'relation acceptée' si on veut accepter directement la relation
      });

      
      // une fois l'enregistrement fait, on redirige vers le dashboard, qui se chargera d'afficher les demandes et relations
      return res.redirect('/tableau-de-bord-prive');

          } catch (error) {
      console.error("Erreur, demande non valide :", error);
      res.status(500).render('error', {
        title: 'Erreur serveur'
      });
    }
  },

  accepter: async (req, res) => {
try {
  const relationId = req.params.id;

  const relation = await Relation.findByPk(relationId);
  if (!relation) {
    return res.status(404).render('error', {
      title : 'Relation non trouvée'
    });
  }

relation.status = 'relation acceptée';
relation.approval_date = new Date();
await relation.save();

return res.redirect('/tableau-de-bord-prive');
}catch (error) {
      console.error("Erreur lors de l'acceptation de la relation :", error);
      res.status(500).render('error', {
        title: 'Erreur serveur'
      });
    }
  },

  refuser: async (req, res) => {
try {
  const relationId = req.params.id;

  const relation = await Relation.findByPk(relationId);
  if (!relation) {
    return res.status(404).render('error', {
      title : 'Relation non trouvée'
    });
  }

relation.status = 'relation refusée';
relation.removal_date = new Date();
await relation.save();


return res.redirect('/tableau-de-bord-prive');
}catch (error) {
      console.error("Erreur lors du refus de la relation :", error);
      res.status(500).render('error', {
        title: 'Erreur serveur'
      });
    }
  },

supprimer: async (req, res) => {
try {
  const relationId = req.params.id;

  const relation = await Relation.findByPk(relationId);
  if (!relation) {
    return res.status(404).render('error', {
      title : 'Relation non trouvée'
    });
  }

// relation.status = 'relation supprimée';
await relation.destroy();

return res.redirect('/tableau-de-bord-prive');
}catch (error) {
      console.error("Erreur lors de la suppression de la relation :", error);
      res.status(500).render('error', {
        title: 'Erreur serveur'
      });
    }
  }
  };

  
export default relationController;

