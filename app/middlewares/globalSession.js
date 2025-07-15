// middleware qui gère la session pour toutes les vues
// savoir si User est connecté 

/*export function globalSession(req, res, next) {
  console.log( req.session);
  if (req.session && req.session.isLogged) {
    
  } else {
    next();
  }
}
// ajout 15/7
// export function globalSession(req, res, next) {
//   res.locals.session=req.session;
// */
