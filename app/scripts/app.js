'use strict';

angular
  .module('fpasUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute', 'restangular', 'ui.bootstrap'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/logsoverview', {
        templateUrl: 'logsOverview/views/logsoverview.html',
        controller: 'LogsoverviewCtrl'
      })
      .when('/undefined', {
        templateUrl: 'home/views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
