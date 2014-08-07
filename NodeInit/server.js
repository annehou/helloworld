var http = require("http");
var url = require("url");

/*������������� createServer() �ĵ�һ��Ҳ��Ψһһ������
���Ǵ����˷������������򴴽����ķ���������һ��������
���ۺ�ʱ���ǵķ������յ�һ��������������ͻᱻ���á�
����Ǵ�˵�еġ��ص��������Ǹ�ĳ������������һ���������������������Ӧ�¼�����ʱ
����������������С��ص�����
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
��������������ģ�顣
�ѷ������������ܡ����������������ģ��ĽŲ���
*/ 
module.exports.start = start;