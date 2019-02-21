const express = require('express');
const auth = require('./auth/auth.routes');
const solarHeater = require('./solar-heater/solar-heater.routes');
const solarPanel = require('./solar-panel/solar-panel.routes');
const weatherStation = require('./weather-station/weather-station.routes');

const api = express.Router();

api.use('/auth', auth);
api.use('/solar-heater', solarHeater);
api.use('/solar-panel', solarPanel);
api.use('/weather-station', weatherStation);
module.exports = api;
