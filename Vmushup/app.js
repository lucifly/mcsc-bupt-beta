/**
 * Beta Server 
 * @N.Meng
 * @2016.3.30
 */
var express = require('express');
var flash = require('connect-flash');
var partials = require('express-partials');
var cookieParser = require('cookie-parser');
var path = require('path');
var session = require('express-session');


//set using routes file //////////////////////////////////////////////////////////////////////////////////////
var routes = require('./routes/index');
var BVmushup = require('./routes/BVmushup');
var register = require('./routes/register');
var serverlist = require('./routes/serverlist');
var serverexecut = require('./routes/serverexecut');
var webmeemoo = require('./routes/webmeemoo');
var indext = require('./routes/indext');
var pizzahub = require('./routes/pizzahub');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


var app = express();

app.use(partials());
app.use(cookieParser());
//靠这个中间件让我们可以用req.session.key获取对应的value//////////////////////////////////////////////////////////
// app.use(session({secret: '123'}));
app.use(session({
    secret: '12345',
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));
// //设置cookie
// app.use(cookieParser());
// app.use(session({secret: '123'}));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//处理post数据/////////////////////////////////////////////////////////////////////////////////
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
/////////////////////////////////////////////////////////////////////////////////////////////////

//set meemoo file floder////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use(express.static('www'));
///////////////////////////////////////////////////////////////////////////////////////////////
//set index file floder////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use(express.static('www2'));
///////////////////////////////////////////////////////////////////////////////////////////////


//set view engine///////////////////////////////////////////////////////////////////////////////////////////////////////////// 
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use(flash());

app.use(function (req, res, next) {
    // console.log("app.usr local");
    res.locals.user = req.session.user;
    res.locals.post = req.session.post;
    var error = req.session.error;
    res.locals.error = error;
    // res.locals.error = "error.length ? error : null";
    var success = req.flash('success');
    res.locals.success = success.length ? success : null;
    next();
});

//set routes /////////////////////////////////////////////////////////////////////////////
app.use('/', routes);
app.use('/BVmushup', BVmushup);
app.use('/register', register);
app.use('/serverlist', serverlist);
app.use('/serverexecut', serverexecut);
app.use('/webmeemoo', webmeemoo);
app.use('/indext', indext);
app.use('/pizzahub', pizzahub);
//////////////////////////////////////////////////////////////////////////////////

// var arraya = require('./httprequest.js').getrequest();
// //var arraya = jsonobj.a;
// for(var i=0;i<arraya.length;i++)
// {
//     console.log(i+": "+arraya[i]);
// }



//启动服务器//////////////////////////////////////////////////////////////////////////
var server = app.listen(3000, function () {

    //get server address 
   var IPAdderss = require('./action/getipaddress');
   var host = IPAdderss.ipaddress("IPv4");
   var port = server.address().port;

   console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
////////////////////////////////////////////////////////////////////////

//启动socketio服务器/////////////////////////////////////////////////////////////////
var socketport = 8080;
var io = require('socket.io').listen(socketport);
var actionjs = require('./action/main');
var addservcer = require('./action/addserver');
var searchaction = require('./action/searchaction');

io.sockets.on('connection', function (socket) {
    console.log("Connection " + socket.id + " accepted.");
    socket.on('disconnect', function () {
        console.log("Connection " + socket.id + " terminated.");
    });
});
io.sockets.on('connection', function (socket) {

    console.log("socket tow------------");

    socket.on('debugstart', function (data) {
        console.log("--[info] socket start debug ");
        var tt = new actionjs(socket);
        tt.main(data);
    });
    
    socket.on('addserver', function (data) {
        console.log("--[info] socket start debug ");
        var tt = new addservcer(socket);
        tt.newComService(data);
    });
        
    socket.on('searchserver', function (data) {
        console.log("--[info] socket start debug "+ data.argument);
         var tt = new searchaction(socket);
         tt.getresult(data.argument);
    });

});
console.log("--[INFO] socket server start, lisenting on port " + socketport);
////////////////////////////////////////////////////////////////////////////

