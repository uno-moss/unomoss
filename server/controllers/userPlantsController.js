const { default: Plant } = require('../../client/components/Plant/Plant');
const UserPlants = require('../models/userPlants');

const userPlantsController = {};

// create a user plant (on front end, user will click "add" will populate a form)
userPlantsController.createUserPlant = async (req, res, next) => {
  console.log('creating user plant');

  const createUserPlants = await UserPlants.create({
    plantNickname: req.body.plantNickname,
    dateAcquired: req.body.dateAcquired,
    status: req.body.status,
    plantID: req.body.plantID,
    wateringFrequency: req.body.wateringFrequency,
    fertilizingFrequency: req.body.fertilizingFrequency,
    userId: req.body.userId,
  })
  if (!createUserPlants) {
    return next({ message: 'Unable to create user plant.' });
  }
  return next();
  // try {
  //   const plantInfo = await userPlants.create(req.body);
  //   return res.status(200).json({
  //     plantInfo,
  //   });
  // } catch (error) {
  //   return res.status(500).json({error: error.message})
  // }
};

// find all user plants
userPlantsController.getUserPlants = async (req, res, next) => {
  console.log('get user plant info');
  const findAllPlants = await UserPlants.findAll({
    where: {userId: req.body.userId}
  })
  if (findAllPlants.length === 0) {
    return next({ message: 'No plants found' });
  }
  res.locals.userPlants = findAllPlants;
  return next();
};

// find a user plant by the plant nickname when user clicks on plant info
userPlantsController.getUserPlant = async (req, res, next) => {
  console.log('get user plant info');
  await UserPlants.findAll({
    plantNickname: req.body.plantNickname,
  })
  return next();
};

// find a user plant by the plant nickname and allow user to update information about the plant
userPlantsController.updateUserPlant = async (req, res, next) => {
  console.log('update user plant info');
  const updateUserPlants = await UserPlants.update({
    plantNickname: req.body.plantNickname,
    dateAcquired: req.body.dateAcquired,
    status: req.body.status,
    plantID: req.body.plantID,
    wateringFrequency: req.body.wateringFrequency,
    fertilizingFrequency: req.body.fertilizingFrequency,
  }, {
    where: {
      id: req.body.id,
    }
  })
  if (updateUserPlants[0] === 0) {
    return next({ message: 'Nothing was updated.'})
  }
  next();
};

module.exports = userPlantsController;