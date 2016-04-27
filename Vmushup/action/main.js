/**
 * 服务执行引擎
 * Server Execute Engine
 * @N.
 * 2015.11.24
*/

// var log4js = require('log4js');
// log4js.configure({
//     appenders: [
//         { type: 'console' },
//         {
//             type: 'file',
//             filename: './logs/alog.log',
//             maxLogSize: 1024,
//             backups: 4,
//             category: 'normal'
//         }
//     ],
//     replaceConsole: true
// });
// var logger = log4js.getLogger('main.js');
// logger.setLevel('INFO');

function main(socket) {
    console.log("=======================================================================================");
    
    
    var tsocket = null;
    var events = require('events');
    var emitter = new events.EventEmitter();

    emitter.on('Datacome', function(arg1, arg2, arg3) {
        //处理数据到达时的操作
        //包括 修改轮询数组
        //     查找出需要执行的服务 函数 function_re
        // return function_re();
    });

    emitter.on('Datacome', function(report) {
        //处理数据到达时的操作
        //包括 修改轮询数组
        //     查找出需要执行的服务 函数 function_re
        if (report.code == 100) {
            console.log("!--[ERROR] ServerExcutor.js not excute");
        }
        else if (report.code == 200) {
            var ttinfo = "--[info] get information from *" + report.source + "*";
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
            socket.emit('dataco', { hello: ttinfo });
            console.log(ttinfo);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////          
            // console.log("--[info] get information from *" + report.source + "*");
            if (Fill_quene(report) == 1) return emitter.emit('end', "result");
            var node = Quene_polling(Polling_array);

            var ServerExcutor = require("./ServerExcutor.js");
            var serverexcutor = new ServerExcutor();
            //var data = {};//"ip":"114.255.40.57"
            return serverexcutor.excutor(node.name, node.data, node.id, emitter);

        }
        else if (report.code == 404) {
            console.log("!--[ERROR] ServerExcutor.js when requsted http resource ");
            console.log(report.repost);
        }
        //logger.info('something');
        //console.log();

        // return function_re();
    });

    //测试数据返回
    emitter.on('teste', function(a) { console.log("--testing data " + a.code); });

    emitter.on('end', function(a) {
        console.log("--[info] COMMING END........");
    });


    function Quene_polling(Polling_array) {
        //轮询队列
        for (var i = 0; i < Polling_array.length; i++) {
            var tempnode = Polling_array[i];
            if ((tempnode.waiting).length > 0) {
                var twaitingarray = tempnode.waiting;
                var j; j = 0;
                for (j = 0; j < twaitingarray.length; j++) {
                    if ((twaitingarray[j])[0] == (twaitingarray[j])[1])
                        break;

                }
                if (j == twaitingarray.length)
                //返回接受好数据的节点
                {
                    var resultnode = {};
                    resultnode.name = tempnode.name;
                    resultnode.id = tempnode.id;
                    var data = {};
                    for (var k = 0; k < (twaitingarray.length); k++) {
                        var tt = (twaitingarray[k])[0];
                        data[tt] = (twaitingarray[k])[1];
                    }
                    resultnode.data = data;
                    return resultnode;
                }
            }
        }
        console.log("!--[ERROR] ready-nodes not find");
    }

    var mutex;

    function Init(Polling_array) {

        //初始化互斥量
        mutex = 0;
        //初始化轮询数组
        var sejson = require(servername);
        var temp;
        temp = {};
        var nodearray = sejson.nodes;
        var starnode = {}; starnode.id = -1;
        for (var i = 0; i < nodearray.length; i++) {
            var tempnode = nodearray[i];
            temp = {};
            temp.name = tempnode.name;
            temp.id = tempnode.id;
            var aaa;
            aaa = new Array();
            var bbb;

            var link_import_index = tempnode.link_import;
            //if a node's import is null, we can issue the node is star node
            if ((link_import_index).length == 0) {
                starnode.id = tempnode.id;
                starnode.name = tempnode.name;
            }

            for (var j = 0; j < (link_import_index).length; j++) {
                bbb = new Array();
                //bbb[0] : interface_name  
                //bbb[1] : interface_date
                //when init date <- name
                bbb[0] = (link_import_index[j]).target_interface;
                bbb[1] = bbb[0];

                aaa[j] = bbb;
            }

            temp.waiting = aaa;
            Polling_array[i] = temp;
        }
        //返回开始节点
        if (starnode.id == -1) console.log("!--[ERROR] " + "not find star node");
        console.log("--[info] get star node " + starnode.name);
        return starnode;
    }
    function Fill_quene(data) {
        var show = 0;
        if (mutex == 0) {

            mutex++;
            //填写队列
            //..
            show = 0;

            var sejson = require(servername);
            var nodearray = sejson.nodes;
            var tempnode = nodearray[(data.id)];
            var linking_array = tempnode.linking;//当前节点的输出边数组

            if (linking_array.length == 0) {
                console.log("--[info] program end in " + tempnode.name);
                show = 1;
            }
            else {
                var repos_array = data.repost;//当前节点的返回数据

                //for 为每一个返回的数据寻找输入节点
                for (var i = 0; i < repos_array.length; i++) {
                    var portname = (repos_array[i]).name;
                    var j = 0;
                    //遍历输出边数组，查找输入接口的边
                    for (j = 0; j < linking_array.length; j++) {
                        if ((linking_array[j]).source_interface == portname)
                            break;
                    }
                    if (j == linking_array.length)
                        console.log("!--[error] not find port when fill quene");
                    else {
                        //填写接入节点的相应数据数组
                        var t_id = (linking_array[j]).target_id;
                        var t_port = (linking_array[j]).target_interface;
                        if ((Polling_array[t_id]).id != t_id)
                            console.log("!--[error] terrerble something")
                        var temparray = ((Polling_array[t_id]).waiting);
                        for (var k = 0; k < temparray.length; k++) {
                            if ((temparray[k])[0] == t_port)
                                (temparray[k])[1] = (repos_array[i]).value;
                        }
                    }

                }
                //清空本节点的输入数组
                var tttt = (Polling_array[(data.id)]);
                for (var x = 0; x < (tttt.waiting).length; x++) {
                    (((Polling_array[(data.id)]).waiting)[x])[1] = (((Polling_array[(data.id)]).waiting)[x])[0];
                }
            }
            mutex--;
        }
        return show;
    }


    function Single_Server_Excutor(ServerName, ServerData) {
        var Onote = new Array();
        var Oport = new Array();
        var Odata = new Array();

        //////////////////////////////////////////////////////////////////
        var ServerExcutor = require("./ServerExcutor.js");
        var serverexcutor = new ServerExcutor();
        var ddd = {};//"ip":"114.255.40.57"
        serverexcutor.excutor("baiduip", ddd, 2, emitter);
        console.log("do something ");
        ////////////////////////////////////////////////////////////////////

        return emitter.emit('Datacome', Onote, Oport, Odata);
    }



    // var ccc = 1;
    // var sss = 1;
    var Polling_array = new Array();
    var servername = 'initdata';
    this.main = function main() {

        // function main() {

        servername = './analjson.json';
        var starnode = Init(Polling_array);

        var ServerExcutor = require("./ServerExcutor.js");
        var serverexcutor = new ServerExcutor();
        var data = {};//"ip":"114.255.40.57"
        serverexcutor.excutor(starnode.name, data, starnode.id, emitter);
        console.log("--[info] Server start");

    }
    // main();
    //logger.warn(Date.now() + 'main()结束!\r\n');

}

module.exports = main;

//
// var start = Date.now();
//         console.log('开始连接,当前时间:' + start);
//         setInterval(function() {
//             var num = GetRandomNum(1, 4); 
//             socket.emit('dataco', { cloud: num });
//             console.log(Date.now() - start + 's--send '+num);
//             //console.log(Date.now() - start + '毫秒后,突然杀出一位好汉!\r\n');
//         }, 2000);
//         // setInterval(function() {
//         //     var num = GetRandomNum(1, 10);
//         //     socket.emit('dataco', { cloud: num });
//         // }, 1000);