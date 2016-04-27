var socket;
    var firstconnect = true;
        
    function connect() {
      if(firstconnect) {
/////////////// ////////// //// // /// //////// //////////////////////////////          
        socket = io.connect("http://10.108.92.2"+ ":" + "8080", { 'reconnect': true });
///////////////////////////////////////////////////////////////////////
        socket.on('dataco', function(data){ show(data); });
///////////////////////////////////////////////////////////////////////
        socket.on('connect', function(){ status_update("Connected to Server"); });
        socket.on('disconnect', function(){ status_update("Disconnected from Server"); });
        socket.on('reconnect', function(){ status_update("Reconnected to Server"); });
        socket.on('reconnecting', function( nextRetry ){ status_update("Reconnecting in " 
          + nextRetry + " seconds"); });
        socket.on('reconnect_failed', function(){ message("Reconnect Failed"); });
          
        firstconnect = false;
      }
      else {
        socket.socket.reconnect();
      }
    }
        
    function disconnect() {
      socket.disconnect();
    } 
    function show(data) {
        var newsrc ="/images/cloud/"+ data.cloud +".jpg";
       $("#wether01").attr("src",newsrc); 
      //document.getElementById('mmmmmm').innerHTML = document.getElementById('mmmmmm').innerHTML + data.cloud;
    }
        
    function status_update(txt){
      document.getElementById('status').innerHTML = txt;
    }
      
    function esc(msg){
      return msg.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    
    function send() {
      socket.send("Hello Server!");    
    };    
    function send2() { 
      socket.emit('my other event', { my: 'data' });
    };