var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get register");
    res.render('register', { title: 'register' });
});

module.exports = router;
