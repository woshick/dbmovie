(function (angular) {
	angular.module('moviecat.directives.search', ['ngRoute'])
	.directive('search', [
	'$location',
	'$route',
	'appConfig',
	function ($location,$route,appConfig) {//指令名需同属性名对应，驼峰写法,不能注入$scope，因要与controller对应
		return {
			scope:{},
			restrict: 'AE',
			replace:true,
			template:`<form class="navbar-form navbar-right ng-pristine ng-valid"  ng-submit="search()">
        <input type="text" class="form-control" placeholder="Search..." ng-model="input" >
      </form>`,
			link: function (scope, iElement, iAttrs) {

				scope.input = '';
				scope.search = function () {
					// console.log($scope.input);
					console.log(appConfig.listApiAddress);
					$route.updateParams({q:scope.input,category:'search',page:1});
					// $location.path(appConfig.listApiAddress);
					// $route.reload();
					// $window.location.reload();
				}
				console.log('search自定义指令执行');
			}
		};
	}])
})(angular)