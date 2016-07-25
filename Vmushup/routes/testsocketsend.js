var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get testsocketsend");
    var datasource = require('../model/entity.js').get_entities_UID ();
    res.render('testsocketsend', { title: 'testsocketsend',datasource:datasource });
});

module.exports = router;
