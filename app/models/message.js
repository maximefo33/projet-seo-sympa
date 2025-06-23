import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

class Message extends Model {}


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
   
  }, {
    sequelize,
    modelName: 'Message',
    tableName: 'message',
    
  });

 
export default Message;


