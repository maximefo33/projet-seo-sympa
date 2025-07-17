
//Protection de la route /dashboard => on peut aller sur /tableau-de-bord-privé que SI on est connecté à son compte

export function isLoggedIn(req, res, next) {
  if (req.session && req.session.isLogged) {
    next();
  } else {
    res.redirect('/connexion');
  }
}

