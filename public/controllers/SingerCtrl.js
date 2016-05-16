(function() {
'use strict';

  const app = angular.module('MNCApp');

  // remove duplicates from ng-repeat list
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

  app.controller('SingerCtrl', ['$scope', '$http', '$location', 'dataService',
  function($scope, $http, $location, dataService) {
    $scope.dataService = dataService;

    // INITIAL LOAD OF SONGS
    dataService.getSingers(function(response){  // 'response' from getLeaders function in services/data.js
      var sectionStats = response.data.passfail;  // get 'singers' data from getLeaders 'response'
      $scope.sectionStats =  sectionStats;  // put data on $scope for ng-repeat in DOM
    });

    // button on 'add info' page triggers this function
    $scope.changeview = function () {
        $location.path('/data/submit');  // change url to trigger controller change (formCtrl)
    };
  }]);

})();
