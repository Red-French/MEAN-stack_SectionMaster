(function() {
'use strict';
const app = angular.module('MNCApp');
app.controller('SingerCtrl', ['$scope', '$http', 'dataService',
  function($scope, $http, dataService) {
    $scope.dataService = dataService;

// INITIAL LOAD OF SONGS
dataService.getSingers(function(response){  // 'response' from getLeaders function in services/data.js
console.log(response);
  var singers = response.data.singer;  // get 'singers' data from getLeaders 'response'
  $scope.singers =  singers;  // put data on $scope for ng-repeat in DOM
});

$scope.newSong = { song: "", singer: "", status: ""};  // create new object to hold user input

$scope.addSong = function() {
  // $scope.songs.$add({  // add user input to Firebase
  //   song: $scope.newSong.song,
  //   singer: $scope.newSong.singer,
  //   status: $scope.newSong.status
  // });
  $('#addSongModal').modal('show');
};

}]);
// app.controller('SingerCtrl', ['$scope', '$http', 'dataService',
//   function($scope, $http, dataService) {
//
//     $scope.newSong = { artist: "", album: "", title: ""};  // create new object to hold user input
//
//     $scope.addSong = function() {
//       $scope.songs.$add({  // add user input to Firebase
//         artist: $scope.newSong.artist,
//         title: $scope.newSong.title,
//         album: $scope.newSong.album
//       });
//       $('#addSongModal').modal('show');
//     };
//   }
// ]);
})();
