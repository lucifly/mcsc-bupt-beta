var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get index");
    //res.render('index', { title: '轻量级web服务聚合平台' });
    next();
});
// var _dirname = 'E:\\git\\mcsc-bupt-beta\\Vmushup';
// router.get('/',function (req, res) {
//     console.log("--[info] GET : " +_dirname+ "/www2/" + "Home.html");
//     res.sendFile(_dirname+ "/www2/" + "Home.html");

// });
/* GET index page. */
var configjson = require("./routconfig.json");
router.get('/', function(req, res, next) {
    console.log("-[info] get home");
    res.render('index', { title: 'index' ,configjson:configjson, layout:false });
});

router.get('/pizzahubguide', function(req, res, next) {
    console.log("-[info] get pizzahubguide");
    res.render('pizzahubguide', { title: 'pizzahubguide' ,configjson:configjson, layout:false });
});


module.exports = router;
