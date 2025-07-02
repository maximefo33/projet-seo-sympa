// ici fichier de notre mainController

// à compléter avec toutes les endoints frontback par la suite


const mainController = {

  // routes front
  home: function (req, res) {
    res.render('home', {
      title: 'Page d\'accueil',
       css: 'home' // ← fichier public/css/home.css
    });
  },

  contact: function (req, res) {
    res.render('contact', {
      title: 'Contact',
       css: 'contact'
    });
  },

  about: function (req, res) {
    res.render('about', {
      title: 'A propos',
        css: 'about'
    });
  },


  // routes back

  signup: function (req, res) {
    res.render('signup', {
      title: 'Formulaire d\'Inscription',
       css: 'auth'
    });
  },

  signupAction: function (req, res) {
    res.render('signup', {
      title: 'Formulaire d\'Inscription à compléter',
    });
  },


  login: function (req, res) {
    res.render('login', {
      title: 'Connexion',
      css: 'auth'
    });
  },

  loginAction: function (req, res) {
    res.render('login', {
      title: 'Formulaire de connexion',
      css: 'auth'
    });
  },



  /* *********** JE COMMENTE CAR ci-dessous PAS UTILISE POUR L INSTANT

// ci dessous juste un exemple avec query
home: async function(req, res) {
try {
  const result = await client.query('SELECT * FROM "website" ORDER BY id DESC LIMIT 3');
  res.render('home', {
     websites: result.rows,
    })
} catch (error) {
  console.log('erreur', error);
  res.status(500).render('error');
}
},

// ci dessous ex page non trouvée
notFound: function(req, res) {
res.status(404).render('error', {
  message: 'La page demandée n\'a pas été trouvée.',
});
}

*****************************/

};

export default mainController;

