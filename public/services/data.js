(function() {
'use strict';
// SERVICES/DATA (CONNECT TO API BACK-END)
  const app = angular.module('MNCApp');
  
  app.service('dataService', ['$http', function($http, $q) {

    // CREATE
    this.addData = function(songData) {
      console.log(songData);
      console.log('inside service > addSong');
      return $http.post('/api/status', songData);
    };

    // READ
    this.getSingers = function(callback) {
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

  }]);
})();
