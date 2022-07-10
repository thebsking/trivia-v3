const db = require('../models');

module.exports = {
  getLocations: function(req, res){
    db.Location.find()
    .then(loc => res.json(loc))
    .catch(err => res.status(400).json(err))
  },
  addLocation: function(req, res){
    db.Location.create({
      "name": req.body.name,
      "weekday": req.body.weekday,
      "start": req.body.start,
      "image": req.body.image
    })
    .then(loc => res.json(loc))
    .catch(err => res.status(400).json(err))
  }
}