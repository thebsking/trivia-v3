const router = require('express').Router();
const locRoutes = require('./locationRoutes');
const questionRoutes = require('./questionRoutes');

router
.use('/locations', locRoutes)
.use('/questions', questionRoutes)

module.exports = router;