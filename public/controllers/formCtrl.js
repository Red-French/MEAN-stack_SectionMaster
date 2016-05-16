(function() {
'use strict';

  const app = angular.module('MNCApp');
  app.controller("formCtrl", ["$scope", "$location", "dataService",
    function($scope, $location, dataService) {
      $scope.dataService = dataService;

      var songTitle = 'Black Dog';

      dataService.addData({song: songTitle}).then(function(response){  // saveLeaders function in services/data.js
        console.log('inside formCtrl > addData');
        console.log(response);
        dataService.getSingers(function() {
          var sectionStats = response.data.passfail;  // get 'singers' data from getLeaders 'response'
          $scope.sectionStats =  sectionStats;  // put data on $scope for ng-repeat in DOM
        });
        $('#addInfoModal').modal('show');
      });
    }
  ]);
})();
