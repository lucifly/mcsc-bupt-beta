
var fs = require("fs");
function data_write(filename, data) {

        var json_data = JSON.stringify(data);

        console.log("----准备写入"+ filename +"文件");
        filename = './DAOdata/'+filename+'.json';
        fs.writeFile(filename, json_data,  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("----json文件写入成功！");
        });
        return 0;

};

function data_read(filename) {

    filename = '../DAOdata/'+filename+'.json';
    var data = require(filename);
    console.log("--[info] data read '"+filename+"'");
    return data;
    
};

exports.additem = function (filename, key, value) {

    var jsondata = data_read(filename);
    if (jsondata) {

        jsondata[key] = value;
        console.log("--[info] "+ filename +"[" + key + "]  has been added");
        // var json_string = JSON.stringify(data);
        var resultinfo = data_write(filename, jsondata);
        if(resultinfo != 0 )
        {
            console.log("--[error]file '"+ filename +"'write error ");
            return -1;
        }
        return 0;
    }
    console.log("!--[ERROR] "+ filename +" not exist");
    return -2;
};


exports.delitem = function (filename, key) {

    var jsondata = data_read(filename);
    if (jsondata) {
        if (jsondata[key]) {
            delete jsondata[key];
            console.log("--[info] "+ filename +"[" + key + "] has been delete");

            var resultinfo = data_write(filename, jsondata);
            if(resultinfo != 0 )
            {
                console.log("--[error]file '"+ filename +"'write error ");
                return -1;
            }

            return 0;
        }
        console.log("!--[ERROR] "+ filename +"[" + key + "] not exist");
        return -1;
    }
    console.log("!--[ERROR] "+ filename +" not exist");
    return -2;
};

exports.modifyitem = function (filename, key, value) {

    var jsondata = data_read(filename);
    if (jsondata) {
        if (!jsondata[key]) {
            console.log("!--[ERROR] "+ filename +"[" + key + "] not exist");
            return -1;
        }
        jsondata[key] = value;
        console.log("--[info] "+ filename +"[" + key + "]  has changed to " + value);

        var resultinfo = data_write(filename, jsondata);
        if(resultinfo != 0 )
        {
            console.log("--[error]file '"+ filename +"'write error ");
            return -1;
        }

        return 0;
    }
    console.log("!--[ERROR] "+ filename +" not exist");
    return -2;
};

exports.getitem = function (filename,key) {

    var jsondata = data_read(filename);
    if (jsondata) {
        if (jsondata[key]) {
            console.log("--[info] "+ filename +"[" + key + "] has been return");
            return jsondata[key];
        }
        console.log("!--[ERROR] "+ filename +"[" + key + "] not exist");
        return -1;
    }
    console.log("!--[ERROR] "+ filename +" not exist");
    return -2;
};
