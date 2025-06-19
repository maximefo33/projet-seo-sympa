import User from './user.js';
//import Profile from './profile.js';
import Message from './message.js';
//import Relation from './relation.js';

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

export {
  User,
  //Profile,
  Message,
// Relation
};
