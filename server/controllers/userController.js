const User = require('../models/user');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
  console.log('creating user');
  if (!userInfo.email || !userInfo.password) {
    return next({ message: 'Email or password must be provided.' });
  }
  // hash the password
  bcrypt.hash(userInfo.password, 10, (err, hash) => {
    if (err) {
      return next({ message: 'Error hashing', error: err });
    }
    // create the user
    User.create({
      email: userInfo.email,
      password: hash,
    })
      .then((user) => {
        console.log(user);
        console.log('user created');
        res.locals.ssid = user.id.toString();
        return next();
        // return usr.id;
      })
      .catch((err) => {
        return next({ message: 'Error creating the user.', error: err });
      });
  });
};

userController.verifyUser = async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return next({ message: 'Email is not provided to verifyUser' });
  }
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (user === null) {
    return next({ message: 'User not found.' });
  }
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (err) {
      return next({ message: 'bcrypt compare failed.', error: err });
    }
    if (result) {
      res.locals.ssid = user.id.toString();
      return next();
    } else {
      return res.redirect(301, '/login');
    }
  });
};

userController.getUser = async (req, res, next) => {};

module.exports = userController;
