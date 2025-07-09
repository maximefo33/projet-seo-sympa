import { Profile, User } from '../../database/db/association.js';

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



/*import Profile from '../models/Profile.js';
import User from '../models/User.js';
import { Op } from 'sequelize';
import validator from 'validator';

const profileController = {
  async profilePage(req, res) {
    try {
      // Récupération des villes
      const citiesData = await Profile.findAll({
        attributes: ['city'],
        group: ['city']
      });
      const cities = citiesData.map(p => p.city).filter(Boolean);

      // Nettoyer les query params
      const query = req.query.q ? validator.trim(validator.escape(req.query.q)) : '';
      const selectedCity = req.query.ville || '';
      const villeLibre = req.query.villeLibre ? validator.trim(validator.escape(req.query.villeLibre)) : '';
      const cityToUse = selectedCity === 'autre' && villeLibre
        ? villeLibre
        : (selectedCity !== 'autre' ? selectedCity : '');

      let results = [];

      const searchConditions = [];

      if (query) {
        searchConditions.push({
          [Op.or]: [
            { description: { [Op.iLike]: `%${query}%` } }
          ]
        });
      }

      if (cityToUse) {
        searchConditions.push({
          city: { [Op.iLike]: `%${cityToUse}%` }
        });
      }

      const whereCondition = searchConditions.length > 0 ? { [Op.and]: searchConditions } : {};

      if (searchConditions.length > 0) {
        results = await Profile.findAll({
          where: whereCondition,
          include: [
            {
              model: User,
              where: { role: 'expert' }
            }
          ]
        });
      }

      } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors du chargement de la page de recherche');
      }
    }
};



  export default searchController;


// insérer profile dans la const ci-desous
     profile: function (req, res) {
        res.render('profile', {
          title: 'profile.display_name',
          profile: {
            id: 'profile.id_profile', // id user ou id profil ?
            firstname: 'profile.firstname',
            lastname: 'profile.lastname',
            address: 'profile.address',
            city: 'profile.city',
            zipcode: 'profile.zipcode',
            cis: 'profile.company_identification_system',
            description: 'profile.description',
          }
        });
      }
    // fin profile
    */