import { Profile, User } from '../../database/db/association.js';



const dashboardController = {

  //  1. Dashboard
  dashboard: async (req, res) => {
    try {
      const userId = req.session.userId;
      if (!userId) return res.redirect('/connexion');

      const profile = await Profile.findOne({
        where: { user_id: userId },
        include: User
      });

      if (!profile) return res.redirect('/inscription');

      res.render('dashboard', {
        title: 'Mon tableau de bord Mon profil',
        profile: {
          firstname: profile.firstname,
          lastname: profile.lastname,
          address: profile.address,
          city: profile.city,
          zipcode: profile.zipcode,
          display_name: profile.display_name,
          company_identification_system: profile.company_identification_system,
          description: profile.description,
        },
      });

    } catch (error) {
      console.error("Erreur attrapée :", error);
      res.render('connexion', { error: 'Erreur lors de la tentative de connexion' });
    }
  },

  //  2. Page formulaire de modification
  editProfile: async (req, res) => {
    try {
      const userId = req.session.userId;
      if (!userId) return res.redirect('/connexion');

      const profile = await Profile.findOne({ where: { user_id: userId } });
      if (!profile) return res.redirect('/inscription');

      res.render('dashboard-edite', {
        title: 'Modifier mon profil',
        profile
      });

    } catch (error) {
      console.error("Erreur attrapée :", error);
      res.redirect('/dashboard');
    }
  },

  //  3. Enregistrer la modification
  updateProfile: async (req, res) => {
    try {
      const userId = req.session.userId;
      if (!userId) return res.redirect('/connexion');

      const profile = await Profile.findOne({ where: { user_id: userId } });
      if (!profile) return res.redirect('/inscription');

      // Mise à jour des champs
      profile.firstname = req.body.firstname;
      profile.lastname = req.body.lastname;
      profile.address = req.body.address;
      profile.city = req.body.city;
      profile.zipcode = req.body.zipcode;
      profile.display_name = req.body.display_name;
      profile.company_identification_system = req.body.company_identification_system;
      profile.description = req.body.description;

      await profile.save();

      res.redirect('/tableau-de-bord-prive');

    } catch (error) {
      console.error("Erreur attrapée :", error);
      res.render('dashboard-edite', {
        title: 'Modifier mon profil',
        error: 'Erreur lors de la modification',
        profile: req.body
      });
    }
  },

};

export default dashboardController;
