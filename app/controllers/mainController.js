// ici fichier de notre mainController

// à compléter avec toutes les endoints frontback par la suite


const mainController = {

// routes front
  home: function (req, res) {
    res.render('home', {
      title: 'Page d\'accueil',
    });
  },

    contact: function (req, res) {
    res.render('contact', {
      title: 'Contact',
    });
  },

    about: function (req, res) {
    res.render('about', {
      title: 'A propos',
    });
  },


  // routes back

  signup: function (req, res) {
    res.render('signup', {
      title: 'Formulaire d\'Inscription',
    });
  },

  signupAction: function (req, res) {
    res.render('signup', {
      title: 'Formulaire d\'Inscription à compléter',
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

