import Profile from '../models/Profile.js';
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