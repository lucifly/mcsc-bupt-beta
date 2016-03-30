var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get BVmushup");
    res.render('index', { title: 'BVmushup' });
});

module.exports = router;
