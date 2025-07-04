import {insertUsers,insertProfile} from '../seeds/insert.js';

/*import User from '../../app/models/User.js'; 


const insertUsers = async () => {
  try {
    await User.create({
      email: 'alice@exemple.com',
      password: 'Vg9!rLu@3wQz',
      role: 'professionnel',
      registration_date: '2025-06-17'
    });

    await User.create({
      email: 'bob@exemple.com',
      password: 'Mf#72Tp!xaKL',
      role: 'professionnel',
      registration_date: '2025-06-17'
    });

    await User.create({
      email: 'chloe@exemple.com',
      password: 'Xe&4pQs9!Bjd',
      role: 'professionnel',
      registration_date: '2025-06-17'
    });

    console.log("Utilisateurs insérés avec succès.");
  } catch (error) {
    console.error("Erreur lors de l'insertion :", error);
  }
};

 export default insertUsers;*/

import { Profile, User } from '../db/association.js';
import bcrypt from 'bcrypt';

const insertUsers = async () => {
  try {
    const users = [
      { email: 'alice@exemple.com', password: 'Vg9!rLu@3wQz', role: 'expert' },
      { email: 'bob@exemple.com', password: 'Mf#72Tp!xaKL', role: 'demandeur'  },
      { email: 'chloe@exemple.com', password: 'Xe&4pQs9!Bjd', role: 'expert'},
    ];

    for (const user of users) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);

      await User.create({
        email: user.email,
        password: hashedPassword,
        role: user.role,
      });
    }

    console.log("Utilisateurs insérés avec succès.");
  } catch (error) {
    console.error("Erreur lors de l'insertion :", error);
  }
};



const insertProfile = async () => {
  try {
    const profiles = [
      { firstname: 'alice', lastname: 'mex',address: '5 rue de bob',city: 'bordeaux', user_id: 1 },
      { firstname: 'bob', lastname: 'max' ,address: '5 rue de bob',city: 'bordeaux', user_id: 2 },
      { firstname: 'chloe', lastname: 'bbe',address: '5 rue de bob',city: 'bordeaux', user_id: 3 },
    ];

    for (const profile of profiles) {
      await Profile.create({
        firstname: profile.firstname,
          lastname: profile.lastname,
          address: profile.address,
          city: profile.city,
          user_id: profile.user_id,
        
      });
    }

    console.log("Profils insérés avec succès.");
  } catch (error) {
    console.error("Erreur lors de l'insertion :", error);
  }
};

export {
  insertProfile,
  insertUsers,
};