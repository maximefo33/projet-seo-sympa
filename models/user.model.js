// models/message.model.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../app/database.js';

export class User extends Model {}
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
    },
    user_sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_recipient_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    
  });
 





  export default usermodel;