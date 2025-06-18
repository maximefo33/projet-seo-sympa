// database - table RELATION 
// traduite en langage sequelize pour communiquer avec la databse postgreSQL

import { Sequelize } from "sequelize";

const Relation = sequelize.define(
  'relation',
  { approval_date: Sequelize.DATE }, //ou DATE(6)?
  {removal_date : Sequelize.DATE},
  {status : Sequelize.STRING(50)}
  {
    underscored: true,
  },
);


User.hasMany(Task);
Task.belongsTo(User);