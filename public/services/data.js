'use strict';
// SERVICES/DATA (CONNECT TO API BACK-END)

app.service('dataService', function($http, $q) {

  // CREATE
  this.addSong = function(songData) {
    console.log('inside service > addSong');
    return http.post('/songs/form').then(cb);
  };

  // READ
  this.getSingers = function(callback) {
    console.log('inside service getSingers');
    return $http.get('/api/status').then(callback);
  };

  // UPDATE
  this.saveSingerData = function(songData) {
    console.log("I saved " + songData.length + " singers!");
    return $http.put('/api/status', songData);
  };

  // DELETE
  this.deleteSingerData = function(songData) {
    console.log("I deleted the singer, " + songData.singer + "!");
    return $http.delete('/api/status', songData);
  };

});
