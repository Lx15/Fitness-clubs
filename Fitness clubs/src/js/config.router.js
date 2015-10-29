angular.module('app')
	.run(
		['$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			}
		]
	)
	.config(
		['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise('/app');
				$stateProvider
					.state('app', {
						url: "/app",
						templateUrl: "tpl/app.html"
					})
					.state('signin',{
						url:"/signin",
						templateUrl:"tpl/signin.html"
					})
					.state('signup',{
						url:"/signup",
						templateUrl:"tpl/signup.html"
					})
			}
		]
	)