/**
 * 执行查询时候的操作
 * @N.
 * 2016.05.26
*/


var http = require('http');

var qs = require('querystring');

// exports.getrequest = function() {




var ServiceLib = require('../model/serviceslib.json');
function main(socket) {

    this.getresult = function getresult(tdata) {
        var temp=[];       
        var data = {};//这是需要提交的数据
        data.arg = tdata;
        var content = qs.stringify(data);

        var options = {
            hostname: 'localhost',
            port: 8080,
            path: '/Servlet/find?' + content,
            method: 'GET',
            headers: {
                'Content-Type': 'charset=UTF-8'
            }
        };
        var req = http.request(options, function (res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                var jsonobj = JSON.parse(chunk);
                //return jsonobj.a;
                if(jsonobj != null) 
                {
                var arraya = jsonobj.a;
                for (var i = 0; i < arraya.length; i++) {
                    var servicename = arraya[i];
                    for(var p in ServiceLib)
                    {
                        var ttttt = {};
                        ttttt = ServiceLib[p];
                        for(var j=0;j< ttttt.length;j++)
                        {
                            if((ttttt[j]).name == servicename)
                            {
                                temp[temp.length] = ttttt[j];
                            }
                        }
                        ttttt={};
                    }
                   // console.log(i + ": " + arraya[i]);
                }
                socket.emit('return_search_result', { data: temp });
                }
            });
        });

        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });

        req.end();

        // var temp1 = { "name": "elophant", "url": "elophant/elophant.json", "info": { "title": "elophant", "author": "admin", "description": "Elophant is a service for League of Legends (LoL), a free online game in which players take on the role of a summoner who can summon champions to fight for them. Elophant provides information on summoners (player stats), champions, and items within the game. Developers can retrieve information from the Elophant database programmatically using REST calls.", "icon": "elophant.png" } };
    //      var temp1 =  [
    //     {
    //         "name": "股票查询",
    //         "url": "apple/股票查询.json",
    //         "info": {
    //             "title": "股票查询",
    //             "author": "admin",
    //             "description": "",
    //             "icon": "股票查询.png"
    //         }
    //     },
    //     {
    //         "name": "股票数据",
    //         "url": "apple/股票数据.json",
    //         "info": {
    //             "title": "股票数据",
    //             "author": "admin",
    //             "description": "",
    //             "icon": "股票数据.png"
    //         }
    //     },
    //     {
    //         "name": "基金数据",
    //         "url": "apple/基金数据.json",
    //         "info": {
    //             "title": "基金数据",
    //             "author": "admin",
    //             "description": "",
    //             "icon": "基金数据.png"
    //         }
    //     },
    //     {
    //         "name": "新三板信息",
    //         "url": "apple/新三板信息.json",
    //         "info": {
    //             "title": "新三板信息",
    //             "author": "admin",
    //             "description": "",
    //             "icon": "新三板信息.png"
    //         }
    //     },
    //     {
    //         "name": "中国股权投资行业数据库",
    //         "url": "apple/中国股权投资行业数据库.json",
    //         "info": {
    //             "title": "中国股权投资行业数据库",
    //             "author": "admin",
    //             "description": "",
    //             "icon": "中国股权投资行业数据库.png"
    //         }
    //     },
    //     {
    //         "name": "重仓股基金",
    //         "url": "apple/重仓股基金.json",
    //         "info": {
    //             "title": "重仓股基金",
    //             "author": "admin",
    //             "description": "",
    //             "icon": "重仓股基金.png"
    //         }
    //     }
    // ];
    //    socket.emit('return_search_result', { data: temp1 });
    }



}

module.exports = main;
