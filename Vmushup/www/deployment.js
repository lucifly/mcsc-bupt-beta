
function releaseProcess(){

	var graphname = $('#graphname1').val();
	if (graphname.length>0){
		sendJsonDescriptionMessage(graphname, $("#noflotextarea").html(), '', '');
		$('#releasestatus').html('发布完毕');
	} else {
		alert("请输入应用名称");
	}
	
}

function runProcess(){
	var graphname = $('#graphname2').val();
	var instanceid = $('#instanceid2').val();
	if (graphname.length>0){
		var reg =  /^\d+$/;
		if (instanceid.match(reg)){
			sendStartMessage(graphname, instanceid);
			$('#runstatus').html('部署完毕');
		} else {
			alert("请输入合法的实例编号（正整数）");
		}

	} else {
		alert("请输入应用名称");
	}
	
}


function connectToServer(){
	var ipaddr = $('#ipaddr').val();
	var re = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;	
	if (ipaddr.match(re)){
		setup(ipaddr);
		}	
	else
		alert("请输入正确的IP地址");
}

var wsServer;
var ws;
var pCnt=0;

function checkBrowser() {
    if (window.WebSocket) {
        console.log("This browser supports WebSocket!");
    } else {
        console.log("This browser does not support WebSocket.");
    }
}
function setup(url) {
    wsServer = 'ws://'+url+":8083";
    ws = new WebSocket(wsServer);

    ws.onopen = function (e) {
        console.log("Connected to WebSocket server.", e);
        $('#websocketstatus').html("成功连接到服务器");
    };

    ws.onclose = function (e) {
        console.log("Disconnected", e);
        $('#websocketstatus').html("连接关闭");
    };

    ws.onmessage = function (e) {
        //log("RECEIVED: " + e.data, e);
        //ws.close();
        //Check if it is an iframe
        var retObj = JSON.parse(e.data);
        if (retObj.protocol === 'data' && retObj.topic === 'html') {
            //logHTML(retObj.payload.html);
        }
        if (retObj.protocol === 'data' && retObj.topic === 'iframe') {
            //logIframe(retObj);
        }
    }

    ws.onerror = function (e) {
        console.log('Error occured: ' + e.data, e);
        $('#websocketstatus').html("连接失败");
    };            

}

function sendStringifiedMessage(msg) {
    ws.send(msg);
    console.log("SEND : " + msg);
}

function sendStartMessage(graph_name, instance_id) {
    var msgJson = {
        "protocol": "graph",
        "topic": "start_graph",
        "payload": {
            "graph_name": graph_name,
            "instance_id": instance_id,
            "type": "json",
        }
    };
    sendStringifiedMessage(JSON.stringify(msgJson));
}

function sendWatchMessage() {
    var msgJson = {
        "protocol": "view",
        "topic": "get_view",
        "payload": {
            "instance_id": $('#instance_id_2').val(),
            "component_name": $('#component_name_2').val()
        }
    };
    sendStringifiedMessage(JSON.stringify(msgJson));
}

function sendDataMessage() {
    var msgJson = {
        "protocol": "data",
        "topic": "send_data",
        "payload": {
            "instance_id": $('#instance_id_3').val(),
            "component_name": $('#component_name_3').val(),
            "port_id": $('#port_id_3').val(),
            "data": $('#data_3').val()
        }
    };
    sendStringifiedMessage(JSON.stringify(msgJson));
}

function sendJsonDescriptionMessage(graph_name, json_string, description, author){
    var msgJson = {
        "protocol": "graph",
        "topic": "save_graph",
        'payload':{
            'graph_name': graph_name,
            'graph_type': 'json',
            'graph_data': JSON.parse(json_string),
            'graph_description': description,
            'graph_author': author
        }
    };
    sendStringifiedMessage(JSON.stringify(msgJson));
}

function log(s, e) {
    var output = document.getElementById("output");
    console.log(output);
    console.log(s);
    var p = document.createElement("p");
    p.id = 'p'+pCnt;
    p.style.wordWrap = "break-word";
    p.style.padding = "10px";
    p.style.background = "#eee";
    p.textContent = "LOG : " + s;
    output.appendChild(p);
    console.log("LOG : " + s, e);
    $('#p'+pCnt).hide();
    $('#p'+pCnt).show(500);
    pCnt++;
}

function logHTML(s, e) {
    var output = document.getElementById("output");
    var p = document.createElement("p");
    p.id = 'p'+pCnt;
    p.style.wordWrap = "break-word";
    p.style.padding = "10px";
    p.style.background = "#eee";
    p.innerHTML = s;
    output.appendChild(p);
    console.log("LOG : " + s, e);
    $('#p'+pCnt).hide();
    $('#p'+pCnt).show(500);
    pCnt++;
}

function logIframe(obj, e) {
    var output = document.getElementById("output");
    var p = document.createElement("p");
    p.id = 'p'+pCnt;
    p.style.wordWrap = "break-word";
    p.style.padding = "10px";
    p.style.background = "#eee";
    p.innerHTML = '<iframe width=' + obj.payload.width + ' height=' + obj.payload.height + ' src="' + obj.payload.url + '"></iframe>';
    output.appendChild(p);
    console.log("LOG : " + obj, e);
    $('#p'+pCnt).hide();
    $('#p'+pCnt).show(500);
    pCnt++;
}