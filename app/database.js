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