const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller')

/**
 * @description Root Route
 * @method GET/
 */
route.get('/', services.homeRoutes)

/**
 * @description add entry
 * @method GET/add_entry
 */
route.get('/add-entry', services.add_entry)

/**
 * @description update entry
 * @method GET/update_entry
 */
route.get('/update-entry', services.update_entry)

// API
route.post('/api/passwords', controller.create);
route.get('/api/passwords', controller.find);
route.put('/api/passwords/:id', controller.update);
route.delete('/api/passwords/:id', controller.delete);

module.exports = route