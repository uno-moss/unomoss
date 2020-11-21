// import Sequelize from 'sequelize';
const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

const User = require('./user');
const PlantInfo = require('./plantInfo');
const UserPlants = require('./userPlants');

const env = process.env.NODE_ENV || 'development';
const db = {};

const sequelize = new Sequelize(
  'postgres://gpgezhvl:QiSf5ksmzLBek_n1Xc9IXHQ5YFLb--lM@rajje.db.elephantsql.com:5432/gpgezhvl'
);

// const sequelize = new Sequelize('test', 'admin', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

sequelize
  .authenticate()
  .then((res) => {
    console.log('Running database...');
  })
  .catch((err) => console.log(err));

db.User = User(sequelize, DataTypes);
db.PlantInfo = PlantInfo(sequelize, DataTypes);
db.UserPlants = UserPlants(sequelize, DataTypes);

Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

// const models = {
//   User: User(sequelize, DataTypes),
//   PlantInfo: PlantInfo(sequelize, DataTypes),
//   UserPlants: UserPlants(sequelize, DataTypes),
// };

// Object.keys(models).forEach((key) => {
//   if ('associate' in models[key]) {
//     models[key].associate(models);
//   }
// });

// export { sequelize };

// export default models;

// sequelize.sync();

// module.exports = {
//   default: models,
//   sequelize: sequelize,
// };

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
