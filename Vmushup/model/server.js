var serverstore = "./sever.json";
exports.getserverinfo = function() {

    var serverl = require(serverstore);
    var serverlist = serverl.exmp;
    
    var servers_info = [];
    for(var i=0;i<serverlist.length;i++)
    {
        var singe_server = serverlist[i];
        var server_info ={};
        
        server_info.title = (singe_server.info).title;
        server_info.author = (singe_server.info).author;
        server_info.description = (singe_server.info).description;
        
        servers_info[i] = server_info;
    }
    
    return servers_info;
    
    
};


