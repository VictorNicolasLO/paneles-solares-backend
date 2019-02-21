const config = require('../config');

function arduino(req, res, next) {
  const key = req.query.key;
  if (config.secret === key) {
    next();
  } else {
    res.status(500).json({ message: 'Authentication failed' });
  }
}

function weaherStation(req, res, next) {
  const key = req.headers.token;
  const token = key.split(' ')[1];
  if (token == config.weatherStationToken) {
    next();
  } else {
    res.status(500).json({ message: 'Authentication failed' });
  }
}

module.exports = {
  arduino,
  weaherStation
};
