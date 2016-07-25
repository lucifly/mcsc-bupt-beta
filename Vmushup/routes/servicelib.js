var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get serverlist");

    next();
});

router.get('/', function(req, res, next) {
    //console.log("-[info] get serverlist");
    var title = 'serverlist';
    var serverinfo = require('../model/server.js').get_services_infos();
    var entitiesinfo = require('../model/entity.js').get_entities_info();
    
    res.render('serverlist', { title: title, serverinfo: serverinfo ,entitiesinfo:entitiesinfo});
});

router.get('/entity/:entityuid', function(req, res, next) {
    
    console.log("-[info] get server: " + req.params.entityuid );
    var getdata =  require('../model/entity.js').findentity("UID",req.params.entityuid);
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

router.get('/addentity', function(req, res, next) {
    console.log("-[info] get add entity ejs");
    var title = 'addentity';
    var servicename = require('../model/server.js').get_services_name();
    var entitiesUID = require('../model/entity.js').get_entities_UID();
    /**
     * ejs need to be create and edit
     * 20160618
     * @N
     */
    res.render('serverlist', { title: title, serverinfo: servicename ,entitiesinfo:entitiesUID});
});



module.exports = router;
