// dans un script js
// je prends mes modèles

import './index.js';
// je prends mon client connecté
import sequelize from '../app/database.js';
// je supprime les tables et je les recrée
try  {
   sequelize.authenticate();
    console.log("✅ Connexion OK");

   sequelize.sync({ force: true });
    console.log("✅ Tables créées !");
  
} catch (error) {
  console.error(error);
}