// ici la database seo_sympa

// see @ https://github.com/O-clock-Behemoth/Fiches-Objectifs/blob/main/saison6/e14.md => utilisation de sequelize pour communiquer avec notre base de données

// 1 npm install sequelize pg 
// 2 config avec ce code ci-dessous :

import Sequelize from 'sequelize';
import "dotenv/config"; 

// ??? en a-t-on besoin ? si oui : npm install dotenv --save

const sequelize = new Sequelize(process.env.PG_URL);

// PENSER A mettre notre URL postgreSQL dans .env
// PG_URL=postgres://user:pass@example.com:5432/seo_sympa en changeant USER


export default sequelize;


