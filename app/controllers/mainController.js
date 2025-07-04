// ici fichier de notre mainController

// à compléter avec toutes les endoints frontback par la suite


const mainController = {

  // routes front
  home: function (req, res) {
    res.render('home', {
      title: 'Page d\'accueil'
    });
  },

  contact: function (req, res) {
    res.render('contact', {
      title: 'Contact'
    });
  },

  about: function (req, res) {
    res.render('about', {
      title: 'A propos'
    });
  },

  search: function (req, res) {
    res.render('search', {
      title: 'rechercher',
    });
  },

  // endpoint dashboard sera en accès protégé car page privée, uniquement si connexion OK
  // dashboard: function (req, res) {
  //   res.render('dashboard', {
  //     title: 'mon tableau de bord privé', //voir si on garde ce titre ?
  //   });
  // },
  //***************************************************** */

  profile: function (req, res) {
    res.render('profile', {
      title: 'profil public', // voir si on renomme ?
      user: {
        name: 'Elfé', //ensuite on dynamisera ces infos
        job: "du rugby",
        location: 'Drôme',
        bio: 'depuis 2010',
      }
    });
  },

  conditions: function (req, res) {
    res.render('conditions', {
      title: 'conditions générales',
    });
  },

  legal: function (req, res) {
    res.render('legal', {
      title: 'mentions légales et politique de confidentialité',
    });
  },

  accessibility: function (req, res) {
    res.render('accessibility', {
      title: 'déclaration d\'accessibilité',
    });
  },

  error: function (req, res) {
    res.render('error', {
      title: 'page d\'erreur', 
    });
  },

  // endpoints back

  login: function (req, res) {
    res.render('connexion', {
      title: 'Connexion',
    });
  },

  loginAction: function (req, res) {
    res.render('connexion', {
      title: 'Formulaire de connexion',
    });
  },

  signup: function (req, res) {
    res.render('inscription', {
      title: 'Formulaire d\'Inscription',
       css: 'auth'
    });
  },

  signupAction: function (req, res) {
    res.render('inscription', {
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

*****************************/

};

export default mainController;

