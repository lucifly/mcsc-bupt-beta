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
    
    console.log("-[info] get server: " + req.params.servername );
    var getdata =  require('../model/server.js').findserver("name",req.params.servername);
    //findserver(req.params.servername);
    var severdet={
    'name':req.params.servername,
    'url':getdata.src,
    'type':getdata.mode,
    'parm':[]
    }; 
    var j=0;
    for(var i in (getdata.Parameter))
    {
        var temp ={};
        temp.name = i; 
        temp.isness = 1; 
        temp.type = 'string'; 
        temp.value = (getdata.Parameter)[i]; 
        ((severdet.parm)[j]) = temp;
        j++;
    }
    
      
    var request = '{name:p1}';
    var resultt = '{code : 404, data:{}}';
    res.render('serversinge', { title: req.params.servername , 
                            severdet:severdet,
                            request:request,
                            resultt:resultt});

    
    
    //console.log("-[info] get serverlist");

});





module.exports = router;
