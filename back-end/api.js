'use strict';
// API

module.exports = (app) => {

var PassFailData = require('./models/passfail.js');  // Schema
// var todoList = require('../../mock/todos.json');  // importing mock data

app.get('/', (req, res) => {
  res.render('index');
});

// CREATE
app.post('/api/status', (req, res) => {  // URL of request
  var statusReport = req.body;  // the body of the request will be the data for the todo
  PassFailData.create(passfail, (err, passfail) => {   // Store data in MongoDB
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'passfail': passfail, message: 'PassFail Data Created'});  // send json response with key/value pairs
  });
});

// READ
app.get('/api/status', (req, res) => {
  res.send('These are the pass/fails!');
  // res.send({todos: []});
 //  PassFailData.find({}, (err, passfail) => {  // The model's 'find' method.
 //                // The first parameter of the find method is going to be a JSON object where you pass conditions of the documents you want to find.
 //                  // * An empty object here would return everything
 //                // The second paramenter of the find method is going to be a callback function which takes 2 arguments; a potenial error and the data.
 //    if (err) {
 //      return res.status(500).json({message: err.message});
 //    }
 //   res.json({passfail: passfail});
 // }).sort({"song": 1});
});

// // UPDATE
// app.put('/todos/:id', (req, res) => {  // add an id parameter for the put route; the syntax for adding parameters is colon then parameter name
//   var id = req.params.id;  // get the id key from the req.params object (this is handled by Express)
//   var todo = req.body;  // the data for the todo
//   if (todo && todo._id !== id) { // if there is a todo and its id does not match the requested id
//     return res.status(500).json({err: "IDs don't match!"});
//   }
//   Todo.findByIdAndUpdate(id, todo, {new: true}, (err, todo) => {   // The Mongoose model has a 'findByIdAndUpdate' method
//                         // The first parameter is the id from the route which Mongoose will use for lookup
//                         // The second parameter is the new data being sent to MongoDB
//                         // The third parameter is an options parameter, which is an object with our options. This is telling Mongoose to return the new (updated) data.
//                         // The fourth parameter is the callback function with potential error and the new todo
//     if (err) {
//       return res.status(500).json({err: err.message});
//     }
//     res.json({'todo': todo, message: 'Todo Updated'});  // send json response with key/value pairs
//   });
// });
//
// // DELETE
// app.delete('/todos/:id', function(req, res) {  // add an id parameter for the put route; the syntax for adding parameters is colon then parameter name
//   var id = req.params.id;  // get the id key from the req.params object (this is handled by Express)
//   Todo.findByIdAndRemove(id, function(err, result) {  // The Mongoose model has a 'findByIdAndRemove' method
//                           // The first parameter is the id from the route which Mongoose will use for lookup
//                           // The second parameter is the callback function with potential error
//     if (err) {
//       return res.status(500).json({ err: err.message });
//     }
//     res.json({ message: 'Todo Deleted' });  // send json response with key/value pair
//   });
// });
};
