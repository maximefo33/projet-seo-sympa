// ici la table relation liée à la database seo_sympa

// see @ https://github.com/O-clock-Behemoth/Fiches-Objectifs/blob/main/saison6/e14.md - utilisation de sequelize pour communiquer avec notre base de données

// 1 npm install sequelize pg 
// 2 config

import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        underscored : true, // pour utiliser le snake_case côté SQL
    }
});




export default sequelize;


