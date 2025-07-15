// database - table RELATION 

import sequelize from '../../config/database.js';
import { Model, DataTypes } from 'sequelize';

class Relation extends Model { }

Relation.init({

  id_relation: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  approval_date: {
    type: DataTypes.DATE,  //ou DATE(6)?
    allowNull: true,
  },

  removal_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING(50),
  },

  /* user_sender_id: {
    type: DataTypes.INTEGER,
      allowNull: false,
  },

  user_recipient_id: {
    type: DataTypes.INTEGER,
      allowNull: false,
  }, */

}, {
  sequelize,
  modelName: 'Relation',
  tableName: 'relation',
}
);

export default Relation;




// création des relations => dans le fichier index.js de la database


// see @ https://sequelize.org/docs/v6/core-concepts/assocs/#basics-of-queries-involving-associations
