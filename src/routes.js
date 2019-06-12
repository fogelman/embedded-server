const express = require('express');
const routes = express.Router();
const controllers = require('./app/controllers');

routes.get('/log', controllers.LogController.show);
routes.get('/', controllers.LogController.store);
routes.delete('/log', controllers.LogController.delete);

module.exports = routes;
