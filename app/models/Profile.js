import sequelize from "../../config/database.js";

// Besoin des classes Sequelize
import { DataTypes, Model } from "sequelize";

// Notre modèle hérite de Model
class Profile extends Model { }

// Définition du modèle
Profile.init(
  // Argument 1 : les colonnes
  {
    id_profile: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(120),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    zipcode: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    display_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    company_identification_system: {
      type: DataTypes.STRING(14),
      allowNull: true,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

  },
  // Argument 2 : les options
  {
    sequelize,
    tableName: "profile",
    timestamps: false,
  }
);

// Export du modèle
export default Profile;