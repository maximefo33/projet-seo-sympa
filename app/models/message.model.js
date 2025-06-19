import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

export class Message extends Model {}


  Message.init({
    id_message: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    sent_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    read_date: {
      type: DataTypes.DATE,
      allowNull: true,
      
    },
    content: {
      type: DataTypes.TEXT,
      defaultValue: false
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
    modelName: 'Message',
    tableName: 'message',
    
  });

 


