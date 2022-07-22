const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passwordSchema = new Schema ({
  code: String
})

const Password = mongoose.model('Passwords', passwordSchema);

module.exports = Password;