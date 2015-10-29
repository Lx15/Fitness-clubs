'use strict';

// signup controller
angular.module('app')
  .controller('SignupFormController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
      $scope.user = {};
      $scope.authError = null;
      $scope.signUp = function() {
        $scope.authError = null;
        $.post('http://192.168.0.137:3000/reg', {
            name: $scope.user.name,
            email: $scope.user.email,
            password: $scope.user.password
          })
          .then(function(response) {
            if (response.data) {
              $scope.authError = response;
              console.log(response.data);
            } else {
              $state.go('app');
            }
          }, function(x) {
            $scope.authError = 'Server Error';
            console.log(x);

          });
      };

    }
  ]);