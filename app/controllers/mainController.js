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

  //search: function (req, res) {
  // res.render('search', {
  //   title: 'rechercher',
  //  });
  //},

  // endpoint dashboard => voir dashboardcontroller

// endpoint profile : voir profileController

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

};

export default mainController;

