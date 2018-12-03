const env = process.env.NODE_ENV;
const dev = require('./config.dev');
const prod = require('./config.prod');

if (env === 'prod') module.exports = prod;
else module.exports = dev;
