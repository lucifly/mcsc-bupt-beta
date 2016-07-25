var serverstore = "./sever.json";

//get server simple info list
exports.getserverinfo = function () {

    var serverl = require(serverstore);
    var serverlist = serverl.exmp;

    var servers_info = [];
    for (var i = 0; i < serverlist.length; i++) {
        var singe_server = serverlist[i];
        var server_info = {};
        server_info.name = singe_server.name;
        server_info.title = (singe_server.info).title;
        server_info.author = (singe_server.info).author;
        server_info.description = (singe_server.info).description;

        servers_info[i] = server_info;
    }

    return servers_info;


};

//get singer server info
exports.findserver = function (key, value) {

    var serverl = require(serverstore);
    var serverlist = serverl.exmp;

    var i; i = 0;
    for (i = 0; i < serverlist.length; i++) {
        var temp = serverlist[i];
        if (temp[key] == value)
            return temp;
    }

    return "404";

};


var serviceslib = "./serviceslib.json";


//get service form  serviceslib
exports.get_services_info_form_lib = function (key, value) {

    var serverl = require(serviceslib);

    for (var p in serverl) {
        var servicearray = serverl[p];
        for (var i = 0; i < servicearray.length; i++) {
            var temp = servicearray[i];
            if (temp[key] == value) {
                var result = {};
                result.name = temp.name;
                result.description = (temp.info).description;
                result.title = (temp.info).title;
                result.supplier = (temp.info).supplier;
                result.access = (temp.info).access;
                result.status = (temp.info).status;
                return result;
            }

        }
    }


    return "404";

};

/** 
 * get service info 
 * icon name category title author supplier description status 
*/
exports.get_services_infos = function () {

    var serverl = require(serviceslib);

    var result = [];
    for (var p in serverl) {
        var servicearray = serverl[p];
        for (var i = 0; i < servicearray.length; i++) {
            var temp = servicearray[i];
            var count = 0;
            count = result.length;
            var tt = {};
            tt.category = p;
            tt.name = temp.name;
            tt.description = (temp.info).description;
            tt.title = (temp.info).title;
            tt.icon = (temp.info).icon;
            tt.supplier = (temp.info).supplier;
            tt.status = (temp.info).status;
            tt.author = (temp.info).author;


            (result[count]) = tt;


        }
    }
    return result;
};

/** 
 * get service name
 * return an array include all servcies' name 
*/
exports.get_services_name = function () {

    var serverl = require(serviceslib);

    var result = [];
    for (var p in serverl) {
        var servicearray = serverl[p];
        for (var i = 0; i < servicearray.length; i++) {
            var temp = servicearray[i];
            var count = 0;
            count = result.length;
            (result[count]) = temp.name;


        }
    }
    return result;
}
/**
 * serviceslib
 * get servcies stype from servcie name 
 */
exports.get_services_stype_from_name = function (key) {

    var serverl = require(serviceslib);

    var result = [];
    for (var p in serverl) {
        var servicearray = serverl[p];
        for (var i = 0; i < servicearray.length; i++) {
            var temp = servicearray[i];
            if (key == temp.name)
                return temp.type;
        }
    }
    return "none";
}