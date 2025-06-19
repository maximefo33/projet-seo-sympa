// pour faire la migration (créer les tables)

// dans un script js
// je prends mes modèles
import {Relation} from './models/Relation.js';
// je prends mon client connecté
import Sequelize from './database.js';
// je supprime les tables et je les recrée
try  {
  await Sequelize.drop();
  await Sequelize.sync();
  console.log(Relation, 'table relation');
} catch (error) {
  console.error(error);
}


// try  {
//   await Relation.create({ firstname: 'Alexis', lastname: 'Vincent' });
//   await User.create({ firstname: 'Toto', lastname: 'Dupont' });
//   await User.create({ firstname: 'John', lastname: 'Doe' });
// } catch (error) {
//   console.error(error);
// }