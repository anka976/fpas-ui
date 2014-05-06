'use strict';

angular.module('fpasUiApp')
  .controller('LogsoverviewCtrl', function($route, $scope, Restangular) {
		// Restangular.setBaseUrl('http://10.47.248.53:8080/webapp-0.0.1-SNAPSHOT');
		// Restangular.setBaseUrl('http://localhost:18081');


		// var scid = '1', sq = '1';
		// if ($route.current && $route.current.params) {
		// 	if ($route.current.params.cid) {
		// 		scid = $route.current.params.cid;
		// 	}
		// 	if ($route.current.params.sq) {
		// 		sq = $route.current.params.sq;
		// 	}
		// }

		// Restangular.one('fst-gui-web/logsOverview.do').get({'action':'jsonLogs'}).then(function(obj) {
		Restangular.one('sample.json').get().then(function(obj) {
			$scope.logs = obj;
		});

	
	});