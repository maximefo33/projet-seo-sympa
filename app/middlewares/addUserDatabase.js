// inspiré de l'exercice S06-Pilori-BDD

// cette fonction utilise l'autre fonction disponible dans le dossier middleware/isLogged.js
// pour ajouter l'utilisateur connecté dans la database USER

function addUserDatabase(req, res, next) {
  if (req.session.isLogged) {
    res.locals.isLogged = true;
  }
  else {
    res.locals.isLogged = false;
  }
  next();
}

export default addUserDatabase;