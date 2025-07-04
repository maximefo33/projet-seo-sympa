
//export function isLoggedIn(req, res, next) {
 // if (req.session && req.session.user) {
   // next(); // User is logged in
  //} else {
  //  res.redirect('/connexion'); // Not logged in, redirect to login page
 // }
//}

//Protection la route /dashboard

export function isLoggedIn(req, res, next) {
  console.log('isLoggedIn middleware, session.user:', req.session.user);
  if (req.session && req.session.isLogged) {
    next();
  } else {
    res.redirect('/connexion');
  }
}

