var http = require('http');
http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type' : 'text/html'});
	var jsonstr = '{"a":["¹ÉÆ±Êý¾Ý"]}';
	response.write(jsonstr);
	response.end();
}).listen(8888);