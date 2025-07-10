// database - table RELATION 
// traduire en langage sequelize pour communiquer avec la databse postgreSQL
import sequelize from '../../config/database.js';
import { Model, DataTypes } from 'sequelize';


// création de la table RELATION
// see @ https://sequelize.org/docs/v6/other-topics/naming-strategies/
// pour types de DATA see @ https://sequelize.org/docs/v7/models/data-types/
//see @ https://sequelize.org/docs/v6/core-concepts/model-basics/

// pas besoin de mettre les id, sequelize les gère automatiquement
// XXXXX

// A REPRENDRE 10.7. avec des champs non obligatoires pour date acceptation et suppression

class Relation extends Model { }

Relation.init({
//   id: {
//   type: DataTypes.INTEGER,
//   autoIncrement: true,
//   primaryKey: true,
// },
  approval_date: {
  type: DataTypes.DATE,  //ou DATE(6)?
  allowNull: false,
},

  removal_date: {
  type: DataTypes.DATE,
  allowNull: false,
},
  status:{
    type: DataTypes.STRING(50),
  }
  }, {
    sequelize,
    modelName: 'Relation',
    tableName: 'relation',
  }
);

export default Relation;


// création des relations => dans le fichier index.js de la database


// création des relations => dans le fichier index.js de la database


// see @ https://sequelize.org/docs/v6/core-concepts/assocs/#basics-of-queries-involving-associations
