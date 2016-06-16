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
    var entitiesinfo = require('../model/entity.js').get_entities_info();
    
    res.render('serverlist', { title: title, serverinfo: serverinfo ,entitiesinfo:entitiesinfo});
    //res.render('index', { title: 'serverlist' });
});

router.get('/entity/:entityuid', function(req, res, next) {
    
    console.log("-[info] get server: " + req.params.entityuid );
    var getdata =  require('../model/entity.js').findserver("UID",req.params.entityuid);
    //findserver(req.params.servername);
/**
 * 
 * need to be complex 
 * @N
 * 20160615
 * */
    // res.render('serversinge', { title: req.params.servername , 
    //                         severdet:severdet,
    //                         request:request,
    //                         resultt:resultt});

    
    
    //console.log("-[info] get serverlist");

});





module.exports = router;
