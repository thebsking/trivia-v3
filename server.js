require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.listen(PORT, ()=>{
  console.log(`server running on ${PORT}`)
})