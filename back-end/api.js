(function() {
'use strict';
// API

module.exports = (app) => {

var PassFailData = require('./models/passfail.js');  // Schema
// var statusList = require('../mock/passfail.json');  // importing mock data

app.get('/', (req, res) => {
  res.render('index');
});

// READ
app.get('/api/status', (req, res) => {
  PassFailData.find({}, (err, passfail) => {  // The model's 'find' method.
    if (err) {
      return res.status(500).json({message: err.message});
    }
    res.json({passfail: passfail});
  }).sort({"song": -1});  // sort in descending order
});

// CREATE
app.post('/api/status', (req, res) => {  // URL of request
  var statusReport = req.body;  // the body of the request will be the new data
  PassFailData.create(statusReport, (err, passfail) => {   // Store data in MongoDB
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'passfail': passfail, message: 'PassFail Data Created'});  // send json response with key/value pairs
  });
});

// // UPDATE
// app.put('/api/status', (req, res) => {  // add an id parameter for the put route; the syntax for adding parameters is colon then parameter name
//   var id = req.params.id;  // get the id key from the req.params object (this is handled by Express)
//   var passFailInfo = req.body;  // the data for the passFailInfo
//   if (passFailInfo && passFailInfo._id !== id) { // if there is a passFailInfo and its id does not match the requested id
//     return res.status(500).json({err: "IDs don't match!"});
//   }
//   PassFailData.findByIdAndUpdate(id, passFailInfo, {new: true}, (err, passFailInfo) => {   // The Mongoose model has a 'findByIdAndUpdate' method
//                         // The first parameter is the id from the route which Mongoose will use for lookup
//                         // The second parameter is the new data being sent to MongoDB
//                         // The third parameter is an options parameter, which is an object with our options. This is telling Mongoose to return the new (updated) data.
//                         // The fourth parameter is the callback function with potential error and the new passFailInfo
//     if (err) {
//       return res.status(500).json({err: err.message});
//     }
//     res.json({'passFailInfo': passFailInfo, message: 'PassFailData Updated'});  // send json response with key/value pairs
//   });
// });

// // DELETE
// app.delete('/todos/:id', function(req, res) {  // add an id parameter for the put route; the syntax for adding parameters is colon then parameter name
//   var id = req.params.id;  // get the id key from the req.params object (this is handled by Express)
//   PassFailData.findByIdAndRemove(id, function(err, result) {  // The Mongoose model has a 'findByIdAndRemove' method
//                           // The first parameter is the id from the route which Mongoose will use for lookup
//                           // The second parameter is the callback function with potential error
//     if (err) {
//       return res.status(500).json({ err: err.message });
//     }
//     res.json({ message: 'PassFailData Deleted' });  // send json response with key/value pair
//   });
// });
};
})();
