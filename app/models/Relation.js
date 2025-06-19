// database - table RELATION 
// traduire en langage sequelize pour communiquer avec la databse postgreSQL
import sequelize from '../database.js';
import { Model, DataTypes } from 'sequelize';


// création de la table RELATION
// see @ https://sequelize.org/docs/v6/other-topics/naming-strategies/
// pour types de DATA see @ https://sequelize.org/docs/v7/models/data-types/
//see @ https://sequelize.org/docs/v6/core-concepts/model-basics/

// pas besoin de mettre les id, sequelize les gère automatiquement
// XXXXX


export default class Relation extends Model {}

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

// création des relations

// un USER peut faire min 1 et max 1 demande de relation - 1 to 1
// une RELATION concerne 1 USER min et 1 USER max - 1 to 1
// see @ https://sequelize.org/docs/v6/core-concepts/assocs/#basics-of-queries-involving-associations
// ==> "Pour créer une relation un à un , les associations hasOne et belongsTo sont utilisées ensemble"


// User.hasOne(Relation, {foreignKey: 'relation_id', as : 'relation'})
// Relation.belongsTo(User, {foreignKey : 'user_id', as : 'user'});