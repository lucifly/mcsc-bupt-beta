var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('-[info] get webmeemoo');
    next();
});
//E:\git\mcsc-bupt-beta\Vmushup\public\www
var _dirname = 'E:\\git\\mcsc-bupt-beta\\Vmushup';
router.get('/',function (req, res) {
    console.log("--[info] GET : " +_dirname+ "/www/" + "app.html");
    res.sendFile(_dirname+ "/www/" + "app.html");

})

//处理post数据/////////////////////////////////////////////////////////////////////////////////
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//return server data 
router.post('/process_post', urlencodedParser, function (req, res) {
  // 输出 JSON 格式
  var reqbody = req.body; 
  //var response = executserver(reqbody);
    // data:" req.body.name",
    // status: "req.body.city"
  //console.log(response);
  //res.end(JSON.stringify(response));
  //res.redirect('/register');
  res.writeHead('302');
  res.render('register', { title: 'register' });
});
/////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = router;
