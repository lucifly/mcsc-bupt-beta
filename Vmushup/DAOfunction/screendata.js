/**
 * opration of screen data
 * 201600707
 * @N
 */

/**
 * ../DAOdata/screendata.json
 * {
 *    "name0":[id0, id1,,]
 *    "name1":[id0, id1,,]
 * }
 */

var tablename = "screendata"



exports.delitem = function (key) {

        var resultinfo = require("./generalfunction.js").delitem(tablename,key);
        if(resultinfo != 0 )
        {
            console.log("--[error]file '"+ tablename +"'write error ");
            return -1;
        }
        console.log("--[info] del item success");
        return 0;

};

exports.modifyitem = function (key, value) {

        var resultinfo = require("./generalfunction.js").modifyitem(tablename,key,value);
        if(resultinfo != 0 )
        {
            console.log("--[error]file '"+ tablename +"'write error ");
            return -1;
        }
        console.log("--[info]modify item success");
        return 0;

};

exports.getitem = function (key) {

        var result= require("./generalfunction.js").getitem(tablename,key);
        console.log("--[info]get item success");
        return result;
        /**
         * -1 table[key] not exist
         * -2 table not exist
         */

};

exports.additem = function (key, value) {

        var resultinfo = require("./generalfunction.js").additem(tablename,key,value);
        if(resultinfo != 0 )
        {
            console.log("--[error]file '"+ tablename +"'write error ");
            return -1;
        }
        console.log("--[info]add item success");
        return 0;

};


