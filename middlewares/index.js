const config = require('../config');

function arduino(req, res, next) {
  const key = req.query.key;
  if (config.secret === key) {
    next();
  } else {
    res.status(500).json({ message: 'Authentication failed' });
  }
}

module.exports = {
  arduino
};
