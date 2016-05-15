(function() {
'use strict';
const app = angular.module('MNCApp');
app.controller('SingerCtrl', ['$scope', '$http', 'dataService',
  function($scope, $http, dataService) {
    $scope.dataService = dataService;

// INITIAL LOAD OF SONGS
dataService.getSingers(function(response){  // 'response' from getLeaders function in services/data.js
console.log(response);
console.log(response.data);
console.log(response.data.passfail);
  var sectionStats = response.data.passfail;  // get 'singers' data from getLeaders 'response'
  $scope.sectionStats =  sectionStats;  // put data on $scope for ng-repeat in DOM
});


}]);

})();
