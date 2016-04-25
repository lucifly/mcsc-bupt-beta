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
//   .post(urlencodedParser, function (req, res) {
//     // 输出 JSON 格式
//     var response = {
//       servername: req.body.servername,
//       servertype: req.body.servertype,
//       serveraddr: req.body.serveraddr,
//       importArray: req.body.import,
//       outportArray: req.body.outport,
//       descri: req.body.descri
//     };

//     console.log(response);
//     res.end(JSON.stringify(response));
//   });
module.exports = router;
