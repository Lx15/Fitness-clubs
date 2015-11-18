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
			$urlRouterProvider.otherwise('/app/mainpage');
			$stateProvider
				.state('app', {
					abstract: true,
					url: "/app",
					templateUrl: "tpl/app.html"

				})
				.state('app.mainpage', {
					url: "/mainpage",
					templateUrl: "tpl/mainpage.html",
					controller: ['$scope', '$rootScope', '$http',
						function($scope, $rootScope, $http) {
							$scope.defaultZone = 'beilin';
							$scope.carousels = [];

							$http.get('api/index.json')
								.success(function(data) {
									$rootScope.index = data;
								});
							$http.get('api/index_footer.json')
								.success(function(data) {
									$scope.mainfooters = data;
								});
							$http.get('api/index_carousel.json')
								.success(function(data) {
									$scope.maincarousels = data;
									$scope.carousels = [];
									for (var j = 0; j < $scope.maincarousels.length; j++) {
										$scope.carousels.push(j);
									}
								});
						}
					]
				})
				.state('app.footer', {
					url: "/footer",
					templateUrl: "tpl/mainfooters.html",
					controller: ['$scope', '$rootScope', '$http',
						function($scope, $rootScope, $http) {
							$scope.defaultZone = 'beilin';
							$scope.carousels = [];

							$http.get('api/index.json')
								.success(function(data) {
									$rootScope.index = data;
								});
							$http.get('api/mainfooters.json')
								.success(function(data) {
									$scope.mainfooters = data;
								})

						}
					]
				})
				.state('app.zone', {
					abstract: true,
					url: "/zone",
					template: '<div ui-view></div>'
				})
				.state('app.zone.detail', {
					url: '/:fitness',
					templateUrl: "",
					controller: function() {

					}
				})
				.state('app.zone.page', {
					url: "/:zoneID/:pageID",
					templateUrl: "tpl/page.html",
					controller: ['$scope', '$rootScope', '$state', '$stateParams', '$http',
						function($scope, $rootScope, $state, $stateParams, $http) {

							var zoneID = $stateParams.zoneID;
							var pageID = $stateParams.pageID;

							$scope.activeZone = zoneID;
							$scope.activePage = +pageID;

							if ($scope.activePage < 0)
								return;

							if (!$rootScope.index) {
								$http.get('api/index.json')
									.success(function(data) {
										$scope.index = data;
									});
							}
							$http.get('api/' + zoneID + '_' + pageID + '.json')
								.success(function(data) {
									$scope.data = data;
									$scope.pages = [];
									for (var i = 0; i < data.pageNum; i++) {
										$scope.pages.push(i);
									}

								});
						}
					]

				})
				.state('signin', {
					url: "/signin",
					templateUrl: "tpl/signin.html"
				})
				.state('signup', {
					url: "/signup",
					templateUrl: "tpl/signup.html"
				})
				.state('app.profile', {
					url: "/profile",
					templateUrl: "tpl/profile.html"
				})

		}
	]
)
angular.module('app')
	.controller('SearchCtrl', ['$scope', 'rootScope', '$state',
		function($scope, $rootScope, $state) {
			$scope.search = function(keywd) {
				$state.go('app.zone.page({zoneID:keywd,pageID:0})');
			}
		}
	]);