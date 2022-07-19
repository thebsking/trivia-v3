const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: String,
  weekday: String,
  start: String,
  image: String
});

const Location = mongoose.model('Locations', locationSchema);

module.exports = Location;