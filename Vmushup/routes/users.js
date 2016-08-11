var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('respond with a resource');
  next();
});
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login ', layout: false });
});

var userlist={
    "program":"123",
    "user":"123"
};
var judgment = function(uname, upwd){
    if(userlist && userlist[uname] == upwd) return true;
    return false;
};

/* GET users listing. */
router.get('/login', function(req, res, next) {
    var result={"result":false};
    result.result = judgment( req.query.uname, req.query.upwd);
    // res.render('login', { title: 'login ', layout: false });
    res.end(JSON.stringify(result));
});

module.exports = router;
