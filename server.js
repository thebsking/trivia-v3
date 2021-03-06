require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const app = express();
const PORT = process.env.PORT

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use(routes);

mongoose.connect( process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})