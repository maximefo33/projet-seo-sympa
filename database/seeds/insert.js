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

 import User from '../../app/models/User.js';
import bcrypt from 'bcrypt';

const insertUsers = async () => {
  try {
    const users = [
      { email: 'alice@exemple.com', password: 'Vg9!rLu@3wQz', role: 'professionnel' },
      { email: 'bob@exemple.com', password: 'Mf#72Tp!xaKL', role: 'professionnel' },
      { email: 'chloe@exemple.com', password: 'Xe&4pQs9!Bjd', role: 'professionnel' },
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

export default insertUsers;
