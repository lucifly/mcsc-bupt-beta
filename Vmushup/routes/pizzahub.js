var express = require('express');
var router = express.Router();

serhtml = "<marquee  class='shadow' style='HEIGHT: 180px; padding:10px; border:1px solid #ddd' scrollamount='2' direction='up' ><h>2016年6月8日</h><p>北京 晴 30度</p><p>尾号限行4和9</p><p>天气炎热</p><p>小心中暑</p><p>应用接入数:1	服务调用次数:34</p></marquee>";


var ServLib = require('../model/serviceslib.json');
/* GET pizzahub page. */
router.get('/', function (req, res, next) {
    console.log("-[info] get pizzahub ");
    res.render('pizzahub', { title: 'PizzaHub', servlib: ServLib, servinfo: serhtml, layout: false });
});

/**get service info */
router.get('/service', function (req, res, next) {

    console.log("-[info] query services library and get service : " + req.query.servername);
    var widgetid = require('../action/subscribetable.js').add_unique_item(req.query.servername, req.query.servername);
	var optionresult = require('../action/idtoservice.js').additem(widgetid,req.query.servername);
	if(optionresult != 0){
		console.log("--[error] something wrong when add item to widgetid_service_table");
	}
	var serverinfo = require('../model/server.js').get_services_info_form_lib("name", req.query.servername);
	if (serverinfo == "404")
		res.render('notfind', { title: '404', layout: false });
    if (req.query.servername == "map") {
        res.render('mapapi', { title: 'mapapi', widgetid: widgetid, layout: false });
    }
    else {
		var datasource = require('../model/entity.js').find_entity_for_service(req.query.servername);
       	if (datasource.length == 0) {
			   console.log("no entities");
		}
		else
		{
			res.render('bindsrc', { title: 'bindsrc', info: serverinfo, datasource: datasource, widgetid: widgetid, layout: false });
		}   
	    // var serverinfo = require('../model/server.js').get_services_info_form_lib("name", req.query.servername);
        // if (serverinfo == "404")
        //     res.render('notfind', { title: '404', layout: false });
        // else {
		// 	if (req.query.servername == "lamp") {
		// 		var datasource = require('../model/entity.js').find_entity_for_service("lamp");
		// 		res.render('bindsrc', { title: 'bindsrc', info: serverinfo, datasource: datasource, widgetid: widgetid, layout: false });
		// 	}
		// 	else if(req.query.servername == "movie")
		// 	{
		// 		var text = '<h>6月观影指南</h><p>《X战警：天启》</p><p>《泰迪熊之玩具大战》</p><p>《我们毕业啦》</p><p>《海底总动员2》</p><p>《魔兽》</p>';
		// 		res.render('scrolltext', { title: 'text', info: serverinfo, text: text, widgetid: widgetid, layout: false });	
		// 	}
		// 	else if(req.query.servername == "video")
		// 	{
		// 		var videosrc = "assets\\video\\三人游.mp4";
		// 		res.render('video', { title: 'video', info: serverinfo, videosrc: videosrc, widgetid: widgetid, layout: false });
		// 	}
		// 	else {
		// 		var imgurl;
		// 		if (req.query.servername == "nasaearth")
		// 			imgurl = "/\assets/\image/\地球.jpg";
		// 		if (req.query.servername == "weather")
		// 			imgurl = "/\assets/\image/\weather1.jpg";
		// 		if (req.query.servername == "door")
		// 			imgurl = "/\assets/\image/\门.jpg";
		// 		if (req.query.servername == "window")
		// 			imgurl = "/\assets/\image/\窗外.jpg";
		// 		if (req.query.servername == "traffic")
		// 			imgurl = "/\assets/\image/\交通.jpg";
		// 		if (req.query.servername == "wet")
		// 			imgurl = "/\assets/\image/\湿度.jpg";
		// 		res.render('servinfoing', { title: 'servinfoing', info: serverinfo, imgurl: imgurl, widgetid: widgetid, layout: false });
		// 	}
		// }
    }
});

router.get('/bindsrc', function (req, res, next) {
    console.log("-[info] bind entity to widght ");
	var servername = require('../action/idtoservice.js').getitem(req.query.weight);
	var result = require('../action/subscribetable.js').modifyitem(req.query.weight, req.query.src);
 	res.render(servername, { title: servername, entity:req.query.src, layout: false });
	// 	
	// console.log(result);
 	// res.end();
});

router.get('/screensave', function (req, res, next) {
    console.log("-[info] get screen info");
	req.query.screenhtml =  (req.query.screenhtml).replace(/\n/g,""); 
	var result = require('../DAOfunction/screendata.js').additem(req.query.name, req.query.screenhtml);
	console.log(result);
 	res.end();
});

router.get('/screenload', function (req, res, next) {
    console.log("-[info] load screen info");
	var result = require('../DAOfunction/screendata.js').getitem(req.query.name);
	var data = {};
	data.code = 0;
	if( result < 0 ){data.code = 400;}
	else
	{
		data.code = 200;
		data.html = result;
	}
    var json_string = JSON.stringify(data);
 	res.end(json_string);
});

// function get_simple_html(service,widgets_id) {

// 	if( /^test([0-9\.]*\d)?$/.test(widgets_id) )
// 	{
// 		var test0 =  '<li class="brick " id="test0" ondrop="drop(event) " ondragover="allowDrop(event) " ondragstart="dragstart(event) ">'
// 					+ serhtml
// 					+ "<a class='delete' href='#'>&times;</a>"
// 					+ '</li>';
// 		var test1 = '<li class="brick " id="test1" title="a " ondrop="drop(event) " ondragover="allowDrop(event)" ondragstart="dragstart(event) ">'
//                     +' <img class="am-thumbnail shadow " src="\\assets\\image\\weather1.jpg " />'
//                     +"<a class='delete' href='#'>&times;</a>"
//                     +' </li>';
// 		var test2 =	'<li class="brick" id="test2"  title="b" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragstart(event)">'
//                     +' <img class="am-thumbnail shadow" src="\\assets\\image\\湿度.jpg"/>'
//                     +"<a class='delete' href='#'>&times;</a>"
//                     + ' </li>';
//         var test3 = '<li class="brick" id="test3"  title="b" ondrop="drop(event)"="allowDrop(event)" ondragstart="dragstart(event)">'
//                     +'<img class="am-thumbnail shadow" src="\\assets\\image\\湿度.jpg" />'
//                     +"<a class='delete' href='#' >&times;</a>"
//                     +'</li>';
//         var test4 = '<li class="brick "  id="test4"  title="c " ondrop="drop(event) " ondragover="allowDrop(event)" ondragstart="dragstart(event) ">'
//                     +'<img class="am-thumbnail shadow " src="\\assets\\image\\交通.jpg " />'
//                     +"<a class='delete' href='#' >&times;</a>"
//                     +'</li>';
// 		switch (widgets_id)
// 		{
// 			case "test0":return test0;
// 			case "test1":return test1;
// 			case "test2":return test2;
// 			case "test3":return test3;
// 			case "test4":return test4;
// 			default: console.log("something else");
// 		};
// 	}
// 	else
// 	{
// 		var servicetype = require("../model/server.js").get_services_stype_from_name(service);
// 		console.log(servicetype);
// 	}
// }

module.exports = router;
