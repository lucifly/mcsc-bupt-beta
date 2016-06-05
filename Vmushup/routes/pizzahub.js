var express = require('express');
var router = express.Router();

serhtml = "<marquee style='HEIGHT: 200px' scrollamount='2' direction='up' ><h>天气预报</h><p>北京 晴 35度</p><p>北京 晴 35度</p><p>北京 晴 35度</p><p>北京 晴 35度</p><p>北京 晴 35度</p><p>北京 晴 35度</p><p>北京 晴 35度</p><p>应用接入数:1	服务调用次数:34</p></marquee>";

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
    var datasource = ["客厅吊灯","书房台灯"];
    if (req.query.servername == "map")
    {
        res.render('mapapi', { title: 'mapapi', widgetid: widgetid, layout: false });
    }
    else 
    {
        var serverinfo = require('../model/server.js').get_services_info_form_lib("name", req.query.servername);
        if (serverinfo == "404")
            res.render('notfind', { title: '404', layout: false });
        else
            res.render('bindsrc', { title: 'bindsrc', info:serverinfo,datasource: datasource, widgetid: widgetid, layout: false });
    }
});

module.exports = router;
