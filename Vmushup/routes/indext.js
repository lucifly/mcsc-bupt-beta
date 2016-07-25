var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('-[info] get indext');
    next();
});
//E:\git\mcsc-bupt-beta\Vmushup\public\www
var _dirname = 'E:\\git\\mcsc-bupt-beta\\Vmushup';
router.get('/',function (req, res) {
    //console.log("--[info] GET : " +_dirname+ "/www2/" + "io_chat.html");
    res.sendFile(_dirname+ "/chat/web/" + "index.html");

});

router.get('/chat/*.js', function(req, res) {   
   console.log(req.originalUrl);
  res.sendFile(_dirname + "/chat/web/"+''+req.originalUrl);
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
