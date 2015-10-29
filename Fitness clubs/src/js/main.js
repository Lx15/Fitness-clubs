'use strict';
angular.module('app')
	.controller('AppCtrl', ['$scope', '$window',
		function($scope, $window) {
			//config
			$scope.app = {
				name:"西安健身资讯网"
			}
		}
	]);
