const db = require('../models/plantInfo');

const plantInfoController = {};

//Create plant Info by bringing in information from the API and putting it into the 
plantInfoController.createPlant = async (req, res, next) => {
  try {
    const plantInfo = await db.create(req.body);
    return res.status(200).json({
      plantInfo,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
};

//
plantInfoController.getPlantInfo = (req, res, next) => {
  db.findAll({
    attributes: ['commonName']
  })
};


module.exports = plantInfoController;