var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get index");
    //res.render('index', { title: '轻量级web服务聚合平台' });
    next();
});
/* GET page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get developing.ejs");
    res.render('developing', { title: 'developing' ,layout:false });
});


module.exports = router;
