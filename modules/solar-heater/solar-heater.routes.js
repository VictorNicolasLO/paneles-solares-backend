const express = require('express');
const controller = require('./solar-heater.controller');
const api = express.Router();
const middlewares = require('../../middlewares');
api.get('/update', middlewares.arduino, controller.update);
api.get('/', controller.get);
module.exports = api;
