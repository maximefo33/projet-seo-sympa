import sequelize from '../../config/database.js'; 

import insertUsers from './insert.js';

const runSeed = async () => {
  try {
     // Tester la connexion à la base de données
    await sequelize.authenticate();
    console.log(' Connexion à la base de données réussie.');

    // Synchroniser les modèles si nécessaire 
    // await sequelize.sync({ force: true }); 
    
    // Insérer les utilisateurs
    await insertUsers();
    console.log('Seed terminé avec succès !');
    process.exit(0); //quitte
  } catch (error) {
    console.error('Erreur dans le seed :', error);
    process.exit(1); // quitte avec erreur
  }
};

runSeed();
