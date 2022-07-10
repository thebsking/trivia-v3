const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  category: {type: String},
  question: {type: String},
  answer: {type: String},
  range: {type: Boolean},
  last_used: {type: String},
  notes: {type: String}
})

const Question = mongoose.model('Questions', questionSchema);

module.exports = Question;