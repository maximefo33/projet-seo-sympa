import Profile from '../models/Profile.js';
import User from '../models/User.js';
import { Op } from 'sequelize';
import validator from 'validator';

const searchController = {
  async searchPage(req, res) {
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

  const normalizedKeywords = query
    .toLowerCase()  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
    .replace(/,/g, ' ')   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace     
    .split(/\s+/)      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split      
    .filter(Boolean);      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter    

  
  const keywordConditions = normalizedKeywords.map(word => ({
    description: { [Op.iLike]: `%${word}%` }
  }));

  
  searchConditions.push({
    [Op.or]: keywordConditions
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

      res.render('searchPage', {
        title: 'Recherche expert SEO',
        cities,
        query,
        selectedCity,
        villeLibre,
        results
      });
      } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors du chargement de la page de recherche');
      }
    }
};



  export default searchController;
