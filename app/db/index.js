import User from '../models/user.model.js';
import Profile from '../models/Profile.js';
import Message from '../models/message.model.js';
import Relation from '../models/Relation.js';

// Un utilisateur a un profil
// User.hasOne(Profile, {
//   foreignKey: 'user_id'
// });
// Profile.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Un utilisateur peut envoyer et recevoir des messages
User.hasMany(Message, {
  foreignKey: 'user_sender_id',
  as: 'sentMessages'
});

User.hasMany(Message, {
  foreignKey: 'user_recipient_id',
  as: 'receivedMessages'
});
Message.belongsTo(User, {
  foreignKey: 'user_sender_id',
  as: 'sender'
});
Message.belongsTo(User, {
  foreignKey: 'user_recipient_id',
  as: 'recipient'
});

// // Un utilisateur peut avoir plusieurs relations
// User.hasMany(Relation, {
//   foreignKey: 'user_id'
// });
// Relation.belongsTo(User, {
//   foreignKey: 'user_id'
// });


// User.hasOne(Relation, {foreignKey: 'relation_id', as : 'relation'})
// Relation.belongsTo(User, {foreignKey : 'user_id', as : 'user'});


export {
  User,
  //Profile,
  Message,
// Relation
};
