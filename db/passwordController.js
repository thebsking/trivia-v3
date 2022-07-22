const db = require('../models');

module.exports = {
  getPassword: function(req, res){
    db.Password.find()
    .then(code => res.json(code))
    .catch(err => res.status(400).json(err))
  }
}