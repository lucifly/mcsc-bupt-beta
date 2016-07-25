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
router.get('/', function(req, res, next) {
    console.log("-[info] get home");
    res.render('index', { title: 'index' ,layout:false });
});


/* GET testing page. */
router.get('/testing2', function(req, res, next) {
    console.log("-[info] get testing2");
    res.render('testing', { title: 'testing' ,layout:false });
});

/* GET testing page. */
router.get('/home', function(req, res, next) {
    console.log("-[info] get home");
    res.render('home', { title: 'home' ,layout:false });
});


/* GET testing page. */
var _dirname_meemoo="E:\\git\\mcsc-bupt-beta\\Vmushup\\views";
router.get('/testing', function(req, res, next) {
    console.log("-[info] get testing");
    res.sendFile(_dirname_meemoo + "/" + "jQuery Gridly.html");
});




module.exports = router;
