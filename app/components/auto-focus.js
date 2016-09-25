(function (angular) {
	angular.module('moviecat.directives.auto_focus', [])
	.directive('autoFocus', ['$location',function ($location) {//指令名需同属性名对应，驼峰写法
		// var path = $location.path(); // /coming_soon/1
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {
				// var tpl = iElement.children().attr('href'); // #/in_theaters/1
				// var str = tpl.replace(/#(\/.+)\/\d+/,'$1'); // /in_theaters
				// if(path.startsWith(str)){
				// 	iElement.addClass('active');
				// }
				// if (!path && str.indexOf('in_theaters')!=-1) {
				// 	iElement.addClass('active');
				// }
				// iElement.on('click',function () {
				// 	iElement.parent().children().removeClass('active');
				// 	iElement.addClass('active');
				// });
				// console.log(path);
				// console.log("自定义指令执行");//在路由模块之前执行,和html中的顺序无关
				// =======================================================================
				//刚进入页面时，马上跳转触发watch，然后触发路由（即watch事件在路由页面渲染之前进行）
				scope.$location = $location;
				scope.$watch('$location.path()',function () { 
					var path = $location.path();  // /coming_soon/1
					var tpl = iElement.children().attr('href'); // #/in_theaters/1
					var str = tpl.replace(/#(\/.+)\/\d+/,'$1'); // /in_theaters
						// iElement.parent().children().removeClass('active');
					if(path.startsWith(str)){
						iElement.parent().children().removeClass('active');
						iElement.addClass('active');
					}
					console.log(str,"自定义指令执行");//在路由模块之前执行,和html中的顺序无关
				});
			}
		};
	}])
})(angular)