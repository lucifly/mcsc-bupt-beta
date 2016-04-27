/**
 * 执行服务库服务
 * excute single server from lib
 * @N.
 * 2015.11.24
*/

function ServerExcutor() {

	var NOSERVER = "NOSERVER";
	//var logger = require('./main.js').logger('ServerExcutor.js');
	function InitIn(data, parameter) {
		var result = "";
		var mark = 0;
		var is_first = 1;
		for (var p in parameter) {

			if (is_first == 1) is_first = 0;
			else result = result + "&";

			mark = 0;
			for (var a in data) {
				if (a == p) {
					mark = 1;
					result = result + a + "=" + data[a];
				}
			}
			// if (mark == 0 && parameter[p]!= "")
			if (mark == 0)
				result = result + p + "=" + parameter[p];

		}

		return result;
	};

	function PushOut(receive) {

	};

	function lookserver(name) {
		var serverjson = require('../model/sever.json');
		var serverindex = serverjson.exmp;
		var i = 0;
		for (i = 0; i < (serverindex.length); i++) {
			if ((serverindex[i]).type == "web" && (serverindex[i]).name == name) {
				var server_tmp = serverindex[i];
				return server_tmp;
			}
		}
		return NOSERVER;
	};

	function action(url, emitter, mapping, name, repos_id) {
		var http = require("http");
		var result = {};
		result.id = repos_id;
		result.code = 100;

		http.get(url, function (res) {

            res.setEncoding('utf8');
            res.on('data', function (chunk) {
				var obj = JSON.parse(chunk);
				// console.log("back address:" + chunk);
				result.code = 200;
				result.source = name;
				// result.repost = chunk;
				//return result;
							
				
				var count = 0;
				var temparry = new Array();
				for (var p in mapping) {
					var aa = p;
					var testing = new Array();
					testing = aa.split('.');
					var temp = obj;
					for (var i = 0; i < testing.length; i++) {
						temp = temp[(testing[i])];
					}
					var tttt = {};

					tttt.name = (mapping[p]);
					tttt.value = temp;

					temparry[count] = tttt;
					count++;

				}
				result.repost = temparry;



				return emitter.emit('Datacome', result);
			});
			res.on('end', function () { return result; })
		}).on('error', function (e) {
			console.log("!--Got error when http request " + url);
			result.code = 404;
			result.repost = "!--Got error when http request " + url;
			return emitter.emit('Datacome', result);
		});
	};

	function demon_action(url, emitter, mapping, name, repos_id) {
		var result = {};
		result.id = repos_id;
		result.code = 100;
		// console.log("back address:" + chunk);
		result.code = 200;
		result.source = name;
		// result.repost = chunk;
		//return result;

		var count = 0;
		var temparry = new Array();
		for (var p in mapping) {

			var tttt = {};

			tttt.name = (mapping[p]);
			tttt.value = "(mapping[p])";

			temparry[count] = tttt;
			count++;

		}
		result.repost = temparry;


		return emitter.emit('Datacome', result);

	};

	this.excutor = function excutor(name, data, repos, emitter) {//repos 中应该包含状态信息代码，应该是个json
        
		var t_url;
		var parameter = "";
		t_url = lookserver(name);
		if (t_url == NOSERVER) console.log("!--no server");
		else {
			console.log("--server find " + name);
			//console.log(t_url);
			if (t_url.mode == "GET") {
				parameter = t_url.src + "?" + InitIn(data, t_url.Parameter);
				//logger.info("--[info] get resource from " + parameter);
				console.log("--[info] get resource from " + parameter);
				
				//demon_action 用来测试
				return demon_action(parameter, emitter, t_url.mapping, name, repos);
				//return action(parameter, emitter, t_url.mapping, name, repos);
			}
			else //当使用其他方式时 eg.POST  
				console.log("**--developing");
		}
		PushOut();

	};



}

module.exports = ServerExcutor;