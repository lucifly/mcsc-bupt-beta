/**
 * 服务库中增加服务
 * Add Server 
 * @N.
 * 2015.11.24
*/

function main(socket) {

    this.newComService = function newComService(data) {
        var turl = 'http://10.108.92.2:3000/'+data.servername;
        console.log("--[info] com service Added");
            socket.emit('retunrinfo', { url: turl });
     }
     
     this.newRestService = function newRestService(params) {
         
     }
     

}

module.exports = main;
