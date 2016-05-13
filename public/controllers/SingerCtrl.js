(function() {
'use strict';

app.controller('SingerCtrl', ['$scope', '$http', 'dataService',
  function($scope, $http, dataService) {
    $scope.$state = $state;
    $scope.dataService = dataService;

// INITIAL LOAD OF SONGS
dataService.getSingers(function(response){  // 'response' from getLeaders function in services/data.js
  var singers = response.data.singer;  // get 'singers' data from getLeaders 'response'
  $scope.singers =  singers;  // put data on $scope for ng-repeat in DOM
});
// var songs;
// $scope.songs = songs;
// $scope.songs = [
//   { song: "Mow the lawn", status: "pass" },
//   { song: "Cut the grass", status: "pass" },
//   { song: "Kill the ants", status: "fail" },
//   { song: "Trim the weeds", status: "pass" }
// ];

}]);
app.controller('SingerCtrl', ['$scope', '$http', 'dataService',
  function($scope, $http, dataService) {

    // var ref = new Firebase("https://crackling-torch-4807.firebaseio.com/songs");
    // $scope.songs = $firebaseArray(ref);  // turn Firebase into Array for Angular
    $scope.newSong = { artist: "", album: "", title: ""};  // create new object to hold user input

    $scope.addSong = function() {
      $scope.songs.$add({  // add user input to Firebase
        artist: $scope.newSong.artist,
        title: $scope.newSong.title,
        album: $scope.newSong.album
      });
      $('#addSongModal').modal('show');
    };
  }
]);
})();
