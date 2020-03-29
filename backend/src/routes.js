const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngControllers');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;