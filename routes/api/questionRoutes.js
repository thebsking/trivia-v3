const router = require('express').Router();
const controller = require('../../db/questionController');

router
  .route('/')
  .get(controller.findTen)
  .post(controller.create);

router
  .route('/range')
  .get(controller.rangeOnly)

router
  .route('/allcats')
  .get(controller.categories)

router
  .route('/:id')
  .get(controller.findByCat)

module.exports = router;