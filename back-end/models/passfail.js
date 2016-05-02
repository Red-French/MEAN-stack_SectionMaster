'use strict';

var mongoose = require('mongoose');

var passFailSchema = new mongoose.Schema({
  song: String,
  singer: String,
  status: Boolean
});

var model = mongoose.model('PassFail', passFailSchema);  // Mongoose will create a model called 'PassFail' using the 'passFailSchema'

module.exports = model;
