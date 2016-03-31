var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get serverlist");
    //res.render('index', { title: 'serverlist' });
    next();
});

router.get('/', function(req, res, next) {
    //console.log("-[info] get serverlist");
    var title = 'serverlist';
    var serverinfo = require('../model/server.js').getserverinfo();
    res.render('serverlist', { title: title, serverinfo: serverinfo });
    //res.render('index', { title: 'serverlist' });
});


module.exports = router;
