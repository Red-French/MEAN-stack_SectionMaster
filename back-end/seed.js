var Singer = require('./models/passfail.js');

var singers = [
  'Dorinthia',
  'Denice',
  'Pam',
  'Lynn'
];

// If singers above are not found, create a new record
singers.forEach((singer, index) => {  // for each element in the singers array,
  Singer.find({'singer': singer}, (err, singers) => {  // look for a singer with a name equal to the string
    if (!err && !singers.length) { // if there is no error and that singer doesn't exist
      Singer.create({song: 'Uptown Girls', singer: singer});  // then create that singer with name of song
    }
  });
});
