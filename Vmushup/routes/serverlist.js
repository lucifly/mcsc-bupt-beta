var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get serverlist");
    res.render('index', { title: 'serverlist' });
});

module.exports = router;
