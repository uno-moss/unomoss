const { PlantInfo } = require('../models/index');
const db = require('../models/index');
// const PlantInfo = require('../models/plantInfo');

const plantInfoController = {};

//Create plant Info by bringing in information from the API and putting it into the 
plantInfoController.createPlant = async (req, res, next) => {
  console.log('creating plant info');

  const createPlantInfos = await db.PlantInfo.create({
    commonName: req.body.common_name,
    slug: req.body.slug,
    scientificName: req.body.scientificName,
    year: req.body.year,
    bibliography: req.body.bibliography,
    author: req.body.author,
    status: req.body.status,
    rank: req.body.status,
    familyCommonName: req.body.familyCommonName,
    genusID: req.body.genusId,
    observations: req.body.observations,
    vegetable: req.body.vegetable,
    genus: req.body.genus,
    family: req.body.family,
    duration: req.body.duration,
    ediblePart: req.body.ediblePart,
    edible: req.body.edible,
    distribution: req.body.distribution,
    flowerColor: req.body.flowerColor,
    foliageColor: req.body.foliageColor,
    fruitOrSeedColor: req.body.fruitOrSeedColor,
    fruitOrSeedShape: req.body.fruitOrSeedShape,
    avgHeight: req.body.avgHeight,
    phMin: req.body.phMin,
    phMax: req.body.phMax,
    light: req.body.light,
    soilNutrients: req.body.soilNutrients,
    soilHumidity: req.body.soilHumidity,
    atmosphericHumidity: req.body.atmosphericHumidity,
    minPrecipitation: req.body.minPrecipitation,
    maxPrecipitation: req.body.maxPrecipitation,
    growthMonths: req.body.growthMonths,
    bloomMonths: req.body.bloomMonths,
    fruitMonths: req.body.fruitMonths,
  })
  if (!createPlantInfos) {
    return next({ message: 'Unable to create plant table.' });
  }
  return next();
};

// get plant information based on plant it's tied to
plantInfoController.getPlantInfo = async (req, res, next) => {
  console.log('get user plant info');
  const findAllPlants = await PlantInfo.findAll({
    where: {plantId: req.body.plantId}
  })
  if (findAllPlants.length === 0) {
    return next({ message: 'No plant information found' });
  }
  res.locals.findAllPlants = findAllPlants;
  return next();
};


module.exports = plantInfoController;