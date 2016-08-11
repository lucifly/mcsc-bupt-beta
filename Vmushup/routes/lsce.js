var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('-[info] get webmeemoo');
    next();
});
//E:\git\mcsc-bupt-beta\Vmushup\public\www

//返回LSCE界面
var _dirname = 'E:\\git\\mcsc-bupt-beta\\Vmushup';
router.get('/', function (req, res) {
    console.log("--[info] GET : " + _dirname + "/www/" + "app.html");
    res.sendFile(_dirname + "/www/" + "app.html");

});

var urllib = require('url'); 
//searchorder
router.get('/searchorder', function (req, res) {
   // console.log(req.originalUrl);
   ///console.log("--[info] GET : " + _dirname + '' + req.originalUrl);
   console.log("--[info]get searchoreder");
   var params = urllib.parse(req.url, true); // res.sendFile(_dirname + '' + req.originalUrl);
//    var response ={};//items :[{labal:"111",moveTo:"detailsView",rightText:"20160501"}]
//    var item = {};
//    item.labal = "111";
//    item.moveTo = "detailsView";
//    item.rightText = "20160505";
//    var tarry = [];
//    tarry[0] = item;
//    response.items = tarry;
   var response ={"items":[{"labal":"111","moveTo":"detailsView","rightText":"20160506"}]};//items :[{labal:"111",moveTo:"detailsView",rightText:"20160501"}]
   
   
   if (params.query && params.query.callback) {  
    console.log(params.query.callback);     
      console.log("jsonp");
    // var str =  params.query.callback + '(' + JSON.stringify(response) + ')';//jsonp  
    var str =  params.query.callback + '(' + response + ')';//jsonp  
    res.send(str);  
  } else {  
      console.log("json");
    res.send(JSON.stringify(response));//普通的json  
  }       
   
//   var str =  params.query.callback + '(' + JSON.stringify(response) + ')';//jsonp  
//     res.send(JSON.stringify(response));
});

//返回请求的meemoo-iframe
router.get('/www/src/parting/*.html', function (req, res) {
    console.log(req.originalUrl);
    console.log("--[info] GET : " + _dirname + '' + req.originalUrl);
    res.sendFile(_dirname + '' + req.originalUrl);
});

//处理post数据/////////////////////////////////////////////////////////////////////////////////
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//return server data 
router.post('/process_post', urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    var reqbody = req.body;
    // var response = executserver(reqbody);
    var response = {
        data: "http://localhost:3000/" + reqbody.servername,
        status: "req.body.city"
    }
    console.log(response);
    res.send(JSON.stringify(response));
  // var str =  params.query.callback + '(' + JSON.stringify(response) + ')';//jsonp  
    //res.end(str); 
    // //res.redirect('/register');
    // res.writeHead('302');
    // res.render('register', { title: 'register' });
});
/////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = router;
