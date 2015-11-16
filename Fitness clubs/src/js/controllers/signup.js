'use strict';

// signup controller
angular.module('app')
  .controller('SignupFormController', ['$scope', '$http', '$state',
      function($scope, $http, $state) {
        $scope.user = {};
        $scope.authError = null;
        $scope.signUp = function() {
          $scope.authError = null;
          $.ajax({
              method: "POST",
              url: 'http://192.168.0.137:3000/reg',
              data: {
                name: $scope.user.name,
                email: $scope.user.email,
                password: $scope.user.password
              },
              dataType: "text"
            })
            .then(function(response) {
              if (response) {
                //重名？
                if (response == "success") {
                  $state.go('signin');
                }
              } else {
                $state.go('app');
              }
            }, function(x) {
              $scope.authError = 'Server Error';
              // console.log(x);
              if (x) {
                
              }
            });
        }
      }
      ]);