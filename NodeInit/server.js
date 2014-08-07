var http = require("http");
var url = require("url");

/*这个函数定义是 createServer() 的第一个也是唯一一个参数
我们创建了服务器，并且向创建它的方法传递了一个函数。
无论何时我们的服务器收到一个请求，这个函数就会被调用。
这就是传说中的“回调”。我们给某个方法传递了一个函数，这个方法在有相应事件发生时
调用这个函数来进行“回调”。
*/
function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for "+pathname+" received.");
		
		route(handle,pathname,response,request);
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

/*
创建服务器启动模块。
把服务器启动功能“导出”到请求这个模块的脚步。
*/ 
module.exports.start = start;