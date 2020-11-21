// import Sequelize from 'sequelize';
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const User = require('./user');
const PlantInfo = require('./plantInfo');
const UserPlants = require('./userPlants');

const sequelize = new Sequelize(
  'postgres://gpgezhvl:QiSf5ksmzLBek_n1Xc9IXHQ5YFLb--lM@rajje.db.elephantsql.com:5432/gpgezhvl'
);

sequelize.authenticate()
  .then((res) => {
    console.log('Running database...');
  })
  .catch((err) => console.log(err));

const models = {
  User: User(sequelize, DataTypes),
  PlantInfo: PlantInfo(sequelize, DataTypes),
  UserPlants: UserPlants(sequelize, DataTypes),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

// export { sequelize };
 
// export default models;

sequelize.sync();

module.exports = {
  default: models,
  sequelize: sequelize
}
