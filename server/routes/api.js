const express = require('express');

const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');
const userPlantsController = require('../controllers/userPlantsController');

const router = express.Router();

console.log('api router');

router.post('/', (req, res) => {
  return res.status(200).json('ok');
});

// get user account details
router.get('/user/:id', userController.getUser, (req, res) => {
  // console.log(req.params.id);
  // console.log(res.locals);
  return res.status(200).json(res.locals.user);
});

// update user account
router.patch('/user/:id', (req, res) => {});

router.post('/user', userController.createUser, (req, res) => {
  console.log('posting');
  return res.status(200).json('ok');
});

router.post('/auth', userController.verifyUser, (req, res) => {
  return res.status(200).json('ok');
});

// user plant routes
// get all user plants
router.get('/userplants', userPlantsController.getUserPlants, (req, res) => {
  return res.status(200).json(res.locals.userPlants)
});

// get specific user plants
router.get('/userplants/:id', userPlantsController.getUserPlant, (req, res) => {
  return res.status(200).json(res.locals.userPlant)
})

// update user plant
router.patch('userplants/:id', userPlantsController.updateUserPlant, (req, res) => {
  
});

// // create user plant
router.post('userplants/', userPlantsController.createUserPlant, (req, res) => {
  return res.status(200).json('ok');
});

module.exports = router;


// // find all user plants
// userPlantsController.getUserPlants = async (req, res, next) => {
// // find a user plant by the plant nickname when user clicks on plant info
// userPlantsController.getUserPlant = async (req, res, next) => {
// // create a user plant (on front end, user will click "add" will populate a form)
// userPlantsController.createUserPlant = async (req, res, next) => {
// // find a user plant by the plant nickname and allow user to update information about the plant
// userPlantsController.updateUserPlant = async (req, res, next) => {
