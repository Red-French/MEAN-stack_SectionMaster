(function() {
'use strict';

var mongoose = require('mongoose');

var passFailSchema = new mongoose.Schema({
  song: String,
  singer: String,
  status: String
});

var model = mongoose.model('PassFailData', passFailSchema);  // Mongoose will create a model called 'PassFail' using the 'passFailSchema'

module.exports = model;
})();
