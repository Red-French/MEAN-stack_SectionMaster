(function() {
'use strict';

const express = require('express');  // node framework
const app = express();  // start express
const path = require('path');  // built in; no install required
const bodyParser = require('body-parser');  // strips header info, supplies body
const mongoose = require('mongoose');  // provides useful methods for mongoDB

const colors = require('colors');

// ~ FOR FUTURE LOGIN CAPABILITY ~
// const cookieParser = require('cookie-parser');  // parse cookies
// const session = require('express-session');  //  // to create a session cookie for session persistance
// ~ ~

require('./back-end/database');  // database.js holds Mongoose connection to MongoDB
require('./back-end/seed');  // require the seed data

const port = process.env.PORT || 3000;  // dynamic port

// MIDDLEWARE
// app.use(cookieParser());  // sets request.cookies variable
// app.use(session({secret: 'sxnmasterMEAN',  // key code for what will be used on cookies
//                  saveUninitialized: true,  // persistent login in case server goes down momentarily - forces a save
//                  resave: true // even if nothing's changed, save again
//                 }));
app.use(express.static('public'));  // for static files (html)
app.use(bodyParser.json());  // use body-parser's json method

app.use('/server', (req, res) => {  // on request, send response
  res.send('Server Running, Red!');
});

app.get('/hello', (req, res) => {
		res.write('<h1>Hello, Red.</h1>');  // vanilla node

		setTimeout (() => {  // timer for when pageload will end
			res.end();		 // otherwise, the load will continue to spin
		}, 2000);
});

require ('./back-end/api.js')(app); // location of api - pass in app

  app.listen(port, () => {
    console.log(colors.green(`Section Master server running on port: ${port}`));
  });
})();
