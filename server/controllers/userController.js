const db = require('../models/index');
const bcrypt = require('bcrypt');

const userController = {};

// console.log(db);
// console.log(db.User);

userController.createUser = async (req, res, next) => {
  console.log('creating user');
  const { email, password } = req.body;
  if (!email || !password) {
    return next({ message: 'Email or password must be provided.' });
  }
  // hash the password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return next({ message: 'Error hashing', error: err });
    }
    // create the user
    db.User.create({
      email: email,
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
  console.log('verifying user');
  if (!req.body.email || !req.body.password) {
    return next({ message: 'Email is not provided to verifyUser' });
  }
  const user = await db.User.findOne({
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
      console.log(result);
      return next();
    } else {
      return res.redirect(301, '/login');
    }
  });
};

userController.getUser = async (req, res, next) => {
  if (req.params.id) {
    const user = await db.User.findOne({ where: { id: req.params.id } });
    console.log(user);
    if (user) {
      res.locals.user = user;
      next();
    }
  }
};

module.exports = userController;
