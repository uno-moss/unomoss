const sequelize = require("sequelize");

const plantInfo = (sequelize, DataTypes) => {
  const PlantInfo = sequelize.define('plantInfo', {
    commonName: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    scientificName: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    bibliography: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    rank: {
      type: DataTypes.STRING,
    },
    familyCommonName: {
      type: DataTypes.STRING,
    },
    genusID: {
      type: DataTypes.INTEGER,
    },
    observations: {
      type: DataTypes.STRING,
    },
    vegetable: {
      type: DataTypes.BOOLEAN,
    },
    genus: {
      type: DataTypes.STRING,
    },
    family: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
    ediblePart: {
      type: DataTypes.STRING,
    },
    edible: {
      type: DataTypes.BOOLEAN,
    },
    distribution: {
      type: DataTypes.STRING,
    },
    flowerColor: {
      type: DataTypes.STRING,
    },
    foliageColor: {
      type: DataTypes.STRING,
    },
    fruitOrSeedColor: {
      type: DataTypes.STRING,
    },
    fruitOrSeedShape: {
      type: DataTypes.STRING,
    },
    avgHeight: {
      type: DataTypes.STRING,
    },
    phMin: {
      type: DataTypes.STRING,
    },
    phMax: {
      type: DataTypes.STRING,
    },
    light: {
      type: DataTypes.STRING,
    },
    soilNutrients: {
      type: DataTypes.STRING,
    },
    soilHumidity: {
      type: DataTypes.STRING,
    },
    atmosphericHumidity: {
      type: DataTypes.STRING,
    },
    minPrecipitation: {
      type: DataTypes.STRING,
    },
    maxPrecipitation: {
      type: DataTypes.STRING,
    },
    growthMonths: {
      type: DataTypes.STRING,
    },
    bloomMonths: {
      type: DataTypes.STRING,
    },
    fruitMonths: {
      type: DataTypes.STRING,
    },
  });

  PlantInfo.associate = models => {
    PlantInfo.belongsTo(models.UserPlants);
  }

  return PlantInfo;
}

// export default plantInfo;
module.exports = plantInfo;