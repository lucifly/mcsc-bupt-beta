var express = require('express');
var router = express.Router();

serhtml = "<marquee style='HEIGHT: 200px' scrollamount='2' direction='up' ><h>天气预报</h><p>北京 晴 35度</p><p>北京 晴 35度</p><p>北京 晴 35度</p><p>北京 晴 35度</p><p>北京 晴 35度</p><p>北京 晴 35度</p><p>北京 晴 35度</p><p>应用接入数:1	服务调用次数:34</p></marquee>";

var ServLib = require('../model/serviceslib.json');
/* GET pizzahub page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get pizzahub ");
    res.render('pizzahub', { title: 'PizzaHub' ,servlib:ServLib,  servinfo: serhtml  ,layout:false });
});

module.exports = router;
