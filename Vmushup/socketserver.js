//启动socketio服务器////////////////////////////////////////////////////////
var socketport = 8080;
var io = require('socket.io').listen(socketport);
io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
console.log("--[INFO] socket server start, lisenting on port " + socketport);
////////////////////////////////////////////////////////////////////////////