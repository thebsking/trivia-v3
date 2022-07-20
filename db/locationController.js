const db = require('../models');

module.exports = {
  getLocations: function (req, res) {
    db.Location.find()
      .then(loc => res.json(loc))
      .catch(err => res.status(400).json(err))
  },
  addLocation: function (req, res) {
    db.Location.create({
      "name": req.body.name,
      "weekday": req.body.weekday,
      "start": req.body.start,
      "image": req.body.image,
      "address": req.body.adress
    })
      .then(loc => res.json(loc))
      .catch(err => res.status(400).json(err))
  },
  updateLocation: function(req, res){
    db.Location.findByIdAndUpdate(req.params.id, {
      $set: {
        "name": req.body.name,
        "weekday": req.body.weekday,
        "start": req.body.start,
        "image": req.body.image,
        "address": req.body.address
      }
    })
    .then(loc => res.json(loc))
    .catch(err => res.status(400).json(err))
  },
  deleteLocation: function (req, res) {
    db.Location.findByIdAndRemove(req.params.id)
      .then(item => res.json(item))
      .catch(err => res.status(400).json(err))
  }
}