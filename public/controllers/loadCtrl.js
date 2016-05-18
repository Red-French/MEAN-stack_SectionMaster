(function() {
'use strict';

  const app = angular.module('MNCApp');

  // REMOVE DUPLICATES FROM NG-REPEAT LIST
  app.filter('unique', function() {
     return function(collection, keyname) {
        var output = [],
            keys = [],
            key = null;

        angular.forEach(collection, function(item) {
            key = item[keyname];
            if(keys.indexOf(key) === -1) { // if does not already exist
                keys.push(key);
                output.push(item);
            }
        });
        return output;  // output with no duplicates
     };
  });

  app.controller('loadCtrl', ['$scope', '$http', '$location', 'dataService',
  function($scope, $http, $location, dataService) {
    $scope.dataService = dataService;

    // INITIAL LOAD OF SONGS
    dataService.getSingers(function(response){  // response from getSingers function in services/data.js
      let sectionStats = response.data.passfail;  // store data
      $scope.sectionStats =  sectionStats;  // put data on $scope for ng-repeat in DOM
    });
  }]);
})();
