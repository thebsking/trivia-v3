const router = require('express').Router();
const controller = require('../../db/locationController');

router
  .route('/')
  .get(controller.getLocations)
  .post(controller.addLocation);
  
router
  .route('/:id')
  .put(controller.updateLocation)
  .delete(controller.deleteLocation)

module.exports = router;