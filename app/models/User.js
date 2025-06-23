// models/message.model.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';


class User extends Model { }
User.init({
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  role: {
    type: DataTypes.STRING(40),
    allowNull: false
  }

 
}, {
  sequelize,
  modelName: 'User',
  tableName: 'user',

});

export default User