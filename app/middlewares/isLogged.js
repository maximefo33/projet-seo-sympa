// ici le Middleware pour la page /sign-in

// see @ https://github.com/O-clock-Behemoth/Fiches-Objectifs/blob/main/saison5/e15.md

// On pose le middleware qui va :

// intercepter chaque requête pour regarder si elle contient un id de session en entête cookie
// retrouver si possible les infos associées à cet id de session et enrichir la requête avec ces données.
// si aucun id de session n'est présent, il est alors créé et renvoyé dans la réponse via l'entete Set-Cookie.


function isLogged(req, res, next) {
  if (!req.session.isLogged) {
    res.status(401).render('error', {
      message: 'Vous n\'êtes pas autorisé à accéder à la page demandée.',
    });
  }
  else {
    next();
  }
}

export default isLogged;