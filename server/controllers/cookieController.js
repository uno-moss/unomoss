const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  if (res.locals.ssid) {
    res.cookie('ssid', res.locals.ssid, { httpOnly: true });
    return next();
  } else {
    return next({ message: 'SSID has not been set.' });
  }
};

module.exports = cookieController;
