const sequelize = require("sequelize");

const userPlants = (sequelize, DataTypes) => {
  const UserPlants = sequelize.define('userPlants', {
    plantNickName: {
      type: DataTypes.STRING,
    },
    dateAcquired: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
    },
    plantId: {
      type: DataTypes.INTEGER,
    },
    wateringFrequency: {
      type: DataTypes.INTEGER,
    },
    fertilizingFrequency: {
      type: DataTypes.INTEGER,
    },
  });

  UserPlants.associate = models => {
    UserPlants.hasOne(models.PlantInfo);
    UserPlants.belongsTo(models.User);
  }

  return UserPlants;
}

// export default userPlants;
module.exports = userPlants;