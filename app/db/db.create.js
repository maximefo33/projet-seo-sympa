// script de création des tables USER RELATION PROFILE MESSAGE
// fait le lien avec sequelize - le lancer avec la commande npm run db:create
// je prends mes modèles

import '../db/index.js';
// je prends mon client connecté
import sequelize from '../database.js';
// je supprime les tables et je les recrée
try  {
   sequelize.authenticate();
    console.log("✅ Connexion OK");

   sequelize.sync({ force: true });
    console.log("✅ Tables créées !");
  
} catch (error) {
  console.error(error);
}