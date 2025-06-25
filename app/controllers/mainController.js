// ici fichier de notre mainController

// à compléter avec toutes les endoints frontback par la suite

/* *********** JE COMMENTE CAR PAS UTILISE POUR L INSTANT

const mainController = {

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

  contact: function(req, res) {
    res.render('contact', {
      title: 'Contact',
    });
  },
  

  notFound: function(req, res) {
    res.status(404).render('error', {
      message: 'La page demandée n\'a pas été trouvée.',
    });
  }

};

export default mainController;

*****************************/
