var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get testsocketsend");
    var datasource = require('../model/entity.js').get_entities_UID ();
    var host = require("../model/staticval.json").SOCKETIP;
    var port = require("../model/staticval.json").SOCKETPORT;
    var socketadd = host+":"+port;
    res.render('testsocketsend', { title: 'testsocketsend',datasource:datasource, socketadd:socketadd });
});

module.exports = router;
