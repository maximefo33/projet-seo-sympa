// ici le Middleware pour la page /sign-in
// utilise la bibliothèqe express-session - installée avec npm install express-session le 24/6/25

// see @https://www.npmjs.com/package/express-session 

// see @ https://github.com/O-clock-Behemoth/Fiches-Objectifs/blob/main/saison5/e15.md

// On pose le middleware qui va :

// intercepter chaque requête pour regarder si elle contient un id de session en entête cookie
// retrouver si possible les infos associées à cet id de session et enrichir la requête avec ces données.
// si aucun id de session n'est présent, il est alors créé et renvoyé dans la réponse via l'entete Set-Cookie.

// fonction : si l'utilisateur n'est pas connecté, alors lien vers page d'erreur

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