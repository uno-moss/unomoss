const express = require('express');

const cookieController = require('../controllers/cookieController');
const plantInfoController = require('../controllers/plantInfoController');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');
const userPlantsController = require('../controllers/userPlantsController');

const router = express.Router();

console.log('api router');

router.post('/', (req, res) => {
  return res.status(200).json('ok');
});

// USER ROUTES
// Get user account details
router.get('/user/:id', userController.getUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

// @todo: update user account
router.patch('/user/:id', (req, res) => {});

// Create a new user
router.post(
  '/user',
  userController.createUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    console.log('posting');
    return res.status(200).json('ok');
  }
);

// Verify user
router.post(
  '/auth',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.status(200).json('ok');
  }
);
// *************************************************************

// USER PLANT ROUTES
// get all user plants
router.get('/userplants', userPlantsController.getUserPlants, (req, res) => {
  return res.status(200).json(res.locals.userPlants);
});

// get specific user plants
router.get('/userplants/:id', userPlantsController.getUserPlant, (req, res) => {
  return res.status(200).json(res.locals.userPlant);
});

// update user plant
router.patch(
  'userplants/:id',
  userPlantsController.updateUserPlant,
  (req, res) => {}
);

// // create user plant
router.post('/userplants', userPlantsController.createUserPlant, (req, res) => {
  console.log('posting plant');
  return res.status(200).json('ok');
});

// Plant information routes
// create plant info chart
router.post('/plantInfo', plantInfoController.createPlant, (req, res) => {
  console.log('bringing in plant info');
  return res.status(200).json('ok');
})

module.exports = router;

// // get plant information based on plant it's tied to
// plantInfoController.getPlantInfo = (req, res, next) => {
