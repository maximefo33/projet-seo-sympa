import  User from "../models/User.js";


// cette metode = selec * from "user";

export async function getAll(req, res) {
    const users= await User.findAll();
    res.status(200).json(users);
};

/* Connexion
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).render('login', { error: "Email incorrect" });
    }

    if (user.password !== password) {
      return res.status(401).render('login', { error: "Mot de passe incorrect" });
    }

    req.session.user = {
      id: user.id_user,
      email: user.email,
      role: user.role
    };

    console.log(`Utilisateur connecté : ${user.email}`);
    return res.redirect("/dashboard");

  } catch (err) {
    console.error("Erreur de connexion :", err);
    res.status(500).render("login", { error: "Erreur interne du serveur" });
  }
};

// Déconnexion
export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Erreur lors de la déconnexion :", err);
      return res.status(500).send("Erreur de déconnexion");
    }

    res.redirect("/login");
  });
};