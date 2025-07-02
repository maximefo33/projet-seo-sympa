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

  search: function (req, res) {
    res.render('search', {
      title: 'rechercher',
    });
  },

  //*************A ENLEVER AVANT FUSION CAR MAXIME A FAIT CE ENDPOINT */
  // endpoint dashboard sera en accès protégé car page privée, uniquement si connexion OK
  dashboard: function (req, res) {
    res.render('dashboard', {
      title: 'mon tableau de bord privé', //voir si on garde ce titre ?
    });
  },
  //***************************************************** */

  profile: function (req, res) {
    res.render('profile', {
      title: 'profil public', // voir si on renomme ?
      user: {
        name: 'PIF', //ensuite on dynamisera ces infos
        job: "berger",
        location: 'Drôme',
        bio: 'depuis 2010',
      }
    });
  },

  profiles: function (req, res) {
    res.render('profiles', {
      title: 'propositions de services', //à renommer
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
    res.render('login', {
      title: 'Connexion',
    });
  },

  loginAction: function (req, res) {
    res.render('login', {
      title: 'Formulaire de connexion',
    });
  },

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

*****************************/

};

export default mainController;

