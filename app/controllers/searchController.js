import Profile from '../models/Profile.js';
import User from '../models/User.js';
import { Op } from 'sequelize';
import validator from 'validator';

// //const searchController = {
//   // Affiche le formulaire de recherche
//   /*async showSearchForm(req, res) {
//     try {
//       // Récupération des villes 
//       const citiesData = await Profile.findAll({
//         attributes: ['city'],
//         group: ['city']
//       });

//       const cities = citiesData.map(p => p.city).filter(Boolean);

//       // Query params pour pré-remplir les champs
//       // const query = req.query.q?.trim().escape() || '';
//       const query = req.query.q ? validator.trim(validator.escape(req.query.q)) : '';
      
//   const selectedCity = req.query.ville || '';
//   // const villeLibre = req.query.villeLibre? .trim().escape() || '';
//   const villeLibre = req.query.villeLibre ? validator.trim(validator.escape(req.query.villeLibre)) : '';


//   console.log('Chargement searchForm avec :', { cities, query, selectedCity, villeLibre });

//   res.render('searchForm', {
//     title: 'Recherche expert SEO',
//     cities,
//     query,
//     selectedCity,
//     villeLibre
//   });
// } catch (error) {
//   console.error(error);
//   res.status(500).send('Erreur lors du chargement du formulaire');
// }
//   },

//   // Affiche les résultats de la recherche
//   async searchResults(req, res) {
//   // const query = req.query.q?.trim().escape() || '';
//   const query = req.query.q? validator.trim(validator.escape(req.query.q)) : '';
//   //console.log(query.trim().escape(), 'query'); // ajout console log pour trouver erreur
//   console.log(query, 'query');



//   const selectedCity = req.query.ville || '';
//   // const villeLibre = req.query.villeLibre?.trim().escape() || '';
//   const villeLibre = req.query.villeLibre ? validator.trim(validator.escape(req.query.villeLibre)) : '';
//   const cityToUse = selectedCity === 'autre' && villeLibre ? villeLibre : selectedCity;

//   const searchConditions = [];

//   if (query) {
//     searchConditions.push({
//       [Op.or]: [
//         //  { firstname: { [Op.iLike]: `%${query}%` } },
//         // { lastname: { [Op.iLike]: `%${query}%` } },
//         { description: { [Op.iLike]: `%${query}%` } }
//       ]
//     });
//   }

//   if (cityToUse) {
//     searchConditions.push({
//       city: { [Op.iLike]: `%${cityToUse}%` }
//     });
//   }

//   try {
//     const results = await Profile.findAll({
//       where: {
//         [Op.and]: searchConditions
//       },
//       include: [
//         {
//           model: User,
//           where: { role: 'expert' }
//         }
//       ]
//     });

//     res.render('searchResults', {
//       title: 'Résultats de recherche',
//       query,
//       selectedCity,
//       villeLibre,
//       results
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Erreur lors de la recherche');
//   }
// }
// };
// */
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
