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


		$scope.totalItems = 0;
		$scope.currentPage = 1;
		$scope.numPerPage = 7;
		var begin = ($scope.currentPage - 1) * $scope.numPerPage;
		var end = begin + $scope.numPerPage;

		$scope.setPage = function(pageNo) {
			$scope.currentPage = pageNo;
		};

		$scope.$watch('currentPage + numPerPage', function() {
			if ($scope.logs) {
				begin = ($scope.currentPage - 1) * $scope.numPerPage;
				end = ((begin + $scope.numPerPage) < $scope.totalItems || $scope.totalItems == 0) ? (begin + $scope.numPerPage) : $scope.totalItems;
				$scope.filteredLogs = $scope.logs.slice(begin, end);
			}
		});

		// Restangular.one('fst-gui-web/logsOverview.do').get({'action':'jsonLogs'}).then(function(obj) {
		Restangular.one('sample.json').get().then(function(obj) {
			$scope.logs = obj;
			$scope.totalItems = obj.length;
			$scope.filteredLogs = $scope.logs.slice(begin, end);
		});

	});