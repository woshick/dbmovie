'use strict';

// Declare app level module which depends on views, and components
// angular.module('moviecat', [
//   'ngRoute',
//   'moviecat.in_theaters',
//   'moviecat.coming_soon',
//   'moviecat.top250'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
// }]);
// ==============================================================
angular.module('moviecat', [
  'ngRoute',
  'moviecat.movie_detail',
  'moviecat.movie_list',
  'moviecat.directives.auto_focus',
  'moviecat.directives.search'
])
.constant('appConfig', {
	pageSize:10,
	listApiAddress:"https://api.douban.com/v2/movie/",
	detailApiAddress:"https://api.douban.com/v2/movie/subject/"
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])

// .controller('navCtrl', [
// 	'$scope',
// 	'$location',
// 	'$routeParams',
// 	function ($scope,$location,$routeParams) {
// 		// $scope.type = $routeParams.category;//拿不到$routeParams.category，因在不同模块，侧边栏在公共模块里
// 		// console.log($location.path());// /in_theaters/1
// 		$scope.$location = $location;
// 		$scope.$watch('$location.path()',function (now) {
// 			// var path = $location.path();
// 			// if (path.startsWith('/in_theaters')) {
// 			// 	$scope.type = 'in_theaters';
// 			// } else if(path.startsWith('/coming_soon')){
// 			// 	$scope.type = 'coming_soon';
// 			// }else if(path.startsWith('/top250')){
// 			// 	$scope.type = 'top250';
// 			// }
// 			if (now.startsWith('/in_theaters')) {
// 				$scope.type = 'in_theaters';
// 			} else if(now.startsWith('/coming_soon')){
// 				$scope.type = 'coming_soon';
// 			}else if(now.startsWith('/top250')){
// 				$scope.type = 'top250';
// 			}
// 			console.log($location.path());
// 		})
// }]);
// ========================================================
// .controller('searchCtrl', [
// 	'$scope', 
// 	'$route', 
// 	'$window', 
// 	function ($scope,$route,$window) {
// 	$scope.input = '';
// 	$scope.search = function () {
// 		// console.log($scope.input);
// 		$route.updateParams({q:$scope.input,category:'search',page:1});
// 		// $route.reload();
// 		// $window.location.reload();
// 	}
// 	console.log('seach控制器执行');
// }])
