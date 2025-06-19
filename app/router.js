// on a besoin de récupérer le module express
import express from "express";

console.log("coucou");

// on crée un objet router à l'aide de la méthode adaptée fournie par express
const router = express.Router();

// on place dessus nos routes
router.get("/", (req, res) => {
  res.send("Coucou");
});

router.get("/contact", (req, res) => {
  res.send();
});

router.get("/about", (req, res) => {
   console.log('route /about');
  res.render('about');
});

router.get("/terms-and-conditions", (req, res) => {
   console.log('route /terms-and-conditions');
  res.render('conditions');
});


// on l'exporte
export default router;
