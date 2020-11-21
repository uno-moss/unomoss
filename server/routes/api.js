const express = require('express');

const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');

const router = express.Router();

console.log('api router');

router.post('/', (req, res) => {
  return res.status(200).json('ok');
});

// get user account details
router.get('/user/:id', userController.getUser, (req, res) => {
  console.log(req.params.id);
  console.log(res.locals);
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

module.exports = router;
