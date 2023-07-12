const express = require('express');
const route = express.Router()

const services = require('../services/render');

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

module.exports = route