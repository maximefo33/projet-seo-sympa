
//Protection de la route /dashboard

export function isLoggedIn(req, res, next) {
  console.log('isLoggedIn middleware, session.isLogged:', req.session.isLogged);
  if (req.session && req.session.isLogged) {
    next();
  } else {
    res.redirect('/connexion');
  }
}

