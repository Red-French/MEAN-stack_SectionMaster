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

      // dataService.saveLeaders({song: songTitle}).then(function(response){  // saveLeaders function in services/data.js
      //   dataService.getLeaders(function(response){  // 'response' from getLeaders function in services/data.js
      //     var leaders = response.data.leaders;  // get 'leaders' data from getLeaders 'response'
      //     $scope.leaders =  leaders;  // put data on $scope for ng-repeat in DOM
      //   });
      // });


      // $scope.newSong = { song: "", singer: "", status: ""};  // create new object to hold user input
      //
      // $scope.addSong = function() {
      //   $scope.songs.$add({  // add user input to Firebase
      //     song: $scope.newSong.song,
      //     singer: $scope.newSong.singer,
      //     status: $scope.newSong.status
      //   });
      //   $('#addSongModal').modal('show');
      // };
    }
  ]);
})();
