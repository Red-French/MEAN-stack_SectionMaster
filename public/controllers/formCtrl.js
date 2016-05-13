const app = angular.module('MNCApp');
app.controller("formCtrl", ["$scope",
  function($scope) {

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
