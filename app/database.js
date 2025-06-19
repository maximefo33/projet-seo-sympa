import { Sequelize } from 'sequelize';

// À adapter avec TES infos PostgreSQL
const sequelize = new Sequelize('seo_sympa', 'seo_sympa', 'aegm_mgea_2025',{
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // désactive les logs SQL dans la console (optionnel)
});

export default sequelize;