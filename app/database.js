// ici la database seo_sympa

// see @ https://github.com/O-clock-Behemoth/Fiches-Objectifs/blob/main/saison6/e14.md => utilisation de sequelize pour communiquer avec notre base de données

// 1 npm install sequelize pg 
// 2 config avec ce code ci-dessous :

import Sequelize from 'sequelize';
import "dotenv/config"; 




//  URL en dev ou production
//  postgres://username:password@localhost:5432/seo_sympa
const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    underscored: true, // pour utiliser le snake_case côté SQL
  }
});

export default sequelize;

