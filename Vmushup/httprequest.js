
var http = require('http');

var qs = require('querystring');

// exports.getrequest = function() {
var data = {
    "arg": "123",
};//这是需要提交的数据


var content = qs.stringify(data);

var options = {
    hostname: '10.108.95.114',
    port: 8080,
    path: '/Servlet/find?' + content,
    method: 'GET'
};

var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        var jsonobj = JSON.parse(chunk);
        //return jsonobj.a;
        var arraya = jsonobj.a;
        for(var i=0;i<arraya.length;i++)
        {
            console.log(i+": "+arraya[i]);
        }
    });
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req.end();

// }