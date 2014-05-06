'use strict';

angular
  .module('fpasUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute', 'restangular', 'ui.bootstrap'
  ])
  .config(function ($routeProvider,$locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when(BASE_URL + '/', {
        templateUrl: BASE_URL + '/views/main.html',
        controller: 'MainCtrl'
      })
      .when(BASE_URL + '/logsoverview', {
        templateUrl: BASE_URL + '/logsOverview/views/logsoverview.html',
        controller: 'LogsoverviewCtrl'
      })
      .otherwise({
        redirectTo: BASE_URL + '/'
      });
  });
