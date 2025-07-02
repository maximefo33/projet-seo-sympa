import  User from "../models/User.js";




// cette metode = selec * from "user";

export async function getAll(req, res) {
 const users= await User.findAll();
 res.status(200).json(users);
};

