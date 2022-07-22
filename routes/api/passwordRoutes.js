const router = require('express').Router();
const controller = require('../../db/passwordController');

router
  .route('/')
  .get(controller.getPassword)

module.exports = router;