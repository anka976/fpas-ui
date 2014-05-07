'use strict';

angular.module('fpasUiApp')
  .controller('HeadercontrollerCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return (BASE_URL + viewLocation) === $location.path();
    };

    $scope.getAppPathLocation = function (viewLocation) { 

    	if (APP_NAME && APP_NAME.length > 0) {
    		viewLocation = APP_NAME + '/' + viewLocation;
    	}
        return window.location.protocol + '//' + window.location.host + '/' + viewLocation;
    };
  });


