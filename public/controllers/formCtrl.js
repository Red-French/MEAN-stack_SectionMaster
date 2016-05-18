(function() {
'use strict';

  let title = null;
  let person = null;
  let standing = null;

  const app = angular.module('MNCApp');
  app.controller("formCtrl", ["$scope", "$location", "dataService",
    function($scope, $location, dataService) {

      $scope.addinfo = function () {  // button on 'add info' (songForm.html) page triggers this function
        title = $('#theSong').val();
        person = $('#theSinger').val();
        standing= $('#theStatus').val();

        dataService.addData({song: title, singer: person, status: standing}).then(function(response){
          dataService.getSingers(function(response) {
            let sectionStats = response.data.passfail;  // get 'singers' data from getLeaders 'response'
          });
          $('#addInfoModal').modal('show');
          $('#theSong').val('');
          $('#theSinger').val('');
          $('#theStatus').val('');
        });
      };
    }
  ]);
})();
