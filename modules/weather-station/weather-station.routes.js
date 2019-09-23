const express = require('express');
const controller = require('./weather-station.controller');
const api = express.Router();
const middlewares = require('../../middlewares');
api.get('/', /*middlewares.weaherStation*/ controller.get);
api.get('/last-date', /*middlewares.weaherStation*/ controller.getLastDate);
api.get('/by-date-range', controller.getByDateRange);
api.post('/', /*middlewares.weaherStation*/ controller.create);
module.exports = api;
