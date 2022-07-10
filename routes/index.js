const path = require('path');
const apis = require('./api');
const router = require('express').Router();

router.use('/api', apis);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;