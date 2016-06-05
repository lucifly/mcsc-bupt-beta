var express = require('express');
var router = express.Router();

serhtml = "<marquee  style='HEIGHT: 180px; ' scrollamount='2' direction='up' ><h>2016年6月8日</h><p>北京 晴 30度</p><p>尾号限行4和9</p><p>天气炎热</p><p>小心中暑</p><p>应用接入数:1	服务调用次数:34</p></marquee>";

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

    if (req.query.servername == "map") {
        res.render('mapapi', { title: 'mapapi', widgetid: widgetid, layout: false });
    }
    else {
        var serverinfo = require('../model/server.js').get_services_info_form_lib("name", req.query.servername);
        if (serverinfo == "404")
            res.render('notfind', { title: '404', layout: false });
        else {
			if (req.query.servername == "lamp") {
				var datasource = ["客厅吊灯", "书房台灯"];
				res.render('bindsrc', { title: 'bindsrc', info: serverinfo, datasource: datasource, widgetid: widgetid, layout: false });
			}
			else {
				var imgurl;
				if (req.query.servername == "nasaearth")
					imgurl = "/\assets/\image/\地球.jpg";
				if (req.query.servername == "weather")
					imgurl = "/\assets/\image/\weather1.jpg";
				if (req.query.servername == "door")
					imgurl = "/\assets/\image/\门.jpg";
				if (req.query.servername == "window")
					imgurl = "/\assets/\image/\窗外.jpg";
				// if (req.query.servername == "lamp")
				// 	imgurl = "/\assets/\image/\吊灯.jpg";
				if (req.query.servername == "traffic")
					imgurl = "/\assets/\image/\交通.jpg";
				if (req.query.servername == "wet")
					imgurl = "/\assets/\image/\湿度.jpg";
				res.render('servinfoing', { title: 'servinfoing', info: serverinfo, imgurl: imgurl, widgetid: widgetid, layout: false });
			}
		}
		//            res.render('servinfo', { title: 'servinfo', info: serverinfo, widgetid: widgetid, layout: false });
    }
});

module.exports = router;
