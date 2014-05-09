'use strict';

angular
  .module('fpasUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute', 
    'restangular', 
    'ui.bootstrap'
  ])
  .config(function($routeProvider, $locationProvider) {

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
      .when(BASE_URL + '/administration', {
        templateUrl: BASE_URL + 'administration/views/administration.html',
        controller: 'AdministrationCtrl'
      })
      .otherwise({
        redirectTo: BASE_URL + '/'
      });
  });

angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
  .controller('CarouselController', ['$scope', '$timeout', '$transition', '$q',
    function($scope, $timeout, $transition, $q) {}
  ]).directive('carousel', [
    function() {
      return {

      }
    }
  ]);