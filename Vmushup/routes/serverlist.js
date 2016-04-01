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

router.get('/:servername', function(req, res, next) {
    
    var severdet =  //findserver(req.params.servername);
    {
    'name':req.params.servername,
    'url':'www.baidu.com',
    'type':'get',
    'parm':[
        {'name':'p1','isness':'1','type':'string'},
        {'name':'p2','isness':'0','type':'string'},
        {'name':'p3','isness':'1','type':'string'}
    ]
    };   
    var request = '{name:p1}';
    var resultt = '{code : 404, data:{}}';
    res.render('serversinge', { title: req.params.servername , 
                            severdet:severdet,
                            request:request,
                            resultt:resultt});

    
    
    //console.log("-[info] get serverlist");

});





module.exports = router;
