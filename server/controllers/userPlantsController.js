const { default: Plant } = require('../../client/components/Plant/Plant');
const userPlants = require('../models/userPlants');
const UserPlants = require('../models/userPlants');

const userPlantsController = {};

// create a user plant (on front end, user will click "add" will populate a form)
userPlantsController.createUserPlant = async (req, res, next) => {
  console.log('creating user plant');

  await UserPlants.create({
    plantNickname: req.body.plantNickname,
    dateAcquired: req.body.dateAcquired,
    status: req.body.status,
    plantID: req.body.plantID,
    wateringFrequency: req.body.wateringFrequency,
    fertilizingFrequency: req.body.fertilizingFrequency,
  })
  console.log()
  // try {
  //   const plantInfo = await userPlants.create(req.body);
  //   return res.status(200).json({
  //     plantInfo,
  //   });
  // } catch (error) {
  //   return res.status(500).json({error: error.message})
  // }
};

// find a user plant by the plant nickname when user clicks on plant info
userPlantsController.getUserPlant = async (req, res, next) => {
  console.log('get user plant info');
  await UserPlants.findAll({
    plantNickname: req.body.plantNickname,
  })
};

// find a user plant by the plant nickname and allow user to update information about the plant
userPlantsController.updateUserPlant = async (req, res, next) => {
  console.log('update user plant info');
  await UserPlants.update({
    plantNickname: req.body.plantNickname,
    dateAcquired: req.body.dateAcquired,
    status: req.body.status,
    plantID: req.body.plantID,
    wateringFrequency: req.body.wateringFrequency,
    fertilizingFrequency: req.body.fertilizingFrequency,
  }, {
    where: {
      plantNickname: req.body.plantNickname,
    }
  })
};

module.exports = userPlantsController;