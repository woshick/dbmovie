!function (angular) {
	'use strict';
	
	var module = angular.module('moviecat.movie_detail', ['ngRoute','moviecat.services.http']);

	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/detail/:id', {
	    templateUrl: 'movie_detail/view.html',
	    controller: 'movieDetailController'
	  });
	}]);
	
	module.controller('movieDetailController', [
	'$scope',
	'HttpService',
	'$routeParams',
	'$route',
	'$window',
	'appConfig',
	function($scope,HttpService,$routeParams,$route,$window,appConfig) {
		var doubanApiAdress = appConfig.detailApiAddress+$routeParams.id;
		$scope.loaded = false;
		// $scope.message = 'hehe';//用假数据调试发现，在jsonp回调函数外的message绑定没问题，但回调中的语句确实执行了，说明数据同步失败
		// $routeParams数据来源：路由匹配、？后面的参数
		HttpService.jsonp(doubanApiAdress,{},function(res){
			console.log(res);
			$scope.movie = res;
			$scope.loaded = true;
			$scope.$apply();
			// $scope.$digest();
		})
		console.log("detail路由模块执行");

	}]);
}(angular)
