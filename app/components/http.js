!function (angular) {
	'use strict';
	var http = angular.module('moviecat.services.http',[])
	// 豆瓣不支持angular的打点jsonp回调函数名，故需自己封装一个
	http.service('HttpService', ['$document','$window',function ($document,$window) {
		// console.log($document);
		// 该服务不用promise，故传个回调
		this.jsonp = function (url,data,callback) {
			// 确定函数名
			var fnSuffix = Math.random().toString().replace('.','');
			var jsonpFnName = 'my_jsonp_cb'+fnSuffix;

			// 追加data对象的及callback queryString
			var queryString = url.indexOf('?')==-1 ? '?':'&';
			for(var key in data ){
				queryString += key + '=' + data[key] + '&';
			}
			queryString += 'callback='+jsonpFnName;
			// url+=queryString;
			// 创建script节点并追加
			var dom = $document[0].createElement('script');
			dom.src = url + queryString;
			// 挂靠jsonp回调函数
			$window[jsonpFnName] = function (res) {
				callback(res);
				$document[0].body.removeChild(dom);
			}
			$document[0].body.appendChild(dom);//添加到dom树后才会发送请求
		}
	}])
}(angular)