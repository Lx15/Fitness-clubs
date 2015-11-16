'use strict';
angular.module('app')
	.controller('AppCtrl', ['$rootScope','$scope', '$window',
		function($rootScope,$scope, $window) {
			//config
			$rootScope.isDefault=false;
            $rootScope.isLogin=true;
            // $scope.zones=["碑林区","雁塔区","高新区","新城区","莲湖区"];
			$scope.app = {
				name:"西安健身资讯网"
			}
			$scope.backUp=function(){
				$rootScope.isDefault=true;
      			$rootScope.isLogin=false;
			}
		}
	]);
