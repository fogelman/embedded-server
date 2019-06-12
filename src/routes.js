const express = require('express');
const routes = express.Router();
const controllers = require('./app/controllers');

routes.get('/log', controllers.LogController.show);
routes.post('/', controllers.LogController.store);
routes.delete('/log', controllers.LogController.delete);

module.exports = routes;
