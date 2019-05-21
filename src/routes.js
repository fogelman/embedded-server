const express = require('express');
const routes = express.Router();
const controllers = require('./app/controllers');

// routes.get('/', controllers.LogController.show);
routes.get('/', controllers.LogController.store);

module.exports = routes;
