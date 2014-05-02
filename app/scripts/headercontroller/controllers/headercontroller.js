'use strict';

angular.module('fpasUiApp')
  .controller('HeadercontrollerCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  });
