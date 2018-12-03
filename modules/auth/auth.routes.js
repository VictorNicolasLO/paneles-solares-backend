const express = require('express');
const controller = require('./auth.controller');
const api = express.Router();

api.post('/login', controller.login);
api.post('/signUp', controller.firstSignUp);
api.post('/firstSignUp', controller.firstSignUp);
module.exports = api;
