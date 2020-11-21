// const Session = require('../models/session');

// const sessionController = {};

// sessionController.startSession = async (req, res, next) => {
//   if (res.locals.ssid) {
//     const session = await Session.create({
//       cookieId: res.locals.ssid,
//     });
//     if (!session) {
//       next({ message: 'Error creating session' });
//     }
//     next();
//   } else {
//     // if ssid was not provided on res.locals
//     return next();
//   }
// };
