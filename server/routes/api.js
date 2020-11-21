const express = require('express');

const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', (req, res) => {
  return res.status(200).json('ok');
});

// get user account details
router.get('/user/:id', (req, res) => {
  console.log(req.params.id);
  return res.status(200).json('ok');
});

// update user account
router.patch('/user/:id', (req, res) => {});

router.post('/newuser', userController.createUser, (req, res) => {
  return res.status(200).json('ok');
});

module.exports = router;
