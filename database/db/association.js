import User from '../../app/models/User.js';
import Profile from '../../app/models/Profile.js';
import Message from '../../app/models/Message.js';
import Relation from '../../app/models/Relation.js';



// Un utilisateur a un profil
User.hasOne(Profile, {
  foreignKey: 'user_id'
});
Profile.belongsTo(User, {
  foreignKey: 'user_id'
});

// Un utilisateur peut envoyer et recevoir des messages
User.hasMany(Message, {
  foreignKey: 'user_sender_id',
  as: 'sentMessages'
});
Message.belongsTo(User, {
  foreignKey: 'user_sender_id',
  as: 'sender'
});

User.hasMany(Message, {
  foreignKey: 'user_recipient_id',
  as: 'receivedMessages'
});
Message.belongsTo(User, {
  foreignKey: 'user_recipient_id',
  as: 'recipient'
});

// // Un utilisateur peut avoir plusieurs relations
User.hasMany(Relation, {
  foreignKey: 'user_id'
});
Relation.belongsTo(User, {
  foreignKey: 'user_id'
});

export {
  User,
  Profile,
  Message,
  Relation,
};



