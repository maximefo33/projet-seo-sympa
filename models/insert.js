
import User from './user.model';

try  {
  await User.create('alice@exemple.com', 'Vg9!rLu@3wQz', 'professionnel', '2025-06-17');
  await User.create('bob@exemple.com', 'Mf#72Tp!xaKL', 'professionnel', '2025-06-17');
  await User.create('chloe@exemple.com', 'Xe&4pQs9!Bjd', 'professionnel', '2025-06-17');
} catch (error) {
  console.error(error);
}