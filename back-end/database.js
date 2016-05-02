'use strict';

const mongoose = require('mongoose');

const colors = require('colors');

// MONGOLAB CONNECTION -
mongoose.connect('mongodb://localhost:27017/sxnmaster', (err) => {  // to connect to MongoDB, use the Mongoose connect method
  if (err) {
    console.log(colors.red.bold('Failed connecting to local mongoDB.'));
  } else {
    console.log(colors.green('Successfully connected to local mongoDB!'));
  }
});
