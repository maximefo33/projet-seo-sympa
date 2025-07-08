
// script de création des tables USER RELATION PROFILE MESSAGE
// fait le lien avec sequelize - le lancer avec la commande npm run db:create
// je prends mes modèles



import '../db/association.js';
import sequelize from '../../config/database.js';
import {insertUsers,insertProfile} from '../seeds/insert.js';


try {
  await sequelize.authenticate();
  console.log("✅ Connexion OK");

  await sequelize.sync({ force: true });
  console.log("✅ Tables créées !");

 console.log("👉 Lancement de insertUsers");
await insertUsers();
console.log("✅ Données insérées");
await insertProfile();
console.log("✅ Données insérées");

} catch (error) {
  console.error(error);
}