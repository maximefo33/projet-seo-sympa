import Profile from '../models/Profile.js';
import User from '../models/User.js';
import { Op } from 'sequelize';

const searchController = {
  // Affiche le formulaire de recherche
  async showSearchForm(req, res) {
    try {
      // Récupération des villes distinctes depuis les profils
      const citiesData = await Profile.findAll({
        attributes: ['city'],
        group: ['city']
      });

      const cities = citiesData.map(p => p.city).filter(Boolean);

      // Query params pour pré-remplir les champs
      const query = req.query.q?.trim() || '';
      const selectedCity = req.query.ville || '';
      const villeLibre = req.query.villeLibre?.trim() || '';

      console.log('Chargement searchForm avec :', { cities, query, selectedCity, villeLibre });

      res.render('searchForm', {
        title: 'Recherche expert SEO',
        cities,
        query,
        selectedCity,
        villeLibre
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors du chargement du formulaire');
    }
  },

  // Affiche les résultats de la recherche
  async searchResults(req, res) {
    const query = req.query.q?.trim() || '';
    const selectedCity = req.query.ville || '';
    const villeLibre = req.query.villeLibre?.trim() || '';
    const cityToUse = selectedCity === 'autre' && villeLibre ? villeLibre : selectedCity;

    const searchConditions = [];

    if (query) {
      searchConditions.push({
        [Op.or]: [
          { firstname: { [Op.iLike]: `%${query}%` } },
          { lastname: { [Op.iLike]: `%${query}%` } },
          { expertise: { [Op.iLike]: `%${query}%` } }
        ]
      });
    }

    if (cityToUse) {
      searchConditions.push({
        city: { [Op.iLike]: `%${cityToUse}%` }
      });
    }

    try {
      const results = await Profile.findAll({
        where: {
          [Op.and]: searchConditions
        },
        include: [
          {
            model: User,
            where: { role: 'expert' }
          }
        ]
      });

      res.render('searchResults', {
        title: 'Résultats de recherche',
        query,
        selectedCity,
        villeLibre,
        results
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la recherche');
    }
  }
};

export default searchController;



