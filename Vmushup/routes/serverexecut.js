var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("-[info] get serverexecut");
    res.render('index', { title: 'serverexecut' });
    next();
});

function executserver(data)
{
      var response = {};
  for(var a in data)
  {
      response[a] = data[a];
  }
  return response;
}
//处理post数据/////////////////////////////////////////////////////////////////////////////////
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//return server data 
router.post('/process_post', urlencodedParser, function(req, res) {
    console.log("-[info] get"+ req.body.name +" process_post");
    // 输出 JSON 格式
    var reqbody = req.body;
    var response = executserver(reqbody);
    // data:" req.body.name",
    // status: "req.body.city"
    console.log(response);
    res.end(JSON.stringify(response));
});
/////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;