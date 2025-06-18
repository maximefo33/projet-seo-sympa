// database - table RELATION 
// traduite en langage sequelize pour communiquer avec la databse postgreSQL

import { Sequelize } from "sequelize";


// création de la table RELATION
// see @ https://sequelize.org/docs/v6/other-topics/naming-strategies/
// pour types de DATA see @ https://sequelize.org/docs/v7/models/data-types/

const Relation = Sequelize.define(
  'relation',
  { approval_date: Sequelize.DATE }, //ou DATE(6)?
  {removal_date : Sequelize.DATE},
  {status : Sequelize.STRING(50)},
  {
    underscored: true,
  },
);

// création des relations

// un USER peut faire min 1 et max 1 demande de relation - 1 to 1
// une RELATION concerne 1 USER min et 1 USER max - 1 to 1
// see @ https://sequelize.org/docs/v6/core-concepts/assocs/#basics-of-queries-involving-associations
// ==> "Pour créer une relation un à un , les associations hasOne et belongsTo sont utilisées ensemble"


User.hasOne(Relation);
Relation.belongsTo(User);