!function (angular) {
	'use strict';
	// var data = {
	//   "count": 3,
	//   "start": 5,
	//   "total": 23,
	//   "subjects": [
	//     {
	//       "rating": {
	//         "max": 10,
	//         "average": 4.6,
	//         "stars": "25",
	//         "min": 0
	//       },
	//       "genres": [
	//         "喜剧",
	//         "动画",
	//         "家庭"
	//       ],
	//       "title": "新大头儿子和小头爸爸2一日成才",
	//       "casts": [
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1318433/",
	//           "avatars": {
	//             "small": "http://img3.doubanio.com/img/celebrity/small/44177.jpg",
	//             "large": "http://img3.doubanio.com/img/celebrity/large/44177.jpg",
	//             "medium": "http://img3.doubanio.com/img/celebrity/medium/44177.jpg"
	//           },
	//           "name": "刘纯燕",
	//           "id": "1318433"
	//         },
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1318435/",
	//           "avatars": {
	//             "small": "http://img3.douban.com/img/celebrity/small/44180.jpg",
	//             "large": "http://img3.douban.com/img/celebrity/large/44180.jpg",
	//             "medium": "http://img3.douban.com/img/celebrity/medium/44180.jpg"
	//           },
	//           "name": "董浩",
	//           "id": "1318435"
	//         },
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1274251/",
	//           "avatars": {
	//             "small": "http://img3.douban.com/img/celebrity/small/1378013814.61.jpg",
	//             "large": "http://img3.douban.com/img/celebrity/large/1378013814.61.jpg",
	//             "medium": "http://img3.douban.com/img/celebrity/medium/1378013814.61.jpg"
	//           },
	//           "name": "鞠萍",
	//           "id": "1274251"
	//         }
	//       ],
	//       "collect_count": 714,
	//       "original_title": "新大头儿子和小头爸爸2一日成才",
	//       "subtype": "movie",
	//       "directors": [
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1342907/",
	//           "avatars": {
	//             "small": "http://img3.doubanio.com/img/celebrity/small/1469705072.9.jpg",
	//             "large": "http://img3.doubanio.com/img/celebrity/large/1469705072.9.jpg",
	//             "medium": "http://img3.doubanio.com/img/celebrity/medium/1469705072.9.jpg"
	//           },
	//           "name": "何澄",
	//           "id": "1342907"
	//         },
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1360972/",
	//           "avatars": {
	//             "small": "http://img3.doubanio.com/img/celebrity/small/1471113885.8.jpg",
	//             "large": "http://img3.doubanio.com/img/celebrity/large/1471113885.8.jpg",
	//             "medium": "http://img3.doubanio.com/img/celebrity/medium/1471113885.8.jpg"
	//           },
	//           "name": "张振益",
	//           "id": "1360972"
	//         }
	//       ],
	//       "year": "2016",
	//       "images": {
	//         "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2369678279.jpg",
	//         "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2369678279.jpg",
	//         "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2369678279.jpg"
	//       },
	//       "alt": "https://movie.douban.com/subject/26839582/",
	//       "id": "26839582"
	//     },
	//     {
	//       "rating": {
	//         "max": 10,
	//         "average": 5.5,
	//         "stars": "30",
	//         "min": 0
	//       },
	//       "genres": [
	//         "爱情"
	//       ],
	//       "title": "微微一笑很倾城",
	//       "casts": [
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1274628/",
	//           "avatars": {
	//             "small": "http://img3.doubanio.com/img/celebrity/small/32917.jpg",
	//             "large": "http://img3.doubanio.com/img/celebrity/large/32917.jpg",
	//             "medium": "http://img3.doubanio.com/img/celebrity/medium/32917.jpg"
	//           },
	//           "name": "井柏然",
	//           "id": "1274628"
	//         },
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1033011/",
	//           "avatars": {
	//             "small": "http://img3.douban.com/img/celebrity/small/50831.jpg",
	//             "large": "http://img3.douban.com/img/celebrity/large/50831.jpg",
	//             "medium": "http://img3.douban.com/img/celebrity/medium/50831.jpg"
	//           },
	//           "name": "杨颖",
	//           "id": "1033011"
	//         },
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1274844/",
	//           "avatars": {
	//             "small": "http://img3.douban.com/img/celebrity/small/1410538653.45.jpg",
	//             "large": "http://img3.douban.com/img/celebrity/large/1410538653.45.jpg",
	//             "medium": "http://img3.douban.com/img/celebrity/medium/1410538653.45.jpg"
	//           },
	//           "name": "李沁",
	//           "id": "1274844"
	//         }
	//       ],
	//       "collect_count": 26734,
	//       "original_title": "微微一笑很倾城",
	//       "subtype": "movie",
	//       "directors": [
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1314029/",
	//           "avatars": {
	//             "small": "http://img3.doubanio.com/img/celebrity/small/21346.jpg",
	//             "large": "http://img3.doubanio.com/img/celebrity/large/21346.jpg",
	//             "medium": "http://img3.doubanio.com/img/celebrity/medium/21346.jpg"
	//           },
	//           "name": "赵天宇",
	//           "id": "1314029"
	//         }
	//       ],
	//       "year": "2016",
	//       "images": {
	//         "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2358355793.jpg",
	//         "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2358355793.jpg",
	//         "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2358355793.jpg"
	//       },
	//       "alt": "https://movie.douban.com/subject/26301582/",
	//       "id": "26301582"
	//     },
	//     {
	//       "rating": {
	//         "max": 10,
	//         "average": 7.3,
	//         "stars": "40",
	//         "min": 0
	//       },
	//       "genres": [
	//         "爱情",
	//         "奇幻",
	//         "冒险"
	//       ],
	//       "title": "他是龙",
	//       "casts": [
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1354523/",
	//           "avatars": {
	//             "small": "http://img3.doubanio.com/img/celebrity/small/1455455883.06.jpg",
	//             "large": "http://img3.doubanio.com/img/celebrity/large/1455455883.06.jpg",
	//             "medium": "http://img3.doubanio.com/img/celebrity/medium/1455455883.06.jpg"
	//           },
	//           "name": "马特维·雷科夫",
	//           "id": "1354523"
	//         },
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1354522/",
	//           "avatars": {
	//             "small": "http://img3.douban.com/img/celebrity/small/1455447768.33.jpg",
	//             "large": "http://img3.douban.com/img/celebrity/large/1455447768.33.jpg",
	//             "medium": "http://img3.douban.com/img/celebrity/medium/1455447768.33.jpg"
	//           },
	//           "name": "玛利亚·波兹哈娃",
	//           "id": "1354522"
	//         },
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1125402/",
	//           "avatars": {
	//             "small": "http://img3.douban.com/img/celebrity/small/1407830696.55.jpg",
	//             "large": "http://img3.douban.com/img/celebrity/large/1407830696.55.jpg",
	//             "medium": "http://img3.douban.com/img/celebrity/medium/1407830696.55.jpg"
	//           },
	//           "name": "斯坦尼斯拉夫·柳布申",
	//           "id": "1125402"
	//         }
	//       ],
	//       "collect_count": 74846,
	//       "original_title": "Он - дракон",
	//       "subtype": "movie",
	//       "directors": [
	//         {
	//           "alt": "https://movie.douban.com/celebrity/1354526/",
	//           "avatars": {
	//             "small": "http://img3.douban.com/img/celebrity/small/1455815478.63.jpg",
	//             "large": "http://img3.douban.com/img/celebrity/large/1455815478.63.jpg",
	//             "medium": "http://img3.douban.com/img/celebrity/medium/1455815478.63.jpg"
	//           },
	//           "name": "因达尔·詹杜巴耶夫",
	//           "id": "1354526"
	//         }
	//       ],
	//       "year": "2015",
	//       "images": {
	//         "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2374045871.jpg",
	//         "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2374045871.jpg",
	//         "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2374045871.jpg"
	//       },
	//       "alt": "https://movie.douban.com/subject/26726098/",
	//       "id": "26726098"
	//     }
	//   ],
	//   "title": "正在上映的电影-北京"
	// };
	var module = angular.module('moviecat.movie_list', ['ngRoute','moviecat.services.http']);

	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/:category/:page', {
	    templateUrl: 'movie_list/view.html',
	    controller: 'movieListController'
	  });
	}]);
	// ==================================================================
	// // 本地ajax同源模拟
	// module.controller('InTheatersController', [
	// 	'$scope',
	// 	'$http',
	// 	function($scope,$http) {
	// 		// var $scope.subject = data;// Failed to instantiate module moviecat
	// 		// $scope.subject = data;
	// 		// $http.get('/app/data1.json')//模拟错误请求
	// 		$http.get('/app/data.json')
	// 		// $http.get('data.json')
	// 		.then(function (res) {
	// 			if (res.status==200) {
	// 				$scope.subject = res.data;
	// 			} else {
	// 				$scope.message = '获取数据错误'+res.statusText;
	// 			}
	// 			console.log(arguments);
	// 		},function (err) {
	// 			$scope.message = '获取数据错误'+err.statusText;
	// 		})
	// }]);
	// ===================================================================
	// 跨域实战,在angular中通过jsonp跨域，就必须对当前地址加callback = JSON_CALLBACK
	// 豆瓣不支持打点调用，故这段代码没用
	// module.controller('InTheatersController', [
	// '$scope',
	// '$http',
	// function($scope,$http) {
	// 	var doubanApiAdress = "http://api.douban.com/v2/movie/in_theaters";
	// 	$http.jsonp(doubanApiAdress+"?callback = JSON_CALLBACK")
	// 	.then(function (res) {
	// 		// if (res.status==200) {
	// 		// 	$scope.subject = res.data;
	// 		// } else {
	// 		// 	$scope.message = '获取数据错误'+res.statusText;
	// 		// }
	// 		console.log(arguments);
	// 	},function (err) {
	// 		$scope.message = '获取数据错误'+err.statusText;
	// 	})
	// }]);
	// =======================================================================
	module.controller('movieListController', [
	'$scope',
	'HttpService',
	'$routeParams',
	'$route',
	'$window',
	'appConfig',
	function($scope,HttpService,$routeParams,$route,$window,appConfig) {
		console.log(appConfig);
		// console.log(111,$routeParams.page);
		$scope.page = +$routeParams.page;
		var count = appConfig.pageSize;
		var start = ($scope.page-1)*count;
		var doubanApiAdress = appConfig.listApiAddress+$routeParams.category;
		$scope.loaded = false;
		$scope.title = 'Loading';
		// $scope.message = 'hehe';//用假数据调试发现，在jsonp回调函数外的message绑定没问题，但回调中的语句确实执行了，说明数据同步失败
		// $routeParams数据来源：路由匹配、？后面的参数
		HttpService.jsonp(doubanApiAdress,{start:start,count:count,q:$routeParams.q},function(res){
			$scope.subject = res;
			$scope.totalCount = res.total;
			$scope.totalPage = Math.ceil(res.total/count);
			$scope.title = res.title;
			// $scope.message = 'hehe';
			$scope.loaded = true;
			$scope.$apply();
			// $scope.$digest();
		})
		$scope.go = function (page) {
			// console.log(page);
			if (page>=1&&page<=$scope.totalPage) 
				$route.updateParams({page:page});
		}
		// $window.location.reload();//死循环
		console.log("movie_list路由模块执行");
		// var doubanApiAdress = "http://api.douban.com/v2/movie/in_theaters";
		// $http.jsonp(doubanApiAdress+"?callback = JSON_CALLBACK")
		// .then(function (res) {
		// 	// if (res.status==200) {
		// 	// 	$scope.subject = res.data;
		// 	// } else {
		// 	// 	$scope.message = '获取数据错误'+res.statusText;
		// 	// }
		// 	console.log(arguments);
		// },function (err) {
		// 	$scope.message = '获取数据错误'+err.statusText;
		// })
	}]);
}(angular)
