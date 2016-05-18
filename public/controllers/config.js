(function() {
'use strict';
const app = angular.module('MNCApp', ['ngRoute']);
app.config(['$routeProvider',
 function($routeProvider) {
   $routeProvider
   .when('/list', {  // when URL ends with this
     templateUrl: 'views/songList.html',
     controller: 'loadCtrl'
   })
   .when('/form', {  // when URL ends with this
     templateUrl: 'views/songForm.html',
     controller: 'formCtrl'
   })
    .when('/songs/details/:songId', {  // gets matched in controller to href defined in songs-list partial: href="#/songs/{{ song.$id }}
      templateUrl: 'views/songDetails.html',
      controller: 'SongDetailCtrl'
    })
    // .when('/songs/delete', {
    //   templateUrl: 'views/songList.html',
    //   controller: 'songDeleteCtrl'
    // })
    // .when('/songs/filter', {
    //   templateUrl: 'views/songFilter.html',
    //   controller: 'songFilterCtrl'
    // })
   .otherwise('/list'); // catch-all
 }]);
})();
