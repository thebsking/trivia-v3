const router = require('express').Router();
const locRoutes = require('./locationRoutes');
const questionRoutes = require('./questionRoutes');
const passRoutes = require('./passwordRoutes')

router
.use('/locations', locRoutes)
.use('/questions', questionRoutes)
.use('/code', passRoutes)

module.exports = router;