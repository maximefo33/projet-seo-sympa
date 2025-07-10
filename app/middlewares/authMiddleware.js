
//export function isLoggedIn(req, res, next) {
 // if (req.session && req.session.user) {
   // next(); // User is logged in
  //} else {
  //  res.redirect('/connexion'); // Not logged in, redirect to login page
 // }
//}

//Protection la route /dashboard

export function isLoggedIn(req, res, next) {
  console.log('isLoggedIn middleware, session.isLogged:', req.session.isLogged);
  if (req.session && req.session.isLogged) {
    next();
  } else {
    res.redirect('/connexion');
  }
}

