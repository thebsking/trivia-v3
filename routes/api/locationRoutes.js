const router = require('express').Router();
const controller = require('../../db/locationController');

router
.route('/')
.get(controller.getLocations)
.post(controller.addLocation)

module.exports = router;