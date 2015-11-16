'use strict';

/* Controllers */
// signin controller
angular.module('app')
  .controller('SigninFormController', ['$rootScope','$scope', '$http', '$state', 
  function($rootScope,$scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
 
    $scope.login=function(){
      $rootScope.isDefault=false;
      $rootScope.isLogin=true;
      $state.go('app.mainpage');
    }
    // $scope.login = function() {
    //   $scope.authError = null;
    //   // Try to login
    //   $.ajax({
    //       method: "POST",
    //       url: 'http://192.168.0.137:3000/reg',
    //       data: {
    //         name: $scope.user.name,
    //         password: $scope.user.password
    //       }
    //       dataType: 'text'
    //     })
    //     .then(function(response) {
    //       if (response == "success") {

    //         $state.go("app")

    //       }
    //     }, function(error) {
    //       console.log(error);
    //     });
    // };
  }]);