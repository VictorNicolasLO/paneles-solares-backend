const express = require('express');
const auth = require('./auth/auth.routes');
const solarHeater = require('./solar-heater/solar-heater.routes');
const api = express.Router();

api.use('/auth', auth);
api.use('/solar-heater', solarHeater);

module.exports = api;
