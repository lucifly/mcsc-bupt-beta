/**
 * 服务库中增加服务
 * Add Server 
 * @N.
 * 2015.11.24
*/

function main(socket) {

    this.newComService = function newComService(data) {
        var turl = 'http://10.108.92.2:3000/'+data.servername;
        var result = '{\n    items :[\n        {labal:"",moveTo:"",rightText:""}\n    ]\n}';       
        if(data.servername == "parking") turl += '/<start>\nreturn-json: {}';
        else if(data.servername == "searchorder") turl += '/<uid>?[TimeStamp&Place&OrderId]\nreturn-json:\n'+result+'';
        else if(data.servername == "RainCollectClothes") turl += '/<start>?[UID1&UID2&phonenumber]\nreturn-json: {}';
        else {}
        console.log("--[info] com service Added");
            socket.emit('retunrinfo', { url: turl });
     }
     
     this.newRestService = function newRestService(params) {
         
     }
     

}

module.exports = main;
