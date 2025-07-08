
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
      { firstname: 'alice', lastname: 'mex',address: '5 rue de bob',city: 'bordeaux', user_id: 1, zipcode: '33000', display_name: 'alice_mex', company_identification_system: '12345678901234', description: "Expert en stratégie digitale et optimisation de contenu."},
      { firstname: 'bob', lastname: 'max' ,address: '5 rue de bob',city: 'bordeaux', user_id: 2, zipcode: '33000', display_name: 'bob_max', company_identification_system: '12345678901234', description: "Demandeur de services SEO, cherche à améliorer sa visibilité en ligne."},
      { firstname: 'chloe', lastname: 'bbe',address: '5 rue de bob',city: 'bordeaux', user_id: 3, zipcode: '33000', display_name: 'chloe_bbe', company_identification_system: '12345678901234', description: "Spécialiste en marketing digital, passionnée par l'optimisation des moteurs de recherche."},
    ];

    for (const profile of profiles) {
      await Profile.create({
        firstname: profile.firstname,
          lastname: profile.lastname,
          address: profile.address,
          city: profile.city,
          zipcode: profile.zipcode,
          display_name: profile.display_name,
          company_identification_system: profile.company_identification_system,
          description: profile.description,
        // Associer le profil à l'utilisateur
        // Ici, on suppose que user_id correspond à l'ID de l'utilisateur dans la base de données
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