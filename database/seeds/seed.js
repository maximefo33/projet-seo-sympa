

import insertUsers from './insert.js';

const runSeed = async () => {
  try {
    await insertUsers();
    console.log('Seed terminé avec succès !');
    process.exit(0); //quitte
  } catch (error) {
    console.error('Erreur dans le seed :', error);
    process.exit(1); // quitte avec erreur
  }
};

runSeed();
